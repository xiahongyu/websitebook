(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sendGoods"],{"1d6f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myOrder"},[r("div",{staticClass:"shoppingCont"},[r("ul",{staticClass:"ulList"},[r("li",[r("router-link",{attrs:{to:"/personHome/myOrder/allOrder"}},[t._v("全部订单")])],1),r("li",[r("router-link",{attrs:{to:"/personHome/myOrder/payment"}},[t._v("待付款")])],1),r("li",[r("router-link",{attrs:{to:"/personHome/myOrder/shipped"}},[t._v("待发货")])],1),r("li",[r("router-link",{attrs:{to:"/personHome/myOrder/sendGoods"}},[t._v("已发货")])],1),r("li",[r("router-link",{attrs:{to:"/personHome/myOrder/completed"}},[t._v("已完成")])],1),r("li",[r("router-link",{attrs:{to:"/personHome/myOrder/closed"}},[t._v("已关闭")])],1),r("li",[r("router-link",{attrs:{to:"/personHome/myOrder/refund"}},[t._v("退款/售后")])],1)]),r("div",{staticClass:"shows"},[r("table",[t._m(0),this.shoppingArr.length>0?r("tbody",t._l(t.shoppingArr,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.guige))]),r("td",[t._v(t._s(e.count))]),r("td",[t._v("￥"+t._s(e.price))]),r("td",[r("el-tag",[t._v("已发货")])],1),r("td",[r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(e){return t.deletes(n)}}})],1)])})),0):r("tbody",[r("el-empty",{attrs:{"image-size":200}})],1)])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("商品名称")]),r("th",[t._v("规格")]),r("th",[t._v("数量")]),r("th",[t._v("金额")]),r("th",[t._v("状态")]),r("th",[t._v("操作")])])])}],s=(r("a434"),{data:function(){return{shoppingArr:[{name:"人间清醒",guige:"451321354",count:1,price:87},{name:"全员嫌疑人",guige:"413213455",count:1,price:60}]}},methods:{deletes:function(t){this.shoppingArr.splice(t,1)}}}),i=s,l=(r("8a01"),r("2877")),a=Object(l["a"])(i,n,o,!1,null,"29746cd8",null);e["default"]=a.exports},"58ba":function(t,e,r){},"8a01":function(t,e,r){"use strict";r("58ba")}}]);
//# sourceMappingURL=sendGoods.a680ca27.js.map