<template>
	<div class="tredprod">
	<div class="mobile-header"><span>Trending:</span> Men</span></div>
		<div class="row">
			<div class="product" v-for="(item,index) in row1">
			<div class="new"><span>New</span></div>
				<div class="image">
					<img :src="item.img" alt="" class="img">
				</div>
				<div class="info">
					<div class="title">{{item.name}}</div>
					<div class="descript">{{item.description}}</div>
					<div class="pricetag"><span class="old">{{item.oldPrice}}</span><span class="new">{{item.price}}</span></div>
					<div class="button" @click="addItem1(index)">
						 <div></div>
						<div>Add to cart</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="row">
			<div class="product" v-for="(item,indox) in row2">
					<div class="image">
					<img :src="item.img" alt="" class="img">
				</div>
				<div class="info">
					<div class="title">{{item.name}}</div>
					<div class="descript">{{item.description}}</div>
					<div class="pricetag"><span class="old">{{item.oldPrice}}</span><span class="new">{{item.price}}</span></div>
					<div class="button" @click="addItem2(indox)">
						 <div></div>
						<div>Add to cart</div>
					</div>
				</div>
			</div>
		</div>
		<div class="more">Check more categories!</div>
	</div>
</template>

<script>
import {store} from './store/store.js'
	export default{
		computed:{
			row1: function(){
				return store.state.men[0]
			},
			row2: function(){
				return store.state.men[1]
			}

		},
		methods:{
			addItem1: function(index){
				store.state.counter++;
				store.state.totalPrice +=store.state.men[0][index].numPrice;
				
			},
			addItem2: function(indox){
				store.state.counter++;
				store.state.totalPrice +=store.state.men[1][indox].numPrice;
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tredprod{
		width:100%;
		height:100%;
		background-color: #d4d4d4;
		display:flex;
		position:relative;
		justify-content:space-between;
		align-items:center;
		.product{
			width:50%;
			height:250px;
			display:flex;
			align-items:center;
			position:relative;
			.new{
				display:none;
			}
			&:nth-of-type(1){
				.new{
					&:nth-of-type(1){
						display:block;
				position:absolute;
				top:0px;
				right:-35px;
				width:130px;
				height:30px;
				transform:rotate(45deg);
				background-color: red;
				color:white;
				display:flex;
				justify-content:center;
				align-items:center;
					span{
						transform:translateX(12px);
						display:block;
						border:1px solid rgba(255,255,255,0.7);
						width:100%;
						height:83%;
						font-weight:bold;
						font-size: 17px;
						display:flex;
						align-items:center;
						justify-content:center;
					}

					}
				
			}
			}
			box-shadow: 0 0 10px 1px rgba(100,100,100,0.2);
			background: #d4d4d4; /* Old browsers */
			background: -moz-linear-gradient(45deg, #d4d4d4 0%, #f7f7f7 100%); /* FF3.6-15 */
			background: -webkit-linear-gradient(45deg, #d4d4d4 0%,#f7f7f7 100%); /* Chrome10-25,Safari5.1-6 */
			background: linear-gradient(45deg, #d4d4d4 0%,#f7f7f7 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4d4d4', endColorstr='#f7f7f7',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
			
		}
	}
.row{
	display: flex;
	flex-wrap:wrap;
	width:100%;
	@media screen and (min-width:300px) and (max-width:1000px) {
			.product{
				width:100% !important;
				
			}
			}
}

.image{
	display:flex;
	justify-content:center;
	align-items:flex-end;
	align-self:flex-end;
	.img{
		width:90%;
	}
}

.info{
	display:flex;
	flex-wrap:wrap;
	align-items:center;
	width:40%;
	height:75%;
}

.title{
	font-size: 20px;
}
.descript{
	font-family: arial;
	font-size: 12px;
}

.pricetag{
	display:flex;
	width:50%;
}
.old{
	font-family: arial;
	display:block;
	font-size: 13px;
	color:grey;
	text-decoration: line-through;
	margin-right:10px;
}

.new{
	font-family: arial;
	display:block;
	font-size: 13px;
	color:red;
}

.button{
	width:130px;
	height:35px;
	background-color: white;
	display:flex;
	justify-content:space-between;
	cursor: pointer;
	@media screen and (min-width:300px) and (max-width:1260px) {
			justify-content:flex-start;
			background-color: #e1e1e1;
			width:100px;

		}
	&:hover{
		div:nth-of-type(1){
			background-color: #313131;
		}
	}
	div:nth-of-type(1){
		width:35px;
		height:100%;
		background-color: red;
		background-image: url('~./assets/cart.png');
		background-size: auto;
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}
	div:nth-of-type(2){
		background-color: #e1e1e1;
		display: flex;
		justify-content:center;
		align-items:center;
		width:94px;
		height:100%;
		font-family: arial;
		font-size: 13px;
		font-weight: bold;
		@media screen and (min-width:300px) and (max-width:1260px) {
			font-size: 11px;
			width:65px;
		}
	}
}

.more{
	width:100%;
	height:50px;
	background-color: red;
	font-family: arial;
	justify-content:center;
	align-items:center;	
	color:white;
	display: none;
	cursor: pointer;
	&:hover{
		background-color: black;
	}
	@media screen and (min-width:300px) and (max-width:680px) {
			display:flex;
		}
}

.mobile-header{
	width:100%;
	height:50px;
	background-color: white;
	color:black;
	display:none;
	font-size:21px;
	padding-left:15px;
	span{
		font-weight: bold;
		font-size:24px;
	}
	@media screen and (min-width:300px) and (max-width:680px) {
			display:flex;
			justify-content:flex-start;
			align-items:center;
			z-index:5000;
		}
}
</style>