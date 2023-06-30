<template>
        <form @submit.prevent="registerForm">
          <div class="container">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name">
          </div>
          <div class="container">
            <label for="surname">Surname:</label>
            <input type="text" id="surname" name="surname" placeholder="Surname">
          </div>
          <div class="container">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Email"  v-model="form.email">
          </div>

          <div class="container-imp">
            <label for="phone">Phone:</label>
            <div class="container-txt">
              <input type="number" id="phone" name="phone" placeholder="Phone"  v-model="form.phone_nb">
            </div>
          </div>

          <div class="container-imp">
            <label ty for="pass">Password:</label>
            <div class="container-txt">
              <input type="password" id="pass" name="pass" placeholder="Password"  v-model="form.pwd">
            </div>
          </div>

          <div class="container">
            <label for="select-type">What will you be?</label>
            <select  v-model="form.user_type" id="select-type">
                <option value="User">User</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Delivery Person">Delivery Person</option>
            </select>
          </div>

          <div class="container">
            <a href="#" class="forget">Forgot password?</a>
            <input type="submit" value="Submit">
          </div>
            
        </form> 
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';
const router = useRouter();

const form = ref({
    email: '',
    phone_nb:'',
    pwd: '',
    user_type:''
});

const registerForm = async () => {
  try {
    const response = await axios.post('http://localhost:80/register', form.value, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        // Add other headers as needed
      },
    });
    const idCred = await axios.post('http://localhost:80/login', {
      email: form.value.email,
      pwd: form.value.pwd
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        // Add other headers as needed
      },
    });
    console.log(idCred)
    let id = (idCred.data.account_id).toString();
    localStorage.setItem('accountId', idCred.data.account_id.toString());
    router.push({ name: 'registerFinish', params: { id } });
  } catch (error) {
    console.log(error);
    // Handle the error here
  }
};
</script>

<style scoped>
.form-wrapper {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 15px;
}

.form-group {
  margin-bottom: 20px;
}

.container{
  margin-top: 20px;
}

.container-imp{
  margin-top: 20px;
}

.container-txt{
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.action-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #ccc;
  box-sizing: border-box;  /* to ensure padding doesn't increase total width */
}

input[type=submit] {
  width: 100%;
  padding: 12px 20px;
  border: 1px solid brown;
  border-radius: 4px;
  color: white;
  background-color: brown;
  box-sizing: border-box;  /* to ensure padding doesn't increase total width */
}

/* screens wider than 768px */
@media (min-width: 768px) {
  .form-wrapper {
    padding: 0;
  }
}
</style>