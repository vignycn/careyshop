(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fe77953"],{"31e0":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:e.loading},on:{submit:e.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:e.loading,"table-data":e.table},on:{sort:e.handleSort,refresh:e.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:e.loading,"page-no":e.page.page_no,"page-size":e.page.page_size,total:e.pageTotal},on:{change:e.handlePaginationChange},slot:"footer"})],1)},o=[],i=n("5530"),d=(n("d3b7"),n("3ca3"),n("ddb0"),n("7f04")),r={name:"goods-setting-type",components:{PageHeader:function(){return n.e("chunk-2d0b2b4a").then(n.bind(null,"24f8"))},PageMain:function(){return n.e("chunk-2d0c26da").then(n.bind(null,"49ed"))},PageFooter:function(){return n.e("chunk-2d0bd262").then(n.bind(null,"2b84"))}},data:function(){return{table:[],pageTotal:0,loading:!1,page:{page_no:1,page_size:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var e=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then((function(t){e.page.page_size=t.get("size").value()||25})).then((function(){e.handleSubmit()}))},methods:{handleRefresh:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(!(this.page.page_no-1)||this.page.page_no--),this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(e){var t=this;this.page=e,(e.page_no-1)*e.page_size>this.pageTotal||this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handleSort:function(e){var t=this;this.order=e,this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handleSubmit:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.page_no=1),this.loading=!0,Object(d["c"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},e),this.page),this.order)).then((function(e){t.table=e.data.items||[],t.pageTotal=e.data.total_result})).finally((function(){t.loading=!1}))}}},s=r,u=n("2877"),h=Object(u["a"])(s,a,o,!1,null,null,null);t["default"]=h.exports},"7f04":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));var a=n("5530"),o=n("bc07"),i="/v1/goods_type";function d(e){return Object(o["a"])({url:i,method:"post",data:{method:"add.goods.type.item",type_name:e}})}function r(e){return Object(o["a"])({url:i,method:"post",data:Object(a["a"])({method:"set.goods.type.item"},e)})}function s(e){return Object(o["a"])({url:i,method:"post",data:{method:"del.goods.type.list",goods_type_id:e}})}function u(e){return Object(o["a"])({url:i,method:"post",data:Object(a["a"])({method:"get.goods.type.list"},e)})}function h(e){return Object(o["a"])({url:i,method:"post",data:Object(a["a"])({method:"get.goods.type.select"},e)})}}}]);