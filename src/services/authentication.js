const KEYCLOAK_URL = "http://localhost:8090";
const REALM = "cookeasy";
const CLIENT_ID = "client-ui";
const CLIENT_SECRET = "CwppNpaEsBalh3qROZJqf0qfQi9fG7SO";
const GRANT_TYPE = "password";

import store from "../store";

export default {
  sigin: function (username, password) {
    const body = new URLSearchParams();
    body.append("client_id", CLIENT_ID);
    body.append("client_secret", CLIENT_SECRET);
    body.append("grant_type", GRANT_TYPE);
    body.append("username", username);
    body.append("password", password);

    return fetch(
      `${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      }
    );
  },

  signout: function (username, password) {
    return fetch(
      `${KEYCLOAK_URL}/auth/realms/${REALM}/protocol/openid-connect/logout`,
      {
        method: "GET",
        header: {
          Authorization: store.state.user.jwt,
        },
      }
    );
  },
};
