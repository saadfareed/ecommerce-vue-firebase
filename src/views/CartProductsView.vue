<template>


<div class="container mt-4 screen-container">
  <p>Cart({{count }})</p>

  <div class="row">

    <div class="col-12 border col-md-8">
      <div class="row" v-for="(cartitems, index) in cart" :key="index">
        
        <div class="col-3 col-sm-3 col-md-3" >
          <img :src="cartitems.image" :alt="cartitems.name" class="img-fluid img-crt" style="height: 100px;" />
        </div>
        <div class="col-6 col-sm-6 col-md-6" style="margin-top: 20px;">
          <small class="mt-4" style="font-family: 'Nunito', sans-serif;">{{ cartitems.title }}</small>
          
          <button class="btn btn-warning btn-sm d-flex align-items-center mt-4" @click="removecart(index)">
            <i class="bi bi-trash"></i> Remove
          </button>

        </div>
        <div class="col-2 col-sm-2 col-md-2" style="margin-left: 30px">
          <span class="mt-4">{{ cartitems.cost }} KES</span>

           <div class="d-flex align-items-center mt-4">
            <button class="btn btn-light  mr-2" @click="addcount">+</button>
            <span>{{ itemsCount }}</span>
            <button class="btn btn-light  ml-2" @click="reducecount">-</button>
          </div>
        </div>
           <hr>
    </div>

    </div>
    <div class="col-12 col-md-3" style="margin-left:10px;">
      <h6><b>CART SUMMARY</b></h6>
      <!-- <hr style="width:100%;"> -->

      <div class="border" style="padding: 10px;">

      <h6 style="font-family: 'Nunito', sans-serif;">Sub Total:  <span style="margin-left: 30px;"> {{ getTotalcost() }} KES </span> </h6>
      <p class="mt-4" >Delivery fee not included</p>
      <h5 class="mt-4">Pay via M-PESA</h5>
      <form @submit.prevent="paynow">
        <div class="form-group">
          <input type="text" v-model="phone" class="form-control" placeholder="Enter M-PESA phone number">
        </div>
        <button class="btn btn-primary mt-3" style="margin-left: 20%; width: 60%;">Pay</button>
      </form>
    </div>
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
            itemsCount: 1
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
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Montserrat:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.img-crt{
 max-width: 100%;
  height: auto;
}

.screen-container{
    max-width: 90%;
  margin: 0 auto;
}

</style>