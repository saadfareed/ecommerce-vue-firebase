<script>
import mycollections from '../firebase'
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



   addtocart(id){
            this.$emit('add-to-cart', id);
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
    

       <div class="row" style="margin-left:-80px; margin-right:-100px;" v-for="product in selectedproduct" :key="product">

          <div class="col-4 sm">
             <img class="img-fluid" :src="product.image" alt=""  style="margin-left:10px; margin-top:4px;" />
          </div>

         <div class="col-5 sm" style="margin-top:10px; margin-left:10px;">
                <p style="fontSize:23px;">{{product.name}}  </p>  
                <p> <span style="color:orange; fontSize:22px;"> {{product.cost}} KES  </span>
                        <strike>30000 kes</strike> <span class="btn btn-success btn-sm">45% off</span> </p> 


                <p class="mb-4" style="fontSize:20px;"> Instock </p>  
                <p> <span style="margin-right:30px;">quantity</span> 
                        <button class="btn btn-light" @click="addcount">+</button> 
                              <span> {{ count }}</span> <button @click="reducecount" class="btn btn-light">-</button> </p> <br>  
                <button class="btn btn-warning" @click="addtocart(12)" style="width:300px; margin-bottom:4px;" >Add to cart  <i class="bi bi-cart-check"></i></button> <br>
         </div>

         <div class="col-2 sm border"  style=" margin-left:20px; padding-left:20px; width:250px;">
              <p><i class="bi bi-bookmark-check-fill"></i>Category: eletronics</p>  
              <p><i class="bi bi-truck"></i> Shipping by us</p>  
              <p><i class="bi bi-rss-fill"></i> Reviews(0)</p> 
              <p style="fontSize:17px;"><i class="bi bi-flag-fill"> </i> Report abuse</p>
              <p><i class="bi bi-share-fill"></i> share this product </p> 
              <span class="socials"> <i class="bi bi-facebook"></i> </span>
              <span class="socials"><i class="bi bi-instagram"></i></span>
              <span class="socials"><i class="bi bi-whatsapp"></i></span> 
              <span class="socials"><i class="bi bi-twitter"></i></span> 
              <span class="socials"><i class="bi bi-tiktok"></i></span> 
          </div>

         
    </div>

        <div class="row " style="margin-top:50px; margin-left:-50px;">
            <h5>Product details</h5>
            <div class="col-sm sm border" v-for="product in selectedproduct" :key="product"> 
            <span> {{product.desc}} </span>
            </div>
        </div>

        <div class="row " style="margin-top:35px;">



            <h5 style="margin-left:-50px;"> Similar products </h5>

              <div class="container">
                <div class="row" style="margin-left:-50px; margin-right:-50px; ">
                  <div class="col-3 bg-light border" style="margin-bottom:20px;" v-for="(prods, index) in familiar" :key="index">
                        <img  :src="prods.image" alt="" class="img-fluid" width="150" height="150"  style="align:center;" />
                        <h6> {{ prods.name }} </h6>
                        <span> {{ prods.cost}} KES</span>  <strike> 2300</strike>
                   </div>
                </div>
             </div>
    <!-- <featured-products-view /> -->

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
    margin-left: 8px;
}

</style>