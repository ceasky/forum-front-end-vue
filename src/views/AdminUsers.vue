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
            <button @click.stop.prevent="toggleIsAdmin(user.id)" v-show="user.isAdmin" type="button"
              class="btn btn-link">
              set as user
            </button>
            <button @click.stop.prevent="toggleIsAdmin(user.id)" v-show="!user.isAdmin" type="button"
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
const dummyData = {
  users: [
    {
      id: 1,
      email: 'id1@example.com',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 2,
      email: 'id2@example.com',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 3,
      email: 'id3@example.com',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 4,
      email: 'id4@example.com',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    }
  ]
}
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
    fetchusers(){
      this.users = dummyData.users.map(
        user=>({
          ...user,
          isAdmin:false,
        })
      )
    },
    toggleIsAdmin(userid){
      this.users = this.users.map(user => {
        if (user.id === userid) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          }
        }
        return user
      })
    }
  }
}

</script>