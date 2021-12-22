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
            <form>
              <div
                class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
              >
                <h4 class="fw-normal mb-0 me-3">Register</h4>
              </div>

              <div class="divider d-flex align-items-center my-4"></div>

              <!-- 2.1.1.	Username input -->
              <div class="form-outline mb-4">
                <input
                  id="form3Example1"
                  class="form-control form-control-lg"
                  placeholder="Enter  username"
                  v-model="formData.username"
                />
                <label class="form-label" for="form3Example1"> Username</label>
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  v-model="formData.email"
                  id="form3Example2"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label class="form-label" for="form3Example2">
                  Email address</label
                >
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">
                <input
                  v-model="formData.password"
                  type="password"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label class="form-label" for="form3Example3">Password</label>
              </div>

              <!-- Address input -->
              <div class="form-outline mb-3">
                <input
                  type="text"
                  v-model="formData.address"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter Address"
                />
                <label class="form-label" for="form3Example4">Address</label>
              </div>

              <!-- Lat input -->
              <div class="form-outline mb-3">
                <input
                  type="Lat"
                  v-model="formData.lat"
                  id="form3Example5"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form3Example5">Lat</label>
              </div>

              <!-- Lng input -->
              <div class="form-outline mb-3">
                <input
                  type="lng"
                  v-model="formData.lng"
                  id="form3Example6"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form3Example6">Lng</label>
              </div>

              <div
                class="d-flex justify-content-between align-items-center"
              ></div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                  class="btn btn-outline-primaryColor borderColor primaryColor"
                >
                  Register
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
export default {
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
        address: "",
        lat: "",
        lng: "",
      },
    };
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
