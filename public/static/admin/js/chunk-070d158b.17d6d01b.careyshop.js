(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-070d158b","chunk-2d0cc263"],{"4d63":function(e,t,i){var a=i("83ab"),l=i("da84"),s=i("94ca"),n=i("7156"),r=i("9bf2").f,o=i("241c").f,c=i("44e7"),m=i("ad6d"),u=i("9f7f"),d=i("6eeb"),p=i("d039"),f=i("69f3").set,b=i("2626"),h=i("b622"),g=h("match"),v=l.RegExp,_=v.prototype,y=/a/g,x=/a/g,F=new v(y)!==y,k=u.UNSUPPORTED_Y,w=a&&s("RegExp",!F||k||p((function(){return x[g]=!1,v(y)!=y||v(x)==x||"/a/i"!=v(y,"i")})));if(w){var $=function(e,t){var i,a=this instanceof $,l=c(e),s=void 0===t;if(!a&&l&&e.constructor===$&&s)return e;F?l&&!s&&(e=e.source):e instanceof $&&(s&&(t=m.call(e)),e=e.source),k&&(i=!!t&&t.indexOf("y")>-1,i&&(t=t.replace(/y/g,"")));var r=n(F?new v(e,t):v(e,t),a?this:_,$);return k&&i&&f(r,{sticky:i}),r},S=function(e){e in $||r($,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},T=o(v),D=0;while(T.length>D)S(T[D++]);_.constructor=$,$.prototype=_,d(l,"RegExp",$)}b("RegExp")},"707d":function(e,t,i){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function a(e,t,i,a){return new(i||(i=Promise))((function(l,s){function n(e){try{o(a.next(e))}catch(e){s(e)}}function r(e){try{o(a.throw(e))}catch(e){s(e)}}function o(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,r)}o((a=a.apply(e,t||[])).next())}))}function l(e,t){var i,a,l,s,n={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return s={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function r(s){return function(r){return function(s){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,a&&(l=2&s[0]?a.return:s[0]?a.throw||((l=a.return)&&l.call(a),0):a.next)&&!(l=l.call(a,s[1])).done)return l;switch(a=0,l&&(s=[2&s[0],l.value]),s[0]){case 0:case 1:l=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,a=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(l=n.trys,!((l=l.length>0&&l[l.length-1])||6!==s[0]&&2!==s[0])){n=0;continue}if(3===s[0]&&(!l||s[1]>l[0]&&s[1]<l[3])){n.label=s[1];break}if(6===s[0]&&n.label<l[1]){n.label=l[1],l=s;break}if(l&&n.label<l[2]){n.label=l[2],n.ops.push(s);break}l[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],a=0}finally{i=l=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,r])}}}i.d(t,"a",(function(){return w}));var s=function(e){};function n(e){s(e)}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var r,o,c,m,u="undefined"==typeof navigator?void 0:navigator,d=null==u?void 0:u.clipboard,p=(null===(r=null==d?void 0:d.read)||void 0===r||r.bind(d),null===(o=null==d?void 0:d.readText)||void 0===o||o.bind(d),null===(c=null==d?void 0:d.write)||void 0===c||c.bind(d),null===(m=null==d?void 0:d.writeText)||void 0===m?void 0:m.bind(d)),f="undefined"==typeof window?void 0:window,b=(null==f||f.ClipboardItem,f);function h(){return"undefined"==typeof ClipboardEvent&&void 0!==b.clipboardData&&void 0!==b.clipboardData.setData}var g=function(){this.success=!1};function v(e,t,i){for(var a in n("listener called"),e.success=!0,t){var l=t[a],s=i.clipboardData;s.setData(a,l),"text/plain"===a&&s.getData(a)!==l&&(n("setting text/plain failed"),e.success=!1)}i.preventDefault()}function _(e){var t=new g,i=v.bind(this,t,e);document.addEventListener("copy",i);try{document.execCommand("copy")}finally{document.removeEventListener("copy",i)}return t.success}function y(e,t){x(e);var i=_(t);return F(),i}function x(e){var t=document.getSelection();if(t){var i=document.createRange();i.selectNodeContents(e),t.removeAllRanges(),t.addRange(i)}}function F(){var e=document.getSelection();e&&e.removeAllRanges()}function k(e){return a(this,void 0,void 0,(function(){var t;return l(this,(function(i){if(t="text/plain"in e,h()){if(!t)throw new Error("No `text/plain` value was specified.");if(a=e["text/plain"],b.clipboardData.setData("Text",a))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var a;return _(e)?(n("regular execCopy worked"),[2,!0]):navigator.userAgent.indexOf("Edge")>-1?(n('UA "Edge" => assuming success'),[2,!0]):y(document.body,e)?(n("copyUsingTempSelection worked"),[2,!0]):function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var i=y(t,e);return document.body.removeChild(t),i}(e)?(n("copyUsingTempElem worked"),[2,!0]):function(e){n("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var i=t;t.attachShadow&&(n("Using shadow DOM."),i=t.attachShadow({mode:"open"}));var a=document.createElement("span");a.innerText=e,i.appendChild(a),document.body.appendChild(t),x(a);var l=document.execCommand("copy");return F(),document.body.removeChild(t),l}(e["text/plain"])?(n("copyTextUsingDOM worked"),[2,!0]):[2,!1]}))}))}function w(e){return a(this,void 0,void 0,(function(){return l(this,(function(t){if(p)return n("Using `navigator.clipboard.writeText()`."),[2,p(e)];if(!k(function(e){var t={};return t["text/plain"]=e,t}(e)))throw new Error("writeText() failed");return[2]}))}))}(function(){function e(e,t){var i;for(var a in void 0===t&&(t={}),this.types=Object.keys(e),this._items={},e){var l=e[a];this._items[a]="string"==typeof l?$(a,l):l}this.presentationStyle=null!==(i=null==t?void 0:t.presentationStyle)&&void 0!==i?i:"unspecified"}e.prototype.getType=function(e){return a(this,void 0,void 0,(function(){return l(this,(function(t){return[2,this._items[e]]}))}))}})();function $(e,t){return new Blob([t],{type:e})}},"7cd3":function(e,t,i){},cc1f:function(e,t,i){"use strict";i("7cd3")},d908:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cs-p"},[i("el-form",{attrs:{inline:!0,size:"small"}},[i("el-form-item",[i("el-button-group",[e.auth.sms_setting?i("el-button",{attrs:{icon:"el-icon-postcard",disabled:e.loading},on:{click:e.handleOpenSms}},[e._v("短信配置")]):e._e(),e.auth.email_setting?i("el-button",{attrs:{icon:"el-icon-message",disabled:e.loading},on:{click:e.handleOpenEmail}},[e._v("邮件配置")]):e._e()],1)],1),i("el-form-item",[i("el-button-group",[e.auth.enable?i("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,1,!0)}}},[e._v("启用")]):e._e(),e.auth.disable?i("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,0,!0)}}},[e._v("禁用")]):e._e()],1)],1),i("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),i("el-tabs",{staticClass:"tab-box",attrs:{value:e.tplCode},on:{"tab-click":e.handleClick}},e._l(e.tplType,(function(t,a){return i("el-tab-pane",{key:a,attrs:{label:t,name:a}},[a.toString()===e.tplCode?i("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),i("el-table-column",{attrs:{label:"名称",prop:"name","min-width":"500"}}),i("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",{style:e.auth.enable||e.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:e.statusMap[t.row.status].type,effect:e.auth.enable||e.auth.disable?"light":"plain"},nativeOn:{click:function(i){return e.handleStatus(t.$index)}}},[e._v(" "+e._s(e.statusMap[t.row.status].text)+" ")])]}}],null,!0)}),i("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.tpl?i("el-button",{attrs:{size:"small",type:"text"},on:{click:function(i){return e.handleUpdate(t.$index)}}},[e._v("编辑模板")]):e._e()]}}],null,!0)})],1):e._e()],1)})),1),i("el-dialog",{attrs:{title:"短信配置",visible:e.smsVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.smsVisible=t}}},[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.smsLoading,expression:"smsLoading"}],ref:"smsForm",attrs:{model:e.smsForm,rules:e.smsRules,"label-width":"140px"}},[i("el-form-item",{attrs:{label:"Access Key ID",prop:"key_id"}},[i("el-input",{attrs:{placeholder:"Access Key ID",clearable:!0},model:{value:e.smsForm.key_id,callback:function(t){e.$set(e.smsForm,"key_id",t)},expression:"smsForm.key_id"}})],1),i("el-form-item",{attrs:{label:"Access Key Secret",prop:"key_secret"}},[i("el-input",{attrs:{placeholder:"Access Key Secret",clearable:!0},model:{value:e.smsForm.key_secret,callback:function(t){e.$set(e.smsForm,"key_secret",t)},expression:"smsForm.key_secret"}})],1),i("el-form-item",{attrs:{label:"启用状态",prop:"status"}},[i("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.smsForm.status,callback:function(t){e.$set(e.smsForm,"status",t)},expression:"smsForm.status"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){e.smsVisible=!1}}},[e._v("取消")]),i("el-button",{attrs:{type:"primary",loading:e.smsButton,size:"small"},on:{click:e.saveSmsData}},[e._v("修改")])],1)],1),i("el-dialog",{attrs:{title:"邮件配置",visible:e.emailVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.emailVisible=t}}},[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.emailLoading,expression:"emailLoading"}],ref:"emailForm",attrs:{model:e.emailForm,rules:e.emailRules,"label-width":"140px"}},[i("el-form-item",{attrs:{label:"SMTP服务器",prop:"email_host"}},[i("el-input",{attrs:{placeholder:"SMTP服务器",clearable:!0},model:{value:e.emailForm.email_host,callback:function(t){e.$set(e.emailForm,"email_host",t)},expression:"emailForm.email_host"}})],1),i("el-form-item",{attrs:{label:"SMTP端口",prop:"email_port"}},[i("el-input",{attrs:{placeholder:"SMTP端口",clearable:!0},model:{value:e.emailForm.email_port,callback:function(t){e.$set(e.emailForm,"email_port",t)},expression:"emailForm.email_port"}})],1),i("el-form-item",{attrs:{label:"发信人邮箱地址",prop:"email_addr"}},[i("el-input",{attrs:{placeholder:"发信人邮箱地址",clearable:!0},model:{value:e.emailForm.email_addr,callback:function(t){e.$set(e.emailForm,"email_addr",t)},expression:"emailForm.email_addr"}})],1),i("el-form-item",{attrs:{label:"SMTP用户名",prop:"email_id"}},[i("el-input",{attrs:{placeholder:"SMTP身份验证用户名",clearable:!0},model:{value:e.emailForm.email_id,callback:function(t){e.$set(e.emailForm,"email_id",t)},expression:"emailForm.email_id"}})],1),i("el-form-item",{attrs:{label:"SMTP密码",prop:"email_pass"}},[i("el-input",{attrs:{placeholder:"SMTP身份验证码",clearable:!0},model:{value:e.emailForm.email_pass,callback:function(t){e.$set(e.emailForm,"email_pass",t)},expression:"emailForm.email_pass"}})],1),i("el-form-item",{attrs:{label:"使用安全链接",prop:"email_ssl"}},[i("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.emailForm.email_ssl,callback:function(t){e.$set(e.emailForm,"email_ssl",t)},expression:"emailForm.email_ssl"}})],1),i("el-form-item",{attrs:{label:"启用状态",prop:"status"}},[i("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.emailForm.status,callback:function(t){e.$set(e.emailForm,"status",t)},expression:"emailForm.status"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){e.emailVisible=!1}}},[e._v("取消")]),i("el-button",{attrs:{type:"primary",loading:e.emailButton,size:"small"},on:{click:e.saveEmailData}},[e._v("修改")])],1)],1),i("el-dialog",{attrs:{title:"编辑 "+e.tplType[e.tplForm.code],visible:e.tplVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"760px"},on:{"update:visible":function(t){e.tplVisible=t}}},[i("el-form",{ref:"tplForm",attrs:{model:e.tplForm,rules:e.tplRules,"label-width":"90px"}},["sms"===e.tplForm.code?i("el-form-item",{attrs:{label:"模板编号",prop:"sms_code"}},[i("el-input",{attrs:{placeholder:"阿里云短信模板编号",clearable:!0},model:{value:e.tplForm.sms_code,callback:function(t){e.$set(e.tplForm,"sms_code",t)},expression:"tplForm.sms_code"}})],1):e._e(),"sms"===e.tplForm.code?i("el-form-item",{attrs:{label:"短信签名",prop:"sms_sign"}},[i("el-input",{attrs:{placeholder:"阿里云短信签名",clearable:!0},model:{value:e.tplForm.sms_sign,callback:function(t){e.$set(e.tplForm,"sms_sign",t)},expression:"tplForm.sms_sign"}})],1):e._e(),"email"===e.tplForm.code?i("el-form-item",{attrs:{label:"系统标题",prop:"title"}},[i("el-input",{attrs:{placeholder:"通知系统标题",maxlength:"200","show-word-limit":!0,clearable:!0},model:{value:e.tplForm.title,callback:function(t){e.$set(e.tplForm,"title",t)},expression:"tplForm.title"}})],1):e._e(),i("el-form-item",{attrs:{label:"系统模板",prop:"template"}},[i("div",{staticClass:"cs-mb-10"},e._l(e.tplForm.get_notice_item,(function(t,a){return i("el-tag",{key:a,staticClass:"cs-cp cs-mr-10",attrs:{"disable-transitions":!0,effect:"plain"},on:{click:function(i){return e.insertVariables(t.item_name)}}},[e._v(" "+e._s(t.item_name)+" ")])})),1),"sms"===e.tplForm.code?i("el-input",{ref:"textarea",attrs:{type:"textarea",placeholder:"通知系统模板",autosize:{minRows:5},"show-word-limit":!0,maxlength:"500"},model:{value:e.tplForm.template,callback:function(t){e.$set(e.tplForm,"template",t)},expression:"tplForm.template"}}):e.tplVisible?i("cs-tinymce",{ref:"tinymce",attrs:{height:180},model:{value:e.tplForm.template,callback:function(t){e.$set(e.tplForm,"template",t)},expression:"tplForm.template"}}):e._e(),"sms"===e.tplForm.code?i("el-button",{attrs:{type:"text"},on:{click:e.copyAliyunSms}},[e._v("复制阿里云短信模板")]):e._e()],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){e.tplVisible=!1}}},[e._v("取消")]),i("el-button",{attrs:{type:"primary",loading:e.tplButton,size:"small"},on:{click:e.saveTplData}},[e._v("修改")])],1)],1)],1)},l=[],s=i("5530"),n=(i("d3b7"),i("3ca3"),i("ddb0"),i("159b"),i("b0c0"),i("4d63"),i("ac1f"),i("25f0"),i("5319"),i("707d")),r=i("bc07"),o="/v1/notice";function c(e){return Object(r["a"])({url:o,method:"post",data:{method:"get.notice.item",code:e}})}function m(e){return Object(r["a"])({url:o,method:"post",data:Object(s["a"])({method:"set.notice.item"},e)})}var u=i("71f2"),d={components:{csTinymce:function(){return Promise.all([i.e("chunk-5ffc0fd6"),i.e("chunk-9b341698")]).then(i.bind(null,"f4ab"))}},props:{loading:{default:!1},tplCode:{default:"sms"},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{sms_setting:!1,email_setting:!1,enable:!1,disable:!1,tpl:!1},tplType:{sms:"短信模板",email:"邮件模板"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},smsVisible:!1,smsLoading:!1,smsButton:!1,smsForm:{key_id:void 0,key_secret:void 0,status:"1"},smsRules:{key_id:[{required:!0,message:"Access Key ID 不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],key_secret:[{required:!0,message:"Access Key Secret 不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]},emailVisible:!1,emailLoading:!1,emailButton:!1,emailForm:{email_host:void 0,email_port:void 0,email_addr:void 0,email_id:void 0,email_pass:void 0,email_ssl:"0",status:"1"},emailRules:{email_host:[{required:!0,message:"SMTP服务器不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],email_port:[{required:!0,message:"SMTP端口不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],email_addr:[{required:!0,message:"发信人邮箱地址不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],email_id:[{required:!0,message:"SMTP身份验证用户名不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],email_pass:[{required:!0,message:"SMTP身份验证码不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]},tplVisible:!1,tplButton:!1,tplForm:{},tplRules:{sms_code:[{required:!0,message:"阿里云短信模板编号不能为空",trigger:"blur"},{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}],sms_sign:[{required:!0,message:"阿里云短信签名不能为空",trigger:"blur"},{min:2,max:12,message:"长度在 2 到 12 个字符",trigger:"blur"}],title:[{required:!0,message:"通知系统标题不能为空",trigger:"blur"},{max:200,message:"长度不能大于 200 个字符",trigger:"blur"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.sms_setting=this.$permission("/setting/setting/template/sms_setting"),this.auth.email_setting=this.$permission("/setting/setting/template/email_setting"),this.auth.enable=this.$permission("/setting/setting/template/enable"),this.auth.disable=this.$permission("/setting/setting/template/disable"),this.auth.tpl=this.$permission("/setting/setting/template/tpl")},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.notice_tpl_id)})):t.push(this.currentTableData[e].notice_tpl_id),t},handleSelectionChange:function(e){this.multipleSelection=e},handleOpenSms:function(){var e=this;this.smsForm={key_id:void 0,key_secret:void 0,status:"1"},this.$nextTick((function(){e.$refs.smsForm&&e.$refs.smsForm.clearValidate(),e.smsButton=!1,e.smsVisible=!0,e.smsLoading=!0})),c("sms").then((function(t){var i=t.data.value;for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e.smsForm[a]=i[a].value)})).finally((function(){e.smsLoading=!1}))},saveSmsData:function(){var e=this;this.$refs.smsForm.validate((function(t){t&&(e.smsButton=!0,m(Object(s["a"])({code:"sms"},e.smsForm)).then((function(){e.smsVisible=!1,e.$message.success("操作成功")})).catch((function(){e.smsButton=!1})))}))},handleOpenEmail:function(){var e=this;this.emailForm={email_host:void 0,email_port:void 0,email_addr:void 0,email_id:void 0,email_pass:void 0,email_ssl:"0",status:"1"},this.$nextTick((function(){e.$refs.emailForm&&e.$refs.emailForm.clearValidate(),e.emailButton=!1,e.emailVisible=!0,e.emailLoading=!0})),c("email").then((function(t){var i=t.data.value;for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e.emailForm[a]=i[a].value)})).finally((function(){e.emailLoading=!1}))},saveEmailData:function(){var e=this;this.$refs.emailForm.validate((function(t){t&&(e.emailButton=!0,m(Object(s["a"])({code:"email"},e.emailForm)).then((function(){e.emailVisible=!1,e.$message.success("操作成功")})).catch((function(){e.emailButton=!1})))}))},handleClick:function(e){this.multipleSelection=[],this.$emit("update:tplCode",e.name)},handleStatus:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=this._getIdList(e);if(0!==l.length){if(!a){var n=this.currentTableData[e],r=n.status?0:1;if(n.status>1)return;if(0===r&&!this.auth.disable)return;if(1===r&&!this.auth.enable)return;return this.$set(this.currentTableData,e,Object(s["a"])(Object(s["a"])({},n),{},{status:2})),void o(l,r,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){o(l,i,t)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function o(e,t,i){Object(u["c"])(e,t).then((function(){i.currentTableData.forEach((function(a,l){-1!==e.indexOf(a.notice_tpl_id)&&i.$set(i.currentTableData,l,Object(s["a"])(Object(s["a"])({},a),{},{status:t}))})),i.$message.success("操作成功")}))}},handleUpdate:function(e){var t=this;this.currentIndex=e;var i=this.currentTableData[e];this.tplForm=Object(s["a"])(Object(s["a"])({},i),{},{sms_sign:"sms"===i.code?i.title:null}),this.$nextTick((function(){t.$refs.tplForm&&t.$refs.tplForm.clearValidate(),t.tplButton=!1,t.tplVisible=!0}))},saveTplData:function(){var e=this;this.$refs.tplForm.validate((function(t){t&&(e.tplButton=!0,Object(u["b"])(e.tplForm).then((function(t){e.$set(e.currentTableData,e.currentIndex,Object(s["a"])(Object(s["a"])({},e.currentTableData[e.currentIndex]),t.data)),e.tplVisible=!1,e.$message.success("操作成功")})).catch((function(){e.tplButton=!1})))}))},copyAliyunSms:function(){var e=this,t=this.tplForm.template,i=this.tplForm.get_notice_item;i.forEach((function(e){var i=new RegExp(e.item_name.toString(),"g");t=t.replace(i,"${".concat(e.replace_name,"}"))})),n["a"](t).then((function(){e.$message.success("已复制阿里云短信模板到剪贴板")})).catch((function(t){e.$message.error(t)}))},insertVariables:function(e){if("email"===this.tplForm.code&&this.$refs.tinymce&&this.$refs.tinymce.handleEditor.insertContent(e),"sms"===this.tplForm.code&&this.$refs.textarea){this.$refs.textarea.focus();var t=this.$refs.textarea.$el.children[0];if("number"===typeof t.selectionStart&&"number"===typeof t.selectionEnd){var i=t.selectionStart,a=t.selectionEnd,l=this.tplForm.template;this.tplForm.template=l.substring(0,i)+e+l.substring(a,l.length)}else this.tplForm.template+=e}}}},p=d,f=(i("cc1f"),i("2877")),b=Object(f["a"])(p,a,l,!1,null,"4674499d",null);t["default"]=b.exports}}]);