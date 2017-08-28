<template>
	<div class="header-container">
	<div class="logo" id="mobile-logo"><span>BIG</span> <span>Store</span> </div>
		<div class="socials-container">
			<div class="socials">
				<div class="socials-twitter"></div>
				<div class="socials-facebook"></div>
				<div class="socials-basket"></div>
				<div class="socials-infinity"></div>
				<div class="socials-linkedin"></div>
				<div class="socials-tumbler"></div>
				<form action=""> <input type="text" class="socials-search" placeholder="Search"> <button type="submit"></button></form>
			</div>	
		</div>
		<div class="navigation-container">
			<div class="navigation">
			<div class="logo">
				<span>BIG</span> <span>Store</span>
			</div>
				<a href="#" class="navigation-item">ENTERTAINMENT</a>
				<a href="#" class="navigation-item">LIFESTYLE</a>
				<a href="#" class="navigation-item">TECHNOLOGY</a>
				<a href="#" class="navigation-item">ENTERTAINMENT</a>
				<a href="#" class="navigation-item">LIFESTYLE</a>
				<a href="#" class="navigation-item">SPORTS</a>
			</div>
		</div>
		</div>
		
	
</template>

<script>

	export default{

	}
</script>

<style lang="scss" scoped>
// colors
$basic-background: #e0e0e0;
$socials-background: #bcbcbd;
$logo-color: #f71818;

.logo{
	width:170px;
	height:170px;
	position:absolute;
	display:table-cell;
	text-align: center;
	vertical-align: middle;
	z-index:1001;
	top:-75px;
	left:-170px;
	transform:translateX(8%);
	background-color: $logo-color;
	color:white;
	font-weight: 900;
	font-size:60px;
	padding-top:10px;
	cursor:pointer;
	&:after{
		content:'';
		display: block;
		position:absolute;
		bottom:-14px;
		right:-30px;
		width:1px;
		height:1px;
		border:30px solid transparent;
		border-bottom:30px solid #828282;
		transform:rotate(-45deg) scale(0.4,0.4);

	}
	
	
	
		span:nth-of-type(2){
			font-size: 40px;
			font-weight: 400;
			position:relative;
			top:-20px;
	}
	
}
.header-container{
	width:100%;
	height:120px;
	background-color: $basic-background;
}

.socials-container{
	display:flex;
	justify-content:flex-end;
	align-items: center;
	width:80%;
	height:60%;
	margin:0 auto;
	flex-wrap:wrap;
		.socials{
			width:410px;
			display:flex;
			justify-content: space-between;


				div{
					width:30px;
					height:30px;
					border-radius: 50%;
					background-color: $socials-background;
					box-shadow: inset 0 1px 1px 1px rgba(80,80,80,0.2);
					cursor: pointer;
					@media screen and (min-width:300px) and (max-width:680px){
			display:none;
			}
					

				}
				@for $i from 1 through 6{
				div:nth-of-type(#{$i}){
					background-image: url('~./assets/#{$i}.png');
					background-repeat: no-repeat;
					background-position: 50% 50%;

				}
			}

			form{
				position:relative;
				@media screen and (min-width:300px) and (max-width:680px){
			position:absolute;
			right:10px;
			}
					button{
						position:absolute;
						right:0;
						top:10px;
						outline: none;
						background-image: url('~./assets/css_sprites.png');
						background-position: -280px -119px;
						background-repeat: no-repeat;
						border:none;
						background-color: transparent;
						width:30px;
						height:30px;
						appearance:none;
					}
			}
				input{
					height:30px;
					border:none;
					border-radius: 15px;
					background-color: $socials-background;
					box-shadow: inset 0 1px 1px 1px rgba(80,80,80,0.2);
					outline: none;
					color:white;
					padding: {
						left:10px;
						right:10px;
					}
					&::placeholder{
						color:white;
					}
				}
				

		}
}

.navigation-container{
	width:100%;
	height:40%;
	position: relative;
	display:flex;
	justify-content:center;
	border: 1px solid $socials-background;
	@media screen and (min-width:300px) and (max-width:1100px){
	display:none;
	}

	&:before{
		content:'';
		position:absolute;
		border-top: 1px solid white;
		width:100%;
	}
	.navigation{
		height:100%;
		margin:0 auto;
		display:flex;
		position:relative;
		@media screen and (min-width:300px) and (max-width:1100px){
			display:none;
			.logo{
					display:block;
					left:-180px;
					
					width:112px;
					height:112px;
					font-size: 40px;
					&:after{
						display:none;
					}
					}
		}
		
			a{
				display:flex;
				justify-content:center;
				align-items:center;
				position:relative;
				color:black;
				text-decoration: none;
				border:{
					right: 1px solid $socials-background;
					
				}
				
				padding:{
					left:25px;
					right:25px;
				}
				@media screen and(min-width:400px) and (max-width:1100px) {
						font-size:12px;
						padding:{
					left:5px;
					right:5px;
				}
				
				}
				&:before{
					content:'';
					position:absolute;
					right:0;
					border-left: 1px solid white;
					height:100%;
				}
				&:nth-of-type(1){
					border-left: 1px solid $socials-background;
					box-shadow:inset 1px 0 0 0px white;
				}
			}
	}
}




#mobile-logo{
			display:none;
			@media screen and (min-width:300px) and (max-width:1100px){
		display:block;
		position:absolute;
		left:-17px;
		top:0;
		width:112px;
		height:112px;
		font-size: 40px;
		&:after{
		display:none;
					}
					span:nth-of-type(2){
						position:relative;
						top:0;
					}
	}

}





</style>