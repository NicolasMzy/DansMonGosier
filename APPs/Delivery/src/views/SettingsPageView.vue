<template>
    <div class="settings">
        <div class="title">
            <p class="title--account">Account</p>
            <p class="title--settings">Settings</p>
        </div>
        <div class="description">
            <p>Update your settings like notifications, payments, profile edit etc.</p>
        </div>
        <SettingsCollumns/>
        <div class="Notifications--container">
            <p class="notifications--text">NOTIFICATIONS</p>
            <NotificationsCollumns/>
        </div>
    </div>
</template>

<script>
import SettingsCollumns from '../components/SettingsColumns.vue';
import NotificationsCollumns from '../components/NotificationsColumns.vue';

export default {
    components : {
        SettingsCollumns,
        NotificationsCollumns,
    }
}
</script>

<style lang="scss">
    
    .settings{

        .title{
            
            display: flex;
            flex-direction: row;
            font-size: 2em ;
            font-weight: 900;
            gap : 10px;
            margin-left: 2%;
            
            .title--settings {
                color: #D42323;
            }
        }

        .description {
            color: grey;
        }

        .notifications--text{
            font-size: 1.4em ;
            margin-left: 5%;
            font-weight: 900;
        }
        
    }
</style>