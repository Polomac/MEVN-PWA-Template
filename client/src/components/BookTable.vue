<template>
  <div class="book-table-wrapper">
    <div class="book-table">
      <h3 class="book-table-title">Book table</h3>
    </div>
    <div class="table-row"
         v-for="book in books"
         :key="book.id">
      <div class="table-cell">
        Title: {{book.title}}
      </div>
      <div class="table-cell">
        Author: {{book.author}}
      </div>
      <div class="table-cell">
        <button class="delete-btn red-ripple">
          <i class="material-icons">
            delete
          </i>
        </button>
      </div>
    </div>
    <div class="add-book blue-ripple"
         @click="showAddModal">
      <i class="material-icons">
        add
      </i>
    </div>
    <add-book ::isModalOpen.sync="isModalOpen"></add-book>
  </div>
</template>

<script>
import Api from '../api/index';
import addBook from './AddBook.vue';

export default {
  name: 'BookTable',
  components: {
    addBook,
  },
  data() {
    return {
      books: [],
      isModalOpen: false,
    };
  },
  methods: {
    async getPosts() {
      const response = await Api.getBooks();
      this.books = response.data;
    },
    showAddModal() {
      this.isModalOpen = true;
      this.$modal.show('AddBook');
    },
  },
  mounted() {
    this.getPosts();
  },
  updated() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/theme';

.book-table-wrapper {
  padding: 0 0.5em;
  @include mQMin(460px) {
    padding: 0 1em;
  }
  @include mQMin(768px) {
    padding: 0 10%;
  }
  @include mQMin(1280px) {
    padding: 0 15%;
  }
}

.book-table {
}

.book-table-title {
  text-align: left;
}

.table-row {
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 0.5em;
}

.table-cell {
  padding: 1em;
  border-right: 1px solid lightgray;
  width: 30%;
  text-align: left;

  &:last-child {
    border-right: none;
    flex-grow: 2;
    text-align: right;
  }
}

.delete-btn {
  background: $accent;
  margin: 0;
  padding: 0;
  padding: 0.5em;
}

.add-book {
  color: $text-inverted;
  background: $defBlue;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  padding: 0.5em;
  cursor: pointer;
  position: fixed;
  top: 30%;
  right: 0.5em;

  @include mQMin(460px) {
    right: 1em;
  }

  @include mQMin(768px) {
    right: calc(10% - 1.5em);
  }

  @include mQMin(1280px) {
    right: calc(15% - 1.5em);
  }

  i {
    font-size: 2em;
  }

}

</style>
