<template>
    <div>
      <h1>Test</h1>
      <br/>
      <authentication-form />
      <br/>
      <product-form />
      <br/>
      <product-list />
      <br/>
    </div>
  </template>
  
  <script>
  import ProductForm from '@/components/ProductForm.vue'
  import ProductList from '@/components/ProductList.vue'
  import AuthenticationForm from '@/components/AuthenticationForm.vue'
  export default {
    name: 'Test',
    components: { ProductList, ProductForm, AuthenticationForm }
  }
  </script>