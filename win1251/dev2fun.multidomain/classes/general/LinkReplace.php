<?php
/**
 * @author dev2fun (darkfriend)
 * @copyright darkfriend
 * @version 1.1.0
 * @since 1.0.0
 */

namespace Dev2fun\MultiDomain;


class LinkReplace
{
    /**
     * @var string[]
     */
    protected static $links;

    /**
     * @param string $content
     * @param array|null $currentSubDomain
     * @return string
     */
    public static function process($content, $currentSubDomain=null)
    {
        if(!$currentSubDomain) {
            $currentSubDomain = Base::GetCurrentDomain();
        }
        if($currentSubDomain['UF_SUBDOMAIN'] === 'main') {
            return $content;
        }
        static::$links = static::findLinks($content);
        if(self::$links) {
            foreach (self::$links as $link) {
                $content = preg_replace(
                    "#href=\"($link)\"#ium",
                    "href=\"/{$currentSubDomain['UF_SUBDOMAIN']}$1\"",
                    $content
                );
            }
        }
        return $content;
    }

    /**
     * @param string $uri
     * @param array|null $replaceSubDomain
     * @param array|null $currentSubDomain
     * @param string|null $logicSubdomain
     * @return string
     */
    public static function getReplaceUri($uri, $replaceSubDomain, $currentSubDomain = null, $logicSubdomain = null)
    {
        if(!$currentSubDomain) {
            $currentSubDomain = Base::GetCurrentDomain();
        }
        if(!$logicSubdomain) {
            $logicSubdomain = Config::getInstance()->get('logic_subdomain');
        }

        $arUrl = parse_url($uri);

        if(empty($arUrl['scheme'])) {
            if(\CMain::IsHTTPS()) {
                $arUrl['scheme'] = 'https://';
            } else {
                $arUrl['scheme'] = 'http://';
            }
        }

        $arUrl['path'] = self::getReplacePath($arUrl['path'], $replaceSubDomain, $currentSubDomain, $logicSubdomain);

        if ($logicSubdomain === SubDomain::LOGIC_DIRECTORY) {
            $arUrl['host'] = $replaceSubDomain['UF_DOMAIN'];
        } elseif ($logicSubdomain === SubDomain::LOGIC_SUBDOMAIN) {
            if ($replaceSubDomain['UF_SUBDOMAIN'] === 'main') {
                $arUrl['host'] = $replaceSubDomain['UF_DOMAIN'];
            } else {
                $arUrl['host'] = "{$replaceSubDomain['UF_SUBDOMAIN']}.{$replaceSubDomain['UF_DOMAIN']}";
            }
        }

        return self::buildUrl($arUrl);
    }

    /**
     * @param string $path
     * @param array $replaceSubDomain
     * @param array|null $currentSubDomain
     * @param string|null $logicSubdomain
     * @return string
     * @throws \Bitrix\Main\ArgumentNullException
     */
    public static function getReplacePath($path, $replaceSubDomain, $currentSubDomain = null, $logicSubdomain = null)
    {
        if(!$currentSubDomain) {
            $currentSubDomain = Base::GetCurrentDomain();
        }
        if(!$logicSubdomain) {
            $logicSubdomain = Config::getInstance()->get('logic_subdomain');
        }

        $path = parse_url($path, PHP_URL_PATH);

        if($currentSubDomain['UF_SUBDOMAIN'] !== $replaceSubDomain['UF_SUBDOMAIN']
            && $logicSubdomain === SubDomain::LOGIC_DIRECTORY
        ) {
            $replacePath = $replaceSubDomain['UF_SUBDOMAIN'];
            if ($replacePath === 'main') {
                $replacePath = '';
            }
            $routeRule = UrlRewriter::getRouteByUri($path);
            if (!empty($routeRule['CONDITION'])) {
                if (preg_match($routeRule['CONDITION'], $path, $matches)) {
                    if (!empty($matches['subdomain'])) {
                        $path = preg_replace(
                            "#^/{$matches['subdomain']}#",
                            $replacePath,
                            $path
                        );
                    } else {
                        $path = "/{$replacePath}{$path}";
                    }
                }
            } elseif ($replacePath) {
                $path = "/{$replacePath}{$path}";
            }
        }
        return $path;
    }

    /**
     * @param string $content
     * @return array
     */
    protected static function findLinks($content)
    {
        if(!preg_match_all('#<a.*href="(.*?)"#ium', $content, $matches)) {
            return [];
        }
        $links = $matches[1] ?? [];
        if($links) {
            $links = array_unique($links);
            foreach ($links as $k => $link) {
                if(!preg_match('#(^/(?![/])(?!(?:ru|en|de)/))#', $link)) {
                    unset($links[$k]);
                }
            }
        }
        return $links;
    }

    /**
     * @param array $arUrl
     * @param null|boolean $ssl
     * @return string
     * @since 1.1.0
     */
    public static function buildUrl($arUrl, $ssl = null)
    {
        $url = '';
        if(!empty($arUrl['host'])) {
            if(!empty($arUrl['scheme'])) {
                $url = $arUrl['scheme'];
            } else {
                if(!isset($ssl)) {
                    $ssl = \CMain::IsHTTPS();
                }
                if($ssl) {
                    $url = 'https://';
                } else {
                    $url = 'http://';
                }
            }
            if(!empty($arUrl['user']) && !empty($arUrl['pass'])) {
                $url .= "{$arUrl['user']}:{$arUrl['pass']}@";
            }
            $url .= $arUrl['host'];
        }
        if(!empty($arUrl['port']) && !\in_array($arUrl['port'],['80','8080','443'])) {
            $url .= ":{$arUrl['port']}";
        }
        if(!empty($arUrl['path'])) {
            $url .= $arUrl['path'];
        }
        if(!empty($arUrl['query'])) {
            $url .= "?{$arUrl['query']}";
        }
        if(!empty($arUrl['fragment'])) {
            $url .= "#{$arUrl['fragment']}";
        }
        return $url;
    }
}
