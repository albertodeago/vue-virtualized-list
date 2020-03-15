<template>
  <div id="app">
    <div class="list-container">
      <virtualized-list :items="list" :item-height="itemH">
        <template v-slot="provided">
          <div class="item">
            static text - {{ provided.content }}
          </div>
        </template>
      </virtualized-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const fillArrayWithNumbers = n => Array.apply(null, Array(n)).map((x, i) => i);

    return {
      list: fillArrayWithNumbers(15000).map(i => ({id: i, content: "content-" + i})),
      itemH: 25
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
}

.list-container {
  height: 500px;
}
</style>