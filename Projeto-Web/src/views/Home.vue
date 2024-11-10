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

    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>
<style>
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
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 25px;
}

.container-1 .texto p {
    color: white;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 30px;
} 

.container-1 .texto button{
    width: 50%;
    height: 60px;
    background-color: #33181D;
    color: white;
    font-size: 25px;
    font-weight: 500;
    font-family: 'Poppins', serif;
    border-style: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.container-1 img {
    width: 700px;
}
</style>