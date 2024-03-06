# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
<hr>

# INSTALL PINIA
```bash
npm install pinia
```

# IMPORT PINIA (*main.js*)
```js
import { createApp } from 'vue'

// 1 IMPORT PINIA
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

// 2 USE PINIA
createApp(App).use(createPinia()).mount('#app')
```

# DEFINE THE STORE (*store/counter.js*)
```js
import { defineStore } from "pinia";

// 3 DEFINE STORE
export const useCounterStore = defineStore("counter", {

    // INITIAL STATE
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {

            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
});
```

# IMPORT AND SETUP THE STORE IN THE COMPONENT
```js
<script>

// 4 IMPORT mapSTores
import { mapStores } from "pinia";

// 5 IMPORT THE STORE WE NEED
import { useCounterStore } from '../store/counter';

export default {
    name: "HelloWorld",

    props: {
        msg: String,
    },

    data() {
        return {
            // 6 WE ASSIGN THE STORE TO A PROPERTY
            counter: useCounterStore()
        }

    },

    computed: {
        // 7 WE MAP THE STORE PROPERTIES
        ...mapStores(useCounterStore)
    },

    methods: {
        // 8 WE RECALL THE STORE ACTIONS
        incrementHandler() {
            this.counterStore.increment()
        },

        decrementHandler() {
            this.counterStore.decrement()
        },

    },

}
</script>
```

## RECALL STORE STATE, ACTIONS OR GETTERS IN THE COMPONENT:
```html
<h2>Count (State) is: {{ counter.count }}</h2>

<h2>Double Count (Getter): {{ counter.doubleCount }}</h2>

<button @click="incrementHandler()" class="btn base-primary">
        Increment (Action)
</button>

<button @click="decrementHandler()" class="btn base-primary">
    Decrement (Action)
</button>
```
