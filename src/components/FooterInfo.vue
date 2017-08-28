<template>
	<div class="container">
		<div class="about">
			<span class="header">Who we are</span>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>
			<a class="contacts" href="#"><div class="icon1"></div>Address 123, Country</a>
			<a class="contacts" href="tel:(043) 875-9211"><div class="icon2"></div>(043) 875-9211</a>
			<a class="contacts" href="mailto:info@kopasoft.com"><div class="icon3"></div>info@kopasoft.com</a>
		</div>
		<div class="categories">
			<span class="header">Categories</span>
			<div class="column">
				<div class="row">New collection</div>
				<div class="row">Best sellers</div>
				<div class="row">Manufacturers</div>
				<div class="row">Suppliers</div>
				<div class="row">New Products</div>
			</div>
			<div class="column">
				<div class="row">New collection</div>
				<div class="row">Best sellers</div>
				<div class="row">Manufacturers</div>
				<div class="row">Suppliers</div>
				<div class="row">New Products</div>
			</div>
			<div class="column">
				<div class="row">New collection</div>
				<div class="row">Best sellers</div>
				<div class="row">Manufacturers</div>
				<div class="row">Suppliers</div>
				<div class="row">New Products</div>
			</div>
		</div>
	<div class="tweets">
		<span class="header">Who we are</span>
			<div class="tweet">
				<div class="tweet-img"></div>
				<p> 
					Check out this great #themeforest item for you 'Simpler Landing' http://t.co/LbLwldb6 
					<br>2 hours ago
				</p>
			</div>

			<div class="tweet">
				<div class="tweet-img"></div>
				<p> 
					Check out this great #themeforest item for you 'Simpler Landing' http://t.co/LbLwldb6 
					<br>2 hours ago
				</p>
			</div>

			<div class="tweet">
				<div class="tweet-img"></div>
				<p> 
					Check out this great #themeforest item for you 'Simpler Landing' http://t.co/LbLwldb6 
					<br>2 hours ago
				</p>
			</div>
			
	</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="scss" scoped>
	.container{
		width:70%;
		margin: 0 auto;
		display:flex;
		justify-content:center;
		flex-wrap:wrap;
		position:relative;
		@media screen and (min-width:300px) and (max-width:1100px){
			width:95%;
		}
	}
		.about{
			width:33.1%;
			color: #9b9b9b;
			padding:25px;
			padding-left:0;
			font-size:11px;
			box-sizing:border-box;
			@media screen and (min-width:681px) and (max-width:1100px){
			width:45%;
		}
		  @media screen and (min-width:300px) and (max-width:680px){

width:100%;
padding:0;
margin:0 auto;
align-self:center;
}
		}

		

		.categories{
			@extend .about;
			@media screen and (min-width:300px) and (max-width:1100px){
			width:45%;
		}
		  @media screen and (min-width:300px) and (max-width:680px){

display:none;
}
			
		}
	.header{
		font-size: 24px;
		color:#c6c6c6;
		width:100%;
		height:30px;
		margin-bottom:0;
		display:block;
	}
	p{
		font-family: Arial;
		line-height: 2;
	}
	.contacts{
		width:100%;
		display: block;
		color: #9b9b9b;
		font-size: 11px;
		text-decoration: none;
		margin-bottom: 15px;
	}

	.icon1{
			width:25px;
			height:15px;
			background-image: url('~./assets/css_sprites.png');
			background-size: auto;
			background-position:-171px -118px;
			background-repeat: no-repeat;
			margin-right:10px;
			display:inline-block;
			transform:translateY(5px);
		}

		.icon2{
			@extend .icon1;
			background-image: url('~./assets/css_sprites.png');
			background-position:-216px -167px;
		}
		.icon3{
			@extend .icon1;
			background-image: url('~./assets/css_sprites.png');
			background-position:-386px -119px;
		}

	.column{
		display:inline-block;
		width:28%;
		box-sizing:border-box;
		&:nth-of-type(2){
			margin:{
				left:10px;
				right:20px;
			}
		}
	}

	.row{
		padding: 15px 0px;
		border-bottom: 1px dotted #9b9b9b;
		cursor:pointer;
		&:nth-of-type(5){
			border:none;
		}
	}

.tweets{
	@extend .about;
	flex-wrap:wrap;
	@media screen and (min-width:300px) and (max-width:1100px){
			display:none;
		}


}
.tweet{
	width:100%;
	// display: flex;
	cursor: pointer;
}
p{
	display:inline-block;
	width:75%;
}
.tweet-img{
	display:inline-block;
	width:35px;
	height:35px;
	border-radius: 50%;
	background-color: #1d1d21;
	background-image: url('~./assets/css_sprites.png');
	// background-size: auto;
	background-repeat: no-repeat;
	background-position: -340px -109px;;
	box-shadow: inset 0 -1px 0px 0 rgba(184,184,184,0.3), inset 0 1px 3px 2px rgba(26,26,29,0.8);
	cursor: pointer;
	margin-right: 10px;
	align-self:center;
	transform:translateY(-10px);
}

@media  (max-width:400px) {
			.about{
				width:95%;
			}
			.categories{
				width:95%;
			}
			.tweets{
				width:95%;
			}
			
		}
</style>