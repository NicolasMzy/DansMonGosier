<template>
  
    <div class="navbar-H">
        <div class="positionbox">
            <p class="tposition">Ta Position</p>
            <p class="adresse">{{ address }}</p>
        </div>
        <router-link to="/settings">
            <div class="settingsbox" @click="goToSettings"></div>
        </router-link>
    
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    
    setup() {
        let address = ref('');
        let accountId = localStorage.getItem('accountId');
        const router = useRouter()
        onMounted(async () => {
            const response = await axios.get('http://localhost:3004/address-by-credentials/' + accountId);
            console.log(response.data.city)
            address.value = response.data.line_1.toString() + ", " + response.data.city.toString()
            console.log(address)
        });
        
        const goToSettings = () => {
            router.push({ name: 'SettingsVue' }) // suppose que le nom de la route pour SettingsVue.vue est 'SettingsVue'
        }

        return {
            goToSettings,
            address
        }
    },

    

}
</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Roboto:wght@700&display=swap');
    .navbar-H{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .positionbox {
            
            margin-left: 5%;
            font-weight: 900;

            .tposition{
                
                color: #c51212;
            }

        }
        
        .settingsbox {
            
            display: flex;
            justify-content: center;
            background-image: url('../../assets/settings.png');
            background-size: cover;
            background-position: center;
            height: 30px;
            width: 30px;
            border-radius: 50%; 
            margin-right: 15px;
        }

    }
       

</style>