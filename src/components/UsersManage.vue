<template>
  <div>
    <h3>Users</h3>
    <div class="card">
      <div class="card-header">Add a new User</div>
      <div class="card-body">
        <form class="form-inline" v-on:submit.prevent="onSubmit">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <div class="form-group">
                  <label>User Name</label>
                  <input
                    v-model="userData.username"
                    type="text"
                    class="form-control ml-sm-2 mr-sm-4 my-2"
                    required
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    v-model="userData.email"
                    type="text"
                    class="form-control ml-sm-2 mr-sm-4 my-2"
                    required
                  />
                </div>
              </div>

              <div class="col-4">
                <div class="form-group">
                  <label>Address</label>
                  <input
                    v-model="userData.address"
                    type="text"
                    class="form-control ml-sm-2 mr-sm-4 my-2"
                    required
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label>Lat</label>
                  <input
                    v-model="userData.lat"
                    type="text"
                    class="form-control ml-sm-2 mr-sm-4 my-2"
                    required
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label>lng</label>
                  <input
                    v-model="userData.lng"
                    type="text"
                    class="form-control ml-sm-2 mr-sm-4 my-2"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="ml-auto text-center">
            <button
              type="submit"
              style="padding-left: 2.5rem; padding-right: 2.5rem"
              class="btn btn-outline-primaryColor borderColor primaryColor"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="card mt-5">
      <div class="card-header">User List</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th>User username</th>
                <th>User email</th>
                <th>address</th>
                <th>lat</th>
                <th>lng</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" v-bind:key="user.id">
                <template v-if="editId == user.id">
                  <td>
                    <input v-model="editUserData.id" type="text" />
                  </td>
                  <td>
                    <input v-model="editUserData.username" type="text" />
                  </td>
                  <td>
                    <input v-model="editUserData.email" type="text" />
                  </td>

                  <td>
                    <input v-model="editUserData.address" type="text" />
                  </td>
                  <td>
                    <input v-model="editUserData.lat" type="text" />
                  </td>
                  <td>
                    <input v-model="editUserData.lng" type="text" />
                  </td>
                  <td>
                    <span class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                        @click="onEditSubmit(user.id)"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                        />
                      </svg>
                    </span>

                    <span class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        @click="onCancel"
                        fill="currentColor"
                        class="bi bi-x-octagon-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                        />
                      </svg>
                    </span>
                  </td>
                </template>
                <template v-else>
                  <td>
                    {{ user.id }}
                  </td>

                  <td>
                    {{ user.username }}
                  </td>
                  <td>
                    {{ user.email }}
                  </td>
                  <td>
                    {{ user.address }}
                  </td>
                  <td>
                    {{ user.lat }}
                  </td>
                  <td>
                    {{ user.lng }}
                  </td>
                  <td>
                    <a href="#" class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        class="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                        v-on:click="onDelete(user.id)"
                      >
                        <path
                          d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                        />
                      </svg>
                    </a>
                    <a href="#" class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="grey"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                        v-on:click="onEdit(user)"
                      >
                        <path
                          d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                        />
                      </svg>
                    </a>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
let token = localStorage.getItem("myapptoken");

export default {
  name: "Users",
  data() {
    return {
      editId: "",
      userData: {
        username: "",
        email: "",
        address: "",
        lat: "",
        lng: null,
      },
      editUserData: {
        username: "",
        email: "",
        address: "",
        lat: "",
        lng: null,
      },
      usersData: [],
    };
  },
  computed: {
    ...mapGetters({
      users: "User/userData",
    }),
  },

  methods: {
    onSubmit() {
      this.axios
        .post("http://localhost:8000/api/users/", this.userData, {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        .then(() => {
          alert("User has been Added!");
          this.$router.go();
        })
        .catch((err) => {
          console.error(err);
        });
    },

    // eslint-disable-next-line no-unused-vars
    onDelete(id) {
      console.log(id);
      this.axios
        .delete("http://localhost:8000/api/users/" + id, {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        .then(() => {
          alert("Delete it!");
          this.$router.go();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onEdit(user) {
      this.editId = user.id;
      this.editUserData.id = user.id;
      this.editUserData.username = user.username;
      this.editUserData.email = user.email;
      this.editUserData.address = user.address;
      this.editUserData.lat = user.lat;
      this.editUserData.lng = user.lng;
    },
    onCancel() {
      this.editId = "";
      this.editUserData.id = "";
      this.editUserData.username = "";
      this.editUserData.email = "";
      this.editUserData.address = "";
      this.editUserData.lat = "";
      this.editUserData.lng = "";
    },
    // eslint-disable-next-line no-unused-vars
    onEditSubmit(id) {
      this.axios
        .put("http://localhost:8000/api/users/" + id, this.editUserData, {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        .then(() => {
          alert("Edited!");
          this.$router.go();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon {
  margin-right: 10px;
}
.icon i {
  cursor: pointer;
}
</style>
