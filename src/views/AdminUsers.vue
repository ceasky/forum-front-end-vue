<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th scope="col">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td v-show="user.isAdmin">admin</td>
          <td v-show="!user.isAdmin">user</td>
          <td>
            <button @click.stop.prevent="toggleIsAdmin(user.id, user.isAdmin)" v-show="user.isAdmin" type="button"
              class="btn btn-link">
              set as user
            </button>
            <button @click.stop.prevent="toggleIsAdmin(user.id, user.isAdmin)" v-show="!user.isAdmin" type="button"
              class="btn btn-link">
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default{
  components: {
    AdminNav
  },
  data(){
    return{
      users:[]
    }
  },
  created(){
    this.fetchusers()
  },
  methods:{
    async fetchusers(){
      try{
        const { data } = await adminAPI.adminUsers()
        this.users = data.users       
      } catch (error) {
        console.log("erroe", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料",
        });
      }  
    },
    async toggleIsAdmin(userid,isAdmin){
      try{
        const beadmin = !isAdmin
        const { data } = await adminAPI.adminupdate({
          userid,
          isAdmin: beadmin.toString()
        })
        this.users = this.users.map(user => {
        if (user.id === userid) {
          return {
            ...user,
            isAdmin: beadmin
          }
        }
        return user
      })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

      } catch (error) {
        console.log("erroe", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料",
        });
      } 
      
    }
  }
}

</script>