<template>
	
		<div class="menuItem" @click="togClass"><slot> </slot></div>
		
	
</template>

<script>
import {store} from './store/store.js'
	export default{
	data:function(){
			return{
				picked: false
			}
		},
		props:['index'],
		methods:{
			togClass: function(event){
				store.state.index= this.index;
				var div = document.querySelectorAll('div');
				for(var i = 0; i<div.length; i++){
					div[i].classList.remove('selected');
					event.target.classList.add('selected');
				}
				

			}
		},

		mounted(){
			var sel = document.querySelector('.menuItem');
			sel.classList.add('selected');
		}
	}
</script>

<style lang="scss" scoped>
	
	.menuItem{
		width:100%;
		padding:15px 27px;
		box-sizing:border-box;
		border-bottom: 1px solid #e0e0e0;
		cursor:pointer;
		position:relative;
		&:before{
		content:'';
		position:absolute;
		bottom:0;
		left:0;
		border-top: 1px solid white;
		width:100%;

	}
		&:nth-of-type(1){
		@extend .selected;
	}

}

	.selected{
		background-color: red;
		color:white;
		width:220px;
		transform:translateX(-10px);
		border:none;
		z-index:10;
		&:before{
			border:none;
			left:0;
			display:block;
			width:1px;
			height:1px;
			border: 6px solid transparent;
			border-right: 6px solid #a1a1a1;
			transform:translate(3px, 6.5px) rotate(135deg);
			z-index:-100;
		}
		&:after{
			content:'';
			display:block;
			width:1px;
			height:1px;
			border: 26px solid transparent;
			border-right: 27px solid red;
			position:absolute;
			right:-20px;
			transform:translate(33px,-38px) scaleX(-1);
		}
	}


</style>