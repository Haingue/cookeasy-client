<template>
  <form @submit="saveProduct">
    <input v-model="name" type="text" maxlength="64" />
    <input v-model="descripton" type="text" maxlength="64" />
    <input v-model="nutritionalScore" type="number" min=0 max=5 step=0.5 />
    <button type="button">Submit</button>
  </form>
</template>

<script>
import { Product } from '../dto/Product'
export default {
  name: 'ProductForm',
  props: {
    productId: String
  },
  data: () => ({
    name: null,
    descripton: null,
    nutritionalScore: null,
    type: null,
    category: null,
    allergens: [],
    isBusy: false
  }),
  methods: {
    saveProduct: async function () {
      this.isBusy = true
      const product = new Product({
        name: this.name,
        descripton: this.descripton,
        nutritionalScore: this.nutritionalScore,
        type: this.type,
        category: this.category,
        allergens: this.allergens
      })
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.debug(`Save product: ${this.name}`, product)
      this.isBusy = false
    }
  }
}
</script>
