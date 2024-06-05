<script setup>

import { onMounted, ref } from 'vue';
import { setInterval, clearInterval } from 'node:timers';

const name = ref('Unspecified user');
const removed = ref(false);
const seconds = ref(0);
const firstMillisecond = Date.now();

function incrementSeconds() {
    const now = Date.now();
    let difference = now - firstMillisecond;
    difference /= 1000;
    seconds.value = Math.floor(difference);
}

let inter = setInterval(incrementSeconds, 1000);

function manipulateInterval(interval) {
    if (interval) {
        clearInterval(interval);
        return;
    } else {
        interval = setInterval(incrementSeconds, 1000);
        return;
    }
}

</script>

<template>
    <main>
        <div v-show="!removed">
            <h2 id="hello">{{ name }}!</h2>
            <input type="text" v-model="name" placeholder="Write your name here." />
            <h3>It is now {{ seconds }} {{ seconds === 1 ? 'second' : 'seconds' }}.</h3>
        </div>
        <button @click="removed = !removed">{{ removed ? "Display Introduction!" : "Hide Introduction!" }}</button>
        <!-- <button @click="manipulateInterval(inter)">Stop Updating date</button> -->
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h2 {
    margin-bottom: 40px;
    color: "#0F5712"
}

input[type="text"] {
    background-color: rgb(12, 183, 196, 50);
    color: black;
}

button {
    display: block;
    font-size: 3vh;
    margin: 15px;
}
</style>