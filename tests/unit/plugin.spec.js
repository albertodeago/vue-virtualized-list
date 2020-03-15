import { shallowMount, createLocalVue } from '@vue/test-utils'
import VirtualizedList from '../../src/index'


const defaultCreateSlot = function(props) {
  return this.$createElement("div", {class: "item"}, props)
};
const defaultProps = {
  items: [1,2,3],
  itemHeight: 25
};
let wrapper;
const createWrapper = ({props = defaultProps, createSlot = defaultCreateSlot}) => {
  const localVue = createLocalVue()
  localVue.use(VirtualizedList)
  wrapper = shallowMount(VirtualizedList, {
    localVue,
    propsData: props,
    scopedSlots: {
      default: function(props) {
        return createSlot.call(this, props)
      }
    }
  });
  return wrapper;
};


describe('VirtualizedList', () => {
  it('should render the inner and outer containers', () => {  
    wrapper = createWrapper({});
    expect(wrapper.contains(".vue-virtualized-list__scroll")).toBe(true)
    expect(wrapper.contains(".vue-virtualized-list")).toBe(true)
  });

  it("should render outer element with specified class", () => {
    wrapper = createWrapper({props: {
      items: [1,2,3],
      itemHeight: 25,
      outerContainerClass: "outer-class"
    }});
    expect(wrapper.contains(".outer-class")).toBe(true);
  });

  it("should render outer element with specified tag element", () => {
    wrapper = createWrapper({props: {
      items: [1,2,3],
      itemHeight: 25,
      outerContainerEl: "span"
    }});
    expect(wrapper.contains("span.vue-virtualized-list__scroll")).toBe(true);
  });

  it("should render inner element with specified class", () => {
    wrapper = createWrapper({props: {
      items: [1,2,3],
      itemHeight: 25,
      innerContainerClass: "inner-class"
    }});
    expect(wrapper.contains("div.inner-class")).toBe(true);
  });

  it("should render inner element with specified tag element", () => {
    wrapper = createWrapper({props: {
      items: [1,2,3],
      itemHeight: 25,
      innerContainerEl: "span"
    }});
    expect(wrapper.contains("span.vue-virtualized-list")).toBe(true);
  });

  it("should render the list items", () => {
    wrapper = createWrapper({})
    // const innerWrapper = wrapper.find(".vue-virtualized-list")
    const itemsWrapper = wrapper.findAll(".item");
    expect(itemsWrapper.length).toBe(3)
  })

  it("should prove scoped slot the cycled element", () => {
    const items = [{id: "id-1", content: "c-1"},{id: "id-2", content: "c-2"},{id: "id-3", content: "c-3"},{id: "id-4", content: "c-4"},{id: "id-5", content: "c-5"}]
    wrapper = createWrapper({props: {
      items: items,
      itemHeight: 50,
      innerContainerEl: "ul"
    }, createSlot: function(props) {
      return this.$createElement("li", {attrs: {id: props.id}, class: "item"}, props.content)
    }});
    // const innerWrapper = wrapper.find(".vue-virtualized-list")
    // console.log(innerWrapper.html())
    
    items.forEach(item => {
      expect(wrapper.contains(`#${item.id}.item`)).toBe(true)
    })
  })
})