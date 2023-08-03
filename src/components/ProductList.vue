<template>
  <div>
    <h3>Products</h3>
    <button @click="loadAllProduct">Search</button>
    <table v-if="!isBusy">
      <tr v-for="(product, idx) in products" :key="idx">
        <td>{{ product.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import ProductService from '@/services/product.js'
import { Product } from '../dto/Product'
export default {
  name: 'ProductList',
  props: {
    search: {
      type: Object,
      default: {
        id: 'id',
        value: null
      }
    }
  },
  data: () => ({
    products: [],
    isBusy: false
  }),
  methods: {
    loadAllProduct: function () {
      this.isBusy = true
      ProductService.getProducts()
        .then(response => {
          if (response.status === 200) {
            console.debug(`Get products success: ${response.status}`)
            return response.json()
          }
          throw Error(response)
        })
        .then(productsJson => {
          console.groupCollapsed('Products loading...')
          this.products.splice(0, this.products.length)
          const products = Product.ofList(productsJson)
          this.products.push(...products)
          console.debug('Products loaded')
          console.groupEnd();
        })
        .catch(error => this.$emit('api:error', error))
        .finally(() => { this.isBusy = false })
    }
  }
}
</script>
