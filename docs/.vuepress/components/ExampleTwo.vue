<template>
    <div style="height: 350px; text-align: center">
      <virtualized-list :items="list" :item-height="itemH">
        <template v-slot="provided">
          <div class="item">
            <span class="item__avatar">{{ provided.avatar }}</span>
            <span class="item__name">{{ provided.name }}</span>
          </div>
        </template>
      </virtualized-list>
    </div>
</template>

<script>
import VirtualizedList from "../../../src"

export default {
    name: "ExampleTwo",
    components: {
      "virtualized-list": VirtualizedList
    },
    data() {
        const fillArrayWithNumbers = n => Array.apply(null, Array(n)).map((x, i) => i);
        const createRandomStr = () => Math.random().toString(36).slice(-2)
        return {
            list: fillArrayWithNumbers(10000).map(i => ({
              id: i, 
              avatar: createRandomStr(), 
              name: "User " + i
            })),
            itemH: 50
        }
    }
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.item:hover {
  background-color: #eee;
}
.item__avatar {
  flex-basis: 36px;
  flex-grow: 0;
  height: 36px;
  background-color: #ccc;
  border-radius: 50%;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.item__name {
  flex-grow: 1;
  font-size: 
}
</style>