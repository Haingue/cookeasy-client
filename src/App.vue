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

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductForm from './components/ProductForm.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
