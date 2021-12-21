<template>
  <div class="card" style="width: 15rem">
    <img
      src="https://heroesfootball.com/wp-content/uploads/2019/05/salah.jpg"
      class="card-img-top"
      style="width: 15rem; height: 15rem"
      alt="..."
    />
    <div class="card-body">
      <router-link
        class="primaryColor"
        style="text-decoration: none"
        :to="{ name: 'ShowBook', params: { id: '123' } }"
      >
        <h5 class="card-title">Mohd Saleh Book</h5>
      </router-link>
      <h6 class="card-subtitle mb-2 text-muted"><b>Author</b>:Amer</h6>

      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
    <div class="card-body text-center">
      <router-link :to="{ name: 'ShowBook', params: { id: '123' } }">
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
  data() {
    return {
      id: 1,
    };
  },
};
</script>

<style scoped></style>
