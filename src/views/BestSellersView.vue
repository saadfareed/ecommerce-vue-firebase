<template>
    
<div class="container-sm">
 <section class="two">
   <h2> <b> Best Sellers</b></h2>


    <div class="row" style="margin-top:10px;">

        <div class="col-3  bg-light" 
             v-for="product in products" :key="product.id">
            <img :src="product.image" :alt="product.name" class="img-fluid rounded-top"/>
            <span style="margin-top:20px"> {{ product.name + '   ' + product.cost  }}KES </span>  <br>
            <button class="btn btn-secondary" style="margin:20px" @click="addtocart(product.id)"> add <i class="bi bi-cart-check"></i></button>
            </div>

    </div>
</section>
</div>

</template>

<script>
export default {
    name: 'BestSellers',
       methods: {
        addtocart(product){
            this.$emit('add-to-cart', product);
        }     
   },

     data(){
         return{
            products:[
                 
                  {id: 9, name: 'more', cost: 200,  image: require('@/assets/products/more.jpg') },
                  {id: 10, name: 'off white', cost: 200,  image: require('@/assets/products/off white.jpg') },
                  {id: 11, name: 'shoe', cost: 200,  image: require('@/assets/products/shoe.jpg') },
                  {id: 12, name: 'vapourmax', cost: 200,  image: require('@/assets/products/vapourmax.jpg') },

            ]
         }
}
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
margin-left:-14px;
padding:4px;
}



</style>