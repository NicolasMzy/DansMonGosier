<template>
  <div class="setting">
    <div class="settings--card">
      <div class="block--information">
        <div :style="changeBackground" class="block--img"/>
        <div class="block--text">
          <p class="title">{{ info_settings.name }}</p>
          <p>{{ info_settings.info }}</p>
        </div>
      </div>
      <div>
        <label class="switch">
          <input type="checkbox" v-model="isActive">
          <span class="slider" :class="{ active: isActive }"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

interface InfoSettings {
  name: string;
  info: string;
  img: string;
}

export default defineComponent({
  name: 'NotificationsCard',
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

    const isActive = computed({
      get() {
        return props.info_settings.isActive;
      },
      set(value) {
        props.info_settings.isActive = value;
      },
    });

    return {
      changeBackground,
      isActive,
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

  .block--information {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 10px;

    .block--img {
      display: flex;
      justify-content: center;
      background-size: cover;
      background-position: center;
      height: 40px;
      width: 40px;
      margin-left: 10px;
    }

    .block--text {
      display: grid;
    }

    p {
      margin: 2px;
    }

    .title {
      font-weight: 700;
      font-size: 1.2em;
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-right: 10px;
    border-radius: 17px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: grey;
    transition: 0.4s;
    border-radius: 17px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #d42323;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .active {
    background-color: #d42323 !important;
  }
}
</style>
