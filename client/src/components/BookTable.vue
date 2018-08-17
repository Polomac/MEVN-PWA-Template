<template>
  <div class="book-table-wrapper">
    <div class="message"
         v-if="statusMessage"
         :class="{ 'success': statusMessage.status, 'fail': !statusMessage.status,  }">
      <span>{{statusMessage.text}}</span>
      <i class="material-icons"
         @click="resetMessage">
        close
      </i>
    </div>
    <div class="book-table">
      <h3 class="book-table-title">Book table</h3>
    </div>
    <div class="table-row"
         v-for="book in books"
         :key="book.id">
      <div class="table-cell">
        <span class="cell-title">Title: </span>{{book.title}}
      </div>
      <div class="table-cell">
        <span class="cell-title">Author: </span>{{book.author}}
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
  computed: {
    statusMessage() {
      this.getPosts();
      // eslint-disable-next-line
      setTimeout(() => {
        this.$store.commit('RESET_STATUS_MESSAGE');
      }, 3000);
      return this.$store.state.statusMessage;
    },
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
    resetMessage() {
      this.$store.commit('RESET_STATUS_MESSAGE');
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/theme';

.message {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
  color: $text-inverted;
  background: $bright;
  border-radius: 2px;
  padding: 1em;
  display: flex;
  align-items: center;

  i {
    margin: 0 0 0 1em;
    padding: 0;
    cursor: pointer;
  }
}

.fail {
  background: $accent;
}

.success {
  background: $bright;
}

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

.cell-title {
  font-weight: 500;
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
  top: 6em;
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
