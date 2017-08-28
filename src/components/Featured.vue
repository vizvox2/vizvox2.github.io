<template>
	<div class="featured">
		<featured-slide></featured-slide>
		<featured-new></featured-new>	

	</div>
</template>

<script>
import FeaturedSlide from './FeaturedSlide.vue'
import FeaturedNew from './FeaturedNew.vue'

	export default{
		components:{
			'featured-slide': FeaturedSlide,
			'featured-new': FeaturedNew
		}

	}
</script>

<style lang="scss" scoped>
	.featured{
		display:flex;
		width:70%;
		height:345px;
		margin: 30px auto;
		align-items:flex-end;
		overflow:hidden;
		margin-bottom: 0;
		
	}


@media screen and (min-width:300px) and (max-width:1100px){
			.featured{
				width:95%;
			}
		}

@media screen and (min-width:1500px) and (max-width:2600px){
			.featured{
				width:1000px;
			}
		}

</style>