/*
 * NOTE:
 *   This file is plugin stub for main.js
 */

import Vue from 'vue'
// import VirtualizedList from "./index"
import VirtualizedListRender from "./index"

// Vue.component(VirtualizedList.name, VirtualizedList)
Vue.component(VirtualizedListRender.name, VirtualizedListRender)

/*
 * NOTE:
 *   If you want Vue instance of main.js to import something in your plugin as a Vue option,
 *   you need to export it here.
 */
// export default plugin
