<template>
	<div class="slide">
		<div class="prev" @click="prev"></div>
		<transition :name="animate" mode="out-in">
		<component :is="currentSlide"> </component>
		</transition>
		<div class="forw" @click="next"></div>
	</div>
</template>

<script>
import slide1 from './FooterSlide1.vue'
import slide2 from './FooterSlide2.vue'
	export default{
		data: function(){
			return{
				comps: ['first-slide','second-slide'],
				index:0,
				animations: ['slide-fade', 'back-fade'],
				animationIndex: 0
			}
		},
		computed:{
			currentSlide: function(){
				return this.comps[this.index]
			},
			animate: function(){
				return this.animations[this.animationIndex]
			}
		},
		components:{
			'first-slide': slide1,
			'second-slide': slide2
		},
		methods:{
			prev: function(){
				if(this.index>0){
			this.animationIndex = 1;
				this.index -= 1;
			} else{
				this.animationIndex = 1;
				this.index = 1;
			}
			},
			next: function(){
				if(this.index <1){
				this.animationIndex = 0;
				this.index +=1;
			} else{
				this.animationIndex = 0;
				this.index = 0;
			}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slide{
		width:70%;
		height:100px;
		background-color: #f3f3f3;
		margin:0 auto;
		display:flex;
		justify-content:space-between;
		align-items:center;
		position:relative;
		overflow: hidden;
		@media screen and (min-width:300px) and (max-width:1100px){
			width:95%;
		}
		@media screen and (min-width:1500px) and (max-width:2600px){
			width:1000px;
		}
		.prev{
			width:40px;
			height:40px;
			border-radius: 50%;
			margin-left:20px;
			cursor: pointer;
			background-image: url('~./assets/css_sprites.png');
			background-size: auto;
			background-repeat: no-repeat;
			background-position: -75px -158px;
			position:relative;
			z-index:20;

		}

		.forw{
			width:40px;
			height:40px;
			border-radius: 50%;
			margin-right:20px;
			cursor: pointer;
			background-image: url('~./assets/css_sprites.png');
			background-size: auto;
			background-repeat: no-repeat;
			background-position: -110px -158px;
			position:relative;
			z-index:20;
		}
	}
// FORWARD ANIMATION
	.slide-fade-enter-active {
		  transition: all 0.5s ease;
		}
		.slide-fade-leave-active {
		  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		.slide-fade-enter{
			transform: translate(-400px, 30px);
		  opacity: 0;
		}
		 .slide-fade-leave-to{
		  transform: translate(400px, 30px);
		  opacity: 0;
		}
// BACKWARDS ANIMATION
.back-fade-enter-active {
		  transition: all 0.5s ease;
		}
		.back-fade-leave-active {
		  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		.back-fade-enter{
			transform: translate(400px, -30px);
		  opacity: 0;
		}
		 .back-fade-leave-to{
		  transform: translate(-400px, -30px);
		  opacity: 0;
		}

</style>