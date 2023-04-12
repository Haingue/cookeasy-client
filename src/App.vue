<script setup>
</script>

<template>
  <header>
    <h1>Cookeasy</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/test">Test</router-link> |
    <router-link to="/about">About</router-link>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    © Groupun - Cookeasy 2023
  </footer>
</template>

<style scoped>
</style>
