<template>
	<div class="featured-new">
		<h1>NEW PRODUCTS</h1>
		<carousel> </carousel>
	</div>
</template>

<script>
import Carousel from './FeaturedCarousel.vue'
	export default{
		components:{
			'carousel': Carousel
		}
	}
</script>

<style lang="scss" scoped>
	.featured-new{
		width:80%;
		height:320px;
		background-color: #f3f3f3;
		position:relative;
		overflow: hidden;
	}

	h1{
		margin-left:30px;
		font-size:20px;
		background-color: white;
		width:100%;
		height:10%;
		margin:0;
		padding:10px;
		margin-bottom:20px;
	}

	 @media screen and (min-width:300px) and (max-width:680px){

.featured-new{
	width:100%;
}
}
</style>