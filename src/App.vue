<template>
  <div>
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
      hi: "",
    };
  },

  methods: {
    ...mapActions({
      setBooks: "Book/getBookData",
      setCategories: "Category/getCategoryData",
      currentUser: "Auth/currentUser",
    }),

    initializeBooksData() {
      this.hi = "hello";
      console.log("hi");
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
      this.hi = "hello";
      console.log("hi");
      this.axios
        .get("http://localhost:8000/api/categories/")
        .then((res) => {
          this.setCategories(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    ///Get the current User data if authenticated
    async initializeProfile() {
      let token = await localStorage.getItem("myapptoken");
      this.axios
        .get("http://localhost:8000/api/profile/", {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        .then((res) => {
          this.currentUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.initializeProfile();
      this.initializeBooksData();
      this.initializeCategoriesData();
    });
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
