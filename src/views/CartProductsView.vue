<template>

<p>{{count }}</p>

<div class="container mt-4 screen-container">
  <div class="row" style="margin-bottom:4px;">
    <div class="col-12 border col-md-8">
      <div class="row" v-for="(cartitems, index) in cart" :key="index">
        <div class="col-3 col-sm-3 col-md-3 mb-1">
          <img :src="cartitems.image" :alt="cartitems.name" class="img-fluid img-crt" />
        </div>
        <div class="col-7 col-sm-7 col-md-7 mb-4">
          <h5 class="mt-4">{{ cartitems.name }}</h5>
          
          <button class="btn btn-warning btn-sm d-flex align-items-center mt-4" @click="removecart(index)">
            <i class="bi bi-trash"></i> Remove
          </button>

        </div>

        <div class="col-2 col-sm-2 col-md-2 mb-4">
          <h5 class="mt-4">{{ cartitems.cost }} KES</h5>

           <div class="d-flex align-items-center mt-4">
            <button class="btn btn-light  mr-2" @click="addcount">+</button>
            <span>{{ count }}</span>
            <button class="btn btn-light  ml-2" @click="reducecount">-</button>
          </div>
        </div>
           <hr>

      </div>

    </div>
    <div class="col-12 col-md-3 border" style="margin-left:10px; padding: 20px;">
      <h6><b>CART SUMMARY</b></h6>
      <hr style="width:100%;">
      <h6>Sub Total: {{ getTotalcost() }} KES</h6>
      <p class="mt-4">Delivery fee not included</p>
      <h5 class="mt-4">Pay via M-PESA</h5>
      <form @submit.prevent="paynow">
        <div class="form-group">
          <input type="text" v-model="phone" class="form-control" placeholder="Enter M-PESA phone number">
        </div>
        <button class="btn btn-primary btn-block mt-3">Pay</button>
      </form>
    </div>
  </div>
</div>




    
</template>

<script>

import {mapState} from "vuex"

export default {
    name: 'CartProducts',

    computed:{
    ...mapState(["cart","count"]),

    // ...mapMutations(["removecart"]) 

        },
   
    data(){
        return{
            cartitems: [],
            totalcost:'',
            }

        },  


    methods:{

    getTotalcost(){
        let sum=0;
        for(let i = 0; i<this.cart.length; i++) {
            sum+=parseInt(this.cart[i].cost.replace(',', ''));
        }
        return sum;
    },
    
    removecart(id){
        this.count -=1;
       this.cart.splice(id, 1);
    }



   },

//    created() {
//       this.items();
//    }
}
</script>

<style scoped>

.img-crt{
 max-width: 100%;
  height: auto;
}

.screen-container{
    max-width: 90%;
  margin: 0 auto;
}

</style>