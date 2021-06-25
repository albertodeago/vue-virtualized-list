/*!
 * vue-virtualized-list v1.0.0 
 * (c) 2021 albertodeagostini.dev@gmail.com
 * Released under the MIT License.
 */
var VirtualizedListRender = {
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
  data: function data() {
    return {
      firstItemToRender: null,
      // index of the first item to render
      lastItemToRender: null,
      // index of the last item to render
      scrollTop: 0 // current scrolltop offset of the scrollable container

    };
  },
  computed: {
    firstToRender: function firstToRender() {
      return Math.max(0, this.firstItemToRender - this.bench);
    },
    lastToRender: function lastToRender() {
      return Math.min(this.items.length, this.lastItemToRender + this.bench);
    }
  },
  watch: {
    /**
     * If the height of the items changes we need to recalculate the visible items and
     * re-render if needed
     */
    itemHeight: function itemHeight() {
      this.update();
    }
  },

  /**
   * Setup the initial state and attach the scroll listener
   */
  mounted: function mounted() {
    this.firstItemToRender = 0;
    this.lastItemToRender = Math.floor(this.$el.clientHeight / this.itemHeight);
    this.$el.addEventListener("scroll", this.onScroll, false);
  },
  methods: {
    /**
     * Triggers an update.
     * Fake a scroll to recalculate the visible items
     */
    update: function update() {
      var _this = this;

      this.$nextTick(function () {
        _this.onScroll({
          target: {
            scrollTop: _this.scrollTop
          }
        });
      });
    },

    /**
     * @param evt - the scroll event
     */
    onScroll: function onScroll(evt) {
      this.scrollTop = evt.target.scrollTop;
      this.firstItemToRender = Math.floor(this.scrollTop / this.itemHeight);
      this.lastItemToRender = this.firstItemToRender + Math.ceil(this.$el.clientHeight / this.itemHeight);
    },
    scrollTo: function scrollTo(index) {
      this.firstItemToRender = index;
      this.lastItemToRender = this.firstItemToRender + Math.ceil(this.$el.clientHeight / this.itemHeight);
      this.scrollTop = index * this.itemHeight;
    },

    /**
     * Return the VNode of the elements to render
     * @param {Function} h - Vue render function
     */
    getRenderedItems: function getRenderedItems(h) {
      var _this2 = this;

      var toRender = this.items.slice(this.firstToRender, this.lastToRender);
      return toRender.map(function (item, i) {
        return h("div", {
          style: {
            position: "absolute",
            left: 0,
            right: 0,
            top: (_this2.firstToRender + i) * _this2.itemHeight + "px"
          }
        }, _this2.$scopedSlots.default({
          item: item,
          index: i + _this2.firstToRender
        }));
      });
    }
  },
  render: function render(h) {
    var list = this.getRenderedItems(h);
    var renderScroll = h(this.innerContainerEl, {
      class: this.innerContainerClass,
      style: Object.assign({
        display: "block",
        height: this.items.length * this.itemHeight + "px"
      })
    }, list);
    var renderList = h(this.outerContainerEl, {
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
};

var VirtualizedListRender$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': VirtualizedListRender
});

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var require$$0 = getCjsExportFromNamespace(VirtualizedListRender$1);

var src = require$$0;

export default src;
