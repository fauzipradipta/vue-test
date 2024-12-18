<script>
    import EmployeerCardComponent from './card/EmployeerCardComponent.vue';

    export default{ 
        name:"Employee Job Posting",
        components:{
            EmployeerCardComponent
        },
       
    }
</script>

<template>
    <div class="employeer-card">
        <div class="basic-posting">
            <EmployeerCardComponent 
            header=" 基本的な求人掲載"
             :items="['標準的な候補者応募', '一般的な候補者アラート', '標準的な履歴書アクセス', '限られた人材インサイト', '候補者との限られたメッセージング']"
        />
        </div>
        

        <div class="premium-posting">
            <EmployeerCardComponent
                header="プレミアムな求人掲載"
                :items="['優先的な候補者応募', 'カスタマイズされた候補者アラート', '注目の履歴書アクセス', '独占的な人材インサイト', '候補者との無制限のメッセージング']"
                />
        </div>
    
    </div>
</template>

<style>
    .employeer-card{
        display: flex;
        justify-content: space-between;
    }

    .basic-posting{
        background-color: #F8F9FA;
        
    }

    .premium-posting{
        background-color: #E5F1FF;
        margin-right: 17vw;
    }
</style>