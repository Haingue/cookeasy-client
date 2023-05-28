
const KEYCLOAK_URL = 'http://localhost:8090'
const REALM = 'cookeasy'
const CLIENT_ID = 'ui'
const GRANT_TYPE = 'password'

import { useStore } from 'vuex'

export default {
    store: useStore(),

    sigin: function (username, password) {
        const body = new URLSearchParams()
        body.append('client_id', CLIENT_ID)
        body.append('username', username)
        body.append('password', password)
        body.append('grant_type', GRANT_TYPE)

        return fetch(`${KEYCLOAK_URL}/auth/realms/${REALM}/protocol/openid-connect/token`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body
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