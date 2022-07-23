<template>
  <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNavVue />

    <router-link :to="{ name: 'admin-restaurant-new'}" class="btn btn-primary mb-4">
      New Restaurant
    </router-link>
    <AdminRestaurantsTable />

    <!-- 後台餐廳列表 AdminRestaurantsTable -->
  </div>
</template>

<script>
import AdminNavVue from "@/components/AdminNav.vue";
import AdminRestaurantsTable from "@/components/AdminRestaurantsTable.vue";

export default{
  components:{
    AdminNavVue,
    AdminRestaurantsTable
  }
}
</script>