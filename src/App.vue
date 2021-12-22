<template>
  <div>
    <navbar />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
import Footer from "./layout/Footer.vue";
export default {
  name: "App",
  // eslint-disable-next-line vue/no-unused-components
  components: { Navbar, Footer },
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
