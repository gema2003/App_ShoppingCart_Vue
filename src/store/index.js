import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: {}
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    setCart(state, payload) {
      state.cart[payload.id] = { ...payload }
    },
    resetCart(state) {
      state.cart = {}
    },
    increase(state, payload) {
      state.cart[payload].quantity = state.cart[payload].quantity + 1 
    },
    diminish (state, payload) {
      state.cart[payload].quantity = state.cart[payload].quantity - 1
      if (state.cart[payload].quantity === 0) {
        delete state.cart[payload]
      }
    }
  },
  actions: {
    async fetchData({commit}) {
      try{
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducts', data)
      }catch (error) {
        console.log(error);
      }
    },
    addCart({commit, state}, products) {
      Object.prototype.hasOwnProperty.call(state.cart, products.id)
        ? products.quantity = state.cart[products.id].quantity + 1
        : products.quantity = 1
      commit('setCart', products)
    }
  },
  getters: {
    totalQuantity(state) {
      return Object.values(state.cart).reduce((acc, {quantity}) => acc + quantity, 0)
    },
    totalPrice(state) {
      return Object.values(state.cart).reduce((acc, {quantity, price}) => acc + quantity * price, 0)
    }
  },
  modules: {
  }
})
