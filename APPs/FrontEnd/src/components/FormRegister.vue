<script lang='ts' setup>
import { ref } from 'vue'
const name = ref('Name')
const surname = ref('Surname')
const email = ref('Email')
const password = ref('Password')
</script>

<template>
        <form action="#">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" placeholder="Name"><br>
            <label for="surname">Surname:</label><br>
            <input type="text" id="surname" name="surname" placeholder="Surname"><br>
            <label for="email">Email:</label><br>
            <input type="text" id="email" name="email" placeholder="Email"><br>
            <label for="pass">Password:</label><br>
            <input type="text" id="pass" name="pass" placeholder="Password"><br>
            <a href="#" class="forget">Forgot password?</a>
            <router-link to="/"><input type="submit" value="Submit"></router-link>
            
        </form> 
<br>
</template>
  