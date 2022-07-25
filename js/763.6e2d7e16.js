"use strict";(self["webpackChunkrest"]=self["webpackChunkrest"]||[]).push([[763],{5763:function(t,s,e){e.r(s),e.d(s,{default:function(){return G}});var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container py-5"},[s("UserProfileCard",{attrs:{initaluser:t.user,initialisFollowed:t.isFollowed,Followingslength:t.Followingslength,Followerslength:t.Followerslength,Commentslength:t.Commentslength,FavoritedRestaurantslength:t.FavoritedRestaurantslength}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("UserFollowingsCard",{attrs:{initaluser:t.user,Followingslength:t.Followingslength}}),s("UserFollowersCard",{attrs:{initaluser:t.user,Followerslength:t.Followerslength}})],1),s("div",{staticClass:"col-md-8"},[s("UserCommentsCard",{attrs:{initaluser:t.user,Commentslength:t.Commentslength}}),s("UserFavoritedRestaurantsCard",{attrs:{initaluser:t.user,FavoritedRestaurantslength:t.FavoritedRestaurantslength}})],1)])],1)},i=[],l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-md-4"},[s("img",{attrs:{src:t.user.image,width:"300px",height:"300px"}})]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(" "+t._s(t.user.name)+" ")]),s("p",{staticClass:"card-text"},[t._v(" "+t._s(t.user.email)+" ")]),s("ul",{staticClass:"list-unstyled"},[s("li",[s("strong",[t._v(t._s(t.Commentslength||0))]),t._v(" 已評論餐廳 ")]),s("li",[s("strong",[t._v(t._s(t.FavoritedRestaurantslength||0))]),t._v(" 收藏的餐廳 ")]),s("li",[s("strong",[t._v(t._s(t.Followingslength||0))]),t._v(" followings (追蹤者) ")]),s("li",[s("strong",[t._v(t._s(t.Followerslength||0))]),t._v(" followers (追隨者) ")])]),t.user.isAdmin?[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"UserEdit",params:{id:t.user.id}}}},[t._v(" Edit ")])]:[t.isFollowed?s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.deleteFollowing(t.user.id)}}},[t._v(" 取消追蹤 ")]):s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFollowing(t.user.id)}}},[t._v(" 追蹤 ")])]],2)])])])},a=[],n={props:{initaluser:{type:Object,required:!0},initialisFollowed:{type:Boolean,required:!0},Followingslength:{type:Number,required:!0},Followerslength:{type:Number,required:!0},FavoritedRestaurantslength:{type:Number,required:!0},Commentslength:{type:Number,required:!0}},data(){return{isFollowed:this.initialisFollowed,user:this.initaluser}},methods:{addFollowing(){this.isFollowed=!0},deleteFollowing(){this.isFollowed=!1}},watch:{initaluser(t){this.user=t}}},o=n,u=e(1001),d=(0,u.Z)(o,l,a,!1,null,null,null),h=d.exports,c=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.Followingslength))]),t._v(" followings (追蹤者) ")]),s("div",{staticClass:"card-body"},t._l(t.user.Followings,(function(t){return s("router-link",{key:t.id,attrs:{to:{name:"UserPage",params:{id:t.id}}}},[s("img",{staticClass:"mr-1",attrs:{src:t.image,width:"60",height:"60"}})])})),1)])},g=[],m={props:{initaluser:{type:Object,required:!0},Followingslength:{type:Number,required:!0}},data(){return{user:this.initaluser}},watch:{initaluser(t){this.user=t}}},p=m,v=(0,u.Z)(p,c,g,!1,null,null,null),w=v.exports,F=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.Followerslength))]),t._v(" followers (追隨者) ")]),s("div",{staticClass:"card-body"},t._l(t.user.Followers,(function(t){return s("router-link",{key:t.id,attrs:{to:{name:"UserPage",params:{id:t.id}}}},[s("img",{staticClass:"mr-1",attrs:{src:t.image,width:"60",height:"60"}})])})),1)])},C=[],_={props:{initaluser:{type:Object,required:!0},Followerslength:{type:Number,required:!0}},data(){return{user:this.initaluser}},watch:{initaluser(t){this.user=t}}},f=_,b=(0,u.Z)(f,F,C,!1,null,null,null),y=b.exports,R=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.Commentslength))]),t._v(" 已評論餐廳 ")]),s("div",{staticClass:"card-body"},t._l(t.user.Comments,(function(t){return s("router-link",{key:t.id,attrs:{to:{name:"RestsDetail",params:{id:t.Restaurant.id}}}},[s("img",{staticClass:"mr-1 mb-1",attrs:{src:t.Restaurant.image,width:"60",height:"60"}})])})),1)])},k=[],q={props:{initaluser:{type:Object,required:!0},Commentslength:{type:Number,required:!0}},data(){return{user:this.initaluser}},watch:{initaluser(t){this.user=t}}},U=q,x=(0,u.Z)(U,R,k,!1,null,null,null),N=x.exports,Z=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.FavoritedRestaurantslength))]),t._v(" 收藏的餐廳 ")]),s("div",{staticClass:"card-body"},t._l(t.user.FavoritedRestaurants,(function(t){return s("router-link",{key:t.id,attrs:{to:{name:"RestsDetail",params:{id:t.id}}}},[s("img",{staticClass:"mr-1 mb-1",attrs:{src:t.image,width:"60",height:"60"}})])})),1)])},P=[],j={props:{initaluser:{type:Object,required:!0},FavoritedRestaurantslength:{type:Number,required:!0}},data(){return{user:this.initaluser}},watch:{initaluser(t){this.user=t}}},O=j,A=(0,u.Z)(O,Z,P,!1,null,null,null),D=A.exports,E=e(8390),B=e(6163),I={components:{UserProfileCard:h,UserFollowingsCard:w,UserFollowersCard:y,UserCommentsCard:N,UserFavoritedRestaurantsCard:D},data(){return{user:{},isFollowed:!1,isAdmin:!1,Commentslength:-1,Followerslength:-1,Followingslength:-1,FavoritedRestaurantslength:-1}},created(){const{id:t}=this.$route.params;this.fetchprofile(t)},beforeRouteUpdate(t,s,e){const{id:r}=t.params;this.fetchprofile(r),e()},methods:{async fetchprofile(t){try{const{data:s}=await E.Z.get({userId:t});this.user=s.profile,this.isFollowed=s.isFollowed,this.isAdmin=s.profile.isAdmin,this.Commentslength=s.profile.Comments.length,this.Followerslength=s.profile.Followers.length,this.Followingslength=s.profile.Followings.length,this.FavoritedRestaurantslength=s.profile.FavoritedRestaurants.length}catch(s){B.F.fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"})}}}},$=I,z=(0,u.Z)($,r,i,!1,null,null,null),G=z.exports}}]);
//# sourceMappingURL=763.6e2d7e16.js.map