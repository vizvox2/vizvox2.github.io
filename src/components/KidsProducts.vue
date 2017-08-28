<template>
	<div class="tredprod">
		<div class="row">
			<div class="product" v-for="(item,index) in row1">
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
		
	</div>
</template>

<script>
import {store} from './store/store.js'
	export default{
		computed:{
			row1: function(){
				return store.state.kids[0]
			},
			row2: function(){
				return store.state.kids[1]
			}

		},
		methods:{
			addItem1: function(index){
				store.state.counter++;
				store.state.totalPrice +=store.state.kids[0][index].numPrice;
				
			},
			addItem2: function(indox){
				store.state.counter++;
				store.state.totalPrice +=store.state.kids[1][indox].numPrice;
				
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
	}
}
</style>