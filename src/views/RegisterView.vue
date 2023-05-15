<template>


<div class="container border mt-3">
<h5 class="text-center mt-3">Register account</h5>
  <div class="row">
    <div class="col-md-6 offset-md-3">

        <form class="row g-3 needs-validation" @submit.prevent="Register">

          <div class="col-md-12">
            <label for="validationCustom01" class="form-label">Username</label>
                <input type="text" 
                       class="form-control" 
                       id="validationCustom01" 
                       required v-model="postdata.name">
          </div> <br>
        
          <div class="col-md-12">
            <label for="validationCustomUsername" class="form-label">Email</label>
              <input type="email" 
                   class="form-control" 
                          required  v-model="postdata.email">             
          </div> <br>

          <div class="col-md-12">
            <label for="validationCustom03" class="form-label">password</label>
               <input type="password" 
                 class="form-control" 
                        required v-model="postdata.password">
          </div> <br>
        
          <div class="col-12">
             <input class="form-check-input" type="checkbox" required>
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
          </div>

          <div class="col-12">
            <button class="btn btn-primary mb-4" style="width: 250px; margin-left: 20%;" type="submit">Register</button>
          </div>
        </form>

    </div>
</div>
</div>
    
</template>
<script >
  
 
import axios from '@/axios';


export default {
    name: 'RegisterView',
    components: {},

    data() {
      return {

        postdata: {
             name:'',
             email:'',
             password: '',
    }
        
      }
    },

    methods: {

Register() {

console.log(this.postdata);

axios.register({
  name: this.postdata.name,
 email: this.postdata.email,
 password: this.postdata.password,   
})

.then(response => {
const token = response.token;
const name = response.user.name;

localStorage.setItem('token', token);
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