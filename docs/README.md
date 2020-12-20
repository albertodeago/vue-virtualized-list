# vue-virtualized-list

A virtual list (or virtual scroll) is a component to handle a large number of data to display without having terrible performance.  
It achieve this goal by render only the needed one.  
This component has less functionality compared to other virtual list libraries but it's **under 5kb** before gzip


## Getting started

To install the package in your application
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
    components: {
        "virtualized-list": VirtualizedList
    },
    props: [myprop]
}
```


#### Example

<example-one></example-one>


## Props

| Name                | Type   | Mandatory | Example           | Default value                  | Description                     |
|---------------------|--------|-----------|-------------------|--------------------------------|---------------------------------|
| items               | Array  | true      |    -              |       -                        | The list of items               |
| itemHeight          | Number | true      | 100               |       -                        | The height of each item (in px) |
| outerContainerEl    | String | false     | "div"             |     "div"                      | The type of the outer element (no matter the element, some css properties are necessary, e.g. `display: block`)  |
| outerContainerClass | String | false     | "my-class"        | "vue-virtualized-list"         | Class of the outer element      |
| innerContainerEl    | String | false     | "div"             |     "div"                      | The type of the inner element, the scrollable one (no matter the element, some css properties are necessary, e.g. `display: block` and `position: relative`) |
| innerContainerClass | String | false     | "my-class__inner" | "vue-virtualized-list__scroll" | Class of the inner element      |
| bench               | Number | false     | 10                |       5                        | The number of non-visible items to render before the first visible and after the last (if a user scrolls very fast without bench items there might be a short amount of time where not items are rendered. Increasing the bench will decrease this *issue* but it also increases the rendering cost. Most of the time leaving the default value works just fine) |


## Events

It does not emit any event


## API

| Name    | parameters | return value | Description                     |
|---------|------------|--------------|---------------------------------|
| update  | none       | undefined    | Tells the component to recalculate the visible items. This can be useful in certain cases, for example if you change the height of the container |


### Examples

```
<virtualized-list :items="items" :itemHeight="50"></virtualized-list>
```
<example-two></example-two>


## Changelog

### 0.1.0

#### New features
 - Add `bench` prop
 - Add `update` api

### 0.0.3
 - Initial release


## Repository

[Github](https://github.com/albertodeago/vue-virtualized-list)
