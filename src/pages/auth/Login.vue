<template>
  <div>
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://image.freepik.com/free-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form class="form-inline" v-on:submit.prevent="onSubmit">
              <div
                class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
              >
                <h4 class="fw-normal mb-0 me-3">Sign in</h4>
              </div>

              <div class="divider d-flex align-items-center my-4"></div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  v-model="formData.email"
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  required
                />
                <label class="form-label" for="form3Example3"
                  >Email address</label
                >
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">
                <input
                  type="password"
                  v-model="formData.password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                  required
                />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

              <div
                class="d-flex justify-content-between align-items-center"
              ></div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                  class="btn btn-outline-primaryColor borderColor primaryColor"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("hi");
      this.axios
        .post("http://localhost:8000/api/login/", {
          email: this.formData.email,
          password: this.formData.password,
        })
        .then((res) => {
          this.login(res.data.token);
          this.$router.go();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    ...mapActions({
      login: "Auth/login",
    }),
  },
};
</script>
<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
