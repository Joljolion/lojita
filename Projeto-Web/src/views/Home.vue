<template>
    <div class="container-1">
        <div class="texto">
            <h2>Bem-vindo <br>à Doce Delícia!</h2>
            <p>Delicie-se com nossas irresistíveis sobremesas feitas com carinho e os melhores ingredientes. Cada pedaço é uma explosão de sabor que vai conquistar seu paladar. 
                Venha conferir nossas opções e escolher a sua favorita!</p>
            <button>VER MENU</button>
        </div>
        <img src="@/assets/cupcake-img.png" alt="">
    </div>
    <div class="container-2">
      <h2>Nossos Produtos</h2>

      <!-- Carrossel -->
      <div class="carrossel">
        <button @click="prevSlide" class="carrossel-button prev">←</button>

        <div class="carrossel-container">
          <div class="carrossel-item" v-for="(produto, index) in produtos" :key="index" :class="{ active: currentSlide === index }">
            <img :src="produto.imagem" :alt="produto.nome" class="produto-img"/>
            <h3>{{ produto.nome }}</h3>
            <p>{{ produto.descricao }}</p>
          </div>
        </div>

        <button @click="nextSlide" class="carrossel-button next">→</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // Lista de produtos para o carrossel
      produtos: [
        {
          nome: 'Cupcake de Baunilha',
          descricao: 'Delicioso cupcake de baunilha com cobertura cremosa.',
          imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mococa.com.br%2Freceita%2Fcupcake-mococa%2F&psig=AOvVaw2wNRtDlB2Fdqbrh2JODVti&ust=1733428958205000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNChnNX0jooDFQAAAAAdAAAAABAE'
        },
        {
          nome: 'Bolo de Chocolate',
          descricao: 'Bolo de chocolate super macio com recheio de ganache.',
          imagem: '@/assets/produto2.jpg'
        },
        {
          nome: 'Torta de Frutas',
          descricao: 'Torta fresca e saborosa com frutas da estação.',
          imagem: '@/assets/produto3.jpg'
        },
        {
          nome: 'Brownie',
          descricao: 'Brownie recheado com pedaços de chocolate e nozes.',
          imagem: '@/assets/produto4.jpg'
        }
      ],
      currentSlide: 0 // Indica o slide atual
    };
  },
  methods: {
    // Avançar para o próximo slide
    nextSlide() {
      if (this.currentSlide < this.produtos.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0; // Volta ao primeiro produto
      }
    },

    // Voltar para o slide anterior
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.produtos.length - 1; // Vai para o último produto
      }
    }
  }
};
</script>
<style scoped>
body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.container-1 {
    background-color: #F77C94;
    display: flex;
    width: 100%;
    height: 90vh;
    align-items: center;
    justify-content: space-between;
    padding: 0 250px;
}

.container-1 .texto{
    width: 50%;
}

.container-1 .texto h2 {
    color: white;
    font-size: 1.7em;
    font-weight: 600;
    margin-bottom: 20px;
}

.container-1 .texto p {
    color: white;
    font-size: 0.9em;
    font-weight: 400;
    margin-bottom: 30px;
} 

.container-1 .texto button{
    width: 50%;
    height: 50px;
    background-color: #33181D;
    color: white;
    font-size: 1em;
    font-weight: 500;
    font-family: 'Poppins', serif;
    border-style: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.container-1 img {
    width: 45%;
}

.container-2 {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.container-2 h2 {
  font-size: 1.5em;
  font-weight: 600;
  color: #33181D;
  text-align: center;
  margin-bottom: 20px;
}

/* Estilos do Carrossel */
.carrossel {
  position: relative;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.carrossel-container {
  display: flex;
  transition: transform 0.5s ease;
}

.carrossel-item {
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.produto-img {
  width: 80%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin-bottom: 10px;
}

.produto h3 {
  font-size: 1.2em;
  color: #33181D;
  font-weight: bold;
}

.produto p {
  font-size: 0.9em;
  color: #666;
}

/* Estilo dos botões de navegação */
.carrossel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carrossel-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Transição suave entre os slides */
.carrossel-item.active {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.carrossel-item:not(.active) {
  opacity: 0;
}
</style>