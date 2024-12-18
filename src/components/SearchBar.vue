<script>
    export default{
        name:"search-bar"
    };
</script>

<template>
    <div class="search-input">
        <div class="input-container">
            <img src="../assets/SearchIcon.png" class ="icon"/>
            <input 
                v-model="keyword"
                type="text"
                placeholder="職種またはキーワード"
                class="search-job-input"
            />
        </div>
        <div class="location-input-container">
            <img src="../assets/location.png" class="location-icon"/>
            <input
                v-model="location"
                type="text"
                placeholder="東京都 足立区"
                class="location-input"
            />
            <button @click="performSearch" class="search-button">検索</button>
        </div>
    </div>
</template>

<style scoped>
    .search-input{
       
        height: 72px;
        display: flex;
        background-color: #E5F1FF;
        width: 117%;        
        margin-left: -39%;
        border-radius: 5px;  
        border-color: #E5F1FF; 
    }

    .input-container, .location-input-container {
        display: flex;
        padding: 5px;
        border: none;
        border-radius: 4px;    
        margin-left: 10%;   
        
    }
    .location-input-container{
        margin-left: 6%; 
    }

    .search-job-input, .location-input {
        flex: 1; 
        padding: 8px;
        width: 276px; 
        height: 51px;
        border-radius: 4px;
        background-color: #E5F1FF;
        border: none #E5F1FF ;
    }

    .location-input{
        left: 10%;
    }
    .icon {
        position: absolute;        
        left: 26%;
        top:31vw;
        color: #1E6FDA;
    }
    .location-icon {
        position: absolute;
        right:55%;
        top:31vw;
        color: #1E6FDA;
    }

    .search-button {
        background: linear-gradient(to bottom, #75B6FF, #0061CC);
        color: #fff;
        padding: 8px 20px;
        border: none;
        border-radius: 26px;
        cursor: pointer;
        font-size: 14px;
        width: 134px;
        right: 10%;
    }
</style>