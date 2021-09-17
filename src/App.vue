<template>
  <div class="container">
    <img class="d-block mx-auto" alt="Vue logo" src="./assets/logo.png">
    <h1 class="text-center">Shopping Cart 🛒</h1>
    
    <Cart />
    <hr>
    <div class="row">
      <Card v-for="item of product" :key="item.id" :product="item" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
import Card from './components/Card.vue'
import Cart from './components/Cart.vue'
export default {
  name: 'App',
  components: {
    Card,
    Cart
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchData')
    })
    const product = computed(() => store.state.products)
    // const cart = computed(() => store.state.cart)
    return {product}
  }
}
</script>

<style>

</style>
