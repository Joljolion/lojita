<template>
    <div class="container">
        <form action="" class="formulario">
            <h1>Login</h1>
            <label for="">Email</label>
            <input type="email" placeholder="Digite seu email aqui" id="">
            <label for="">Senha</label>
            <input type="password" placeholder="Digite sua senha" name="" id="">
            <input type="submit" value="ENTRAR">
        </form>

    </div>
</template>

<style>
.container {
    font-family: "Poppins", sans-serif;;
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/img-back.jpg');
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
    height: 420px;
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
    border-bottom: solid 2px black;
    margin-bottom: 20px;
}

.container .formulario input::placeholder {
    font-size: 16px;
    font-weight: 400;
}

.container .formulario input[type="submit"] {
    width: 100%;
    height: 45px;
    background-color: black;
    color:white;
    font-size: 18px;
    font-weight: 400;
    border-radius: 10px;
    margin-top: 10px;
    border-style: none;
    font-family: "Poppins", sans-serif;
}



</style>

<script>

export default {
    name: 'LoginPagina',
}

</script>