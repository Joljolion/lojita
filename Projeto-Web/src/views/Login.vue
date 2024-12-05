<template>
    <div class="container">
        <form @submit.prevent="entrar" class="formulario">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input type="email" placeholder="Digite seu email aqui" id="email">
            <label for="senha">Senha</label>
            <input type="password" placeholder="Digite sua senha" id="senha">
            <input type="submit" value="ENTRAR">
        </form>

    </div>
</template>

<style scoped>
.container {
    font-family: "Poppins", sans-serif;
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/img-doces.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container .formulario {
    box-sizing: border-box;
    padding: 0 40px;
    background-color: white;
    border-radius: 15px;
    width: 25%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.container .formulario h1 {
    width: 100%;
    font-size: 1.8em;
    font-weight: 500;
    margin-bottom: 35px;
}

.container .formulario label {
    width: 100%;
    font-size: 1.2em;
    margin-bottom: 7px;
    font-weight: 400;
}

.container .formulario input[type="email"], input[type="password"]  {
    width: 100%;
    height: 40px;
    border-style: none;
    border-bottom: solid 1px black;
    margin-bottom: 20px;
    font-size: 1em;
    font-weight: 400;
}

.container .formulario input[type="submit"] {
    width: 100%;
    height: 45px;
    background-color: black;
    color:white;
    font-size: 1em;
    font-weight: 600;
    border-radius: 10px;
    margin-bottom: 25px;
    margin-top: 10px;
    border-style: none;
    font-family: "Poppins", sans-serif;
}


</style>

<script>

export default {
  name: "Login",
  methods: {
    entrar() {
      // Redirecionar para a página de Cadastro de Produtos
      this.$router.push("/cadastro");
    },
  },
};
</script>