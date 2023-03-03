<template>


<div class="container border mt-3">
<h5 class="text-center">Register account</h5>
  <div class="row">
    <div class="col-md-6 offset-md-3">

        <form class="row g-3 needs-validation" @submit.prevent="register">

          <!-- <div class="col-md-12">
            <label for="validationCustom01" class="form-label">Username</label>
                <input type="text" 
                       class="form-control" 
                       id="validationCustom01" 
                       required v-model="registerform.username">
          </div> <br> -->
        
          <div class="col-md-12">
            <label for="validationCustomUsername" class="form-label">Email</label>
              <input type="email" 
                   class="form-control" 
                          required v-model="email">             
          </div> <br>

          <div class="col-md-12">
            <label for="validationCustom03" class="form-label">password</label>
               <input type="password" 
                 class="form-control" 
                        required v-model="password">
          </div> <br>
        
          <div class="col-12">
             <input class="form-check-input" type="checkbox" required>
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
          </div>

          <div class="col-12">
            <button class="btn btn-primary" type="submit">Register</button>
          </div>
        </form>

    </div>
</div>
</div>
    
</template>

<script>
import { useStore } from 'vuex';
import {ref} from 'vue'
  export default {
    setup() {

        const store = useStore();
        const register_form =ref({});

        const register = () => {
            store.dispatch('register', register_form.value);
        }

        return {
            register_form,
            register
        }
        
    },
}
</script>

<style scoped>

</style>