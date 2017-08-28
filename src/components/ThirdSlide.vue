<template>
	<div class="slide">
			<div class="slide-image" :style="{backgroundImage:image}"></div>
				<div class="slide-content">
					<h1>Our Benefits</h1>
					
					<span class="slide-description">
						Fusce ultrices ornare velit, consectetur tempus eros dapibus et. Integer lobortis, dui in iaculis sollicitudin, felis nunc aliquam nibh, eu porta nisi<span class="max-hidden">urna nec odio. Duis suscipit viverra magna id sagittis. Quisque odio neque, condimentum cursus volutpat vel, pharetra ac nibh. Cras cursus libero id </span><span class="mobile-hidden"> nunc facilisis luctus. Aenean ultricies, risus cursus sollicitudin congue, diam diam congue velit, ut sodales sem enim a nisl. Aenean elit diam, mollis fermentum</span>
					</span>
					<button>Shop Now</button>
				</div>
		</div>
</template>

<script>
	import {store} from './store/store.js'
	export default{
data:function(){
	return{
		image: store.state.imageStore[2].source
	}
	}
}
</script>

<style lang="scss" scoped>

	.slide{
		width:100%;
		height:400px;
		margin: 0 auto;
		margin-top:30px;
		display:flex;
		flex-wrap:wrap;
		position:relative;
		justify-content:space-between;
		span{
			font-family: arial;
		}
		
	}

	.slide-image{
		width:40%;
		// height:100%;
		background-image: url('~./assets/slide-image2.png');
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: 0 50%;

	}

	.slide-content{
		width:50%;
		// height:100%;

		button{
			border:none;
			color:white;
			background-color: #f71818;
			background-image: url("~./assets/arrows.png");
			background-repeat: no-repeat;
			background-position: 92% 50%;
			padding:12px 26px 12px 22px;
			display:block;
			margin-top:20px;
			&:hover{
			background-color: #313131;
		}
		}
	}


@media screen and (min-width:1900px) and (max-width:2600px){
			.slide-image{
				width:30%;
			}

		}
@media screen and (min-width:300px) and (max-width:680px) {
			.slide-image{
				width:100%;
			background-size: 50%;
			height:40%;
			background-position: 50% 50%;
			}
			.slide-content{
				width:100%;
			}
			button{
				float:right;
			}
			.max-hidden{
				display:none;
			}
			.mobile-hidden{
				display:none;
			}
	}

@media screen and (min-width:681px) and (max-width:920px) {
	.mobile-hidden{
		display: none;
	}
	}
</style>