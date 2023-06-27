<template>
  <div class="speciality--card">
    <div :style="changeBackground" class="speciality--image"></div>
    <p>{{ info_speciality.name }}</p>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';

interface Speciality {
  name: string;
  img: string;
}

// type-only
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'SpecialityCard',
  props: {
    info_speciality: {
      type: Object as PropType<Speciality>,
      required: true,
    },
  },
  setup(props) {
    const changeBackground = computed(() => {
      return {
        backgroundImage: `url(${props.info_speciality.img})`,
      };
    });

    return {
      changeBackground,
    };
  },
});
</script>

<style lang="scss">
.speciality--card {
  width: 100%;
  height: auto;
  display: grid;
  justify-content: center;
  min-width: 150px;

  .speciality--image {
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
    height: 100px;
    width: 100px;
    border-radius: 10%;
  }

  p {
    text-align: center;
    font-weight: 900;
  }
}
</style>