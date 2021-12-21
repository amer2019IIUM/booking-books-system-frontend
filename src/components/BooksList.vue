<template>
  <div class="container">
    <div class="row">
      <div
        class="col mb-3"
        v-for="(item, index) in [1, 2, 3, 4, 5, 6]"
        :key="index"
      >
        <book-item />
      </div>
    </div>
  </div>
</template>

<script>
import BookItem from "./BookItem.vue";
export default {
  components: { BookItem },
  name: "BooksList",
  data() {
    return {};
  },
};
</script>
