<template>
<modal  name="AddBook"
        @before-open="beforeOpen"
        height="auto"
        scrollable>
  <div class="add-book-wrapper">
    <h3 class="modal-title">
      <span>Add book</span>
      <i class="material-icons close-modal"
         @click="hideAddModal">
        close
      </i>
    </h3>
    <div class="add-book-form clearfix">
      <label for="Title">Title</label>
      <input type="text"
             v-model="book.title"
             required
             class="book-input"
             name="Title"
             placeholder="Title">
      <label for="Author">Author</label>
      <input type="text"
             v-model="book.author"
             required
             class="book-input"
             name="Author"
             placeholder="Author">
      <div class="add-btn green-ripple clearfix"
         @click="addBook">
        <i class="material-icons">
          add
        </i>
        Add
      </div>
    </div>
  </div>
</modal>
</template>

<script>
import Api from '../api/index';

export default {
  name: 'AddBook',
  data() {
    return {
      book: {},
    };
  },
  methods: {
    beforeOpen() {
    },
    hideAddModal() {
      this.$modal.hide('AddBook');
    },
    addBook() {
      this.hideAddModal();
      return Api.postBook(this.book)
        .then(() => {
          this.book = {};
        });
    },
  },
  beforeCreate() {
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/theme';
.clearfix {
    &:after {
      content: "";
      display: table;
      clear: both;
    }
}

.modal-title {
  background: $defBlue;
  color: $text-inverted;
  padding: 0.5em;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.close-modal {
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    color: darken($text-inverted, 10%);
  }
}

.add-book-form {
  background: ghostwhite;
  padding: 1em 0;
  input {
    outline: none;
    padding: 0.5em;
    margin: 0.5em 0.5em 1em 0.5em;
    display: block;
    width: calc(100% - 1em);
    border-radius: 2px;
    border: 1px solid lightgray;
  }

  label {
    padding: 0 0.5em;
    font-size: 0.875em;
  }
}

.add-btn {
  background: $bright;
  margin: 0.5em 0.5em 0 0;
  padding: 0;
  padding: 0.5em;
  color: $text-inverted;
  width: 6em;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
</style>

<style lang="scss">
    .v--modal-box {
        top: 120px !important;
        left: 8px !important;
        width: calc(100% - 16px) !important;

        @media screen and(min-width: 460px) {
            left: 16px !important;
            width: calc(100% - 32px) !important;
        }

        @media screen and(min-width: 640px) {
            left: calc((100% - 600px)/2) !important;
            width: 600px !important;
        }
    }
</style>
