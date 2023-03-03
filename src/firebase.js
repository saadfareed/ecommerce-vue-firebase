// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getFirestore, collection} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB12jr3L3FZ77QxGOOh7xVX9liFDJrk4xY",
  authDomain: "market-place-vue-19a34.firebaseapp.com",
  projectId: "market-place-vue-19a34",
  storageBucket: "market-place-vue-19a34.appspot.com",
  messagingSenderId: "804275974507",
  appId: "1:804275974507:web:74e6022b20a61fe7571c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// using Firestore database
const db = getFirestore(app);

//create products collection
const productsColRef = collection(db, "products");

//create categories collection
const categoryColRef = collection(db, "categories");

//create cart collection 
const cartColRef = collection(db, "cartitems");

//using firebase authentication
const auth = getAuth(app)
 
export default { auth, productsColRef, categoryColRef, cartColRef };




