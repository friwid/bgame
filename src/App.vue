<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

  <footer></footer>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
