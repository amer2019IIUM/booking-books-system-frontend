<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
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
