<template>
    <div class="setting">
      <div class="settings--card" @click="navigateToSettings">
        <div class="block--information">
          <div :style="changeBackground" class="block--img"/>
          <div class="block--text">
            <p class="title">{{ info_settings.name }}</p>
            <p>{{ info_settings.info }}</p>
          </div>
        </div>
        <img class="quote" src="../../assets/settings/quote.png"/>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  interface InfoSettings {
    name: string;
    info: string;
    img: string;
  }
  
  export default defineComponent({
    name: "SettingsCard",
    props: {
      info_settings: {
        type: Object as () => InfoSettings,
        required: true,
      },
    },
    setup(props) {
      const changeBackground = computed(() => {
        return {
          backgroundImage: `url(${props.info_settings.img})`,
        };
      });
  
      const router = useRouter();
  
      const navigateToSettings = () => {
        const formattedName = props.info_settings.name.replace(/\s/g, '').toLowerCase();
         // Supprimer les espaces et mettre en minuscules
        router.push(`/settings/${formattedName}`);
        console.log(`/settings/${formattedName}`)  
      };
      return {
        changeBackground,
        navigateToSettings,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .settings--card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    padding-top: 10px;
  
    // ...
  }
  </style>
  
  
  <style lang="scss" scoped>
      .settings--card{
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
          padding-top: 10px;
          .block--information{
  
              display: flex;
              align-items: center;
              align-content: center;
              gap : 10px;
              .block--img{
                  display: flex;
                  justify-content: center;
                  background-image: url('../assets/settings/user-bold.png');
                  background-size: cover;
                  background-position: center;
                  height: 35px;
                  width: 35px;
                  margin-left:10px;
              }
              .block--text{
                  display: grid;
                  
              }
              p {
                  margin: 2px;
              }
  
              .title{
                  font-weight: 700;
                  font-size: 1.2em;
              }
          
          }
  
          .quote {
              height: 30px;
              margin-right: 10px;
          }
      }
      
  </style>
  