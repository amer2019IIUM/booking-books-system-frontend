<template>
  <div class="container" v-if="user.is_admin">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <button
          type="button"
          class="btn btn-secondary primaryBackgroundColor btn-lg m-2"
          @click="switchComponent = true"
        >
          Users
        </button>
      </li>
      <li class="nav-item">
        <button
          type="button"
          @click="switchComponent = false"
          class="btn btn-secondary primaryBackgroundColor btn-lg m-2"
        >
          Books
        </button>
      </li>
      <li class="nav-item">
        <button
          type="button"
          @click="switchComponent = null"
          class="btn btn-secondary primaryBackgroundColor btn-lg m-2"
        >
          Categories
        </button>
      </li>
    </ul>
    <hr />
    <users-manage v-if="switchComponent == true" />
    <books-manage v-if="switchComponent == false" />
    <category-manage v-if="switchComponent == null" />
  </div>
</template>

<script>
import BooksManage from "../../components/BooksManage.vue";
import UsersManage from "../../components/UsersManage.vue";
import CategoryManage from "../../components/CategoryManage.vue";
import { mapGetters } from "vuex";

export default {
  components: { BooksManage, UsersManage, CategoryManage },
  data() {
    return {
      switchComponent: true,
    };
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
  },
};
</script>
