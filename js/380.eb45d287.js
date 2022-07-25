"use strict";(self["webpackChunkrest"]=self["webpackChunkrest"]||[]).push([[380],{6648:function(t,e,s){s.d(e,{Z:function(){return o}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("h1",[t._v("餐廳後台")]),e("router-link",{attrs:{to:{name:"admin-restaurants"}}},[t._v("Restaurants")]),t._v(" | "),e("router-link",{attrs:{to:{name:"admin-categories"}}},[t._v("Categories")]),t._v(" | "),e("router-link",{attrs:{to:{name:"admin-users"}}},[t._v("Users")])],1)},a=[],n=s(1001),i={},u=(0,n.Z)(i,r,a,!1,null,null,null),o=u.exports},5380:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("AdminNav"),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.users,(function(s){return e("tr",{key:s.id},[e("th",{attrs:{scope:"row"}},[t._v(" "+t._s(s.id)+" ")]),e("td",[t._v(t._s(s.email))]),e("td",{directives:[{name:"show",rawName:"v-show",value:s.isAdmin,expression:"user.isAdmin"}]},[t._v("admin")]),e("td",{directives:[{name:"show",rawName:"v-show",value:!s.isAdmin,expression:"!user.isAdmin"}]},[t._v("user")]),e("td",[e("button",{directives:[{name:"show",rawName:"v-show",value:s.isAdmin,expression:"user.isAdmin"}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleIsAdmin(s.id,s.isAdmin)}}},[t._v(" set as user ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:!s.isAdmin,expression:"!user.isAdmin"}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleIsAdmin(s.id,s.isAdmin)}}},[t._v(" set as admin ")])])])})),0)])],1)},a=[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v(" # ")]),e("th",{attrs:{scope:"col"}},[t._v(" Email ")]),e("th",{attrs:{scope:"col"}},[t._v(" Role ")]),e("th",{attrs:{scope:"col"}},[t._v(" Action ")])])])}],n=(s(1703),s(6648)),i=s(4711),u=s(6163),o={components:{AdminNav:n.Z},data(){return{users:[]}},created(){this.fetchusers()},methods:{async fetchusers(){try{const{data:t}=await i.Z.adminUsers();this.users=t.users}catch(t){console.log("erroe",t),u.F.fire({icon:"error",title:"無法取得資料"})}},async toggleIsAdmin(t,e){try{const s=!e,{data:r}=await i.Z.adminupdate({userid:t,isAdmin:s.toString()});if(this.users=this.users.map((e=>e.id===t?{...e,isAdmin:s}:e)),"success"!==r.status)throw new Error(r.message)}catch(s){console.log("erroe",s),u.F.fire({icon:"error",title:"無法取得資料"})}}}},d=o,l=s(1001),c=(0,l.Z)(d,r,a,!1,null,null,null),m=c.exports},4711:function(t,e,s){var r=s(6163);e["Z"]={categories:{get(){return r.l.get("/admin/categories")},create({name:t}){return r.l.post("/admin/categories",{name:t})},delete({categoryId:t}){return r.l["delete"](`/admin/categories/${t}`)},update({categoryId:t,name:e}){return r.l.put(`/admin/categories/${t}`,{name:e})}},restaurants:{create({formData:t}){return r.l.post("/admin/restaurants",t)},getDetail({restaurantId:t}){return r.l.get(`/admin/restaurants/${t}`)},update({restaurantId:t,formData:e}){return r.l.put(`/admin/restaurants/${t}`,e)}},getRests(){return r.l.get("/admin/restaurants")},deleterest({restaurantId:t}){return r.l["delete"](`/admin/restaurants/${t}`)},adminUsers(){return r.l.get("/admin/users")},adminupdate({userid:t,isAdmin:e}){return r.l.put(`/admin/users/${t}`,{isAdmin:e})}}}}]);
//# sourceMappingURL=380.eb45d287.js.map