<template>

<div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3">
    <h4> Add a new product </h4>

    <form  @submit.prevent="addproduct">
             <div class="form-group"> 
            <input type="text" class="form-control mb-2" placeholder="category" v-model="category"/> 
               </div>
            
            <button  class="btn btn-primary" style="align:center;">Add product</button>

    </form>
   </div>
 </div>
</div>

</template>


<script>

// import productsColRef from '../firebase';
import mycollections from '../firebase'
import {addDoc} from 'firebase/firestore';
export default {
    data(){
        return{
            category: '',  
        };
    },
    methods:{
        async addproduct() {
            const addedprod= await addDoc(mycollections.categoryColRef, this.$data);
            console.log(addedprod);
            alert("products added successfully");
            this.$router.push("/");

        }
    }
    
}
</script>

<style scoped>


</style>