<template>
  <div class="book-table-wrapper">
    <div class="book-table">
      <h3 class="book-table-title">Book table</h3>
    </div>
    <div class="table-row">
      <div class="table-cell">
        Title:
      </div>
      <div class="table-cell">
        Author:
      </div>
      <div class="table-cell">
        <button class="delete-btn red-ripple">
          <i class="material-icons">
            delete
          </i>
        </button>
      </div>
    </div>
    <div class="add-book blue-ripple">
      <i class="material-icons">
        add
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookTable',
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
}

.table-cell {
  padding: 1em;
  border-right: 1px solid lightgray;

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
