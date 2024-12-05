<template>
  <div class="container">
    <div class="form-produto">
      <h1>Cadastro de Produto</h1>
      <!-- Formulário de Cadastro -->
      <form @submit.prevent="cadastrarProduto" class="formulario">
        <label for="nome">Nome do Produto</label>
        <input type="text" v-model="produto.nome" placeholder="Digite o nome do produto" required />

        <label for="descricao">Descrição</label>
        <textarea v-model="produto.descricao" placeholder="Digite a descrição do produto" required></textarea>

        <label for="imagem">Imagem</label>
        <input type="url" v-model="produto.imagem" placeholder="URL da imagem do produto" required />

        <label for="preco">Preço</label>
        <input type="number" v-model="produto.preco" placeholder="Digite o preço do produto" required />

        <button type="submit">{{ editMode ? 'Atualizar Produto' : 'Cadastrar Produto' }}</button>
      </form>
    </div>

    <div class="lista-produtos">
      <h2>Lista de Produtos</h2>
      <!-- Lista de Produtos -->
      <ul>
        <li v-for="prod in produtos" :key="prod.id">
          <div>
            <img :src="prod.imagem" alt="Imagem do produto" class="produto-imagem" />
            <h3>{{ prod.nome }}</h3>
            <p>{{ prod.descricao }}</p>
            <p>Preço: R$ {{ prod.preco.toFixed(2) }}</p>
          </div>
          <div>
            <button @click="editarProduto(prod)">Editar</button>
            <button @click="excluirProduto(prod.id)">Excluir</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Produtos',
  data() {
    return {
      produto: {
        id: null,
        nome: '',
        descricao: '',
        imagem: '',
        preco: ''
      },
      produtos: [],  // Armazena os produtos cadastrados
      editMode: false  // Indica se estamos editando um produto ou cadastrando um novo
    };
  },
  methods: {
    // Cadastrar ou atualizar um produto
    cadastrarProduto() {
      if (this.editMode) {
        this.atualizarProduto();
      } else {
        this.adicionarProduto();
      }
    },
    // Adiciona um novo produto à lista
    adicionarProduto() {
      const novoProduto = { ...this.produto, id: Date.now() };  // ID único gerado com o timestamp
      this.produtos.push(novoProduto);
      this.limparFormulario();
    },
    // Atualiza os dados de um produto existente
    atualizarProduto() {
      const index = this.produtos.findIndex(p => p.id === this.produto.id);
      if (index !== -1) {
        this.produtos.splice(index, 1, this.produto);  // Substitui o produto editado
      }
      this.limparFormulario();
    },
    // Exclui um produto da lista
    excluirProduto(produtoId) {
      this.produtos = this.produtos.filter(prod => prod.id !== produtoId);
    },
    // Preenche o formulário com os dados do produto para edição
    editarProduto(produto) {
      this.produto = { ...produto };
      this.editMode = true;
    },
    // Limpa o formulário e reseta o estado de edição
    limparFormulario() {
      this.produto = { id: null, nome: '', descricao: '', imagem: '', preco: '' };
      this.editMode = false;
    }
  }
};
</script>

<style scoped>
/* Estilo geral da página */
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* Formulário de Cadastro */
.form-produto {
  width: 30%; 
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

/* Estilos do formulário */
.formulario {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.formulario label {
  font-size: 1.1em;
  margin: 10px 0 5px;
}

.formulario input,
.formulario textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.formulario button {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  font-size: 1.1em;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.formulario button:hover {
  background-color: #45a049;
}

/* Lista de Produtos */
.lista-produtos {
  width: 45%; /* A lista de produtos ocupa 45% da largura da tela */
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
}

ul li div {
  flex: 1;
}

.produto-imagem {
  width: 50px;
  height: 50px;
  border-radius: 4px;
}

button {
  padding: 8px 15px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #1976D2;
}

button:last-child {
  background-color: #F44336;
}

button:last-child:hover {
  background-color: #D32F2F;
}

</style>
