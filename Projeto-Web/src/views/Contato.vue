<template >
    <div class="container-contato">
        <div class="texto">
            <h2>Entre em <br>Contato Conosco</h2>
            <p>Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou precisar de mais informações, fique à vontade para nos enviar uma mensagem. Nossa equipe está pronta para responder suas questões o mais rápido possível. 
                Escolha a forma que for mais conveniente para você e entraremos em contato em breve!</p>
        </div>
        <form action="" method="" class="formulario">
            <label for="">Nome:</label>
            <input type="text" name="" id="" placeholder="Digite seu nome">
            <label for="">Email:</label>
            <input type="email" name="" id="" placeholder="Digite seu email">
            <label for="">Mensagem:</label>
            <textarea name="" id="" cols="4"></textarea>
            <input type="submit" value="ENVIAR">
        </form>
    </div>
</template>
<script>
export default {
    name: "Contato"
}
</script>
<style scoped>
    .container-contato{
        width: 100%;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 200px;
    }

    .container-contato .texto {
        width: 45%;
    }

    .container-contato .texto h2 {
        font-size: 2.4em;
        font-weight: 500;
        margin-bottom: 15px;
    }

    .container-contato .texto p {
        font-size: 1.2em;
        font-weight: 300;
    }

    .container-contato .formulario{
        width: 30%;
        height: 500;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px 20px;
        border-radius: 10px;
    }

    .container-contato .formulario label{
        font-size: 1.3em;
        font-weight: 400;
        margin-bottom: 5px;
    }

    .container-contato .formulario input{
        margin-bottom: 20px;
        font-size: 1em;
        border-style: none;
        border-bottom: black 1px solid;
        height: 40px;
    }

    .container-contato .formulario textarea{
        width: 100%;
        font-size: 1em;
        margin-bottom: 20px;
    }

    .container-contato .formulario input[type="submit"] {
        width: 100%;
        height: 40px;
        background-color: black;
        border-style: none;
        color: white;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.2em;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
</style>