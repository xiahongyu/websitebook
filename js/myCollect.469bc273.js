(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["myCollect"],{a31c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"myCollect"},[i("div",{staticClass:"collectCont"},[i("div",{staticClass:"shoppingCollect"},[i("table",[t._m(0),this.shoppingArr.length>0?i("tbody",t._l(t.shoppingArr,(function(e,n){return i("tr",{key:n},[i("td",[t._v(t._s(e.id))]),i("td",[t._v(t._s(t._f("sliceTxt")(e.title)))]),i("td",[t._v("￥"+t._s(e.price))]),i("td",[t._v(t._s(e.author))]),i("td",[t._v(t._s(e.time))]),i("td",[i("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(e){return t.deletes(n)}}})],1)])})),0):i("tbody",[i("el-empty",{attrs:{"image-size":200}})],1)])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("商品ID")]),i("th",[t._v("商品名称")]),i("th",[t._v("价格")]),i("th",[t._v("作者")]),i("th",[t._v("时间")]),i("th",[t._v("操作")])])])}],r=(i("a434"),i("fb6a"),{data:function(){return{shoppingArr:[]}},methods:{deletes:function(t){this.shoppingArr.splice(t,1)}},created:function(){var t=this.$store.state.shouList,e={};this.shoppingArr=t.reduce((function(t,i){return!e[i.id]&&(e[i.id]=t.push(i)),t}),[])},filters:{sliceTxt:function(t){return t.slice(0,12)+"..."}}}),c=r,o=(i("b19d"),i("2877")),l=Object(o["a"])(c,n,s,!1,null,"749d18ca",null);e["default"]=l.exports},b19d:function(t,e,i){"use strict";i("ef3e")},ef3e:function(t,e,i){}}]);
//# sourceMappingURL=myCollect.469bc273.js.map