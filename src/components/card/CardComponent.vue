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
                <img :src="data.image" alt="Card Image" class="card-icon" />
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
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 30%;
        height: 9vw;
        background-color:  #51A2FD;
    }

    .card-icon{               
        font-size: 30px;
    }

    .card-content {
        padding: 16px;
        margin-top: 5px;
    }

    .card-title {
        font-size: 20px;
        margin: 0 0 8px;
        color: white;
    }

    .card-description {
        font-size: 15px;
        color: white;
        float: right;
    }
</style>