<template>
	<div class="menu">
		<div class="menu-item">ENTERTAINMENT</div>
		<div class="menu-item">LIFESTYLE</div>
		<div class="menu-item">TECHNOLOGY</div>
		<div class="menu-item">ENTERTAINMENT</div>
		<div class="menu-item">LIFESTYLE</div>
		<div class="menu-item">SPORTS</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="scss" scoped>

.menu{
display:none;
position:absolute;
left:0;
transform:translate(0px,53.5%);
width:300px;
height:100vh;
background-color: #E0E0E0;
z-index:10000;
box-sizing:border-box;
overflow: hidden;
box-shadow: 1px 0 10px 0 rgba(80,80,80,0.4);

@media screen and (min-width:300px) and (max-width:768px){
		display:block;
		transform:translate(0px,53.5%);
	}
@media screen and (min-width:769px) and (max-width:1100px){
		display:block;
		transform:translate(0px,52.7%);
	}

}


	
.menu-item{
	width:100%;
	height:40px;
	border-bottom: 1px solid #bcbcbd;
	color:black;
	display:flex;
	align-items:center;
	padding-left:15px;
	cursor:pointer;
	font-size:1.2rem;
	// font-family: Arial;
	box-shadow: 0 1px 0 0 white
}


</style>