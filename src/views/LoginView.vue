<template>
  <div>
    <form @submit.prevent="login">
      <input type="email" v-model="email" required placeholder="Email">
      <input type="password" v-model="password" required placeholder="Password">
      <button type="submit">Login</button>
    </form>
    <form @submit.prevent="register">
      <input type="email" v-model="email" required placeholder="Email">
      <input type="password" v-model="password" required placeholder="Password">
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"


export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)

        // const userCredential = await auth.signInWithEmailAndPassword(email.value, password.value);
        // Handle successful login
        // console.log(userCredential);

      } catch (error) {
        // Handle login error
        alert(error.message)
      }
    };

    const register = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        // const userCredential = await auth.createUserWithEmailAndPassword(email.value, password.value);
        // Handle successful registration
        // console.log(userCredential);
      } catch (error) {
        // Handle registration error
        alert(error.message)

      }
    };

    return {
      email,
      password,
      login,
      register
    };
  }
};
</script>
