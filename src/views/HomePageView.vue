<template>

<div class="container">
  <div class="row"  style="margin-left:-30px; margin-top:20px;">
      <div class="col-12 col-sm-6 col-md-3 ms-md-3 mb-3 mb-sm-0">
           <div class="row">
              <span class="categ-title">All categories <i class="bi bi-list"></i></span>
            </div>

          <ul style="list-style-type: none;">
             <li v-for="category,index in  categorys" :key="index"  @click="productcategory(category.category)" >
                {{ category.category }} </li>
          </ul>
      </div>

<div class="col-12 col-sm-6 col-md-8 h-90">
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://toimarket.africa/wp-content/uploads/2022/09/ankara-dresses.jpg" class="d-block w-100 h-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://image.kilimall.com/kenya/shop/adv/ff2bb7f8db9c475f11f429326c21bc16.jpg.webp" class="d-block w-100 h-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://image.kilimall.com/kenya/shop/adv/b81a5998e6289e78fafdb3c1bc5939a1.jpg.webp" class="d-block w-100 h-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://image.kilimall.com/kenya/shop/adv/14d8569870d4f31788cbc718f56c0f22.jpg.webp" class="d-block w-100 h-100" alt="...">
          </div>
            <div class="carousel-item">
            <img src="https://image.kilimall.com/kenya/shop/adv/b81a5998e6289e78fafdb3c1bc5939a1.jpg.webp" class="d-block w-100 h-100" alt="...">
          </div>
            <div class="carousel-item">
            <img src="https://image.kilimall.com/kenya/shop/adv/e44e31189d404d5621586ee4e265c14d.jpg.webp" class="d-block w-100 h-100" alt="...">
          </div>
      </div> 
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>


<div class="container" style="margin-top:70px;">
  <h2 @click="details('12')"> <b> Featured products </b></h2>
  <div class="row">
    <div class="col-md-3 bg-light" v-for="(product, index) in categoryitems" :key="index" >
      <div class="card mb-3 border" style="max-width: 18rem;" @mouseover="product.hovered = true" @mouseleave="product.hovered = false">
        <router-link :to="{path : `/details/${product.id}/${product.category}`}">
          <img :src="product.image" :alt="product.name" class="img-fluid rounded-top"/>  
        </router-link> 
        <div class="card-body">
          <h6 class="card-title">{{ product.name }}</h6>
          <p class="card-text">{{ product.cost}}</p>
          <button class="btn btn-primary btn-sm"  @click="addtocart(product)" v-show="product.hovered">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>


<script > 

import mycollections from '../firebase'
import { getDocs } from 'firebase/firestore'
import {mapMutations,mapState} from "vuex"


  export default{
    name: 'HomepageView',

        data(){
            return {
              products: [],
              categorys: [],
              selectedcategory: ' ',
               }
        },

    methods: {

    ...mapMutations(["addtocart"]),

       //getting all products from firebase database
          async fetchproducts() {
              let productsSnapshot= await getDocs(mycollections.productsColRef);
              let products = [];
              productsSnapshot.forEach((product) => {
                let productsData = product.data();
                productsData.id= product.id;
                products.push(productsData)
              });
              this.products =products;
            },

       //getting product categories from firebase    
          async fetchcategories(){
              let categorySnapshot= await getDocs(mycollections.categoryColRef);
              let categories = [];
                 categorySnapshot.forEach((category) =>{
                 let categoriesData = category.data();
                 categoriesData.id= category.id;
                 categories.push(categoriesData)
                });
             this.categorys =categories;
           },
           
      //pass product category on clicking a category in the list and get only the products on that category   
        productcategory(category){
            this.selectedcategory = category;
          }
    },

      //call this methods on launching this app
      created() {
            this.fetchproducts();
            this.fetchcategories();
        },

       //if a user clicks to get products from certain category  filter the array fed by firebase
      computed:{

       ...mapState(["products"]),

          categoryitems(){
            if(this.selectedcategory){
                return this.products.filter((product) =>product.category.toLowerCase().includes(this.selectedcategory.trim()));
            }
            return this.products;
        }

    }  
   }  
</script>


<style scoped>

.disabledButton{
  display: none; 
}

.container-sm{
  width: 100%;
  margin-left:20px;
  margin-top: 20px;
}

.categ-title{
text-align: center;  
background:green; 
width: 200px;
height:40px;
font-size:18px; 
color:white; 
margin-bottom: 8px;
}

.lg-img{
    width: 400px;
    height: 200px;
    margin-right:-10px ;
    float: right;
    align-items: right;
}

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

.card {
  border: 1px solid #ccc;
  padding: 10px;
  position: relative;
}
.card.hovered .card-button {
  display: block;
}
.card-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: none;
}

</style>