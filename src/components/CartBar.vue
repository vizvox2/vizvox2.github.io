<template>
	<div class="cart-container">
	<transition name="slide-fade">
	<app-menu v-if="showSide"></app-menu>
	</transition>
	<div class="hamburger" @click="toggleSide" :class="{rotatehamb:rotor}" :style="{backgroundImage:hamburgerImage}"></div>
	<!-- <div class="news">
		{{store[0].ccy}}: Buy: {{store[0].buy}} UAH - Sale: {{store[0].sale}} UAH  <!-- August .12 .2012 - Syrian prime minister defects, fighting goes on
 	</div> -->
	<div class="cart">Shoping Cart: <strong> {{count}} </strong> item(s) - ${{sum}} <div :class="{extend:true, backExtend:show}" @click="showCart" :style="{backgroundImage:extendImage}"></div>
		<div class="drop-cart" v-if="show">  {{count}}  item(s) - ${{sum}} <button>Buy</button></div>

	</div>
	</div>

</template>

<script>
 import {store} from './store/store.js'
import Hamburger from './Hamburger.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
 
Vue.use(VueAxios, axios)
	export default{
		data: function(){
			return{
				show:false,
				rotor:false,
				extendImage: store.state.imageStore[4].source,
				hamburgerImage: store.state.imageStore[5].source,
				store:''
			}
		},
		computed:{
			count: function(){
				return store.state.counter
			},
			sum: function(){
				return (parseInt(store.state.totalPrice * 100)) / 100
			},
			showSide: function(){
				return store.state.sideMenu
			}
		},
		methods:{
			showCart: function(){
				return this.show = !this.show;
			},
			toggleSide: function(){
				store.state.sideMenu = !store.state.sideMenu;
				this.rotor = !this.rotor;
			},
			 retData: function(){
      const api = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
      Vue.axios.get(api).then(response=> {
        this.store = response.data
        console.log(this.store);
      }).catch(error=>{
        console.log('error')
        this.store = [{ccy:'Unavailable', buy: 'Unavailable', sale:'Unavailable'}]
      })
    }
		},
		components:{
			'app-menu': Hamburger
		}
		// },
		// beforeMount(){
  //   this.retData()
  // } 

		
	}
</script>

<style lang="scss" scoped>

	.cart-container{
	width:100%;
	height:43.5px;
	display: flex;
	justify-content:flex-end;
	align-items:center;
	padding-right:20px;
	box-sizing:border-box;
	background-color: #252525;
	color: #d3d3d3;
	font-family: Arial;
	font-size: 12px;
	position: -webkit-sticky;
  position: sticky;
  top:0;
  z-index:1000;
  // overflow: hidden;
  .news{
	width:50%;					
}

.cart{
	width:25%;
	display:flex;
	align-items:center;
	position:relative;
}
  
}	



strong{
	color:white;
	display: block;
	margin:0 3px;
}

.extend{
	width:20px;
	height:20px;
	background-color: red;
	background-size: auto;
	background-repeat: no-repeat;
	background-position: -319px -80px;
	display:inline-block;
	margin-left:15px;
	cursor:pointer;
	transition: all 0.7s;
	&:hover{
		background-color: darken(red, 15%);
	}
}

.backExtend{
	transform:scaleY(-1);
}

.drop-cart{
	width:200px;
	height:50px;
	background-color: #E0E0E0;
	color:black;
	border-radius: 2px;
	border:1px solid grey;
	position:absolute;
	bottom:-61px;
	display:flex;
	font-size: 15px;
	font-weight: bold;
	justify-content:center;
	align-items:center;
	flex-direction:column;
	box-shadow: 0 0 10px 1px rgba(80,80,80,0.5);
	z-index:99900000;
}
.hamburger{
	display:none;
	width:40px;
	height:40px;
	background-size: 90%;
	background-repeat: no-repeat;
	background-image: url('~./assets/hamburger2.png');
	// background-position: 50% 50%;
	position:absolute;
	left:10px;
	cursor:pointer;
	transition:all 0.8s;

}

.rotatehamb{
	transform:rotate(90deg);
}

.slide-fade-enter-active {
		  transition: all 0.5s ease;
		}
		.slide-fade-leave-active {
		  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		.slide-fade-enter{
			transform:translate(-100px,53.5%) !important;
		  opacity: 0;
		}
		 .slide-fade-leave-to{
		  transform:translate(-100px,53.5%) !important;
		  opacity: 0;
		}

		button{
			display:block;
			background-color: red;
			border:none;
			color:white;
			padding:3px 7px;
			margin-top:5px;
			&:hover{
				background-color: black;
			}
		}

@media screen and (min-width:300px) and (max-width:1100px){
		.hamburger{
			display:block;
		}
	}
@media screen and (min-width:300px) and (max-width:680px){

.cart{
	min-width:210px;
	float:right;
  }
  .news{
  	display:none;
  }
}

@media screen and (min-width:681px) and (max-width:1100px){

.cart{
	width:42%;
	min-width:210px;
  }
}
@media screen and (min-width:1500px) and (max-width:2600px){
			.news{
				width:30%;
			}
		}
</style>