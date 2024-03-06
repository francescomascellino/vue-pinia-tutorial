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

<template>
    <h1>{{ msg }}</h1>

    <h2>Count (State) is: {{ counter.count }}</h2>
    <h2>Double Count (Getter): {{ counter.doubleCount }}</h2>

    <div class="card">
        <button @click="incrementHandler()" class="btn base-primary">
            Increment (Action)
        </button>

        <button @click="decrementHandler()" class="btn base-primary">
            Decrement (Action)
        </button>

        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
        starter
    </p>
    <p>
        Install
        <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
