import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    index: 0,
    counter: 0,
    totalPrice: 0,
    sideMenu:false,
    men:[[
    	{name: 'Shop t-short',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'$34.99',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending1.png'},

    	{name: 'Sneaker',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:undefined,
    	price:'$134.99',
    	numPrice:134.99,
    	img:'./src/assets/Trending2.png'}],

    	[{name: 'Backpack',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:undefined,
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending3.png'},

    	{name: 'Heritage',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:undefined,
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending4.png'}]
    ],

    women:[[
    	{name: 'Look at you',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending4.png'},

    	{name: 'You are awesome',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending3.png'}],

    	[{name: 'Charming',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending2.png'},

    	{name: 'So beautiful',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending1.png'}]
    ],
    kids:[[
    	{name: 'You are smart',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending2.png'},

    	{name: 'And bright',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending1.png'}],

    	[{name: 'Look so mature',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending4.png'},

    	{name: 'Ask parents to buy this',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending3.png'}]
    ],
    accessories:[[
    	{name: 'Something boring',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending4.png'},

    	{name: 'Who buys this?',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending3.png'}],

    	[{name: 'Useless thing',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending2.png'},

    	{name: 'Piece of garbage',
    	description:'Lorem ipsum dolor sit amet, consectetur',
    	oldPrice:'',
    	price:'$34.99',
    	numPrice:34.99,
    	img:'./src/assets/Trending1.png'}]
    ],

    newProducts:[
    {name:'Lorem ipsum dolor sit',
    oldPrice:'$69.99',
    price:34.99

    }
    ],
    featuredSlides:[
    {name:'Herbal Sport',
    oldPrice:'$69.99',
    price:101.88

    },
    {name:'Awesome relax',
    oldPrice:'$41.99',
    price:4000

    }
    ],
    imageStore:[
    {source: 'url(./src/assets/slide-image.png)'}, //Top slider 1 slide
    {source: 'url(./src/assets/slide-image1.png)'}, //Top slider 2 slide
    {source: 'url(./src/assets/slide-image2.png)'}, //Top slider 3 slide
    {source: 'url(./src/assets/icons/cart.png)'}, //Cart icon
    {source: 'url(./src/assets/icons/css_sprites.png)'}, //UNIVERSAL SPRITE
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/newProd1.png)'}, //featuredCarousel1
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger
    {source: 'url(./src/assets/hamburger2.png)'}, //hamburger

   
    ]
  }
 
})