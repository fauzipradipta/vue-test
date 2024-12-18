<script>
import CardComponent from "./card/CardComponent.vue";
import EmployeerCardComponent from "./card/EmployeerCardComponent.vue";
import EmployeerJobPosting from "./EmployeerJobPosting.vue";

    export default{
        name:"Featured",
        components:{
            CardComponent,
            EmployeerJobPosting
        },
        data(){
            return{
                cards:[
                    {
                        id:1,
                        title:"Webモバイルアプリ開発者",
                        description:"もっと学ぶ",
                        image:"./src/assets/device-tablet.png"
                    },
                    {
                        id:2,
                        title:"iOS開発者",
                        description:"もっと学ぶ",
                        image:"./src/assets/collection.png"
                    },
                    {
                        id:3,
                        title:"機械学習エンジニア",
                        description:"もっと学ぶ",
                        image:"./src/assets/chip.png"
                    }
                ],
            };
        }
    }
</script>

<template>
    
    <h1 class="job-seeker"> 求職者向け: </h1>

    <div class="card-list">
        <CardComponent v-for="item in cards" :key="item.id" :data="item"/> 
    </div>

     <div class="employers">
        <h1> 雇用者向け:</h1>
        <div>
            <EmployeerJobPosting/>
        </div>
    </div> 
    
    <footer>

    </footer>
</template>

<style>
    .card-list {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: center;
        margin-left: -1vw;   
    }

    .job-seeker{
        padding-top: 48px;
    }

    .employers{
        margin-top: 4vw;
    }

    
</style>