<template>
  <div id="app">
    <div class="props">
      <div class="options">
        <label>
          Container height
          <input type="text" id="listHeight" v-model="listHeight" />
        </label>
        <label>
          Item height
          <input type="text" id="itemHeight" v-model.number="itemH" />
        </label>
        <label
          >Bench
          <input type="text" id="bench" v-model.number="bench" />
        </label>
        <input
          type="button"
          @click="$refs.vlist.scrollTo(100)"
          value="Scroll to index 100"
        />
      </div>
    </div>
    <div>
      <div class="list-container" :style="{ height: listH }">
        <virtualized-list
          :items="list"
          :item-height="itemH"
          :bench="bench"
          ref="vlist"
        >
          <template v-slot="{ item, index }">
            <div class="item">
              static text - #{{ index }} - {{ item.content }}
            </div>
          </template>
        </virtualized-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const fillArrayWithNumbers = (n) =>
      Array.apply(null, Array(n)).map((x, i) => i);

    return {
      list: fillArrayWithNumbers(15000).map((i) => ({
        id: i,
        content: "content-" + i,
      })),
      itemH: 25,
      bench: 5,
      listHeight: 500,
    };
  },
  computed: {
    listH() {
      return this.listHeight + "px";
    },
  },
  watch: {
    listH() {
      this.$refs.vlist.update();
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.list-container {
  margin: auto;
  width: 50%;
  border: black;
  border-width: 1px;
  border-style: dashed;
}
.options {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.5em;
}
.props {
  display: flex;
  margin-bottom: 3em;
}
</style>
