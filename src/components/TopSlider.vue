<template>
	<div class="topSlider">
	<div class="slidePrev" @click="prev" ></div>
	<transition name="slide-fade" mode="out-in">
		<component :is="currentSlide"> </component>
		</transition>
		<div class="slideNext" @click="next"></div>
	</div>
</template>

<script>
import FirstSlide from './FirstSlide.vue'
import SecondSlide from './SecondSlide.vue'
import ThirdSlide from './ThirdSlide.vue'
	export default{
		data:function(){
			return{
				slides: ['first-slide','second-slide','third-slide'],
				index:0
				
			}
		},
		computed:{
			currentSlide: function(){
				return this.slides[this.index]
			}
		},
		methods:{
			prev: function(){
				if(this.index>0){
				this.index -= 1;
			} else{
				this.index = 2;
			}
			},
			next: function(){
				if(this.index <2){
				this.index +=1;
			} else{
				this.index = 0;
			}
			}
		},
		components:{
			'first-slide': FirstSlide,
			'second-slide': SecondSlide,
			'third-slide': ThirdSlide
		}

	}
</script>

<style lang="scss" scoped>
.topSlider{
	width:70%;
	position:relative;
	margin:0 auto;
	@media screen and (min-width:1900px) and (max-width:2600px){
			width:55%;

		}
}

		.slidePrev{
			
			width:40px;
			height:40px;
			border-radius: 50%;
			background-color: #b5b5b5;
			background-image: url('~./assets/prev.png');
			background-size: 30%;
			background-repeat: no-repeat;
			background-position: 46% 46%;
			position:absolute;
			top:50%;
			left:-50px;
			box-shadow:0 0 0 5px rgba(255,255,255,0.5);

			&:hover{
				box-shadow:0 0 0 5px rgba(255,255,255,0.9);
			}
			


		}
		.slideNext{
			width:40px;
			height:40px;
			border-radius: 50%;
			background-color: #b5b5b5;
			background-image: url('~./assets/next.png');
			background-size: 30%;
			background-repeat: no-repeat;
			background-position: 50% 50%;
			position:absolute;
			top:50%;
			right:-50px;
			box-shadow:0 0 0 5px rgba(255,255,255,0.5);
			&:hover{
				box-shadow:0 0 0 5px rgba(255,255,255,0.9);
			}

		}


@media screen and (min-width:300px) and (max-width:680px) {
.slidePrev{
	top:30%;
	left:-35px;
}

.slideNext{
	top:30%;
	right:-35px;
}

}
		// ANIMATION

	.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(40px);
  opacity: 0;
}
	
</style>