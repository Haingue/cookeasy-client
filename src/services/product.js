
const PRODUCT_API = 'http://localhost:8086'

import { useStore } from 'vuex'

export default {
    store: useStore(),

    getProducts: function () {
        return fetch(`${PRODUCT_API}/service/product`, {
            method: "GET",
            headers: {
                'Authorization': store.state.jwt.access_token
            }
        })
    },

    getProduct: function (id) {
        return fetch(`${PRODUCT_API}/service/product?id=${id}`, {
            method: "GET",
            headers: {
                'Authorization': store.state.jwt.access_token
            }
        })
    }
}