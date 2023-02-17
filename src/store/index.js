import { createStore } from "vuex"

//update localstorage when things are added




 export default  createStore({

  //this method returns all the state that we want to store in this globalized store
    state() {
        return {
           count:0,
           cart:[],
        }
    },

//this object holds methods helps us to change the state of a value globaly
    mutations: {
        //this method takes two argurments the state passed by vuex and payload :this is any value we want our method to have access to 
          addtocart(state,payload1) {
            //this increases the count of cart items in the app.vue component
              state.count +=1;  
            //this pushes the payload to the cart array  
            state.cart.push(payload1);
            // this.id=payload1;
          }, 
          removecart(state){
            state.count -=1;
            // state.cart.splice(payload, 1);

          }
    },




 })
