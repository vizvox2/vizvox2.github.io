<template>
	<div class="tredprod">
	<transition name="slide-fade" mode="out-in">
		<components :is="category"> </components>
	</transition>
	</div>
</template>

<script>
import Men from './MenProducts.vue'
import {store} from './store/store.js'
import Women from './WomenProducts.vue'
import Kids from './KidsProducts.vue'
import Accessories from './AccessoriesProducts.vue'
	export default{
		data: function(){
			return{
				list: ['men','women','kids','accessories'],
			}
		},
		computed:{
			category: function(){
				return this.list[store.state.index];
			}
		},
		components:{
			'men': Men,
			'women': Women,
			'kids':Kids,
			'accessories': Accessories
		}
	}
</script>

<style lang="scss" scoped>
	.tredprod{
		width:100%;
		height:100%;
		background-color: #F3F3F3;
		display:flex;
		flex-wrap:wrap;
		position:relative;
		justify-content:center;
		align-items:center;
		overflow: hidden;
		box-shadow: 0 1px 5px 0px rgba(90,90,90,0.2);
		}
		.slide-fade-enter-active {
		  transition: all 0.5s ease;
		}
		.slide-fade-leave-active {
		  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		.slide-fade-enter{
			transform: translateX(-400px) scale(0.8, 0.8);
		  opacity: 0;
		}
		 .slide-fade-leave-to{
		  transform: translateX(400px) scale(0.8, 0.8);
		  opacity: 0;
		}
</style>