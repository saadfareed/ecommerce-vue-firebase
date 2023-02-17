import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from '../views/HomePageView.vue';
import CartProductsView from '../views/CartProductsView.vue';
import ProductDetailsView from '../views/ProductDetailsView.vue';
import AddproductsView from '../views/AddproductsView.vue';
import AddcategoryView from '../views/AddcategoryView.vue';
// import FeaturedProductsView from '../views/FeaturedProductsView.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "home",
      component: HomePageView
    },

    //   {
    //   path: '/',
    //   name: "home",
    //   component: FeaturedProductsView
    // },

    {
      path: '/cart',
      name: "cart",
      component: CartProductsView
    },

    {
      path: '/details/:productId/:category',
      name: "details",
      component: ProductDetailsView
    },

    {
      path: '/add',
      name: "addprod",
      component: AddproductsView
    },
    {
      path: '/addcateg',
      name: "addcateg",
      component: AddcategoryView

    }
    
  ]
});

export default router;