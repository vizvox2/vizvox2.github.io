<template>
	<div class="menu">
		<div class="title">
			<span>TRENDING NOW</span>
		</div>
		<appitem v-for="(item, index) in items" :index="index">{{item.title}}</appitem>
		
	</div>
</template>

<script>
import item from './TrendingMenuItem.vue'
	export default{
		data:function(){
			return{
				items: [
				{title:'Man',
				picked:true
						},
				{title:'Women',
				picked:false
						},
				{title:'Kids',
				picked:false
						},
				{title:'Accessories',
				picked:false
						}
				],
				picked: false
			}
		},
		computed:{
			chosen: function(item){
				return item.picked;
			}
		},
		components:{
			'appitem': item
		}
	}
</script>

<style lang="scss" scoped>
	.menu{
		width:210px;
		height:100%;
		background-color: #f9f9f9;
		  @media screen and (min-width:300px) and (max-width:680px){

display: none;
}
	}
	.title{
		background-color: #252525;
		width:100%;
		height:68px;
		color:white;
		font-weight:bold;
		display:flex;
		padding:27px;
		align-items:center;
		box-sizing:border-box;
	}
	.menu-item{
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
		width:210px;
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
			border: 27px solid transparent;
			border-right: 27px solid red;
			position:absolute;
			right:-20px;
			transform:translate(33px,-38px) scaleX(-1);
		}
	}
</style>