<template>
	<div class="slide">
	<!-- <div class="shadow"></div> -->
		<div class="slide-image" :style="{backgroundImage:image}">
			<div class="new"> <div>Sale</div></div>
		</div>
		<h2>{{name}}</h2>
		<div class="buy">
			 <span class="old-price">{{oldPrice}}</span> <span class="price">${{price}}</span> <div class="basket" @click="addItem" :style="{backgroundImage:cartImage}"></div>
		</div>
	</div>
</template>

<script>
import {store} from './store/store.js'
	export default{
		data:function(){
	return{
		image: store.state.imageStore[6].source,
		cartImage:store.state.imageStore[3].source
	}
	},
		computed:{
			name: function(){
				return store.state.newProducts[0].name
			},
			oldPrice: function(){
				return store.state.newProducts[0].oldPrice
			},
			price: function(){
				return store.state.newProducts[0].price
			}
		},
		methods:{
			addItem: function(){
				store.state.counter++;
				store.state.totalPrice +=store.state.newProducts[0].price;
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slide{
		width:6%;
		height:70%;
		margin: 0px 0.3%;
		
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
		background-size: 60% ;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		width:100%;
		height:110px;
		margin:0 auto;
		position:relative;
		overflow: hidden;
		background-color: white;
		border:1px solid #dadfe6;

		
	}
	
	.buy{
		display:flex;
		justify-content: space-between;
		align-items: baseline;
		margin:0;
		transform:translateY(-25px);
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
				transform:translate(5px, 1px);
				font-weight: bold;

			}
	}

	.newTop{
		width:20px;
		height:20px;
		background-color: red;
	}
@media screen and (min-width:300px) and (max-width:400px){
.basket{
	transform:translateY(12px);
}
}
@media screen and (min-width:300px) and (max-width:1100px){
			.slide{
				width:9.5%;
			position: relative;
			}
		}	
</style>