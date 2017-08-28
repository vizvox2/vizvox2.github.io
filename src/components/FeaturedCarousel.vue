<template>
<div>
	
		<div class="carousel" :style="{transform: slide}">
			<slide-one></slide-one><slide-two></slide-two><slide-three></slide-three>
			<slide-one></slide-one><slide-two></slide-two><slide-three></slide-three>
			<slide-one></slide-one><slide-two></slide-two><slide-three></slide-three>

</div>
<input type="range" min="0" max="40" v-model="currentValue">
</div>
</template>

<script>
import {store} from './store/store.js'

import FeaturedCarousel1 from './FeaturedCarousel1.vue'
import FeaturedCarousel2 from './FeaturedCarousel2.vue'
import FeaturedCarousel3 from './FeaturedCarousel3.vue'
	export default{
		data:function(){
			return{
				currentValue: 0,
        image:store.state.imageStore[6].source
			}
		},
		computed:{
			slide: function(){
				return 'translateX(-'+this.currentValue + '%)'
			
			}
		},
		components:{
			'slide-one': FeaturedCarousel1,
			'slide-two': FeaturedCarousel2,
			'slide-three': FeaturedCarousel3
		}
	}
</script>

<style lang="scss" scoped>


	.carousel{
		width:500%;
		height:70%;
		background-color: #f3f3f3;
		display: flex;
		transform:translateY(70px);

			
	}
	
	input[type=range] {
  -webkit-appearance: none;
  margin: 18px auto;
  width: 90%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  background: white;
  border-radius: 1.3px;
  border: 0.2px solid #dadfe6;
  
}
input[type=range]::-webkit-slider-thumb {
  border-radius: 7px;
  height: 16px;
  width: 82px;
  background-color: #fe1f1f;
  background-image: url('~./assets/riffles.png');
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4px;

  background-size: auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: white;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  background: white;
  border-radius: 1.3px;
  border: 0.2px solid #dadfe6;
}
input[type=range]::-moz-range-thumb {
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #fe1f1f;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}
input[type=range]{
	width:90%;
transform:translateX(40px);

}
 @media screen and (min-width:300px) and (max-width:680px){

input[type=range]{
  transform:translateX(0px);
}
}
</style>