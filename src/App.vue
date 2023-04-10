<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ProductForm from './components/ProductForm.vue'
</script>

<template>
  <header>
    header
  </header>
  <main>
    Main
    <br/>
    <product-form />
    <br/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </main>
  <footer>
    footer
  </footer>
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
