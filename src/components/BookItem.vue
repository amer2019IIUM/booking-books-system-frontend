<template>
  <div class="card" style="width: 15rem">
    <img
      src="https://heroesfootball.com/wp-content/uploads/2019/05/salah.jpg"
      class="card-img-top"
      style="width: 15rem; height: 15rem"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Mohd Saleh Book</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span><b> Author:</b></span> Amer
        </li>
      </ul>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
    <div class="card-body text-center">
      <button
        type="button"
        class="btn btn-outline-primaryColor borderColor primaryColor"
      >
        View
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItem",
};
</script>

<style scoped></style>
