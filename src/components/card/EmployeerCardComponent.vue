<script>
    export default{
        name:"EmployeerCardComponent",
        props:{
           header:{
                type:String,
                require: true
            }, 
            items:{
                type:Array, 
                required: true
            }           
        },
    }
</script>

<template>
    <div class="card">
        <div class="card-header"> {{header}}</div>
        <div class="card-body"> 
            <ul>
                <p v-for="item in items" :key="item">{{ item }}</p>
            </ul>
        </div>
    </div>
</template>

<style>
    .card{        
        padding: 20px;
        margin: 10px;
        width: 324px; 
        height: 376px;
        
    }
    .card-header {
        margin-bottom: 10px;
        text-align: left;
        font-size: 24px;
    }
    .card-body{
        text-align: left;
        margin-left: -13%;
        font-size: 24px;
    }
    
</style>