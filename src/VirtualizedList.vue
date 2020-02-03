<template>
    <div class="virtualized-list">
        <div class="virtualized-list__container">
            <div class="virtualized-list__item" v-for="item in items">{{ item }}</div>
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
        }
    },

    data() {
        return {

        }
    }
}
</script>

<style>

</style>