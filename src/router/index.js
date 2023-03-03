import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from '../views/HomePageView.vue';
import CartProductsView from '../views/CartProductsView.vue';
import ProductDetailsView from '../views/ProductDetailsView.vue';
import AddproductsView from '../views/AddproductsView.vue';
import AddcategoryView from '../views/AddcategoryView.vue';
import LoginView from '../views/LoginView.vue'
import Registerview from '../views/RegisterView.vue'
// import FeaturedProductsView from '../views/FeaturedProductsView.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "home",
      component: HomePageView,
      meta: {
        requiresAuth: true
      }
    },

      {
      path: '/login',
      name: "login",
      component: LoginView
    },

    {
      path: '/register',
      name: "register",
      component: Registerview
    },

    {
      path: '/cart',
      name: "cart",
      component: CartProductsView,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/details/:productId/:category',
      name: "details",
      component: ProductDetailsView,
      meta: {
        requiresAuth: true
      }
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