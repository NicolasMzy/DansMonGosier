<script lang='ts' setup>
import { ref } from 'vue'
</script>

<template>
    <p text-align="center">Or</p>
            
    <button href="/" class="google" type="button">Connect with Google</button><br>
    <button href="/" class="facebook" type="button">Connect with Facebook</button>
</template>

<style scoped>
.facebook {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: black;
  background-color: white;
  background-image: url('../assets/icoFacebook.png');
  background-repeat: no-repeat;
  background-position: left;
}
.google {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: black;
  background-color: white;
  background-image: url('../assets/icoGoogle.png');
  background-repeat: no-repeat;
  background-position: left;
}

</style>