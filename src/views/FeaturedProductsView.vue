<template>

<h2>{{totalprice}}</h2>

<div class="container-sm">
 <section class="two">
    <div class="row" >

        <div class="col-3  bg-light"  v-for="product in products" :key="product.id">
            <div class="card" @mouseover="product.hovered = true" @mouseleave="product.hovered = false">
            <img :src="product.image" :alt="product.name" class="img-fluid rounded-top"/>
            <span style="margin-top:20px"> {{ product.name + '   ' + product.cost  }}KES </span>  <br>
          <button class="btn btn-primary btn-sm" @click="addtocart(product)" v-show="product.hovered">Add to cart</button>

            </div>
        </div>

    </div>
</section>
</div>
    
</template>

<script>
import {mapMutations,mapState} from "vuex"
export default {
   name: 'FeaturedProducts',

methods:{
    ...mapMutations(["addtocart"]),
   },


computed:{
  ...mapState(["products"]),

    totalprice() {
      return this.products.reduce((acc, item) => acc + item.cost, 0 );
        },
  },

 data(){
    return{
        count:0,

        products:[
                {id: 1, name: 'airforce1', category: 'Eletronics', cost: 200,  image: require('@/assets/products/airforce 1.jpg') },
                {id: 2, name: 'airmax90', category: 'Eletronics', cost: 200,  image: require('@/assets/products/airmax90.jpg') },
                {id: 3, name: 'barkley',  category: 'men cloth', cost: 200,  image: require('@/assets/products/barkley.jpg') },
                {id: 4, name: 'blazer',   category: 'Eletronics', cost: 200,  image: require('@/assets/products/blazer.jpg') },
                {id: 5, name: 'dunklow',  category: 'men cloth', cost: 200,  image: require('@/assets/products/dunk-low.jpg') },
                {id: 6, name: 'durant',   category: 'Eletronics', cost: 200,  image: require('@/assets/products/durant.jpg') },
                {id: 7, name: 'huranche', category: 'men cloth', cost: 200,  image: require('@/assets/products/huruanche.jpg') },
                {id: 8, name: 'irving',   category: 'Eletronics', cost: 200,  image: require('@/assets/products/irving.jpg') },
                {id: 13, name: 'double burns',  category: 'men cloth', cost: 2000,  image: require('@/assets/products/1.jpg') },
                {id: 14, name: 'eletric gas',  category: 'men cloth', cost: 200,  image: require('@/assets/products/2.jpg') },
                {id: 15, name: 'water dispencer',  category: 'men cloth', cost: 200,  image: require('@/assets/products/3.jpg') },
                {id: 16, name: 'portable fun',  category: 'men cloth', cost: 200,  image: require('@/assets/products/4.jpg') },
                {id: 17, name: 'single fridge',  category: 'men cloth', cost: 200,  image: require('@/assets/products/5.jpg') },
                {id: 18, name: 'double door fridge',  category: 'men cloth', cost: 200,  image: require('@/assets/products/6.jpg') },
                {id: 19, name: 'nivea black',  category: 'men cloth', cost: 300,  image: require('@/assets/products/7.jpg') },
                {id: 20, name: 'nivea black/white',  category: 'men cloth', cost: 300,  image: require('@/assets/products/8.jpg') },
                {id: 21, name: 'rexona', cost: 200,   category: 'men cloth',  image: require('@/assets/products/9.jpg') },
                {id: 22, name: 'axe appolo', cost: 200,  category: 'men cloth', image: require('@/assets/products/10.jpg') },      
            ],

        
        }
    },
}
</script>

<style scoped>

.two{
    margin-top: 60px;
}

.two, h2{
    width:100%; 
    text-align:center
}

.col-3{
    margin: 5px;
    width: 275px;
    height: 250px;
}

img {
height: 150px;
padding:4px;
}

</style>
