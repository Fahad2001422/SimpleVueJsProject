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

function alertMessage() {
    alert("WHAT THE FUCK ARE YOU DOING DOWN HERE?!")
}

function invoke() {
    if (what === alertWhat) what = alertHow;
    else if (what === alertHow) what = alertMessage;
    else if (what === alertMessage) what = alertWhat;
}



</script>

<template>
    <main>
        <div>
            <h2 id="hello">Hello, {{ name }}!</h2>
            <input type="text" v-model="name" placeholder="Write your name here." />
        </div>
        <div class="buttons">
            <button @click="invoke">Change the alert!</button>
            <button @click="what">Invoke the alert!</button>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

div {
    display: grid;
    grid-template-areas: "greeting" "input";
}

.buttons {
    display: grid;
    grid-template-areas: "Change Invoke";
}

#hello {
    grid-area: greeting;
    margin-bottom: 6.5px;
    background-color: "#96D498";
}

#hello:hover {
    background-color: "#888B67";
    transition-property: background-color;
    transition-duration: 4s;
    transition-timing-function: ease-out;
}

div>input {
    grid-area: input;
    margin-bottom: 6.5px;
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