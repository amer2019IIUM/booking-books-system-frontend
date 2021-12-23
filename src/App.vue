<template>
  <!-- Loading after fetching the data -->
  <div class="row" v-if="isLoading">
    <div class="col-12 mt-5 text-center">
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow primaryColor" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <!--  -->

  <div v-if="!isLoading">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./layout/Navbar.vue";
import Footer from "./layout/Footer.vue";
import Dashboard from "./pages/dashboard/Dashboard.vue";

export default {
  name: "App",
  // eslint-disable-next-line vue/no-unused-components
  components: { Navbar, Footer, Dashboard },
  data() {
    return {
      isLoading: true,
      hi: "",
    };
  },

  methods: {
    ...mapActions({
      setBooks: "Book/getBookData",
      setUserCountBooks: "User/bookedBooks",
      setCategories: "Category/getCategoryData",
      setUsers: "User/getUserData",
      currentUser: "Auth/currentUser",
    }),

    ///GET All the books data
    initializeBooksData() {
      this.axios
        .get("http://localhost:8000/api/books/")
        .then((res) => {
          this.setBooks(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
      // this.setBooks(["asdasd"]);
    },
    initializeCategoriesData() {
      this.axios
        .get("http://localhost:8000/api/categories/")
        .then((res) => {
          this.setCategories(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    ///GET All the Users data
    async initializeUsersData() {
      let token = await localStorage.getItem("myapptoken");
      this.axios
        .get("http://localhost:8000/api/users/", {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        .then((res) => {
          this.isLoading = false;
          this.setUsers(res.data.data);
        })
        .catch((err) => {
          this.isLoading = false;
          console.error(err);
        });
    },

    ///Get the current User data if authenticated
    initializeProfile() {
      let token = localStorage.getItem("myapptoken");
      this.axios
        .get("http://localhost:8000/api/profile/", {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        .then((res) => {
          this.setUserCountBooks(res.data.books.length);
          this.currentUser(res.data);
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            localStorage.setItem("authStatus", false);
          }
        });
    },
  },
  created() {
    this.initializeProfile();
    this.initializeBooksData();
    this.initializeCategoriesData();
    this.initializeUsersData();
  },
};
</script>

<style>
.primaryBackgroundColor {
  background-color: #6e50ca !important;
}
.primaryColor {
  color: #6e50ca !important;
}
.secondaryColor {
  color: #fff !important;
}
.borderColor {
  border-color: #6e50ca !important;
  color: #6e50ca !important;
  color: #6e50ca !important;
}
</style>
