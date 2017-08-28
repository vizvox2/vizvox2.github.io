<template>
	<div>
<div v-for="arr in products"> <span>{{arr.name}} </span><span>{{arr.price}}</span> <button @click.prevent="addItem">buy</button></div> 
	</div>

</template>

<script>
	export default{
		data: function(){
			return{
				products:[
				{name:'shoes',
				price:34},
				{name:'hood',
				price:43},
				{name:'socks',
				price:21},
				{name:'pants',
				price:15}
				]
			}
		},
		methods:{
			addItem: function(arr){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>