<template>
<modal  name="EditBook"
        @before-open="beforeOpen"
        height="auto"
        scrollable>
  <div class="add-book-wrapper">
    <h3 class="modal-title">
      <span>Edit book</span>
      <i class="material-icons close-modal"
         @click="hideEditModal">
        close
      </i>
    </h3>
    <div class="add-book-form clearfix">
      <label for="Title"
             class="field-label">
        Title
      </label>
      <input type="text"
             v-model="book.title"
             required
             class="book-input"
             name="Title"
             placeholder="book.title"
             v-validate="'required'">
      <span class="validate-message">{{errors.first('Title')}}</span>
      <label for="Author"
             class="field-label">
        Author
      </label>
      <input type="text"
             v-model="book.author"
             required
             class="book-input"
             name="Author"
             placeholder="book.author"
             v-validate="'required'">
      <span class="validate-message">{{errors.first('Author')}}</span>
      <button class="add-btn green-ripple clearfix"
              :class="{ 'disabled':hasError }"
              @click="updateBook"
              :disabled="hasError">
        <i class="material-icons">
          add
        </i>
        Update
      </button>
    </div>
  </div>
</modal>
</template>

<script>
import Api from '../api/index';

export default {
  name: 'EditBook',
  data() {
    return {
      book: {},
    };
  },
  computed: {
    hasError() {
      if (this.errors.has('Title') || this.errors.has('Author') || !this.book.title || !this.book.author) {
        return true;
      // eslint-disable-next-line
      } else {
        return false;
      }
    },
  },
  methods: {
    beforeOpen(event) {
      this.book = Object.assign({}, event.params.book);
    },
    hideEditModal() {
      this.$modal.hide('EditBook');
    },
    updateBook() {
      this.hideEditModal();
      console.log(this.book);
      return Api.updateBook(this.book);
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
  transition: all 0.5s linear;
  color: $text;
}

.add-btn {
  background: $bright;
  margin: 0.5em 0.5em 0 0;
  padding: 0;
  padding: 0.5em;
  color: $text-inverted;
  min-width: 7em;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 0.875em;
  font-weight: 600;
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
