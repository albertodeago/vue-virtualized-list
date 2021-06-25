# vue-virtualized-list

A virtual list. Useful when you need to show large amount of data.
It only render the DOM elements it needs.
It has less functionality compared to other virtual list libraries but it's **under 5kb** before gzip

[![Netlify Status](https://api.netlify.com/api/v1/badges/2e0807f3-0bda-4804-94ec-b63aef0e4834/deploy-status)](https://app.netlify.com/sites/vue-virtualized-list/deploys)

[Demo and Documentation](https://vue-virtualized-list.netlify.com)


## Getting started

To install the package in your application just type
```
npm install vue-virtualized-list
```

Then, to install as a global component
``` javascript
import Vue from "vue";
import VirtualizedList from "vue-virtualized-list";

Vue.component("virtualized-list", VirtualizedList)
```

Or you can register locally in one of your components as follows
``` javascript
import VirtualizedList from "vue-virtualized-list";

export default {
    name: "AmazingComponent",
    props: [myprop],
    components: {
        "virtualized-list": VirtualizedList
    }
}
```

Using it
``` html
<virtualized-list :items="list" :item-height="itemH">
    <template v-slot="{ item, index}">
        <div class="my-item-class">
           #{{ index }} {{item.id}}: {{ item.content }}
        </div>
    </template>
</virtualized-list>
```
``` javascript
export default {
  data() {
    // create an long array
    const fillArrayWithNumbers = n => Array.apply(null, Array(n)).map((x, i) => i);

    return {
      list: fillArrayWithNumbers(15000).map(i => ({id: i, content: "content-" + i})),
      itemH: 25
    }
  }
}
```


## Parameters and events

#### Props

| Name                | Type   | Mandatory | Example           | Default value                  | Description                     |
|---------------------|--------|-----------|-------------------|--------------------------------|--------------------------------|
| items               | Array  | true      |    -              |       -                        | The list of items               |
| itemHeight          | Number | true      | 100               |       -                        | The height of each item (in px) |
| outerContainerEl    | String | false     | "div"             |     "div"                      | The type of the outer element (no matter the element, some css properties are necessary, e.g. `display: block`)  |
| outerContainerClass | String | false     | "my-class"        | "vue-virtualized-list"         | Class of the outer element      |
| innerContainerEl    | String | false     | "div"             |     "div"                      | The type of the inner element, the scrollable one (no matter the element, some css properties are necessary, e.g. `display: block` and `position: relative`) |
| innerContainerClass | String | false     | "my-class__inner" | "vue-virtualized-list__scroll" | Class of the inner element      |
| bench               | Number | false     | 10                |       5                        | The number of non-visible items to render before the first visible and after the last (if a user scrolls very fast without bench items there might be a short amount of time where not items are rendered. Increasing the bench will decrease this *issue* but it also increases the rendering cost. Most of the time leaving the default value works just fine) |
|                     |        |           |                   |                                |                                 |

#### Events

It does not emit any event


## API

| Name    | parameters | return value | Description                     |
|---------|------------|--------------|---------------------------------|
| update  | none       | undefined    | Tells the component to recalculate the visible items. This can be useful in certain cases, for example if you change the height of the container |
| scrollTo  | index (Number)       | undefined    | Scroll to the given index |


## Changelog

### 1.1.0

#### New features
 - Add new API `scrollTo(index)`

### 1.0.0

#### New features
 - Index is passed to slot scope
#### Breaking change
 - Migrating from 0.1.0: replace `provided` by `provided.item` or replace `v-slot="provided"` by `v-slot="{ item }"` then use `item`

### 0.1.0

#### New features
 - Add `bench` prop
 - Add `update` api

### 0.0.3
 - Initial release


## Contributing

##### Project setup
```bash
npm install
```
##### Compiles and hot-reloads for development
```bash
npm run dev
```
##### Compiles and minifies for production
```bash
npm run build
```
Documentation is done using vuepress.
##### Compiles and watch docs
```bash
npm run docs:dev
```
##### Compiles and bundle documentation
```bash
npm run docs:build
```
##### Run all the tests
```bash
npm run test
```
###### Run unit tests
```bash
npm run test:unit
```
Or you can run them in watch mode
```bash
npm run test:unit:w
```
###### Run end-to-end tests
```bash
npm run test:e2e
```
Or you can run them in watch mode with amazing cypress experience
```bash
npm run test:e2e:w
```
##### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Author and License

[Alberto De Agostini](https://twitter.com/albertodeago88)

Licensed under MIT 
