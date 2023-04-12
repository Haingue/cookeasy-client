<template>
    <div>
      <h1>Test</h1>
      <br/>
      <product-form />
      <br/>
    </div>
  </template>
  
  <script>
  import ProductForm from '@/components/ProductForm.vue'
  export default {
    name: 'Test',
    components: { ProductForm }
  }
  </script>