<template>
	<div class="featured-slide">
	<div class="shadow"></div>
		<div class="header">
			<span>FEATURED</span>
			 <div class="nav"> 
				 <div class="prev" @click="prev"></div>
				<div class="next" @click="next"></div> 
			</div>
		</div>
		<transition name="slide-fade" mode="out-in">
		<component :is="currentElement"> </component>
		</transition>
	</div>
</template>

<script>
	import FeaturedSlide1 from './FeaturedSlide1.vue'
	import FeaturedSlide2 from './FeaturedSlide2.vue'

	export default{
	data: function(){
		return{
			index: 0,
			elements: ['slide-one','slide-two']
			
		}
	},
	computed:{
		currentElement: function(){
			return this.elements[this.index];
		}
	},
	methods:{
			prev: function(){
				if(this.index>0){
				this.index -= 1;
			} else{
				this.index = 1;
			}
			},
			next: function(){
				if(this.index <1){
				this.index +=1;
			} else{
				this.index = 0;
			}
			}
		},
		components:{
			'slide-one': FeaturedSlide1,
			'slide-two': FeaturedSlide2
		}
	}
</script>

<style lang="scss" scoped>
	.featured-slide{
		width:210px;
		height:100%;
		position:relative;
		z-index:100;

		.header{
			background-color: #fe1f1f;
			color:white;
			font-weight:bold;
			padding:15px;
			display:flex;
			justify-content:space-around;
			width:180px;
		}
	}
.nav{
	display:flex;
}
	.prev{
		width:20px;
		height:20px;
		background-image: url('~./assets/css_sprites.png');
		background-repeat: no-repeat;
		background-position: -152px -167px;
		
		cursor:pointer;
	}
	.next{
		width:20px;
		height:20px;
		background-image: url('~./assets/css_sprites.png');
		background-position: -184px -167px;
		background-repeat: no-repeat;
		cursor:pointer;
	}
	.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  
  opacity: 0;
}

.shadow{
	
	height: 60px;
	position:absolute;
	right:-6px;
	top:20px;
	z-index:-1;
	box-shadow:0 0 24px 4px rgba(100,100,100,0.3);
	
}

 @media screen and (min-width:300px) and (max-width:680px){

			.featured-slide{
				display: none;
			}
}
</style>