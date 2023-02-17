<template>

<div class="container-sm">
 <section class="two">
   <h2> <b> Clearance Deals</b></h2>


    <div class="row" style="margin-top:10px;">

        <div class="col-3  bg-light" 
             v-for="product in products" :key="product.id">
            <img :src="product.image" :alt="product.name" class="img-fluid rounded-top"/> <br>
            <span style="margin-top:20px"> {{ product.name + '   ' + product.cost  }}KES </span>  <br>
            <button class="btn btn-secondary" style="margin:20px" @click="addtocart(product.id)"> add <i class="bi bi-cart-check"></i></button>
            </div>

    </div>
</section>
</div>
    
</template>

<script>
import productsColRef from '../firebase'
import { getDocs } from '../firebase/firestore'

export default {
   name: 'ClearanceDeals',

   methods: {

          async fetchproducts() {
              let productsSnapshot= await getDocs(productsColRef);
              let products = [];
              productsSnapshot.forEach((product) =>{
                products.push(product.data)
              });
             console.log(products);

            // console.log(productsSnapshot);
          },


        addtocart(product){
            this.$emit('add-to-cart', product);
        }     
   },

     data(){
         return{
    
         PRODUCTS: [],
            }
    },
    created() {
        this.fetchproducts();
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
