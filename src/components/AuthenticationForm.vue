<template>
  <form>
    <input v-model="username" type="text" maxlength="64" />
    <input v-model="password" type="password" maxlength="64" />
    <button type="button" @click="saveProduct">Submit</button>
  </form>
  <p v-if=result>
    Result: {{ result }}
  </p>
</template>

<script>
import Authentication from '@/services/authentication.js'
export default {
  name: 'AuthenticationForm',
  data: () => ({
    username: 'pierre.dupont@test.com',
    password: 'azerty',
    result: null,
    isBusy: false
  }),
  methods: {
    saveProduct: async function () {
      this.isBusy = true
      Authentication.sigin(this.username, this.password)
        .then(response => {
          if (response.status === 200) {
            console.debug(`Sigin success: ${response.status}`)
            return response.json()
          }
          throw Error(response)
        })
        .then(jwt => {
          this.$store.commit('SET_JWT', jwt)
          this.result = jwt
        })
        .catch(error => this.$emit('api:error', error))
        .finally(() => { this.isBusy = false })
    }
  }
}
</script>
