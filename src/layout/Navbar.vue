<template>
  <div>
    <nav class="navbar navbar-light primaryBackgroundColor mb-5">
      <div class="container-fluid m-3">
        <a class="navbar-brand" href="#">
          <router-link style="text-decoration: none" :to="{ name: 'Home' }">
            <span class="secondaryColor">Booking System</span>
          </router-link>
        </a>
        <div class="d-flex">
          <router-link
            style="text-decoration: none"
            :to="{ name: 'Login' }"
            v-if="!authenticatedUserId"
          >
            <button type="button" class="btn btn-outline-light m-1">
              Login
            </button>
          </router-link>
          <router-link
            style="text-decoration: none"
            :to="{ name: 'Signup' }"
            v-if="!authenticatedUserId"
          >
            <button type="button" class="btn btn-outline-light m-1">
              Register
            </button>
          </router-link>
          <router-link
            style="text-decoration: none"
            :to="{
              name: 'UserProfile',
              params: { id: authenticatedUserId },
            }"
            v-if="authenticatedUserId"
          >
            <button type="button" class="btn btn-outline-light m-1">
              Your Profile
            </button>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",

  computed: {
    ...mapGetters({
      authenticatedUserId: "Auth/authenticatedUserId",
    }),
  },
};
</script>

<style scoped></style>
