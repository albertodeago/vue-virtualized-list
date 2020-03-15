<template>
    <div style="height: 300px; text-align: center">
      <virtualized-list :items="list" :item-height="itemH">
        <template v-slot="provided">
          <div class="item">
            I'm item number {{ provided.id }}
          </div>
        </template>
      </virtualized-list>
    </div>
</template>

<script>
import VirtualizedList from "../../../src"

export default {
    name: "ExampleOne",
    components: {
      "virtualized-list": VirtualizedList
    },
    data() {
        const fillArrayWithNumbers = n => Array.apply(null, Array(n)).map((x, i) => i);
        return {
            list: fillArrayWithNumbers(10000).map(i => ({id: i, content: "content-" + i})),
            itemH: 25
        }
    }
}
</script>