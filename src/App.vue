<template>
  <div>
    <navbar />
    <home></home>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
import Home from "./pages/Home.vue";
export default {
  name: "App",
  components: { Home, Navbar },
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
}
</style>
