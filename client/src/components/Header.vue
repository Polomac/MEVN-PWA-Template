<template>
  <div class="header-wrapper">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/theme';

.header-wrapper {
  display: flex;
  background: $defBlue;
  padding: 0 1em;
  box-shadow: 0 0 4px rgba(0, 0, 0,0.4);
}

h1 {
  color: $text-inverted;
}
</style>
