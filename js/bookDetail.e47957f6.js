(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bookDetail"],{"0b53":function(t,s,a){},"11eb":function(t,s,a){"use strict";a("0b53")},c43a:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bookDetail"},[e("headers"),e("contentSearch"),e("contentNav"),e("div",{staticClass:"detailContent"},[e("div",{staticClass:"detailDiv"},[e("header",[e("span",{staticClass:"homeLink"},[t._v("首页  > ")]),e("span",[t._v(t._s(t.bookDetails.title))])]),e("div",{staticClass:"showBody"},[e("div",{staticClass:"showLeft"},[e("div",{staticClass:"leftTop"},[e("img",{attrs:{src:""+a("ff4b")("./"+t.bookDetails.imgurl),alt:""}})]),t._m(0)]),e("div",{staticClass:"showRight"},[e("div",{staticClass:"rightTop"},[e("p",{staticClass:"p1"},[t._v(t._s(t.bookDetails.title))]),e("p",[e("span",[t._v("作者")]),e("span",[t._v(t._s(t.bookDetails.author))]),e("span",[t._v("出版社")]),e("span",[t._v(t._s(t.bookDetails.chuban))]),e("span",[t._v("ISBN")]),e("span"),e("span",[t._v("出版时间")]),e("span",[t._v(t._s(t.bookDetails.time))])]),e("p",{staticClass:"p3"},[e("span",[t._v("价格")]),e("span",[t._v("￥"+t._s(t.bookDetails.price))]),t._v(" "),e("span",[t._v("￥"+t._s(t.bookDetails.oldprice))]),e("span",{staticClass:"spanred"},[t._v("开通VIP会员，享受更多折扣")])]),t._m(1),e("div",[e("el-cascader",{attrs:{options:t.options,props:t.props,clearable:""}})],1),e("p"),e("p",[e("span",[t._v("商户")]),e("el-button",{attrs:{size:"medium"}},[t._v("薪传教育（周末不发货）")]),e("span",{staticClass:"spanred"},[t._v("由您选择的商户发货并提供售后服务，如选择不同商户将分别计算运费。")])],1),e("p",[e("span",[t._v("数量")]),e("el-input-number",{attrs:{min:1,max:10,label:"描述文字"},on:{change:t.handleChange},model:{value:t.num,callback:function(s){t.num=s},expression:"num"}}),e("span",{staticClass:"spanred"},[t._v("线上库存"+t._s(t.total)+"件")])],1)]),e("div",{staticClass:"rightBottom"},[e("el-button",{attrs:{type:"success"},on:{click:t.liji}},[t._v("立即购买")]),e("el-button",{attrs:{type:"primary"},on:{click:t.addCar}},[t._v("加入购物车")]),e("el-button",{attrs:{type:"warning"},on:{click:t.soucang}},[t._v("收"),e("i",{staticClass:"el-icon-sell el-icon--center"}),t._v("藏 ")]),e("router-link",{attrs:{to:"/shoppingCar"}},[e("el-button",{attrs:{type:"danger"}},[t._v("购物车"),e("i",{staticClass:"el-icon-s-goods"})])],1)],1)])])])]),e("footers")],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"leftBottom"},[a("p",[a("span",{staticStyle:{"margin-right":"20px",color:"deepskyblue"}},[t._v("浏览次数643")]),a("span",[t._v("销售22")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("span",[t._v("配送至")])])}],l=a("df6b"),o=a("870a"),n=a("1638"),c=a("b3ee"),r={components:{headers:l["a"],contentSearch:o["a"],contentNav:n["default"],footers:c["default"]},data:function(){return{id:this.$route.params.id,bookDetails:{},num:1,total:100,props:{multiple:!0},options:[{value:2,label:"上海",children:[{value:3,label:"普陀"},{value:4,label:"黄埔"},,{value:5,label:"徐汇"}]},{value:7,label:"江苏",children:[{value:8,label:"南京"},{value:9,label:"苏州"},{value:10,label:"无锡"}]},{value:12,label:"浙江",children:[{value:13,label:"杭州"},{value:14,label:"宁波"},{value:15,label:"嘉兴"}]},{value:101,label:"湖南",children:[{value:102,label:"长沙"},{value:103,label:"娄底"},{value:104,label:"衡阳"},{value:105,label:"益阳"}]}]}},created:function(){this.bookDetails=this.$route.params.item},methods:{handleChange:function(t){this.total=101-t},liji:function(){var t=this;this.$store.commit("buyNow",this.bookDetails),this.$store.commit("nowShop",!0),setTimeout((function(){t.$router.push("/nowShopping")}),0)},addCar:function(){this.$store.state.isLogin?this.$message({message:"请您先登录!",type:"warning"}):(this.$notify({title:"加入购物车成功",message:"",type:"success"}),this.$store.commit("uploadShop",this.bookDetails),this.$store.commit("updateNowId",!0))},soucang:function(){this.$store.state.isLogin?this.$message({message:"请您先登录!",type:"warning"}):(this.$store.commit("shoucangList",this.bookDetails),this.$message({message:"恭喜你，收藏成功!",type:"success"}))}}},p=r,u=(a("11eb"),a("2877")),v=Object(u["a"])(p,e,i,!1,null,"7b0a105e",null);s["default"]=v.exports}}]);
//# sourceMappingURL=bookDetail.e47957f6.js.map