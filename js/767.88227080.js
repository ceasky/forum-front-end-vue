"use strict";(self["webpackChunkrest"]=self["webpackChunkrest"]||[]).push([[767],{7767:function(e,s,t){t.r(s),t.d(s,{default:function(){return d}});var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"container py-5"},[s("form",{staticClass:"w-100",on:{submit:function(s){return s.preventDefault(),s.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),s("div",{staticClass:"form-label-group mb-2"},[s("label",{attrs:{for:"name"}},[e._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(s){s.target.composing||(e.name=s.target.value)}}})]),s("div",{staticClass:"form-label-group mb-2"},[s("label",{attrs:{for:"email"}},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}})]),s("div",{staticClass:"form-label-group mb-3"},[s("label",{attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),s("div",{staticClass:"form-label-group mb-3"},[s("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.passwordCheck},on:{input:function(s){s.target.composing||(e.passwordCheck=s.target.value)}}})]),s("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v(" Submit ")]),s("div",{staticClass:"text-center mb-3"},[s("p",[s("router-link",{attrs:{to:"/signin"}},[e._v(" Sign In ")])],1)]),s("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v(" © 2017-2018 ")])])])},r=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"text-center mb-4"},[s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" Sign Up ")])])}],i=(t(1703),t(7214)),o=t(6163),n={data(){return{name:"",email:"",password:"",passwordCheck:"",isProcessing:!1}},methods:{async handleSubmit(){try{if(!this.name)return void o.F.fire({icon:"warning",title:"請填寫名稱"});if(!this.email)return void o.F.fire({icon:"warning",title:"請填寫email"});if(!this.password||!this.passwordCheck)return void o.F.fire({icon:"warning",title:"請填寫密碼"});if(this.password!==this.passwordCheck)return void o.F.fire({icon:"warning",title:"兩次密碼輸入不同！"});this.isProcessing=!0;const{data:e}=await i.Z.sighUp({name:this.name,email:this.email,password:this.password,passwordCheck:this.passwordCheck});if("success"!==e.status)throw new Error(e.message);this.$router.push("/signin")}catch(e){o.F.fire({icon:"error",title:"無法建立帳號，請稍後再試"}),this.isProcessing=!1}}}},l=n,m=t(1001),c=(0,m.Z)(l,a,r,!1,null,null,null),d=c.exports}}]);
//# sourceMappingURL=767.88227080.js.map