<script setup>
const now = Date.now();
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr />
    <p class="f">Also, fuck you! &#128405;</p>
    <p>You should not have seen this page!
      <span>It is now {{ now }} milliseconds from 1 January, 1970.</span>
    </p>
    <p class="useless">Another useless day.</p>
  </div>
</template>


<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: right;
  }
}

.about p:last-of-type {
  margin-bottom: 4em;
}

h1 {
  display: block;
  font-weight: 600;
}

p.f {
  color: red;
  font-size: large;
}

p.useless {
  color: darkred;
  font-size: 3vh;
  font-weight: 500;
}
</style>
