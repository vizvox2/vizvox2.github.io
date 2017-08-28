<template>
	<div class="trending">
	<div class="divider"></div>
	<div class="wrapper">
		<app-menu> </app-menu>
		<app-products></app-products>
		</div>
	</div>
</template>

<script>
import Tmenu from './TrendingMenu.vue'
import TrendingProducts from './TrendingProducts.vue'
	export default{
		components:{
			'app-menu': Tmenu,
			'app-products': TrendingProducts
		}
	}
</script>

<style lang="scss" scoped>
	.trending{
		width:70%;
		margin:0 auto;
		background-color: #f9f9f9;
		z-index:20;
		position: relative;
		@media screen and (min-width:300px) and (max-width:1100px){
			width:95%;
		}
		@media screen and (min-width:1500px) and (max-width:2600px){
			width:1000px;
		}



	}
	.wrapper{
		display:flex;
		width:100%;
		height:90%;
		margin:0 auto;
	}
	.divider{
		width:100%;
		height:10px;

		background: #c7c7c7; /* Old browsers */
		background: #bfbfbf; /* Old browsers */
		background: -moz-linear-gradient(top, #bfbfbf 0%, #eaeaea 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(top, #bfbfbf 0%,#eaeaea 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to bottom, #bfbfbf 0%,#eaeaea 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bfbfbf', endColorstr='#eaeaea',GradientType=0 ); /* IE6-9 */
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