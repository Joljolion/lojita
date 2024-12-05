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
        <button @click="voltarSlide" class="botao-carrossel anterior">←</button>

        <div class="carrossel-container" :style="{ transform: 'translateX(-' + (slideAtual * 33.33) + '%)' }">
          <div 
            class="item-carrossel" 
            v-for="(produto, index) in produtos" 
            :key="index">
            <img :src="produto.imagem" :alt="produto.nome" class="imagem-produto"/>
            <h3>{{ produto.nome }}</h3>
            <p>{{ produto.descricao }}</p>
          </div>
        </div>

        <button @click="proximoSlide" class="botao-carrossel proximo">→</button>
      </div>
    </div>

    <div class="container-3">
      <div class="texto-2">
        <h2>Sobre Nós</h2>
        <p>Na Doce Delícia, acreditamos que cada sobremesa conta uma história. Desde 2010, combinamos paixão, 
          ingredientes de qualidade e criatividade para trazer o melhor da confeitaria artesanal até você. 
          Nosso compromisso é transformar momentos simples em experiências doces e inesquecíveis. Venha nos conhecer e descubra como é bom saborear a felicidade!</p>
      </div>
      <div class="imagens">
        <img src="https://confetdoceria.com.br/wp-content/uploads/2023/02/IMG_0339-scaled.jpg" alt="">
        <img src="https://cdn0.casamentos.com.br/vendor/6115/3_2/960/jpg/decoracao-de-mesa-de-doces-qauntidade-de-docinhos_13_246115-1553720238.jpeg" alt="">
        <img src="https://xvcuritiba.com.br/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-05-at-10.41.30.jpeg.webp" alt="">
        <img src="https://img.freepik.com/fotos-gratis/vista-de-deliciosas-e-doces-sobremesas-de-cupcake-com-glace_23-2150679640.jpg" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      produtos: [
        {
          nome: 'Cupcake de Baunilha',
          descricao: 'Delicioso cupcake de baunilha com cobertura cremosa.',
          imagem: 'https://img.freepik.com/fotos-premium/cupcake-no-fundo-branco_985046-2281.jpg'
        },
        {
          nome: 'Bolo de Chocolate',
          descricao: 'Bolo de chocolate super macio com recheio de ganache.',
          imagem: 'https://img.freepik.com/fotos-gratis/bolos-de-copo_74190-18.jpg?semt=ais_hybrid'
        },
        {
          nome: 'Torta de Frutas',
          descricao: 'Torta fresca e saborosa com frutas da estação.',
          imagem: 'https://t3.ftcdn.net/jpg/06/22/53/86/360_F_622538689_8peXS9fJS2hM5LMtgr7YQWUU8IHskiDP.jpg'
        },
        {
          nome: 'Brownie',
          descricao: 'Brownie recheado com pedaços de chocolate e nozes.',
          imagem: 'https://t4.ftcdn.net/jpg/02/29/12/83/360_F_229128345_TTMINYwsJdkbukDeP53M6GoHqjUaT2ym.jpg'
        },
        {
          nome: 'Tiramisu',
          descricao: 'Clássico tiramisu com camadas de café e mascarpone.',
          imagem: 'https://www.shutterstock.com/image-photo/closeup-front-view-red-cupcake-600nw-2481316095.jpg'
        }
      ],
      slideAtual: 0, // Indica o slide atual
      produtosPorSlide: 3 // Número de produtos por slide
    };
  },
  methods: {
    // Avançar para o próximo slide
    proximoSlide() {
      if (this.slideAtual < Math.floor(this.produtos.length / this.produtosPorSlide)) {
        this.slideAtual++;
      } else {
        this.slideAtual = 0; // Volta ao primeiro conjunto de produtos
      }
    },

    // Voltar para o slide anterior
    voltarSlide() {
      if (this.slideAtual > 0) {
        this.slideAtual--;
      } else {
        this.slideAtual = Math.floor(this.produtos.length / this.produtosPorSlide); // Vai para o último conjunto de produtos
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
    font-size: 1.9em;
    font-weight: 600;
    margin-bottom: 20px;
}

.container-1 .texto p {
    color: white;
    font-size: 1.1em;
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
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.container-2 h2 {
  font-size: 2.5em;
  font-weight: 600;
  color: #33181D;
  text-align: center;
  margin-bottom: 50px;
}

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

.item-carrossel {
  min-width: 33.33%; /* Exibe 3 produtos por vez */
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.imagem-produto {
  width: 80%;
  max-width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin-bottom: 10px;
}

.item-carrossel h3 {
  font-size: 1.2em;
  color: #33181D;
  font-weight: bold;
}

.item-carrossel p {
  width: 70%;
  font-size: 0.9em;
  color: #666;
}

/* Estilo dos botões de navegação */
.botao-carrossel {
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

.anterior {
  left: 10px;
}

.proximo {
  right: 10px;
}

.botao-carrossel:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.container-3 {
  background-color: #B86E87;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  padding: 0 200px;
  justify-content: space-around;
  flex-direction: row;
}

.container-3 .texto-2 {
  width: 40%;
}

.container-3 .texto-2 h2 {
  font-size: 3em;
  color: white;
  font-weight: 500;
  margin-bottom: 15px;
}

.container-3 .texto-2 p {
  font-size: 1.1em;
  font-weight: 400;
  color: white;
}

.container-3 .imagens{
  width: 45%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.container-3 .imagens img {
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

</style>