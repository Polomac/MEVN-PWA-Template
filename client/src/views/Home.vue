<template>
  <div class="home">
    <top msg="MEVN PWA Template"/>
    <book-table></book-table>
  </div>
</template>

<script>
// @ is an alias to /src
import top from '@/components/Header.vue';
import bookTable from '@/components/BookTable.vue';

export default {
  name: 'home',
  components: {
    top,
    bookTable,
  },
};
</script>
