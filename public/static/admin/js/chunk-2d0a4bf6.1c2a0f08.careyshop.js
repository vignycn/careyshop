(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4bf6"],{"0880":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popover",{staticClass:"cs-fr",attrs:{placement:"bottom-end",width:"400",trigger:"hover",title:"提示"},on:{show:t.getHelp}},[n("div",{staticClass:"popover-content",domProps:{innerHTML:t._s(t.helpContent)}}),n("el-button",{attrs:{slot:"reference",size:"small",icon:"el-icon-help"},slot:"reference"})],1)},r=[],a=(n("d3b7"),n("99af"),n("cebe")),l=n.n(a),s="/v1/help";function c(t){var e=serverConfig.BASE_API;return e="https://api.careyshop.cn/api",new Promise((function(n){l()({baseURL:e,url:s,method:"post",headers:{"Content-Type":"text/plain; charset=utf-8"},data:{method:"get.help.router",ver:"1.0.1",module:"admin",router:t}}).then((function(t){var e="暂无帮助内容",o='style="float: right; margin-bottom: -10px;" class="el-button el-button--text el-button--small"';t.data&&(e='<div class="help-content">'.concat(t.data.content,"</div>"),t.data.url&&(e+='\n              <div class="help-url">\n                <a href="'.concat(t.data.url,'" ').concat(o,' target="_blank">点击查看详细</a>\n              </div>'))),n(e)})).catch((function(t){n(t)}))}))}var i={name:"cs-help",props:{router:{type:String,required:!0}},data:function(){return{helpContent:""}},methods:{getHelp:function(){var t=this;this.helpContent||(this.helpContent="正在获取内容,请稍后...",c(this.router).then((function(e){t.helpContent=e})))}}},p=i,u=n("2877"),h=Object(u["a"])(p,o,r,!1,null,null,null);e["default"]=h.exports}}]);