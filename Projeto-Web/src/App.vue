<script>
import '@fortawesome/fontawesome-free/css/all.css';
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      exibirCarrinho: false, // Controle para exibir a popup
      itensCarrinho: [ // Exemplos de produtos no carrinho
        { id: 1, nome: 'Produto A', preco: 10.0 },
        { id: 2, nome: 'Produto B', preco: 20.0 },
      ],
    };
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'Login' && this.$route.name !== 'Cadastro';
    },
  },
  methods: {
    alternarCarrinho() {
      this.exibirCarrinho = !this.exibirCarrinho;
    },
    fecharCarrinho() {
      this.exibirCarrinho = false;
    },
  },
};
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
      <i @click="alternarCarrinho" class="icone-carrinho fas fa-shopping-cart"></i>
    </nav>
  </header>

  <div v-if="exibirCarrinho" class="popup-carrinho">
    <div class="conteudo-carrinho">
      <h2>Meu Carrinho</h2>
      <ul>
        <li v-for="item in itensCarrinho" :key="item.id">
          {{ item.nome }} - R$ {{ item.preco.toFixed(2) }}
        </li>
      </ul>
      <button @click="fecharCarrinho" class="botao-fechar">Fechar</button>
    </div>
  </div>
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

header nav i{
  color: white;
  font-size: 1.5em;
}

.popup-carrinho {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.conteudo-carrinho {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

.conteudo-carrinho h2 {
  margin-bottom: 15px;
}

.conteudo-carrinho ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.conteudo-carrinho li {
  margin: 10px 0;
}

.conteudo-carrinho .botao-fechar {
  background: #F77C94;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
