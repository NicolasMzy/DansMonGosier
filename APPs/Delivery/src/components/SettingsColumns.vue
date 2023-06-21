<template>
  <div class="settings-grid">
    <SettingsCard v-for="(card,index) in settings " :info_settings="card" :key="index"/>
  </div>
</template>

<script>
import SettingsCard from './SettingsCard.vue'

export default {
    name : 'SettingCollumns',
    components : {
        SettingsCard,
    },
    setup() {

        const settings = [
            
            {
                name: 'Profile information',
                info: 'Change your account information',
                img: '/src/assets/settings/user-bold.png',
            },

            {
                name : 'Change Password',
                info : 'Change your password',
                img : '/src/assets/settings/lock-key-bold.png'
            },
            
            {
                name : 'Payment methods',
                info : 'Add your credit and debit cards',
                img : '/src/assets/settings/credit-card-bold.png'
            },
            
            {
                name : 'Location',
                info : 'add or remove your locations',
                img : '/src/assets/settings/map-pin-bold.png'
            },
            
            {
                name : 'Refer to friends',
                info : 'get a parain code',
                img : '/src/assets/settings/users-bold.png'
            }

        ]

        return{
            settings,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>