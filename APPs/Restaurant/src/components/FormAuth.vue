<template>
        <form @submit.prevent="loginForm">
            <label for="fname">Email:</label><br>
            <input type="text" id="fname" name="fname" v-model="form.email" placeholder="Email"><br>
            <label for="lname">Password:</label><br>
            <input type="text" id="lname" name="lname" v-model="form.pwd" placeholder="Password"><br>
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
  pwd: '',
});

const loginForm = async () => {
  try {
    const response = await axios.post('http://localhost:80/login', form.value, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    console.log(response.data)
    console.log((response.data.account_id).toString());
    let accountId = (response.data.account_id).toString();

    localStorage.setItem('accountId', response.data.account_id.toString());
    router.push({ name: 'home', params: { accountId } });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #ccc;
}
select {
  appearance: none;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #ccc;
}

input[type=submit] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ff5757;
  border-radius: 4px;
  color: white;
  background-color: #ff5757;
}
</style>