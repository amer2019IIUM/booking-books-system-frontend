<template>
  <div class="container">
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
    </ul>
    <hr />
    <users-manage v-if="switchComponent == true" />
    <books-manage v-if="switchComponent == false" />
  </div>
</template>

<script>
import BooksManage from "../../components/BooksManage.vue";
import UsersManage from "../../components/UsersManage.vue";
export default {
  components: { BooksManage, UsersManage },
  data() {
    return {
      switchComponent: true,
    };
  },
};
</script>
