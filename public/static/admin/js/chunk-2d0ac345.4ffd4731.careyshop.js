(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac345"],{1918:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",staticStyle:{"margin-bottom":"-18px"},attrs:{inline:!0,model:e.form,size:"mini"}},[r("el-form-item",{attrs:{label:"订单号",prop:"order_no"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"可输入订单号",clearable:!0},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFormSubmit(!0)}},model:{value:e.form.order_no,callback:function(t){e.$set(e.form,"order_no",t)},expression:"form.order_no"}})],1),r("el-form-item",{attrs:{label:"创建日期",prop:"time_period"}},[r("el-date-picker",{staticStyle:{width:"315px"},attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.form.time_period,callback:function(t){e.$set(e.form,"time_period",t)},expression:"form.time_period"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",disabled:e.loading},on:{click:function(t){return e.handleFormSubmit(!0)}}},[e._v("查询")])],1),r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.handleFormReset}},[e._v("重置")])],1)],1)},i=[],n={props:{loading:{default:!1}},data:function(){return{form:{order_no:void 0,begin_time:void 0,end_time:void 0,time_period:null}}},methods:{handleFormSubmit:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={};for(var r in this.form)Object.prototype.hasOwnProperty.call(this.form,r)&&("time_period"!==r?t[r]=this.form[r]:this.form[r]&&2===this.form[r].length&&(t.begin_time=this.form[r][0].toUTCString(),t.end_time=this.form[r][1].toUTCString()));this.$emit("submit",t,e)},handleFormReset:function(){this.form.time_period=null,this.$refs.form.resetFields()}}},l=n,m=r("2877"),a=Object(m["a"])(l,o,i,!1,null,null,null);t["default"]=a.exports}}]);