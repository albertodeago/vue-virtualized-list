<template>
    <div class="vue-virtualized-list" @scroll="onScroll">
        <div class="vue-virtualized-list__container" :style="{height: itemHeight * items.length + 'px'}">
            <div class="vue-virtualized-list__item" 
                 v-for="(item, index) in items" :key="index"
                 :style="{top: (itemHeight * index + 'px'), height: (itemHeight + 'px')}"
            >
                <div class="vue-virtualized-list__item__content" v-if="index >= firstToRender && index <= lastToRender">
                    <slot v-bind="item"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VirtualizedList",

    props: {
        items: {
            type: Array,
            required: true
        },
        itemHeight: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            firstItemToRender: null, // index of the first item to render
            lastItemToRender: null, // index of the last item to render
            benchBefore: 15, // amount of items to render before the first
            benchAfter: 15, // amount of items to render after the last
            scrollTop: 0 // current scrolltop offset of the scrollable container
        }
    },

    computed: {
        firstToRender() {
            return Math.max(0, this.firstItemToRender - this.benchBefore);
        },

        lastToRender() {
            return Math.min(this.items.length, this.lastItemToRender + this.benchAfter);
        }
    },

    mounted() {
        this.firstItemToRender = 0;
        this.lastItemToRender = Math.floor(this.$el.clientHeight / this.itemHeight);
        console.log("mounted", this.firstItemToRender, this.lastItemToRender);
    },

    methods: {
        onScroll(evt) {
            this.scrollTop = evt.target.scrollTop;
            this.firstItemToRender = Math.floor(this.scrollTop / this.itemHeight);
            this.lastItemToRender = this.firstItemToRender + Math.ceil(this.$el.clientHeight / this.itemHeight);
            console.log("scroll", this.firstItemToRender, this.lastItemToRender);
        }
    }
}
</script>

<style>
.vue-virtualized-list {
    height: 100%;
    overflow-y: auto;
    border: 1px solid green;
}
.vue-virtualized-list__container {
    height: auto;
    position: relative;
}
.vue-virtualized-list__item {
    position: absolute;
}
</style>