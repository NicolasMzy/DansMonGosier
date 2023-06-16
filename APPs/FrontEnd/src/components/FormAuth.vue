<script lang='ts' setup>
import { ref } from 'vue'
const text = ref('Email')
const text2 = ref('Password')
</script>

<template>
        <form action="#">
            <label for="fname">Email:</label><br>
            <input type="text" id="fname" name="fname" placeholder="Email"><br>
            <label for="lname">Password:</label><br>
            <input type="text" id="lname" name="lname" placeholder="Password"><br>
            <a href="#" class="forget">Forgot password?</a>
            <router-link to="/about"><input type="submit" value="Submit"></router-link>
            
        </form> 
<br>
</template>
  
