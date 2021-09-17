<template>
	<th scope="row" colspan="2">Total Products</th>
    <td>{{totalQuantity}}</td>
    <td>
        <button class="btn btn-dark btn-sm" id="vaciar-carrito" @click="reset">
            Reset Account
        </button>
    </td>
    <td class="font-weight-bold">$ <span>{{totalPrice}}</span></td>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
	setup() {
		const store = useStore()
		const totalQuantity = computed(() => store.getters.totalQuantity)
		const totalPrice = computed(() => store.getters.totalPrice)
		const reset = () => {store.commit('resetCart')}
		return {totalQuantity, totalPrice, reset}
	}
}
</script>

