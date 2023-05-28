<template>
  <div v-if=result>
    <span v-for="(product, idx) in products" :key="idx">{{ product }}</span>
  </div>
</template>

<script>
import ProductService from '@/services/product.js'
export default {
  name: 'ProductList',
  data: () => ({
    products: [],
    isBusy: false
  }),
  methods: {
    saveProduct: async function () {
      this.isBusy = true
      ProductService.getProducts()
        .then(response => {
          if (response.status === 200) {
            console.debug(`Get products success: ${response.status}`)
            return response.json()
          }
          throw Error(response)
        })
        .then(products => {
          this.products.splice(0, this.products.length)
          this.products.push(...products)
        })
        .catch(error => this.$emit('api:error', error))
        .finally(() => { this.isBusy = false })
    }
  }
}
</script>
