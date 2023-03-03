<script>
import mycollections from '../firebase'
import { mapMutations } from "vuex"
import { getDoc, getDocs,  doc} from 'firebase/firestore'

export default {
    name: 'ProductDetailsView',
    components:  { },

//method called on launching the application
    created() {
      //get values from params and pass them to global variables
        let productId=this.$route.params.productId;
        this.productid=productId;
        let category=this.$route.params.category;
        this.selectedcategory =category;
      //calling methods to launch on create
        this.getproduct();
        this.filteredproducts();

    },

    data(){
        return {
            count: 1,
            selectedproduct: [],
            productid: null,
            docRef:null,
            selectedcategory: null,
            products: [],
            productname: ''
        }
    },

    methods: {

      
    ...mapMutations(["addtocart"]),


      //get the product with specified id clicked by the user in home page
      async getproduct() {
            let productdata= [];
            let productref = doc(mycollections.productsColRef,this.productid);
            this.docRef = productref;
            let product= await getDoc(this.docRef);
            let pickedproduct = product.data();
            this.productname= pickedproduct.name;
            productdata.push(pickedproduct);
            this.selectedproduct = productdata;
        },

      //get familiar products to display below
      async filteredproducts() {
              let productsSnapshot= await getDocs(mycollections.productsColRef);
              let products = [];
              productsSnapshot.forEach((product) =>{
              let productsData = product.data();
              productsData.id= product.id;
              products.push(productsData)
              });
             this.products =products;
          },



 
    addcount(){
        this.count +=1;
    },
    reducecount(){
      this.count -=1;
    }

    },

    computed: {
      //filter products in the array to get the similar products
      familiar() {
      return this.products.filter((product) =>product.category.toLowerCase().includes(this.selectedcategory.trim()));
    }
  } 
}
</script>



<template>
    
       <div class="ttt" style="display:inline; margin-left:45px; margin-top:90px; ">
    <small>  <a href="" style="text-decoration:none; color:black;">home</a> > <a href="" style="text-decoration:none; color:black;">{{ selectedcategory }}</a>   <a href="" style="text-decoration:none; color:black;"></a> </small>
     </div>

 <div class="container" >
    
<div class="row border" v-for="product in selectedproduct" :key="product">
  <div class="col-sm-4 col-md-4">
    <img class="img-fluid" :src="product.image" alt="" />
  </div>

   <div class="col-sm-8 col-md-7" style="margin-top:10px;">
      <h5 class="mb-3">{{product.name}}</h5>  
    
      <div class="mb-3" style="font-size:18px;">{{product.cost}}.KES
      <strike> <small style="color:aqua;">30000.KES </small></strike> 
      <span class="btn btn-success btn-sm" style="margin-left:4px;">45% off</span>
      </div> 
      
      <p class="mb-3" style="font-size:17px;">Instock</p>

      <p class="mb-3">Quantity 
      <button class="btn btn-light" @click="addcount">+</button> 
      <span>{{ count }}</span> 
      <button @click="reducecount" class="btn btn-light">-</button>  </p>

    <button class="btn btn-warning" @click="addtocart(12)" style="width:100%; margin-bottom:4px;">Add to cart 
      <i class="bi bi-cart-check"></i>
    </button>

    <p class="mt-3"> <i class="bi bi-rss-fill"></i> <span class="socials">Reviews(0) </span> </p> 

    <p class="mt-3"> share
    <span class="socials"><i class="bi bi-facebook"></i></span>
    <span class="socials"><i class="bi bi-instagram"></i></span>
    <span class="socials"><i class="bi bi-whatsapp"></i></span> 
    <span class="socials"><i class="bi bi-twitter"></i></span> 
    <span class="socials"><i class="bi bi-tiktok"></i></span>  </p>
   </div>

</div>

<div class="row " style="margin-top:30px;">
      <h5>Product details</h5>
      <div class="col-sm sm border" v-for="product in selectedproduct" :key="product"> 
      <span> {{product.desc}} </span>
      </div>
</div>


<div class="row " style="margin-top:35px;">
  <h5> Similar products </h5>
  <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="(prods, index) in familiar" :key="index">
    <div class="card border" @mouseover="prods.hovered = true" @mouseleave="prods.hovered = false">
      <router-link :to="{path : `/details/${prods.id}/${prods.category}`}">
        <img :src="prods.image" :alt="prods.name" class="card-img img-fluid"/>  
      </router-link> 
      <div class="card-body">
        <h6 class="card-title">{{ prods.name }}</h6>
        <p class="card-text">{{ prods.cost }}</p>
        <button class="btn btn-primary btn-sm" @click="addtocart(prods)" v-show="prods.hovered">Add to cart</button>
      </div>
    </div>
  </div>
</div>


 </div>

</template>

<style scoped>
h2{
    text-align: center;
}

.lg-img{
    width: 320px;
    height: 270px;
    float: left;
    margin-left: -13px;
}
.socials{
    margin-left: 2px;
}

</style>