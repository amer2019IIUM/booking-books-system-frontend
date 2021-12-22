<template>
  <div class="card" style="width: 15rem; height: 30rem">
    <img
      :src="book.image"
      class="card-img-top"
      style="width: 15rem; height: 15rem"
      alt="..."
    />
    <div class="card-body">
      <router-link
        class="primaryColor"
        style="text-decoration: none"
        :to="{ name: 'ShowBook', params: { id: book.id } }"
      >
        <h5 class="card-title overflowText">{{ book.book_name }}</h5>
      </router-link>
      <h6 class="card-subtitle mb-2 text-muted"><b>Author</b>:Amer</h6>

      <p class="card-text overflowText">
        {{ book.book_desc }}
      </p>
    </div>
    <div class="card-body text-center">
      <router-link :to="{ name: 'ShowBook', params: { id: book.id } }">
        <button
          type="button"
          class="btn btn-outline-primaryColor borderColor primaryColor"
        >
          View
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: ["book"],
  data() {
    return {
      id: 1,
    };
  },
};
</script>

<style scoped>
.overflowText {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
