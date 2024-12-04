<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  computed: {
    showHeader() {
      return this.$route.name !== 'Login';
    }
  }
}
</script>

<template>
  <header v-if="showHeader">
    <div class="logo">
      <img src="@/assets/logo.jpeg" alt="">
      <h1>Lojita</h1>
    </div>
    <nav>
      <RouterLink to="/" class="link">Home</RouterLink>
      <RouterLink to="/sobre-nos" class="link">Sobre Nós</RouterLink>
      <RouterLink to="/contato" class="link">Contato</RouterLink>
      <RouterLink to="/login" class="link">Login</RouterLink>
    </nav>
  </header>
  <RouterView class="router" />
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", serif;;
}

header{
  width: 100%;
  height: 10vh;
  background-color: #F77C94;
  display: flex;
  padding: 0 250px;
  align-items: center;
  justify-content: space-between;
}

header .logo {
  width: 20%;
  display: flex;
  align-items: center;
}

header .logo h1 {
  font-size: 1.2em;
  font-weight: 500;
  color: white;
}

header .logo img {
  width: 25%;
  margin-right: 15px;
  border-radius: 100%;
}

header nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
}

header nav .link {
  color: white;
  font-size: 0.9em;
  font-weight: 400;
  text-decoration: none
}
</style>
