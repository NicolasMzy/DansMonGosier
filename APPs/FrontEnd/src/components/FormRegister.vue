<template>
        <form @submit.prevent="registerForm">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" placeholder="Name"><br>
            <label for="surname">Surname:</label><br>
            <input type="text" id="surname" name="surname" placeholder="Surname"><br>
            <label for="email">Email:</label><br>
            <input type="text" id="email" name="email" placeholder="Email"  v-model="form.email"><br>

            <label for="phone">Phone:</label><br>
            <input type="number" id="phone" name="phone" placeholder="Phone"  v-model="form.phone"><br>


            <label for="pass">Password:</label><br>
            <input type="text" id="pass" name="pass" placeholder="Password"  v-model="form.pwd"><br>
            <label for="select-type">What will you be?</label><br>
            <select  v-model="form.type" id="select-type">
                <option value="User">User</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Delivery Person">Delivery Person</option>
            </select>

            <a href="#" class="forget">Forgot password?</a>
            <input type="submit" value="Submit">
            
        </form> 
<br>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';
const router = useRouter();

const form = ref({
    email: '',
    phone:'',
    pwd: '',
    type:''
});

const registerForm = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/accounts', form.value, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        // Add other headers as needed
      },
    });
    console.log(response.data);
    console.log(document.cookie);
    router.push('/');
  } catch (error) {
    console.log(error);
    // Handle the error here
  }
};
</script>