<template>

<div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3">
    <h4> Add a new product </h4>

    <form  @submit.prevent="addproduct">
             <div class="form-group"> 
            <input type="text" class="form-control mb-2" placeholder="product name" v-model="name"/> 
               </div>
             <div class="form-group"> 
            <input type="text" class="form-control mb-2" placeholder="product cost" v-model="cost"/> 
             </div>
             <div class="form-group"> 
            <input type="text" class="form-control mb-2 " placeholder="image url" v-model="image"/> 
             </div>
            <textarea class="form-control mb-2" cols="65" rows="5" v-model="desc">Description</textarea>

            <button  class="btn btn-primary" style="align:center;">Add product</button>

    </form>
   </div>
 </div>
</div>

</template>


<script>

import productsColRef from '../firebase';
import {addDoc} from 'firebase/firestore';
export default {
    data(){
        return{
            name: '',
            cost: '',
            image: '',
            desc: ''   
        };
    },
    methods:{
        async addproduct() {
            const addedprod= await addDoc(productsColRef, this.$data);
            console.log(addedprod);
            alert("products added successfully");
            this.$router.push("/");

        }
    }
    
}
</script>

<style scoped>


</style>