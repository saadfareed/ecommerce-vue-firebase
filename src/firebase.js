// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getFirestore, collection} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaEeop-ovDy8SQ_q0Kg4d8BCNy3mz02G4",
  authDomain: "market-store-2c92c.firebaseapp.com",
  projectId: "market-store-2c92c",
  storageBucket: "market-store-2c92c.appspot.com",
  messagingSenderId: "236097223019",
  appId: "1:236097223019:web:401bb84059f9c12a4eb42e"
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




