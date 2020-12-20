export default {
    name: "VirtualizedList",

    props: {

        /**
         * The type of element of the outer container
         */
        outerContainerEl: {
            type: String,
            default: "div"
        },

        /**
         * The class of element of the outer container
         */
        outerContainerClass: {
            type: String,
            default: "vue-virtualized-list__scroll"
        },

        /**
         * The type of element of the inner container
         */
        innerContainerEl: {
            type: String,
            default: "div"
        },

        /**
         * The class of element of the inner container
         */
        innerContainerClass: {
            type: String,
            default: "vue-virtualized-list"
        },

        items: {
            type: Array,
            required: true
        },
        itemHeight: {
            type: Number,
            required: true
        },

        /**
         * Indicates the amount of elements not visible to render. They are kind of useful 
         * if the user scrolls very fast or in similar cases.
         * In my tests 5 seems to be ideal most of the times 
         */
        bench: {
            type: Number,
            default: 5
        }
    },

    data() {
        return {
            firstItemToRender: null, // index of the first item to render
            lastItemToRender: null, // index of the last item to render
            scrollTop: 0 // current scrolltop offset of the scrollable container
        }
    },

    computed: {
        firstToRender() {
            return Math.max(0, this.firstItemToRender - this.bench);
        },

        lastToRender() {
            return Math.min(this.items.length, this.lastItemToRender + this.bench);
        }
    },

    watch: {
        /**
         * If the height of the items changes we need to recalculate the visible items and
         * re-render if needed
         */
        itemHeight() {
            this.update();
        }
    },

    /**
     * Setup the initial state and attach the scroll listener
     */
    mounted() {
        this.firstItemToRender = 0;
        this.lastItemToRender = Math.floor(this.$el.clientHeight / this.itemHeight);
        
        this.$el.addEventListener("scroll", this.onScroll, false)
    },

    methods: {

        /**
         * Triggers an update.
         * Fake a scroll to recalculate the visible items
         */
        update() {
            this.$nextTick(() => {
                this.onScroll({
                    target: {
                        scrollTop: this.scrollTop
                    }
                });
            })
        },

        /**
         * @param evt - the scroll event 
         */
        onScroll(evt) {
            this.scrollTop = evt.target.scrollTop;
            this.firstItemToRender = Math.floor(this.scrollTop / this.itemHeight);
            this.lastItemToRender = this.firstItemToRender + Math.ceil(this.$el.clientHeight / this.itemHeight);
        },

        /**
         * Return the VNode of the elements to render
         * @param {Function} h - Vue render function 
         */
        getRenderedItems(h) {
            let toRender = this.items.slice(this.firstToRender, this.lastToRender);
            return toRender.map((item, i) => h("div", {
                style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: (this.firstToRender + i) * this.itemHeight + "px"
                }
            }, this.$scopedSlots.default(item)));
        }
    },

    render(h) {
        const list = this.getRenderedItems(h);
        const renderScroll = h(this.innerContainerEl, {
            class: this.innerContainerClass,
            style: Object.assign({
                display: "block",
                height: this.items.length * this.itemHeight + "px"
            })
        }, list);
        const renderList = h(this.outerContainerEl, {
            class: this.outerContainerClass,
            style: {
                height: "100%",
                overflow: "auto",
                position: "relative",
                display: "block"
            }
        }, [renderScroll]);
        return renderList;
    }
}