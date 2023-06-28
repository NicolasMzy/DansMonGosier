<template>
  <div>
    
    <div class="navbar" :class="{ 'navbar-visible': isNavbarVisible }">
      <div class="navbar-item" @click="navigate('home')">
        <img src="../assets/icons/house-fill.svg" alt="Home" class="navbar-image" />
        Home
      </div>
      <div class="navbar-item" @click="navigate('search')">
        <img src="../assets/icons/magnifying-glass-bold.svg" alt="Search" class="navbar-image" />
        Search
      </div>
      <div class="navbar-item" @click="navigate('orders')">
        <img src="../assets/icons/file-text-bold.svg" alt="Orders" class="navbar-image" />
        Orders
      </div>
      <div class="navbar-item" @click="navigate('accounts')">
        <img src="../assets/icons/user-bold.svg" alt="Accounts" class="navbar-image" />
        Accounts
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const isNavbarVisible = ref(false);
    let prevScrollPos = ref(window.pageYOffset);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      isNavbarVisible.value = prevScrollPos.value >= currentScrollPos;
      prevScrollPos.value = currentScrollPos;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    const navigate = (page: string) => {
      // Handle navigation to different pages here
      // You could use vue-router or another navigation method
      console.log("Navigating to", page);
    };

    return {
      isNavbarVisible,
      navigate
    };
  }
};
</script>

<!-- <script lang="ts">
export default {
  data() {
    return {
      isNavbarVisible: false,
      prevScrollPos: window.pageYOffset
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.pageYOffset;
      this.isNavbarVisible = currentScrollPos <= this.prevScrollPos;
      this.prevScrollPos = currentScrollPos;
    },
    navigate(page) {
      // Gérer la navigation vers les différentes pages ici
      // Vous pouvez utiliser vue-router ou une autre méthode de navigation
      console.log("Navigating to", page);
    }
  }
};
</script> -->

<style>
.navbar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #f2f2f2;
  transition: transform 0.3s ease-in-out;
}

.navbar-visible {
  transform: translateY(0);
}

.navbar-hidden {
  transform: translateY(100%);
}

.navbar-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.navbar-image {
  display: block;
  width: 35px;
  height: 35px;
  margin-top: 5px;
}
</style>