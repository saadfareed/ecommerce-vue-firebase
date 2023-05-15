<template>


  <div class="container border mt-5">
  <h5 class="text-center">Sign In</h5>
    <div class="row">
      <div class="col-md-6 offset-md-3">
  
          <form class="row g-3 needs-validation"  @submit.prevent="Login">       
          
            <div class="col-md-12">
              <label for="validationCustomUsername" class="form-label">Email</label>
                <input type="email" 
                     class="form-control" 
                            required placeholder="Enter email"
                               v-model="postdata.email">             
            </div> <br>
  
            <div class="col-md-12 mb-2">
              <label for="validationCustom03" class="form-label">password</label>
                 <input type="password" 
                   class="form-control" 
                          required v-model="postdata.password"
                             placeholder="Password">
            </div> <br>
          
        
  
            <div class="col-12">
              <button class="btn btn-primary mb-3" type="submit" style="width: 60%; margin-left: 16%;">Login</button>
            <p class="mb-5">   <router-link to="/register" style="text-decoration: none; margin-left: 20%;">   create an account </router-link></p>

            </div>
          </form>
  
      </div>
  </div>
  </div>
      
  </template>
  
  <script>
  import axios from '@/axios';
  
  export default {
      name: 'LoginView',
      components: { },
  
      data(){
        return {
          postdata: {
                 email:'',
                 password: '',
        }
  
      }
    },
  
    methods: {
  
      Login() {
  
  console.log(this.postdata);
  
  axios.ulogin({
         email: this.postdata.email,
         password: this.postdata.password,   
    })
    
    .then(response => {
      const token = response.token;
      const name = response.user.name;
      const user_id = response.user.id;
  
      localStorage.setItem('token', token);
      localStorage.setItem('user_id', user_id);
      localStorage.setItem('name', name);
      localStorage.setItem('isLoggedIn', true);
      // console.log(name); 
      this.$router.push('/'); 
    })
    .catch(error => {
      console.log(error);
    });
  },
    }
  }
    </script>
    
    <style>
    
    </style>