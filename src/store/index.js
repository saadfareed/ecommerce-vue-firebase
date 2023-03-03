import { createStore } from "vuex"
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

 export default  createStore({

  //this method returns all the state that we want to store in this globalized store
    state() {
        return {
           count:0,
           cart:[],
           user:null
        }
    },

//this object holds methods helps us to change the state of a value globaly
    mutations: {

          //set user
          SET_USER (state, user) {
              state.user = user
             },

          //remove user
          CLEAR_USER (state) {
              state.user =null 
             },

           //this method takes two argurments the state passed by vuex and payload :this is any value we want our method to have access to 
          addtocart(state,payload1) {
            //this increases the count of cart items in the app.vue component
            state.count +=1;  
          //this pushes the payload to the cart array  
            state.cart.push(payload1);
          }, 

          removecart(state){
            state.count -=1;
            // state.cart.splice(payload, 1);
          }
       },

  actions: {

//login a user to your system
  async login ({commit}, details) {
        const  { email, password } = details
        try{
          await signInWithEmailAndPassword(auth, email, password)
        }
        catch(error){
          switch(error.code){
            case 'auth/user-not-found':
              alert("user not found")
              break;
            case 'auth/wrong-password':
              alert("wrong password")
              break;
            default:
              alert(error.message);  
              console.log(error.message)
          }
        return;
        }
        commit('SET_USER', auth.currentUser)
         this.$router.push('/');
    },


  //register a user to the system
  async register ({commit}, details) {
        const  { email, password } = details
        try{
          await createUserWithEmailAndPassword(auth, email, password)
        }
        catch(error){
          switch(error.code){
            case 'auth/email-already-in-use':
              alert("email already in use")
              break;
              case 'auth/invalid-email':
                alert("Invalid email")
              break;
              case 'auth/operation-not-allowed':
                alert("operation not allowed")
              break;
              case 'auth/weak-password':
                alert("Weak password")
              break;
              default:
                alert(error.message);  
                console.log(error.message)

          }
        return;
        }
        commit('SET_USER', auth.currentUser)
        this.$router.push('/');
      },

  //logout user from the user
  async logout ({ commit }) {

    await(signOut(auth))
    commit('CLEAR_USER')
    this.$router.push('/login');
      }

     } 
 })
