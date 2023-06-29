<template>
  <div class="home">
    <div class="settings--container">
      <p class="settings--title">Settings</p>
      <SettingsColumns/>
    </div>
    <div class="notifications--container">
      <p class="notifications--title">Notifications</p>
      <NotificationsColumns/>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'

import SettingsColumns from '../../components/settings/SettingsCollumns.vue'
import Header from '../../components/componentsGlobaux/Header.vue'
import NotificationsColumns from '../../components/settings/NotificationsColumns.vue'

export default defineComponent({
  name:'SettingsVue',
  components : {
    SettingsColumns,
    Header,
    NotificationsColumns,
  }
})
</script>

<style lang="scss" scoped>
  .home{
    
    .settings--container{
      
      .settings--title{
        font-weight: 700;
        font-size: 1.8em;
        margin-left: 3%;
      }
    }
    .notifications--container{
      
      .notifications--title{
        font-weight: 700;
        font-size: 1.8em;
        margin-left: 3%;
      }
    }
  }

</style>