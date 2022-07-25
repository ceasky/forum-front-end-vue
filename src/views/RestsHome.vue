<template>
  <div class="container py-5">
    <NavTabsVue />
    <RestsNavPillsVue :categories="categories" />

    <div class="row">
      <RestCardVue v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>
    <RestPaginationVue v-if="totalPage.length > 1" :current-page="currentPage" :total-page="totalPage"
      :category-id="categoryId" :previous-page="previousPage" :next-page="nextPage" />

    <div v-if="restaurants.length<1">
      此類別目前無餐廳資料
    </div>
  </div>
</template>

<script>
import NavTabsVue from "@/components/NavTabs.vue";
import RestCardVue from "@/components/RestCard.vue";
import RestsNavPillsVue from "@/components/RestsNavPills.vue";
import RestPaginationVue from "@/components/RestPagination.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabsVue,
    RestCardVue,
    RestsNavPillsVue,
    RestPaginationVue,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },
  beforeRouteUpdate(to, from, next) {
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const respone = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = respone.data;

        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
      } catch (error) {
        console.log("erroe", error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料",
        });
      }
    },
  },
};
</script>

