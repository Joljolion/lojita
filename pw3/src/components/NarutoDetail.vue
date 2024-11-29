<template>
    <div class="container" v-if="character">
        <div class="card text-center my-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <img :src="character.image[0]" class="img-thumbnail">
                    </div>
                    <div class="col-9">
                        <h2 class="card-title">{{ character.name }}</h2>

                        <<router-link :to()></router-link>

                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="text-center mt-4" v-else-if="character">
        <p>Carregando...</p>
    </div>
    <div class="text-center mt-4">
        <p>Erro ao carregar personagem</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            character: null,
            loading: true,
            error: false
        }
    },
    methods: {
        fetchCharacter() {
            fetch('https://dattebayo-api.onrender.com/characters/$(this.id)')
            .then(response => {
                return response.json();
            })
            .then (data => {
                this.charater = data;
                this.loading = false;

            })
            .catch(() => {
                this.error = true;
                this.loading = false;
            })
        }
    },
    mounted() {
        this.fetchCharacter() 
    },
    watch: {
        id() {
            this.fetchCharacter()
        }
    }
}
</script>