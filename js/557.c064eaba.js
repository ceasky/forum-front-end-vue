"use strict";(self["webpackChunkrest"]=self["webpackChunkrest"]||[]).push([[557],{5557:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.restaurant.commentsLength)+" ")]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts)+" ")])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return t.$router.back()}}},[t._v(" 回上一頁 ")])])},r=[],s=e(4818),u=e(6163),c={data(){return{restaurant:{id:-1,name:"",categoryName:"",viewCounts:"",commentsLength:""}}},created(){const{id:t}=this.$route.params;this.fetchRestaurant(t)},methods:{async fetchRestaurant(t){try{const{data:a}=await s.Z.getRestaurant({restaurantId:t});this.restaurant={id:a.restaurant.id,name:a.restaurant.name,categoryName:a.restaurant.Category.name,viewCounts:a.restaurant.viewCounts,commentsLength:a.restaurant.Comments.length}}catch(a){u.F.fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"})}}}},i=c,o=e(1001),l=(0,o.Z)(i,n,r,!1,null,null,null),m=l.exports}}]);
//# sourceMappingURL=557.c064eaba.js.map