<template>
  <div>
    <nav class="navbar navbar-light primaryBackgroundColor mb-5">
      <div class="container-fluid m-3">
        <a class="navbar-brand" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            style="margin-left: 30px"
            fill="white"
            class="bi bi-book"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
            />
          </svg>
          <router-link style="text-decoration: none" :to="{ name: 'Home' }">
            <span class="secondaryColor" style="margin-left: 10px"
              >Booking System</span
            >
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
          <div v-if="user">
            <router-link
              style="text-decoration: none"
              :to="{
                name: 'Dashboard',
              }"
              v-if="user.is_admin"
            >
              <button type="button" class="btn btn-outline-light m-1">
                Dashboard
              </button>
            </router-link>
          </div>
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

          <button
            type="button"
            @click="signOut"
            class="btn btn-outline-light m-1"
            v-if="authenticatedUserId"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",

  computed: {
    ...mapGetters({
      authenticatedUserId: "Auth/authenticatedUserId",
      user: "Auth/user",
    }),
  },
  methods: {
    ...mapActions({
      logout: "Auth/logout",
    }),
    signOut() {
      this.logout();
    },
  },
};
</script>

<style scoped></style>
