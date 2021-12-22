<template>
  <div class="container">
    <div class="row">
      <div class="col mb-3" v-for="(book, index) in books" :key="index">
        <book-item :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import BookItem from "./BookItem.vue";
import { mapGetters } from "vuex";

export default {
  components: { BookItem },
  name: "BooksList",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      books: "Book/bookData",
    }),
  },
};
</script>
