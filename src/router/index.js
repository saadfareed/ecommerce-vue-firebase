import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from '../views/HomePageView.vue';
import CartProductsView from '../views/CartProductsView.vue';
import ProductDetailsView from '../views/ProductDetailsView.vue';
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
        // requiresAuth: true
        
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
      // meta: {
      //   requiresAuth: true
      // }
    },

  ]
});

        //navigation guard to check if the user is logged in and has a valid token
        router.beforeEach((to, from, next) => {
          const isLoggedIn = localStorage.getItem('isLoggedIn');
          const token = localStorage.getItem('token');
          const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        
          if (requiresAuth && (!isLoggedIn || !token)) {
            // Redirect the user to the login page if they're not logged in or have no valid token
            next({ name: 'login' });
          } else {
            next();
          }
        });

export default router;