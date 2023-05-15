<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><h4>Heroic Market </h4></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto d-flex align-items-center">

       

            <li class="nav-item">
               <RouterLink class="link" active-class="active" to="/" >Home</RouterLink>

            </li>
            <li class="nav-item">
              <RouterLink class="link" active-class="active"  to="/cart"><span>cart <i class="bi bi-cart"></i> {{ count  }} </span> </RouterLink> 


            </li>
           
            <li class="nav-item">
            <div class="dropdown" style="margin-top: 17px;">
            <p class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="margin-right: 20px;">{{ isLoggedIn ? name : 'Account' }}</p>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-if="isLoggedIn"><a class="dropdown-item" @click="Logout"> sign out </a></li>
            <li v-if="isLoggedOut"><a class="dropdown-item" @click="Login"> sign in</a></li>
          </ul>
    </div>


            </li>
          </ul>
        </div>
      </div>
    </nav>
   <RouterView />
  
</template>

<script>

import { mapState } from "vuex"

export default {
  name: 'App',
  components: { },

  data() {
    return {
      isLoggedIn: false,
      isLoggedOut: true,

      name : ''
    }
  },


computed:{
  ...mapState(["count"])
  },

methods:{
    addtocart(){ },

    Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('isLoggedIn');
    this.$router.push('/login'); 
    this.isLoggedIn= false;
    this.isLoggedOut= true;
  },

  Login() {
    this.$router.push('/login'); 
  }

},

 mounted() {

  if(localStorage) {
    const username = localStorage.getItem('name')
        
      if(username) {
         this.name=username;
         this.isLoggedIn = true;
         this.isLoggedOut = false;
      }

  }
 } 

}
</script>

<style >
.navbar {
  background-color: #787878; /* dull gray color */
}

.d-flex{
    margin: 6px;
    display: inline;
}
.d-flex, a{
padding-right:15px;
}

.d-flex, span{
padding-right:15px;
 padding-left: 15px;
}

.active{
  font-weight: bold;
  color:darkseagreen;
  text-decoration: none;
}

.link{
  font-weight: bold;
  color:rgb(27, 47, 27);
  text-decoration: none;

}

</style>