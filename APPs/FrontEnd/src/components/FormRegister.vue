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


<script>
import { ref } from 'vue'
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        email: '',
        phone:'',
        pwd: '',
        type:''

      }
    }
  },
  methods: {
    registerForm() {
      axios.post('http://localhost:3000/api/accounts', this.form, {
      headers: {
        'Access-Control-Allow-Origin': true,
        // Add other headers as needed
      }
    })
        .then(response => {
          console.log(response.data);
          this.$router.push('/');
        })
        .catch(error => {
          console.log(error);
          // Handle the error here
        });
    }
  }
}
</script>