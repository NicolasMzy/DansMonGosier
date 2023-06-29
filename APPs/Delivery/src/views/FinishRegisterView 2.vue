<template>
   <form @submit.prevent="registerForm">
        <label for="name">Restaurant Name :</label><br>
        <input type="text" id="name" name="name" placeholder="Name" v-model="form.name"><br>
        <label for="photo">Photo :</label><br>
        <input type="text" id="photo" name="photo" placeholder="Photo" v-model="form.photo"><br>
        <label for="category">Categorie :</label><br>
        <input type="text" id="category" name="category" placeholder="category" v-model="form.category"><br>
        <h3>Adresse :</h3>
        <label for="line_1">Line 1:</label><br>
        <input type="text" id="line_1" name="line_1" placeholder="Line 1"  v-model="address.line_1"><br>
        <label for="line_2">Line 2:</label><br>
        <input type="text" id="line_2" name="line_2" placeholder="Line 2"  v-model="address.line_2"><br>

        <label for="city">Ville:</label><br>
        <input type="text" id="city" name="city" placeholder="Ville"  v-model="address.city"><br>
        <label for="postcode">Code Postal:</label><br>
        <input type="text" id="postcode" name="postcode" placeholder="Code postal"  v-model="address.postcode"><br>

        <a href="#" class="forget">Forgot password?</a>
        <input type="submit" value="Submit">
        
    </form> 
  </template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

let credentialId = route.params.id;

onMounted(async () => {
  
});
console.log(route.params.id)
const address = ref({
  id_credentials: credentialId,
  type: 'restaurant',
  line_1: '',
  line_2: '',
  city: '',
  country: 'France',
  postcode: '',
})

const form = ref({
    id_credentials: credentialId,
    name:'',
    photo:'',
    id_address: credentialId,
    category: '',
    mean_rate: 0,
    rates: [],
    menus: [],
    items: []
});

const registerForm = async () => {
    try {
      
        await axios.post('http://localhost:3004/address', address.value, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            },
        });
        await axios.post('http://localhost:3006/restaurant', form.value, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            },
        });
        router.push('/');
    } catch (error) {
        console.log(error);
    }
};
</script>
<style scoped>
  @media (min-width: 1024px) {
    .formAuth {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }

  a.forget {
    color: black;
    position: relative;
    align-self: right;
}

  @media (min-width: 1024px) {
    .formAuth {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
  </style>