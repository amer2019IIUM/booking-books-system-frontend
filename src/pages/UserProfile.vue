<template>
  <div class="container" v-if="user">
    <div class="row">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <div class="e-profile">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a href="" class="active nav-link">Settings</a>
                </li>
              </ul>
              <div class="tab-content pt-3">
                <div class="tab-pane active">
                  <form class="form" v-on:submit.prevent="onSubmit">
                    <div class="row">
                      <div class="col">
                        <div class="row">
                          <div class="col-4">
                            <div class="form-group">
                              <label>Email</label>
                              <input
                                class="form-control"
                                type="text"
                                v-model="formData.email"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="form-group">
                              <label>Address</label>
                              <input
                                class="form-control"
                                type="text"
                                v-model="formData.address"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="form-group">
                              <label>Lat</label>
                              <input
                                class="form-control"
                                type="text"
                                v-model="formData.lat"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="form-group">
                              <label>lng</label>
                              <input
                                class="form-control"
                                type="text"
                                v-model="formData.lng"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col d-flex justify-content-end">
                        <button
                          type="submit"
                          style="padding-left: 2.5rem; padding-right: 2.5rem"
                          class="btn btn-outline-primaryColor borderColor primaryColor"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  //   isLoading: true,
  name: "UserProfile",
  data() {
    return {
      formData: {
        email: "",
        address: "",
        lat: "",
        lng: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      let token = await localStorage.getItem("myapptoken");

      this.axios
        .put(
          "http://localhost:8000/api/users/1" + this.$route.params.id,
          this.formData,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
  },
  updated() {
    this.$nextTick(function () {
      this.formData = this.user;
    });
  },
};
</script>

<style scoped></style>
