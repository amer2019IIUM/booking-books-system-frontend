<template>
  <div>
    <h3>Books</h3>
    <div class="card">
      <div class="card-header">Add a new Book</div>
      <div class="card-body">
        <form class="form-inline" v-on:submit.prevent="onSubmit">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <div class="form-group">
                  <label>Book Name</label>
                  <input
                    v-model="bookData.book_name"
                    type="text"
                    class="form-control ml-sm-2 mr-sm-4 my-2"
                    required
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label>Author</label>
                  <input
                    v-model="bookData.author"
                    type="text"
                    class="form-control ml-sm-2 mr-sm-4 my-2"
                    required
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label>Book Cover Image</label>
                  <input
                    v-model="bookData.image"
                    type="text"
                    class="form-control ml-sm-2 mr-sm-4 my-2"
                    required
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>Language</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="bookData.lang"
                    required
                  >
                    <option value="">Choose</option>
                    <option value="ar">Arabic</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>category</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="bookData.category_id"
                    required
                  >
                    <template
                      v-for="(category, index) in categories"
                      :key="index"
                    >
                      <option :value="category.id">
                        {{ category.category_name }}
                      </option>
                    </template>
                  </select>
                </div>
              </div>
              <div class="col-22">
                <div class="form-group">
                  <label>Description</label>
                  <textarea
                    v-model="bookData.book_desc"
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
      <div class="card-header">Book List</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Book ID</th>
                <th>Book Name</th>
                <th>Book description</th>
                <th>Image Link</th>
                <th>Is Booked</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="book in books" v-bind:key="book.id">
                <template v-if="editId == book.id">
                  <td>
                    <input v-model="editBookData.id" type="text" />
                  </td>
                  <td>
                    <input v-model="editBookData.book_name" type="text" />
                  </td>
                  <td>
                    <input v-model="editBookData.book_desc" type="text" />
                  </td>
                  <td>
                    <input v-model="editBookData.image" type="text" />
                  </td>
                  <td>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="editBookData.is_booked"
                    >
                      <option value="1">true</option>
                      <option value="null">false</option>
                    </select>
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
                        @click="onEditSubmit(book.id)"
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
                    {{ book.id }}
                  </td>

                  <td>
                    {{ book.book_name }}
                  </td>
                  <td>
                    {{ book.book_desc }}
                  </td>
                  <td>
                    {{ book.image }}
                  </td>
                  <td>
                    {{ book.is_booked }}
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
                        v-on:click="onDelete(book.id)"
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
                        v-on:click="onEdit(book)"
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

export default {
  name: "Books",
  data() {
    return {
      editId: "",
      bookData: {
        book_name: "",
        author: "",
        image: "",
        book_desc: "",
        lang: "",
        is_booked: null,
        user_id: null,
        category_id: null,
      },
      editBookData: {
        id: "",
        book_name: "",
        author: "",
        image: "",
        book_desc: "",
        is_booked: null,
      },
      booksData: [],
    };
  },
  computed: {
    ...mapGetters({
      books: "Book/bookData",
      categories: "Category/categoryData",
    }),
  },

  methods: {
    onSubmit() {
      this.axios
        .post("http://localhost:8000/api/books/", this.bookData)
        .then(() => {
          alert("Book has been Added!");
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
        .delete("http://localhost:8000/api/books/" + id)
        .then(() => {
          alert("Delete it!");
          this.$router.go();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onEdit(book) {
      this.editId = book.id;
      this.editBookData.id = book.id;
      this.editBookData.book_name = book.book_name;
      this.editBookData.author = book.author;
      this.editBookData.book_desc = book.book_desc;
      this.editBookData.image = book.image;
      this.editBookData.is_booked = book.is_booked;
      console.log(book.book_name);
    },
    onCancel() {
      this.editId = "";
      this.editBookData.id = "";
      this.editBookData.book_name = "";
      this.editBookData.is_booked = "";
    },
    // eslint-disable-next-line no-unused-vars
    onEditSubmit(id) {
      this.axios
        .put("http://localhost:8000/api/books/" + id, this.editBookData)
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
