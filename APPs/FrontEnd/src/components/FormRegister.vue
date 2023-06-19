<script lang='ts' setup>
import { ref } from 'vue'
//import VuePhoneNumberInput from 'vue-phone-number-input';
import axios from 'axios'
//import 'vue-phone-number-input/dist/vue-phone-number-input.css';
var email = document.getElementById('email')
var pwd = ''
var phone = ''
var type = ''


async function register() {
    console.log(email)
    try{
        const {data} = await axios.post('http://localhost:3000/api/accounts', {
        'mail': email,
        'pwd': pwd,
        'phone': phone,
        'type': type
        }, {
            headers: {
            'Access-Control-Allow-Origin': true
            }
        }
        )

        alert('You are well registered')
    } catch(error) {
        alert(error)
    }
    
}
</script>

<template>
        <form v-on:submit="register()">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" placeholder="Name"><br>
            <label for="surname">Surname:</label><br>
            <input type="text" id="surname" name="surname" placeholder="Surname"><br>
            <label for="email">Email:</label><br>
            <input type="text" id="email" name="email" placeholder="Email" v-model="email"><br>

            <label for="phone">Phone:</label><br>
            <input type="number" id="phone" name="phone" placeholder="Phone" v-model="phone"><br>


            <label for="pass">Password:</label><br>
            <input type="text" id="pass" name="pass" placeholder="Password" v-model="pwd"><br>
            <label for="select-type">What will you be?</label><br>
            <select v-model="type" id="select-type">
                <option value="User">User</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Delivery Person">Delivery Person</option>
            </select>

            <a href="#" class="forget">Forgot password?</a>
            <input type="submit" value="Submit">
            
        </form> 
<br>
</template>
