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
      <label for="Title"
             class="field-label"
             :class="{ 'set-label': setLabelVisible==='title' && book.title }">Title</label>
      <input type="text"
             v-model="book.title"
             required
             class="book-input"
             name="Title"
             placeholder="Title"
             v-validate="'required'"
             @input="setLabel('title')">
      <span class="validate-message">{{errors.first('Title')}}</span>
      <label for="Author"
             class="field-label"
             :class="{ 'set-label': setLabelVisible==='author' && book.author }">Author</label>
      <input type="text"
             v-model="book.author"
             required
             class="book-input"
             name="Author"
             placeholder="Author"
             v-validate="'required'"
             @click="setLabel('author')">
      <span class="validate-message">{{errors.first('Author')}}</span>
      <button class="add-btn green-ripple clearfix"
              :class="{ 'disabled':hasError }"
              @click="addBook"
              :disabled="hasError">
        <i class="material-icons">
          add
        </i>
        Add
      </button>
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
      setLabelVisible: null,
    };
  },
  computed: {
    hasError() {
      console.log(this.book);
      if (this.errors.has('Title') || this.errors.has('Author') || !this.book.title || !this.book.author) {
        return true;
      // eslint-disable-next-line
      } else {
        return false;
      }
    },
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
    setLabel(param) {
      this.setLabelVisible = param;
    },
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

.validate-message {
  color: $accent;
  font-weight: 700;
  font-size: 0.675em;
  margin: -1em 0 2em 1em;
  display: block;
}

.disabled {
  background: gray !important;
}

.field-label {
  font-weight: 700;
  color: transparent;
  transform: translateY(-10px);
  transition: all 0.5s linear;

  &.set-label {
    transform: translateY(10px);
    color: $text;
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
