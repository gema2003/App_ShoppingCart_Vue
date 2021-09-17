<template>
	<div class="my-5">
        <h4 class="text-success">Purchased Service</h4>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
                <th scope="col">Total</th>
            </tr>
            </thead>
            <tbody id="items">
				<Item v-for="item in items" :key="item.id" :item="item" />           
            </tbody>
            <tfoot>
            <tr id="footer-cart">
                <th scope="row" colspan="5" class="text-secondary" v-if="Object.keys(items).length === 0">Cart empty - Start shopping!</th>
                <Footer v-else/>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Item from './Item'
import Footer from './Footer'
export default {
	components: {Item, Footer},
	setup() {
		const store = useStore()
		const items = computed(() => store.state.cart)

		return{items}
	}
  
}
</script>
