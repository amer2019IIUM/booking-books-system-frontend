<template>
  <div>
    <books-list />
  </div>
</template>

<script>
import BooksList from "../components/BooksList.vue";
export default {
  components: { BooksList },
  name: "Home",
};
</script>

<style scoped></style>
