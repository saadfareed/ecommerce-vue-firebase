<template>

<div class="container"   style="font-family: 'Alata', sans-serif;">
  <div class="row"  style="margin-left:-30px; margin-top:20px;">
      <div class="col-12 col-sm-6 col-md-3 ms-md-3 mb-3 mb-sm-0 border">
           <div class="row">
              <span class="categ-title w-100 text-white">Product Categories<i class="bi bi-chevron-double-down" style="margin-left:13px;"></i></span>
            </div>


          <ul style="list-style-type: none; margin: 3px;">
             <li  class="text-muted" 
                 v-for="categoriy,index in  categorys" :key="index" 
                 @click="productcategory(categoriy.id, categoriy.title)"

               v-bind:style="{'background-color': itemBackgroundColor(index)}"
                    @mouseover="setHoverIndex(index)"
                    @mouseleave="resetHoverIndex"  >
                    <small>
                {{ categoriy.title }} 
                </small>
              </li>
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

  <div class="row mt-2" >
    <div class="col-sm-12 col-md-6 col-lg-12">

        <form class="d-flex" @submit.prevent="searchproduct">
                <input class="form-control mb-2" type="search" placeholder="Search" aria-label="Search" style="width:70%; margin-left: 10%;" v-model="postsearch.search">
                <input class="btn btn-success btn-sm" type="submit" style="margin-left: 10px; height: 40px;" value="search">
       </form>
        </div>
  </div>

  <h3  style="text-align: center; margin-top: 50px;"> <b> FEATURED PRODUCTS </b></h3>


  <div class="row ">
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="product, index in products" :key="index">
    <p>{{ products.title }}</p>
    <div class="card border" @mouseover="product.hovered = true" @mouseleave="product.hovered = false">
      <router-link :to="{path : `/details/${product.id}/${product.category}`}">
        <img :src="product.image" :alt="product.name" class="card-img-top" />   
      </router-link> 
      <div class="card-body">
        <h6 class="card-title" style="font-family: 'Nunito', sans-serif;" >  {{ product.title }}</h6>
        <p class="card-text" style="font-weight: bold;"> KSh{{ product.cost }}.00    <span class="text-warning">save 15%</span> </p>
       
        <button class="btn btn-primary btn-sm" @click="addtocart(product)" v-show="product.hovered">Add to cart</button>
      </div>
    </div>
  </div>
</div>


  <div class="row border" style="margin-top: 50px;">
  <h4 style="margin-top: 25px; text-align: center;"> <b> TOP CATEGORIES </b></h4>


        <div class="col-sm-6 col-md-4 col-lg-3 mb-4 "  v-for="categoriy,index in  cats" :key="index" 
                  @click="productcategory(categoriy.id, categoriy.title)"
                  v-bind:style="{ 'transform': itemhover(index) }"
                  @mouseover="setHoverIndex(index)" 
                  @mouseleave="resetHoverIndex">

        <div class="card bg-light" style="border: none;">

          <div class="card-body">
            <img :src="categoriy.image" :alt="categoriy.title" class="card-img" />   
            <button type="button"  class="btn btn-outline-secondary text-dark" style="margin-left: 150dp;">SHOP NOW</button>
            </div> 
        </div>  
    </div>
  </div>


  <div class="row border" style="margin-top: 100px;">
    <h3  style="margin-top: 20px; text-align: center;"> <b> SEE WHAT OUR CUSTOMERS HAVE TO SAY </b> </h3>
    <div class="col-sm-6 col-md-4 ">
      <div class="card" style="border: none;">
        <div class="card-body bg-light">
          <img :src="image" class="circle-image" alt="Circular Image"  style="radius: 50%; height: 70px; margin-left: 35%;" />  
          <p class="text-primary" style="margin-left: 40%;">eve</p>
      <small style="font-family: 'Nunito', sans-serif;" >I had an exceptional experience as a customer on this e-commerce site. The wide selection of products and the user-friendly interface made it a joy to browse and find exactly 
                   what I was looking for.</small>
     </div>
    </div>
   </div>

    <div class="col-sm-6 col-md-4">
      <div class="card" style="border: none;">
         <div class="card-body bg-light" >
      <img :src="image" class="circle-image" alt="Circular Image" style="radius: 50%; height: 70px; margin-left: 35%;" />  
      <p class="text-primary" style="margin-left: 40%;">sasha</p>
      <small style="font-family: 'Nunito', sans-serif;" > The secure checkout process gave me peace of mind, and the delivery was fast and reliable, 
        with my items arriving in perfect condition thanks to the careful packaging </small>
      </div>
    </div> 
  </div>

      
   <div class="col-sm-6 col-md-4">
     <div class="card " style="border: none;">
        <div class="card-body bg-light">
      <img :src="image"  class="rounded-circle img-circle" alt="Circular Image" style="radius: 50%; height: 70px; margin-left: 35%;" />   
      <p class="text-primary" style="margin-left: 40%;">anita</p>
      <small style="font-family: 'Nunito', sans-serif;" >With competitive prices, convenient navigation, and a seamless shopping experience, 
        this e-commerce site has become my go-to destination for all my online shopping needs </small>
      </div>
    </div>
  </div>  


  </div>
        

  </div>

  <footer-view />
    





</template>


<script > 

import axios from '@/axios'; 
import {mapMutations,mapState} from "vuex"
import FooterView from './FooterView.vue'


  export default{
    name: 'HomepageView',
    components: { 
      FooterView
    },
        data(){
            return {
              hoverIndex: -1,
              products: [],
              categorys: [],
              selectedcategory: 1,
              image: require('@/assets/mhead.jpg') ,
              postsearch: {
                input:''
              }
               }
        },

    methods: {
      setHoverIndex(index) {
      this.hoverIndex = index
    },
    resetHoverIndex() {
      this.hoverIndex = -1
    },

    itemhover(index){
      if (index === this.hoverIndex) {
        return 'scale(1.2)';
      }
      else{
        return 'scale(1.0)';
      }

    },
    
    itemBackgroundColor(index) {
      if (index === this.hoverIndex) {
        return '#17202A'
      } else {
        return 'white'
      }
    },

    ...mapMutations(["addtocart"]),


//load products from  api
    getfamiliarproducts(category){ 
          axios.getfamiliarproduct(category)
             .then(response=> {
                this.products = response.data;
                console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
        },


 //load product categories
    categories(){ 
          axios.getcategories()
          .then(response=> {
             this.categorys = response.data;
             console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
        },
        
        //search a product 

    searchproduct() {
      console.log(this.postsearch.search)
       axios.searching({
        search: this.postsearch.search
       })
          .then(response=> {
            this.products = response.data;
             console.log(response);
          })
          .catch(error => {
            console.log(error);
          })

      },

     
      //pass product category on clicking a category in the list and get only the products on that category   
        productcategory(id,category){
            console.log(category);
            console.log(id);
            this.selectedcategory = id;
            this.getfamiliarproducts(id);
          }
    },

      //call this methods on launching this app
      created() {
            this. categories();
            this.getfamiliarproducts(this.selectedcategory);
        },

        watch:{

          postsearch(newVal) {
            if(newVal === ''){
              this.getfamiliarproducts(this.selectedcategory);
            }
          }
          
        },



       //if a user clicks to get products from certain category  filter the array fed by api
      computed:{

        cats() {

         return  this.categorys.slice(1,5);


        },


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

@import url('https://fonts.googleapis.com/css2?family=Alata&family=Montserrat:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');


.circle-image {
      border-radius: 50%;
    }

.col-sm-6 col-md-4 col-lg-3 mb-4 {
  transition: transform 0.9s;
}

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
/* width: 200px; */
height:40px;
font-size:21px; 
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