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
  
<script lang='ts' setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';
const router = useRouter();

const form = ref({
  email: '',
  password: '',
});

const loginForm = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/login', form.value, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        // Add other headers as needed
      },
    });
    console.log(response.data);
    document.cookie = `token=${response.data}; expires=${new Date(Date.now() + 1 * 60 * 1000).toUTCString()}; path=/about`;
    console.log(document.cookie);
    router.push('/about');
  } catch (error) {
    console.log(error);
    // Handle the error here
  }
};
</script>