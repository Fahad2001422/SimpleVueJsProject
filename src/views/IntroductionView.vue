<script setup>

import { ref } from 'vue';

const name = ref('Unspecified user');

let what = alertWhat;

function alertWhat() {
    alert("What?!");
}

function alertHow() {
    alert("How?");
}

function invoke() {
    if (what === alertWhat) what = alertHow;
    else if (what === alertHow) what = alertWhat;
}



</script>

<template>
    <main>
        <div>
            <h2 id="hello">Hello, {{ name }}!</h2>
            <input type="text" v-model="name" placeholder="Write your name here." />
        </div>
        <button @click="invoke">Change the alert!</button>
        <button @click="what()">Invoke the alert!</button>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

div {
    display: grid;
    grid-template-areas: "greeting" "input";
}

div>h2 {
    grid-area: greeting;
    margin-bottom: 6.5px;
}

div>input {
    grid-area: input;
    margin-bottom: 6.5px;
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