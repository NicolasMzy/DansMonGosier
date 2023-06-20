<template>
        <form @submit.prevent="loginForm">
            <label for="fname">Email:</label><br>
            <input type="text" id="fname" name="fname" v-model="form.email" placeholder="Email"><br>
            <label for="lname">Password:</label><br>
            <input type="text" id="lname" name="lname" v-model="form.password" placeholder="Password"><br>
            <a href="#" class="forget">Forgot password?</a>
            <input type="submit" value="Submit">
        </form> 
<br>
</template>
  
<script setup>
import { ref } from 'vue'
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        email: '',
        pwd: ''
      }
    }
  },
  methods: {
    loginForm() {
      axios.post('http://localhost:3000/api/login', this.form, {
      headers: {
        'Access-Control-Allow-Origin': true,
        // Add other headers as needed
      }
    })
        .then(response => {
          console.log(response.data);
          document.cookie = `token=${response.data}; expires=${new Date(new Date().getTime() + 1 * 60 * 1000).toUTCString()}; path=/about`;
          console.log(document.cookie)
          this.$router.push('/about');
        })
        .catch(error => {
          console.log(error);
          // Handle the error here
        });
    }
  }
}
</script>