# vue-virtualized-list

A virtual list (or virtual scroll) is a component to handle a large number of data to display without having terrible performance.  
It achieve this goal by render only the needed one.  
This component has less functionality compared to other virtual list libraries but it's **under 5kb** before gzip

[![Netlify Status](https://api.netlify.com/api/v1/badges/2e0807f3-0bda-4804-94ec-b63aef0e4834/deploy-status)](https://app.netlify.com/sites/vue-virtualized-list/deploys)

[Documetantion](https://vue-virtualized-list.netlify.com)

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
    props: [myprop],
    components: {
        "virtualized-list": VirtualizedList
    }
}
```

#### Example

<example-one></example-one>


## Props

| Name                | Type   | Mandatory | Example           | Default value                  | Description                     |
|---------------------|--------|-----------|-------------------|--------------------------------|--------------------------------|
| items               | Array  | true      |    -              |       -                        | The list of items               |
| itemHeight          | Number | true      | 100               |       -                        | The height of each item (in px) |
| outerContainerEl    | String | false     | "div"             |     "div"                      | The type of the outer element (no matter the element, some css properties are necessary, e.g. `display: block`)  |
| outerContainerClass | String | false     | "my-class"        | "vue-virtualized-list"         | Class of the outer element      |
| innerContainerEl    | String | false     | "div"             |     "div"                      | The type of the inner element, the scrollable one (no matter the element, some css properties are necessary, e.g. `display: block` and `position: relative`) |
| innerContainerClass | String | false     | "my-class__inner" | "vue-virtualized-list__scroll" | Class of the inner element      |
|                     |        |           |                   |                                |                                 |

## Events

It does not emit any event

## Examples

```
<virtualized-list :items="items" :itemHeight="50"></virtualized-list>
```

<example-two></example-two>


## Repository

[Github](https://github.com/albertodeago/vue-virtualized-list)
