(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{THca:function(t,e,a){"use strict";a.r(e);var l=a("cDf5"),n=a.n(l),i={name:"settings",props:{value:Object,settings:Object,locale:Object},data:function(){return{}},computed:{inputValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{addNewRow:function(){"object"!=n()(this.inputValue.MAPLIST)&&(this.inputValue.MAPLIST=[]),this.inputValue.MAPLIST.push({KEY:"",SUBNAME:""}),this.$forceUpdate()},addNewRowExclude:function(){"object"!=n()(this.inputValue.EXCLUDE_PATH)&&(this.inputValue.EXCLUDE_PATH=[]),this.inputValue.EXCLUDE_PATH.push(""),this.$forceUpdate()},removeExcludePath:function(t){this.inputValue.EXCLUDE_PATH.splice(t,1),this.$forceUpdate()},removeMapList:function(t){this.inputValue.MAPLIST.splice(t,1),this.$forceUpdate()}}},o=a("KHd+"),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"adm-detail-content-table edit-table",attrs:{id:"edit1_edit_table"}},[a("tbody",[a("tr",[a("td",{staticClass:"adm-detail-content-cell-l",attrs:{width:"40%"}},[a("label",{attrs:{for:"logic_subdomain"}},[t._v("\n                    "+t._s(t.locale.LABEL_ALGORITM)+":\n                ")])]),t._v(" "),a("td",{staticClass:"adm-detail-content-cell-r",attrs:{width:"60%"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.inputValue.logic_subdomain,expression:"inputValue.logic_subdomain"}],attrs:{id:"logic_subdomain",name:"logic_subdomain"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.inputValue,"logic_subdomain",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"virtual"}},[t._v("\n                        "+t._s(t.locale.LABEL_VIRTUAL)+"\n                    ")]),t._v(" "),a("option",{attrs:{value:"subdomain"}},[t._v("\n                        "+t._s(t.locale.LABEL_SUBDOMAIN)+" (sub.site.ru)\n                    ")]),t._v(" "),a("option",{attrs:{value:"directory",disabled:""}},[t._v("\n                        "+t._s(t.locale.LABEL_DIRECTORY)+" (site.ru/sub/)\n                    ")])])])]),t._v(" "),a("tr",[a("td",{staticClass:"adm-detail-content-cell-l",attrs:{width:"40%"}},[a("label",{attrs:{for:"type_subdomain"}},[t._v("\n                    "+t._s(t.locale.LABEL_TYPE)+":\n                ")])]),t._v(" "),a("td",{staticClass:"adm-detail-content-cell-r",attrs:{width:"60%"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.inputValue.type_subdomain,expression:"inputValue.type_subdomain"}],attrs:{name:"type_subdomain"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.inputValue,"type_subdomain",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"city"}},[t._v(t._s(t.locale.LABEL_CITY))]),t._v(" "),a("option",{attrs:{value:"country"}},[t._v(t._s(t.locale.LABEL_COUNTRY))])])])]),t._v(" "),a("tr",[a("td",{staticClass:"adm-detail-content-cell-l",attrs:{width:"40%"}}),t._v(" "),a("td",{staticClass:"adm-detail-content-cell-r",attrs:{width:"60%"}},[a("i",[t._v(t._s(t.locale.DESCRIPTION_TYPE))])])]),t._v(" "),a("tr",[a("td",{staticClass:"adm-detail-content-cell-l",attrs:{width:"40%"}},[a("label",{attrs:{for:"key_ip"}},[t._v("\n                    "+t._s(t.locale.LABEL_IP)+":\n                ")])]),t._v(" "),a("td",{staticClass:"adm-detail-content-cell-r",attrs:{width:"60%"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.inputValue.key_ip,expression:"inputValue.key_ip"}],attrs:{name:"key_ip"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.inputValue,"key_ip",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"HTTP_X_REAL_IP"}},[t._v("HTTP_X_REAL_IP (IP:"+t._s(t.settings.realIp)+")")]),t._v(" "),a("option",{attrs:{value:"REMOTE_ADDR",selected:""}},[t._v("REMOTE_ADDR (IP:"+t._s(t.settings.remoteAddr)+")")])])])]),t._v(" "),a("tr",[a("td",{staticClass:"adm-detail-content-cell-l",attrs:{width:"40%"}},[a("label",{attrs:{for:"lang_default"}},[t._v("\n                    "+t._s(t.locale.LABEL_DOMAIN_DEFAULT)+":\n                ")])]),t._v(" "),a("td",{staticClass:"adm-detail-content-cell-r",attrs:{width:"60%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue.domain_default,expression:"inputValue.domain_default"}],attrs:{type:"text",name:"domain_default"},domProps:{value:t.inputValue.domain_default},on:{input:function(e){e.target.composing||t.$set(t.inputValue,"domain_default",e.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("i",[t._v(t._s(t.locale.DESCRIPTION_DOMAIN_DEFAULT))])])]),t._v(" "),a("tr",[a("td",{staticClass:"adm-detail-content-cell-l",attrs:{width:"40%"}},[a("label",[t._v("\n                    "+t._s(t.locale.LABEL_MAPPING_LIST)+":\n                ")])]),t._v(" "),a("td",{staticClass:"adm-detail-content-cell-r",attrs:{width:"60%"}},[a("table",{staticClass:"nopadding",attrs:{cellpadding:"0",cellspacing:"0",border:"0",width:"100%",id:"d2f_mapping_list"}},[a("tbody",[t._l(t.inputValue.MAPLIST,(function(e,l){return a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.KEY,expression:"map.KEY"}],staticStyle:{float:"left"},attrs:{type:"text",size:"50",name:"MAPLIST["+l+"][KEY]",placeholder:t.locale.LABEL_MAPPING_LIST_KEY},domProps:{value:e.KEY},on:{input:function(a){a.target.composing||t.$set(e,"KEY",a.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.SUBNAME,expression:"map.SUBNAME"}],staticStyle:{float:"left"},attrs:{type:"text",size:"50",name:"MAPLIST["+l+"][SUBNAME]",placeholder:t.locale.LABEL_MAPPING_LIST_SUBNAME},domProps:{value:e.SUBNAME},on:{input:function(a){a.target.composing||t.$set(e,"SUBNAME",a.target.value)}}}),t._v(" "),a("div",{style:{position:"relative",float:"left",float:"left",height:"26px",width:"40px"}},[a("span",{staticClass:"adm-warning-close",style:{"background-position-y":"-2929px",height:"inherit"},on:{click:function(e){return t.removeMapList(l)}}})])])])})),t._v(" "),a("tr",[a("td",[a("input",{attrs:{type:"button",value:t.locale.LABEL_ADD},on:{click:function(e){return e.preventDefault(),t.addNewRow()}}})])])],2)])])]),t._v(" "),a("tr",[a("td",{staticClass:"adm-detail-content-cell-l",attrs:{width:"40%"}},[a("label",{attrs:{for:"path_to_optipng"}},[t._v("\n                    "+t._s(t.locale.LABEL_EXCLUDE_PATH)+":\n                ")])]),t._v(" "),a("td",{staticClass:"adm-detail-content-cell-r",attrs:{width:"60%"}},[a("table",{staticClass:"nopadding",attrs:{cellpadding:"0",cellspacing:"0",border:"0",width:"100%",id:"d2f_exclude_path"}},[a("tbody",[t._l(t.inputValue.EXCLUDE_PATH,(function(e,l){return a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue.EXCLUDE_PATH[l],expression:"inputValue.EXCLUDE_PATH[indx]"}],style:{float:"left"},attrs:{type:"text",size:"80",placeholder:t.locale.LABEL_EXCLUDE_PATH_REG},domProps:{value:t.inputValue.EXCLUDE_PATH[l]},on:{input:function(e){e.target.composing||t.$set(t.inputValue.EXCLUDE_PATH,l,e.target.value)}}}),t._v(" "),a("div",{style:{position:"relative",float:"left",height:"26px"}},[a("span",{staticClass:"adm-warning-close",style:{"background-position-y":"-2929px",height:"inherit"},on:{click:function(e){return t.removeExcludePath(l)}}})])])])})),t._v(" "),a("tr",[a("td",[a("input",{attrs:{type:"button",value:t.locale.LABEL_ADD},on:{click:function(e){return e.preventDefault(),t.addNewRowExclude()}}})])])],2)])])])])])}),[],!1,null,"44b10a57",null);e.default=s.exports},cDf5:function(t,e){function a(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=a=function(t){return typeof t}:t.exports=a=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(e)}t.exports=a}}]);