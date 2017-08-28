<template>
	<div class="slide">
		<div class="slide-image">
			
		</div>
		<h2>{{name}}</h2>
		<div class="buy">
			<span class="price">${{price}}</span> <span class="old-price">{{oldPrice}}</span> <div class="basket" @click="addItem"></div>
		</div>
	</div>
</template>

<script>
import {store} from './store/store.js'
	export default{
		computed:{
			name: function(){
				return store.state.featuredSlides[1].name
			},
			oldPrice: function(){
				return store.state.featuredSlides[1].oldPrice
			},
			price: function(){
				return store.state.featuredSlides[1].price
			}
		},
		methods:{
			addItem: function(){
				store.state.counter++;
				store.state.totalPrice +=store.state.featuredSlides[1].price;
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slide{
		width:81%;
		height:100%;
		padding:20px;
		padding-bottom: 0px;
		background-color: white;
		
	}

	.slide-image{
		background-image: url('~./assets/featured2.jpg');
		background-size: 100% ;
		background-repeat: no-repeat;
		width:100%;
		height:160px;
		margin:0 auto;
	}
	
	.buy{
		display:flex;
		justify-content: space-between;
		align-items: baseline;
		margin:0;
	}
	h2{
		font-size:14px;
	}
	.price{
		font-size: 15px;
		color:#af2e2e;
		margin-right:12px;
	}

	.old-price{
		font-size:15px;
		color:#a1a1a1;
		text-decoration: line-through;
	}
	.basket{
		width:35px;
		height:35px;
		background-color: #fe1f1f;
		background-image: url('~./assets/cart.png');
		background-size: 50%;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		&:hover{
			background-color: #313131;
		}
	}
</style>