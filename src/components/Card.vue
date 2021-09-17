<template>
	<div class="col-12 col-sm-4 col-sm-3 col-lg-2 mb-3">
		<div class="card">
			<img :src="product.thumbnailUrl" :alt="`image-${product.title}`" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title">{{product.title}}</h5>
				<p class="card-text">$ {{product.price}}<span></span></p>
				<button class="btn btn-dark" @click="add(product)">Buy</button>
			</div>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
	props: ['product'],
	setup() {
		const store = useStore()
		const add = (product) => {
			store.dispatch('addCart', product)
		}
		return {add}
	}
}
</script>