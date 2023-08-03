const PRODUCT_API = "http://localhost:8086";

import store from "../store";

export default {
  getProducts: function () {
    var JWT = `Bearer ${store.state.user.jwt}`;
    return fetch(`${PRODUCT_API}/services/product`, {
      method: "GET",
      headers: {
        Authorization: JWT,
      },
    });
  },

  getProduct: function (id) {
    var JWT = `Bearer ${store.state.user.jwt}`;
    return fetch(`${PRODUCT_API}/services/product?id=${id}`, {
      method: "GET",
      headers: {
        Authorization: JWT,
      },
    });
  },

  addProduct: function (product) {
    var JWT = `Bearer ${store.state.user.jwt}`;
    return fetch(`${PRODUCT_API}/services/product`, {
      method: "POST",
      headers: {
        Authorization: JWT,
      },
      product,
    });
  },

  updateProduct: function (product) {
    var JWT = `Bearer ${store.state.user.jwt}`;
    return fetch(`${PRODUCT_API}/services/product`, {
      method: "PUT",
      headers: {
        Authorization: JWT,
      },
      product,
    });
  },

  deleteProduct: function (id) {
    var JWT = `Bearer ${store.state.user.jwt}`;
    return fetch(`${PRODUCT_API}/services/product?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: JWT,
      },
    });
  },
};
