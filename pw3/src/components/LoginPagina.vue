<template>
    <div class="container">
        <form action="" class="formulario">
            <h1>Login</h1>
            <label for="">Email</label>
            <input type="email" placeholder="Digite seu email aqui" id="">
            <label for="">Senha</label>
            <input type="password" placeholder="Digite sua senha" name="" id="">
            <input type="submit" value="ENTRAR">
            <p>Ainda não tem conta?</p>
            <a href="">Crie sua conta</a>
        </form>

    </div>
</template>

<style>
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
    width: 350px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container .formulario h1 {
    width: 100%;
    font-size: 35px;
    font-weight: 500;
}

.container .formulario label {
    width: 100%;
    font-size: 22px;
    margin-bottom: 7px;
    font-weight: 400;
}

.container .formulario input[type="email"], input[type="password"]  {
    width: 100%;
    height: 35px;
    border-style: none;
    border-bottom: solid 1px black;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
}

.container .formulario input[type="submit"] {
    width: 100%;
    height: 45px;
    background-color: black;
    color:white;
    font-size: 18px;
    font-weight: 600;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-style: none;
    font-family: "Poppins", sans-serif;
}

.container .formulario p {
    width: 100%;
    margin-bottom: 0;
    
}

.container .formulario a {
    width: 100%;
}


</style>

<script>

export default {
    name: 'LoginPagina',
}

</script>