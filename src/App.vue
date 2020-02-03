<template>
  <div id="app">
    <virtualized-list :items="list"></virtualized-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1,2,3,4,5]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>