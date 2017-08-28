<template>
	<div class="slide">
	<div class="newTop"> <div></div></div>
	<div class="shadow"></div>
		<div class="slide-image">
			<div class="new"> <div>New</div></div>
		</div>
		<h2>{{name}}</h2>
		<div class="buy">
			<span class="price">${{price}}</span> <span class="old-price">{{oldPrice}}</span> <div class="basket" @click="addItem"></div>
		</div>
		<div class="newBottom"><div></div></div>
	</div>
</template>

<script>
import {store} from './store/store.js'
	export default{
		computed:{
			name: function(){
				return store.state.featuredSlides[0].name
			},
			oldPrice: function(){
				return store.state.featuredSlides[0].oldPrice
			},
			price: function(){
				return store.state.featuredSlides[0].price
			}
		},
		methods:{
			addItem: function(){
				store.state.counter++;
				store.state.totalPrice +=store.state.featuredSlides[0].price;
				
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
		position:relative;
		.shadow{
			width:1px;
			height:1px;
			position:absolute;
			top:33px;
			left:68px;
			transform:rotate(45deg);
			border:55px solid transparent;
			border-top:55px solid #a42929;
			z-index:0;
		}
		.newTop{
			position:absolute;
			right:38px;
			top:10px;
			width:45px;
			height:10px;
			background-color: red;
			transform:skewX(45deg);
			display: flex;
			justify-content:center;
			align-items:center;
			
				div{
				width:76%;
				height:100%;
				text-align: center;
				border-left:1.5px solid #ff9494;
				border-right:1.5px solid #ff9494;
				color:white;
				

			}


		}
		.newBottom{
			position:absolute;
			right:10px;
			top:38.5px;
			width:10px;
			height:45px;
			background-color: red;
			transform:skewY(47deg);
			display: flex;
			justify-content:center;
			align-items:center;
				div{
				width:100%;
				height:76%;
				text-align: center;
				border-top:1.5px solid #ff9494;
				border-bottom:1.5px solid #ff9494;
				color:white;
				transform:translatey(-1px);

			}

		}
		
	}

	.slide-image{
		background-image: url('~./assets/featured1.jpg');
		background-size: 100% ;
		background-repeat: no-repeat;
		width:100%;
		height:160px;
		margin:0 auto;
		position:relative;
		overflow: hidden;
		
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

	.new{
		width:90px;
		height:31px;
		background-color: #fe1f1f;
		position:absolute;
		top:0px;
		right:-25px;
		transform:rotate(45deg);
		display:flex;
		align-items:center;
			div{
				width:100%;
				height:78%;
				text-align: center;
				border:1px solid #ff9494;
				color:white;
				transform:translateX(5px);

			}
	}
</style>