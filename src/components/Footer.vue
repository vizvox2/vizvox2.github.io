<template>
	<div class="footer">
		<app-fslide></app-fslide>
		<footer-info></footer-info>
		<div class="shadow"></div>
		<div class="copyright">
		<div class="wrap">
			<div class="copy">Copyrights. © 2012 by KOPASOFT</div>
			<div class="menu">
				<div class="menu-item">Home</div>
				<div class="menu-item">My Cart</div>
				<div class="menu-item">Checkout</div>
				<div class="menu-item">Completed Orders</div>
				<div class="menu-item">Contact Us</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
import FooterSlide from './FooterSlide.vue'
import FooterInfo from './FooterInfo.vue'
	export default{
		components:{
			'app-fslide': FooterSlide,
			'footer-info': FooterInfo
		}
	}
</script>

<style lanf="scss" scoped>
	.footer{
		width:100%;
		position: relative;
		/*height:400px;*/
		background-color: black;
		background-image: url('~./assets/footerBg.jpg');
		-webkit-background-size: 100%;
		background-size: 100%;
		/*background-repeat: no-repeat;*/
		margin:0 auto;
		@media screen and (min-width:300px) and (max-width:1100px){
			width:95%;
		}
	}
	.shadow{
		width:15%;
		height:140%;
		position:absolute;
		display:none;
		bottom:0;
		right:0;
		z-index:10;
		background-image: url('~./assets/footer-back.png');
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: 100% 75%;
	}
	.wrap{
		width:70%;
		display:flex;
		align-items:center;
		flex-wrap:wrap;
		margin: 0 auto;
		  @media screen and (min-width:300px) and (max-width:680px){

width:100%;
}
	}
	.copyright{
		width:100%;
		min-height:50px;
		background-color: #0d0d0d;
		display:flex;
		align-items:center;
		box-sizing: border-box;
		flex-wrap: wrap;
		color: #9b9b9b;
		font-size: 11px;
		font-family: Arial;
	}
	.copy{
		width:40%;
		  @media screen and (min-width:300px) and (max-width:680px){

width:100%;
}
	}

	.menu{
		width:60%;
		display:flex;
		justify-content: flex-end;
		  @media screen and (min-width:300px) and (max-width:680px){

width:100%;
}
	}

	.menu-item{
		margin: 0 15px;
		cursor:pointer;
		  @media screen and (min-width:300px) and (max-width:680px){

width:100%;
display: none;
}
	}

	@media screen and (min-width:1024px) {
			.shadow{
				display:block;
				background-size: 120%;
			}
			
		}
		@media screen and (min-width:1100px) {
			.shadow{
				display:block;
				height:140%;
				background-size: 100%;
			}
			
		}
		@media screen and (min-width:300px) {
			.wrap{
				width:95%;
				
			}
			
		}
		@media screen and (min-width:1020px) {
			.wrap{
				width:70%;
				
				
			}
		
			
		}

		 @media screen and (min-width:300px) and (max-width:680px){

.wrap{
	width:95%;
}


.menu{
	width:100%;
}

.menu-item{
	width:100%;
	display:none;
}
}
 @media screen and (min-width:681px) and (max-width:740px){
.copy{
	width:100%;
}
.menu-item{
	width:100%;
}
}
</style>