
const KEYCLOAK_URL = 'http://localhost:8090'
const REALM = 'cookeasy'
const CLIENT_ID = 'product-client'
const GRANT_TYPE = 'password'

import { useStore } from 'vuex'

export default {
    store: useStore(),

    sigin: function (username, password) {
        const formData = new FormData()
        formData.append('client_id', CLIENT_ID)
        formData.append('username', username)
        formData.append('password', password)
        formData.append('grant_type', GRANT_TYPE)
        return fetch(`${KEYCLOAK_URL}/auth/realms/${REALM}/protocol/openid-connect/token`, {
            method: "POST",
            body: formData
        })
    },

    signout: function (username, password) {
        return fetch(`${KEYCLOAK_URL}/auth/realms/${REALM}/protocol/openid-connect/logout`, {
            method: "GET",
            header: {
                'Authorization': store.state.jwt
            }
        })
    }
}