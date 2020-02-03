# Installation

## Direct Download / CDN

https://unpkg.com/vue-virtualized-list/dist/vue-virtualized-list 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-virtualized-list@{{ $version }}/dist/vue-virtualized-list.js
 
Include vue-virtualized-list after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-virtualized-list/dist/vue-virtualized-list.js"></script>
```

## NPM

```sh
$ npm install vue-virtualized-list
```

## Yarn

```sh
$ yarn add vue-virtualized-list
```

When used with a module system, you must explicitly install the `vue-virtualized-list` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-virtualized-list from 'vue-virtualized-list'

Vue.use(vue-virtualized-list)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-virtualized-list` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-virtualized-list.git node_modules/vue-virtualized-list
$ cd node_modules/vue-virtualized-list
$ npm install
$ npm run build
```

