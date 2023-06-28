<template>
  <header>
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/basket">Basket</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </nav>
      <RouterView />
      
  </header>
</template>

<style scoped>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  color:black;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

export default {
  name :'App',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('./style/reset.css');
.app{
    color : black;
    font-family: 'Roboto', sans-serif;
    margin-top: 0px
  }
</style>
