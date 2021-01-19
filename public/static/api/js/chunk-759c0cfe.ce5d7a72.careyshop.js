(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-759c0cfe"],{"23ac":function(e,t,n){},"707d":function(e,t,n){"use strict";
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
function i(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))}function r(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!((r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}n.d(t,"a",(function(){return C}));var o=function(e){};function a(e){o(e)}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var s,c,l,u,d="undefined"==typeof navigator?void 0:navigator,p=null==d?void 0:d.clipboard,f=(null===(s=null==p?void 0:p.read)||void 0===s||s.bind(p),null===(c=null==p?void 0:p.readText)||void 0===c||c.bind(p),null===(l=null==p?void 0:p.write)||void 0===l||l.bind(p),null===(u=null==p?void 0:p.writeText)||void 0===u?void 0:u.bind(p)),b="undefined"==typeof window?void 0:window,v=(null==b||b.ClipboardItem,b);function h(){return"undefined"==typeof ClipboardEvent&&void 0!==v.clipboardData&&void 0!==v.clipboardData.setData}var m=function(){this.success=!1};function y(e,t,n){for(var i in a("listener called"),e.success=!0,t){var r=t[i],o=n.clipboardData;o.setData(i,r),"text/plain"===i&&o.getData(i)!==r&&(a("setting text/plain failed"),e.success=!1)}n.preventDefault()}function g(e){var t=new m,n=y.bind(this,t,e);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return t.success}function w(e,t){x(e);var n=g(t);return k(),n}function x(e){var t=document.getSelection();if(t){var n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}}function k(){var e=document.getSelection();e&&e.removeAllRanges()}function D(e){return i(this,void 0,void 0,(function(){var t;return r(this,(function(n){if(t="text/plain"in e,h()){if(!t)throw new Error("No `text/plain` value was specified.");if(i=e["text/plain"],v.clipboardData.setData("Text",i))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var i;return g(e)?(a("regular execCopy worked"),[2,!0]):navigator.userAgent.indexOf("Edge")>-1?(a('UA "Edge" => assuming success'),[2,!0]):w(document.body,e)?(a("copyUsingTempSelection worked"),[2,!0]):function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var n=w(t,e);return document.body.removeChild(t),n}(e)?(a("copyUsingTempElem worked"),[2,!0]):function(e){a("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var n=t;t.attachShadow&&(a("Using shadow DOM."),n=t.attachShadow({mode:"open"}));var i=document.createElement("span");i.innerText=e,n.appendChild(i),document.body.appendChild(t),x(i);var r=document.execCommand("copy");return k(),document.body.removeChild(t),r}(e["text/plain"])?(a("copyTextUsingDOM worked"),[2,!0]):[2,!1]}))}))}function C(e){return i(this,void 0,void 0,(function(){return r(this,(function(t){if(f)return a("Using `navigator.clipboard.writeText()`."),[2,f(e)];if(!D(function(e){var t={};return t["text/plain"]=e,t}(e)))throw new Error("writeText() failed");return[2]}))}))}(function(){function e(e,t){var n;for(var i in void 0===t&&(t={}),this.types=Object.keys(e),this._items={},e){var r=e[i];this._items[i]="string"==typeof r?_(i,r):r}this.presentationStyle=null!==(n=null==t?void 0:t.presentationStyle)&&void 0!==n?n:"unspecified"}e.prototype.getType=function(e){return i(this,void 0,void 0,(function(){return r(this,(function(t){return[2,this._items[e]]}))}))}})();function _(e,t){return new Blob([t],{type:e})}},cf89:function(e,t,n){"use strict";n("23ac")},e4bb:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"response.config.baseURL",label:e.$t("url")}}),n("el-table-column",{attrs:{prop:"response.config.method",label:e.$t("type"),width:"100"}}),n("el-table-column",{attrs:{prop:"response.millis",label:e.$t("response time"),width:"150"}}),n("el-table-column",{attrs:{prop:"date",label:e.$t("date"),width:"180"}}),n("el-table-column",{attrs:{label:e.$t("actions"),align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"table-button"},[n("el-button",{attrs:{icon:"el-icon-video-play",size:"mini",type:"text"},on:{click:function(n){return e.apply(t.$index)}}}),n("el-button",{attrs:{icon:"el-icon-delete",size:"mini",type:"text"},on:{click:function(n){return e.remove(t.$index)}}}),n("el-button",{attrs:{icon:"el-icon-bangzhu",size:"mini",type:"text"},on:{click:function(n){return e.info(t.$index)}}})],1)]}}])})],1),n("div",{staticClass:"cs-mt cs-mb",attrs:{flex:""}},[n("el-pagination",{attrs:{"flex-box":"1","current-page":e.currentPage,"page-sizes":[25,50,100,200,300,400],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.history.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),n("el-button",{staticClass:"cs-fr",attrs:{icon:"el-icon-delete",size:"small",type:"danger"},on:{click:e.deleteAll}},[e._v(e._s(e.$t("delete all")))])],1),n("el-dialog",{attrs:{title:e.$t("response"),visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[n("cs-response",{staticStyle:{"margin-top":"-25px"},model:{value:e.visibleData,callback:function(t){e.visibleData=t},expression:"visibleData"}}),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-dropdown",{staticClass:"cs-mr-10",on:{command:e.copyRequest}},[n("el-button",{attrs:{type:"primary",size:"medium"}},[e._v(" "+e._s(e.$t("copy"))),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"request.responseURL"}},[e._v(e._s(e.$t("copy request")))]),n("el-dropdown-item",{attrs:{command:"request.response"}},[e._v(e._s(e.$t("copy response")))])],1)],1),n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.apply(e.visibleData.index)}}},[e._v(e._s(e.$t("run")))]),n("el-button",{attrs:{size:"medium"},on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("cancel")))])],1)],1)],1)},r=[],o=(n("a434"),n("d3b7"),n("96cf"),n("1da1")),a=n("2909"),s=n("5530"),c=n("2f62"),l=n("2ef0"),u=n("707d"),d={name:"History",computed:Object(s["a"])({},Object(c["c"])("careyshop/history",["history"])),components:{csResponse:function(){return n.e("chunk-790edb1c").then(n.bind(null,"962e"))}},data:function(){return{visible:!1,visibleData:{},tableData:[],currentPage:1,pageSize:25}},mounted:function(){this.loadHistory()},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])("careyshop/history",["load","delHistory","cleanHistory"])),{},{_setTable:function(){var e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize,n=Object(l["slice"])(this.history,e,t);this.tableData=Object(a["a"])(n)},copyRequest:function(e){var t=this,n=Object(l["get"])(this.visibleData,e,"");u["a"](n).then((function(){t.$message.success(t.$t("copy success"))})).catch((function(e){t.$message.error(e)}))},loadHistory:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:e._setTable();case 3:case"end":return t.stop()}}),t)})))()},handleCurrentChange:function(e){this.currentPage=e,this._setTable()},handleSizeChange:function(e){this.pageSize=e,this._setTable()},apply:function(e){var t=this.tableData[e];this.$router.push({name:"Index",params:{value:Object(s["a"])({},t)}})},remove:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=Object(l["get"])(t.tableData,"[".concat(e,"]key")),!i){n.next=4;break}return n.next=4,t.delHistory(i);case 4:t.tableData.splice(e,1);case 5:case"end":return n.stop()}}),n)})))()},info:function(e){this.visibleData=Object(l["get"])(this.tableData,"[".concat(e,"]response"),{}),this.visibleData.index=e,this.visible=!0},deleteAll:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.cleanHistory();case 2:e.tableData=[];case 3:case"end":return t.stop()}}),t)})))()}})},p=d,f=(n("cf89"),n("2877")),b=Object(f["a"])(p,i,r,!1,null,"529f9ffa",null);t["default"]=b.exports}}]);