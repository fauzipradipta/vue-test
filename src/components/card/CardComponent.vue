<script>
    export default{
        name:"CardComponent",
        props:{
            data:{
                type: Object, 
                required: true
            },
        },

    };
</script>

<template>
    <div class="card">
        <img :src="data.image" alt="Card Image" class="card-image" />
        <div class="card-content">
            <h3 class="card-title">{{ data.title }}</h3>
            <p class="card-description">{{ data.description }}</p>
        </div>
    </div>
</template>

<style scoped>
    .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    /* overflow: hidden; */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    background-color:  #51A2FD;
    }

    .card-image {
    width: 44%;
    height: 86px;
    /* object-fit: cover; */
    float: left;
    }

    .card-content {
        padding: 16px;
        margin-top: 64px;
    }

    .card-title {
    font-size: 20px;
    margin: 0 0 8px;
    }

    .card-description {
    font-size: 1rem;
    color: #666;
    }
</style>