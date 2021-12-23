<template>
  <div class="container">
    <div class="row" v-if="isLoading == true">
      <div class="col-12 mt-5 text-center">
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow primaryColor" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    <div class="row" v-if="isLoading == false">
      <div class="col-4">
        <img :src="book.image" class="img-fluid" alt="..." />
      </div>
      <div class="col-6">
        <div class="card" style="width: 40rem">
          <div class="card-body">
            <h5 class="card-title">{{ book.book_name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              <b>Author</b>:{{ book.author }}
            </h6>
            <p class="card-text">
              {{ book.book_desc }}
            </p>
            <div class="card-body text-center">
              <button
                v-if="book.is_booked == null"
                @click="bookBook(book.id)"
                type="button"
                class="btn btn-outline-primaryColor borderColor primaryColor"
              >
                Borrow
              </button>
              <button
                type="button"
                disabled
                class="btn btn-outline-primaryColor borderColor primaryColor"
                v-if="book.is_booked == true"
              >
                Booked
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBook",
  data() {
    return {
      isLoading: true,
      book: null,
      id: this.$route.params,
      bookBookData: {
        user_id: "1",
        is_booked: true,
      },
    };
  },
  methods: {
    initializeBook() {
      this.axios
        .get("http://localhost:8000/api/books/" + this.$route.params.id)
        .then((res) => {
          this.book = res.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    bookBook() {
      this.axios
        .put(
          "http://localhost:8000/api/books/" + this.$route.params.id,
          this.bookBookData
        )
        .then(() => {
          alert("You have booked a book!");
          this.$router.go();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.initializeBook();
    });
  },
};
</script>
