(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47d15028"],{"4dd0c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cs-container",[a("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"platform-table":t.platformTable},on:{submit:t.handleSubmit},slot:"header"}),a("page-main",{attrs:{loading:t.loading,"table-data":t.table,"platform-table":t.platformTable},on:{sort:t.handleSort,refresh:t.handleRefresh}}),a("page-footer",{attrs:{slot:"footer",loading:t.loading,"page-no":t.page.page_no,"page-size":t.page.page_size,total:t.pageTotal},on:{change:t.handlePaginationChange},slot:"footer"})],1)},o=[],r=a("5530"),i=(a("d3b7"),a("3ca3"),a("ddb0"),a("3766")),d=a("b27e"),s={name:"system-storage-style",components:{PageHeader:function(){return a.e("chunk-2d21d8bd").then(a.bind(null,"d281"))},PageMain:function(){return a.e("chunk-c4f942c2").then(a.bind(null,"d10f"))},PageFooter:function(){return a.e("chunk-2d0bd262").then(a.bind(null,"2b84"))}},data:function(){return{loading:!1,table:[],pageTotal:0,platformTable:[],page:{page_no:1,page_size:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;Promise.all([Object(i["a"])("system_info",["platform"]),this.$store.dispatch("careyshop/db/databasePage",{user:!0})]).then((function(e){t.platformTable=e[0].data?e[0].data.platform.value:[],t.page.page_size=e[1].get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.page_no-1)||this.page.page_no--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,(t.page_no-1)*t.page_size>this.pageTotal||this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a&&(this.page.page_no=1),this.loading=!0,Object(d["c"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},t),this.page),this.order)).then((function(t){e.table=t.data.items||[],e.pageTotal=t.data.total_result})).finally((function(){e.loading=!1}))}}},l=s,u=a("2877"),h=Object(u["a"])(l,n,o,!1,null,null,null);e["default"]=h.exports},b27e:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return d})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return l})),a.d(e,"e",(function(){return u}));var n=a("5530"),o=a("bc07"),r="/v1/storage_style";function i(t){return Object(o["a"])({url:r,method:"post",data:Object(n["a"])({method:"add.storage.style.item"},t)})}function d(t){return Object(o["a"])({url:r,method:"post",data:Object(n["a"])({method:"set.storage.style.item"},t)})}function s(t){return Object(o["a"])({url:r,method:"post",data:Object(n["a"])({method:"get.storage.style.list"},t)})}function l(t){return Object(o["a"])({url:r,method:"post",data:{method:"del.storage.style.list",storage_style_id:t}})}function u(t,e){return Object(o["a"])({url:r,method:"post",data:{method:"set.storage.style.status",storage_style_id:t,status:e}})}}}]);