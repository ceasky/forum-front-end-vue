"use strict";(self["webpackChunkrest"]=self["webpackChunkrest"]||[]).push([[460],{2460:function(t,s,e){e.r(s),e.d(s,{default:function(){return b}});var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container py-5"},[s("NavTabsVue"),s("h1",{staticClass:"mt-5"},[t._v(" 人氣餐廳 ")]),t._l(t.rests,(function(t){return s("RestTop",{key:t.id,attrs:{initialrest:t}})}))],2)},a=[],i=e(9638),n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-md-4"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"card-img",attrs:{src:t.rest.image}})])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(" "+t._s(t.rest.name)+" ")]),s("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(t.rest.FavoriteCount))]),s("p",{staticClass:"card-text"},[t._v(" "+t._s(t.rest.description)+" ")]),s("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"RestsDetail",params:{id:t.rest.id}}}},[t._v("Show ")]),t.rest.isFavorited?s("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.deletefavorite(t.rest.id)}}},[t._v(" 移除最愛 ")]):s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.addfavorite(t.rest.id)}}},[t._v(" 加到最愛 ")])],1)])])])},o=[],c=(e(1703),e(4818)),d=e(6163),l={props:{initialrest:{type:Object,required:!0}},data(){return{rest:this.initialrest}},methods:{async addfavorite(t){try{const{data:s}=await c.Z.addfavorite({restId:t});if("success"!==s.status)throw new Error(s.message);this.rest={...this.rest,isFavorited:!0},this.rest.FavoriteCount=this.rest.FavoriteCount+1}catch(s){d.F.fire({icon:"error",title:"無法加入追蹤，請稍後再試"})}},async deletefavorite(t){try{const{data:s}=await c.Z.deletefavorite({restId:t});if("success"!==s.status)throw new Error(s.message);this.rest={...this.rest,isFavorited:!1},this.rest.FavoriteCount=this.rest.FavoriteCount-1}catch(s){d.F.fire({icon:"error",title:"無法加入追蹤，請稍後再試"})}}}},u=l,v=e(1001),p=(0,v.Z)(u,n,o,!1,null,null,null),h=p.exports,f={components:{NavTabsVue:i.Z,RestTop:h},data(){return{rests:[]}},created(){this.fetchrest()},methods:{async fetchrest(){try{const{data:t}=await c.Z.getTopRests();this.rests=t.restaurants.map((t=>({id:t.id,name:t.name,image:t.image,description:t.description,FavoriteCount:t.FavoriteCount,isFavorited:t.isFavorited})))}catch(t){console.log(t),d.F.fire({icon:"error",title:"無法取得資料，請稍後再試"})}}}},m=f,C=(0,v.Z)(m,r,a,!1,null,null,null),b=C.exports}}]);
//# sourceMappingURL=460.84e10bdd.js.map