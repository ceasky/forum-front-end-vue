"use strict";(self["webpackChunkrest"]=self["webpackChunkrest"]||[]).push([[954],{5954:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h1",[t._v(t._s(t.restaurant.name))]),e("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),e("div",{staticClass:"well"},[e("ul",{staticClass:"list-unstyled"},[e("li",[e("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),e("li",[e("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),e("li",[e("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),e("div",{staticClass:"col-md-8"},[e("p",[t._v(t._s(t.restaurant.description))])])]),e("hr"),e("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")])])},s=[],n=a(3459),i=a(4711),u=a(6163),d={name:"AdminRestaurant",mixins:[n.L],data(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:""}}},mounted(){const{id:t}=this.$route.params;this.fetchRestaurant(t)},methods:{async fetchRestaurant(t){try{const{data:e}=await i.Z.restaurants.getDetail({restaurantId:t});this.restaurant={...this.restaurant,id:e.restaurant.id,name:e.restaurant.name,categoryName:e.restaurant.Category.name,image:e.restaurant.image,openingHours:e.restaurant.opening_hours,tel:e.restaurant.tel,address:e.restaurant.address,description:e.restaurant.description}}catch(e){u.F.fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"})}}},beforeRouteUpdate(t,e,a){const{id:r}=t.params;this.fetchRestaurant(r),a()}},o=d,l=a(1001),c=(0,l.Z)(o,r,s,!1,null,null,null),m=c.exports},4711:function(t,e,a){var r=a(6163);e["Z"]={categories:{get(){return r.l.get("/admin/categories")},create({name:t}){return r.l.post("/admin/categories",{name:t})},delete({categoryId:t}){return r.l["delete"](`/admin/categories/${t}`)},update({categoryId:t,name:e}){return r.l.put(`/admin/categories/${t}`,{name:e})}},restaurants:{create({formData:t}){return r.l.post("/admin/restaurants",t)},getDetail({restaurantId:t}){return r.l.get(`/admin/restaurants/${t}`)},update({restaurantId:t,formData:e}){return r.l.put(`/admin/restaurants/${t}`,e)}},getRests(){return r.l.get("/admin/restaurants")},deleterest({restaurantId:t}){return r.l["delete"](`/admin/restaurants/${t}`)},adminUsers(){return r.l.get("/admin/users")},adminupdate({userid:t,isAdmin:e}){return r.l.put(`/admin/users/${t}`,{isAdmin:e})}}}}]);
//# sourceMappingURL=954.39d6715f.js.map