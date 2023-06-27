<script lang='ts' setup>
import { ref } from 'vue'
import axios from 'axios'
var email = document.getElementById('email')
var password = ''

async function login() {
    try{
        console.log(email)
        console.log(password)
        const {data} = await axios.post('http://localhost:3000/api/login', {
        email: email,
        password: password
        }, {
            headers: {
            'Access-Control-Allow-Origin': true,
            'Content-Type': 'application/json'
            }
        })

        alert(data)
    } catch(error) {
        alert(error)
    }
    
}

</script>

<template>
        <form v-on:submit="login()">
            <label for="fname">Email:</label><br>
            <input type="text" id="fname" name="fname" v-model="email" placeholder="Email"><br>
            <label for="lname">Password:</label><br>
            <input type="text" id="lname" name="lname" v-model="password" placeholder="Password"><br>
            <a href="#" class="forget">Forgot password?</a>
            <input type="submit" value="Submit">
            
        </form> 
<br>
</template>
  
