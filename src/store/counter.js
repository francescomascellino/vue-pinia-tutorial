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