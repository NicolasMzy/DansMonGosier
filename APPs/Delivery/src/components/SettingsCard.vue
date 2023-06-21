<template>
  <div class="setting">
    <div class="settings--card">
        <div class="block--information">
            <div :style="changeBackground" class="block--img"/>
            <div class="block--text">
                <p class="title">{{info_settings.name}}</p>
                <p>{{info_settings.info}}</p>
            </div>
        </div>
        <img class="quote" src="../assets/settings/quote.png"/>
      </div>

  </div>
</template>

<script>
//IMPORT
import {computed} from 'vue'
export default {
  name : "SettingsCard",
  props:{
      info_settings : Object
  },
  setup(props){
      const changeBackground = computed(() => {
          return {
              backgroundImage:  `url(${props.info_settings.img})`,
          }
      })
  //return
  return {
      changeBackground
  }
  
  }
}
</script>

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
                font-weight: 900;
                font-size: 1.2em;
            }
        
        }

        .quote {
            height: 30px;
            margin-right: 10px;
        }
    }
    
</style>