(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"5Nu0":function(e,t,n){"use strict";n.r(t);var a=n("cDf5"),l=n.n(a),i=n("o0o1"),s=n.n(i),r=n("yXPU"),u=n.n(r),o=n("GXCG"),c={name:"multilang",props:{langActive:{type:Boolean,default:function(){return!1}},langDefault:{type:String,default:function(){return"ru"}},locale:Object,settings:Object,value:Object},data:function(){return{load:!1,active:!1,lang:"",iblocksLocal:[],fieldsLocal:[],fieldsByIndexLocal:[],fieldsSectionLocal:[],fieldsSectionByIndexLocal:[],fieldTypes:["element","section"]}},created:function(){var e=this;return u()(s.a.mark((function t(){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.active=e.langActive,e.lang=e.langDefault,e.isEmpty(e.inputValue.lang_fields)){t.next=18;break}return t.next=5,e.getIblocks();case 5:t.t0=s.a.keys(e.inputValue.lang_fields);case 6:if((t.t1=t.t0()).done){t.next=18;break}if(n=t.t1.value,"section"!==(a=e.inputValue.lang_fields[n]).fieldType){t.next=14;break}return t.next=12,e.getFieldsSection(n,a.iblock);case 12:t.next=16;break;case 14:return t.next=16,e.getFields(n,a.iblock);case 16:t.next=6;break;case 18:return t.next=20,e.$nextTick();case 20:e.load=!0;case 21:case"end":return t.stop()}}),t)})))()},mounted:function(){"object"!=l()(this.inputValue.lang_fields)&&(this.inputValue.lang_fields=[])},computed:{inputValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{iblocks:function(){return this.isEmpty(this.iblocksLocal)?(this.getIblocks(),this.iblocksLocal):this.iblocksLocal},fields:function(e){var t=this;if(this.isEmpty(e)&&0!=e)return[];if(this.isEmpty(this.inputValue.lang_fields[e])||this.isEmpty(this.inputValue.lang_fields[e].iblock))return[];var n=this.inputValue.lang_fields[e].iblock;return n?this.isEmpty(this.fieldsLocal[n])?(this.getFields(n),setTimeout((function(){t.$set(t.fieldsByIndexLocal,e,t.fieldsLocal[n])}),1e3),this.fieldsLocal[n]):(this.$set(this.fieldsByIndexLocal,e,this.fieldsLocal[n]),this.fieldsLocal[n]):[]},getIblocks:function(){var e=this;return u()(s.a.mark((function t(){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isEmpty(e.iblocksLocal)){t.next=2;break}return t.abrupt("return",e.iblocksLocal);case 2:return t.prev=2,t.next=5,o.a.post(e.settings.url,{action:"getIblocks",sessid:BX.bitrix_sessid()});case 5:if((n=t.sent).success){t.next=8;break}throw new Error(null!==(a=n.msg.exception)&&void 0!==a?a:n.msg);case 8:e.iblocksLocal=n.data,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),e.$emit("error",t.t0.message);case 14:return t.abrupt("return",e.iblocksLocal);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))()},getFields:function(e){var t=arguments,n=this;return u()(s.a.mark((function a(){var l,i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(l=t.length>1&&void 0!==t[1]?t[1]:null){a.next=9;break}if(!n.isEmpty(e)||0==e){a.next=4;break}return a.abrupt("return");case 4:if(!n.isEmpty(n.inputValue.lang_fields[e])){a.next=6;break}return a.abrupt("return");case 6:if(!n.isEmpty(n.inputValue.lang_fields[e]).iblock){a.next=8;break}return a.abrupt("return");case 8:l=n.inputValue.lang_fields[e].iblock;case 9:if(n.isEmpty(n.fieldsLocal[l])){a.next=12;break}return n.$set(n.fieldsByIndexLocal,e,n.fieldsLocal[l]),a.abrupt("return",n.fieldsLocal[l]);case 12:return a.prev=12,a.next=15,o.a.post(n.settings.url,{action:"getFields",id:l,sessid:BX.bitrix_sessid()});case 15:if((i=a.sent).success){a.next=18;break}throw new Error(i.msg);case 18:return n.fieldsLocal[l]=i.data,n.$set(n.fieldsByIndexLocal,e,i.data),a.abrupt("return",n.fieldsLocal[l]);case 23:a.prev=23,a.t0=a.catch(12),n.$emit("error",a.t0.message);case 26:case"end":return a.stop()}}),a,null,[[12,23]])})))()},getFieldsSection:function(e){var t=arguments,n=this;return u()(s.a.mark((function a(){var l,i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(l=t.length>1&&void 0!==t[1]?t[1]:null){a.next=9;break}if(!n.isEmpty(e)||0==e){a.next=4;break}return a.abrupt("return");case 4:if(!n.isEmpty(n.inputValue.lang_fields[e])){a.next=6;break}return a.abrupt("return");case 6:if(!n.isEmpty(n.inputValue.lang_fields[e]).iblock){a.next=8;break}return a.abrupt("return");case 8:l=n.inputValue.lang_fields[e].iblock;case 9:if(n.isEmpty(n.fieldsSectionLocal[l])){a.next=12;break}return n.$set(n.fieldsByIndexLocal,e,n.fieldsSectionLocal[l]),a.abrupt("return",n.fieldsSectionLocal[l]);case 12:return a.prev=12,a.next=15,o.a.post(n.settings.url,{action:"getFieldsSection",id:l,sessid:BX.bitrix_sessid()});case 15:if((i=a.sent).success){a.next=18;break}throw new Error(i.msg);case 18:return n.fieldsSectionLocal[l]=i.data,n.$set(n.fieldsByIndexLocal,e,i.data),a.abrupt("return",n.fieldsSectionLocal[l]);case 23:a.prev=23,a.t0=a.catch(12),n.$emit("error",a.t0.message);case 26:case"end":return a.stop()}}),a,null,[[12,23]])})))()},addSupportLangField:function(){this.inputValue.lang_fields.push({iblock:"",field:""}),this.fieldsByIndexLocal.push({groups:[],items:[]}),this.$forceUpdate()},changeIblock:function(e){this.$forceUpdate()},changeFieldType:function(e){var t=this;setTimeout((function(){"section"===t.inputValue.lang_fields[e].fieldType?t.getFieldsSection(e):t.getFields(e)}),1e3)},removeRow:function(e){this.inputValue.lang_fields.splice(e,1),this.fieldsByIndexLocal.splice(e,1)}}},d=n("KHd+"),p=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.load?n("table",{staticClass:"adm-detail-content-table edit-table",attrs:{id:"edit3_edit_table"}},[n("tbody",[n("tr",[n("td",{staticClass:"adm-detail-content-cell-l",attrs:{width:"40%"}},[n("label",{attrs:{for:"enable_multilang"}},[e._v("\n                "+e._s(e.locale.LABEL_ENABLE_MULTILANG)+":\n            ")])]),e._v(" "),n("td",{staticClass:"adm-detail-content-cell-r",attrs:{width:"60%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue.enable_multilang,expression:"inputValue.enable_multilang"}],attrs:{type:"checkbox",id:"enable_multilang",name:"enable_multilang",value:"Y"},domProps:{checked:Array.isArray(e.inputValue.enable_multilang)?e._i(e.inputValue.enable_multilang,"Y")>-1:e.inputValue.enable_multilang},on:{change:function(t){var n=e.inputValue.enable_multilang,a=t.target,l=!!a.checked;if(Array.isArray(n)){var i=e._i(n,"Y");a.checked?i<0&&e.$set(e.inputValue,"enable_multilang",n.concat(["Y"])):i>-1&&e.$set(e.inputValue,"enable_multilang",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.inputValue,"enable_multilang",l)}}})])]),e._v(" "),n("tr",[n("td",{staticClass:"adm-detail-content-cell-l",attrs:{width:"40%"}},[n("label",{attrs:{for:"lang_default"}},[e._v("\n                "+e._s(e.locale.LABEL_LANG_DEFAULT)+":\n            ")])]),e._v(" "),n("td",{staticClass:"adm-detail-content-cell-r",attrs:{width:"60%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue.lang_default,expression:"inputValue.lang_default"}],attrs:{type:"text",id:"lang_default",name:"lang_default"},domProps:{value:e.inputValue.lang_default},on:{input:function(t){t.target.composing||e.$set(e.inputValue,"lang_default",t.target.value)}}})])]),e._v(" "),n("tr",{staticClass:"heading"},[n("td",{attrs:{colspan:"2"}},[n("b",[e._v(e._s(e.locale.D2F_MULTIDOMAIN_LABEL_SUPPORT_TRANSLATE))])])]),e._v(" "),e._l(e.inputValue.lang_fields,(function(t,a){return n("tr",[n("td",{staticClass:"adm-detail-content-cell-l",attrs:{width:"40%"}},[n("label",{attrs:{for:"lang_default"}},[e._v("\n                "+e._s(e.locale.LABEL_LANG_SUPPORT_FIELDS)+":\n            ")])]),e._v(" "),n("td",{staticClass:"adm-detail-content-cell-r",attrs:{width:"60%"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.inputValue.lang_fields[a].iblock,expression:"inputValue.lang_fields[key].iblock"}],attrs:{type:"text"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.inputValue.lang_fields[a],"iblock",t.target.multiple?n:n[0])},function(t){return e.changeIblock(a)}]}},e._l(e.iblocks().groups,(function(t){return n("optgroup",{attrs:{label:t.label}},e._l(e.iblocks().items,(function(a){return a.group==t.id?n("option",{domProps:{value:a.id}},[e._v(e._s(a.label))]):e._e()})),0)})),0),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.inputValue.lang_fields[a].fieldType,expression:"inputValue.lang_fields[key].fieldType"}],attrs:{type:"text",placeholder:e.locale.D2F_MULTIDOMAIN_PLACEHOLDER_TYPE,disabled:e.isEmpty(e.inputValue.lang_fields[a].iblock)},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.inputValue.lang_fields[a],"fieldType",t.target.multiple?n:n[0])},function(t){return e.changeFieldType(a)}]}},[n("option",{attrs:{value:""}}),e._v(" "),e._l(e.fieldTypes,(function(t){return n("option",{domProps:{value:t}},[e._v("\n                    "+e._s(t)+"\n                ")])}))],2),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.inputValue.lang_fields[a].field,expression:"inputValue.lang_fields[key].field"}],attrs:{type:"text"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.inputValue.lang_fields[a],"field",t.target.multiple?n:n[0])}}},e._l(e.fieldsByIndexLocal[a].groups,(function(t){return n("optgroup",{attrs:{label:t.label}},e._l(e.fieldsByIndexLocal[a].items,(function(a){return a.group==t.id?n("option",{domProps:{value:a.id}},[e._v(e._s(a.label))]):e._e()})),0)})),0),e._v(" "),n("input",{attrs:{type:"button",value:e.locale.D2F_MULTIDOMAIN_LABEL_DELETE},on:{click:function(t){return t.preventDefault(),e.removeRow(a)}}})])])})),e._v(" "),n("tr",[n("td",{attrs:{colspan:"2"}},[n("input",{attrs:{type:"button",value:e.locale.LABEL_ADD},on:{click:function(t){return t.preventDefault(),e.addSupportLangField(t)}}})])])],2)]):e._e()}),[],!1,null,"256257fe",null);t.default=p.exports},cDf5:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n}}]);