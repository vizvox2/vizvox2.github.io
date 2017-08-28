<template>
  <div id="app top">
   <app-header> </app-header>
   <app-cartbar> </app-cartbar>
   <app-slider> </app-slider>
   <app-featured> </app-featured>
   <app-trending></app-trending>
   <app-footer></app-footer>
   <!-- Link, which appears on scroll down with fade-in and out leading to top of the page -->
   <transition name="fade">
   <a href="#top" class="toTop" v-if="scrolled"></a>
   </transition>
   
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CartBar from './components/CartBar.vue'
import Products from './components/Products.vue'
import TopSlider from './components/TopSlider.vue'
import Featured from './components/Featured.vue'
import Trending from './components/Trending.vue'
import Footer from './components/Footer.vue'


export default {
  data () {
  return {
    scrolled: false
  };
},
methods: {
  handleScroll () {

    this.scrolled = window.scrollY > 300;
  }
},
created () {
  window.addEventListener('scroll', this.handleScroll);
},
destroyed () {
  window.removeEventListener('scroll', this.handleScroll);
},
 components:{
  'app-header': Header,
  'app-cartbar':CartBar,
  'app-products': Products,
  'app-slider': TopSlider,
  'app-featured': Featured,
  'app-trending': Trending,
  'app-footer': Footer,

 }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Coda');
body{
  margin:0;
  padding:0;
  font-family: 'Coda', cursive;
  background-image:  url('~./assets/backshadowleft.png'),url('~./assets/backshadowright.png'),url('~./assets/background.jpg');
  background-size: auto, auto, cover;
  background-repeat: no-repeat, no-repeat,no-repeat;
  background-position:  0 0%, 100% 0%,0 0;
}

.toTop{
  display: block;
  width:57px;
  height:57px;
  border-radius:5px;
  background-color: white;
  background-image: url('~./assets/css_sprites.png');
  background-size: auto;
  background-repeat: no-repeat;
  background-position: -11px -88px;
  position:fixed;
  bottom:10px;
  right:120px;
  z-index:10000;
  cursor: pointer;
  @media screen and (min-width:300px) and (max-width:1100px){
      right:10px;
      bottom:50px;
    }
}

  .fade-enter-active {
      transition: all 0.8s ease;
    }
    .fade-leave-active {
      transition: all 0.8s ease;
    }
    .fade-enter{
      opacity: 0;
    }
     .fade-leave-to{
      opacity: 0;
    }


#app{
  display:flex;
  position:relative;
  justify-content:center;
}



</style>
