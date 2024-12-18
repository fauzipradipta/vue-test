<script>
    export default{
        name:"search-bar"
    };
</script>

<template>
    <div class="search-input">
        <div class="input-container">
            
            <input  
                v-model="keyword"
                type="text"
                placeholder="職種またはキーワード"
                class="input-field"
            />
        </div>
        <div class="input-container">
            <input
                v-model="location"
                type="text"
                placeholder="東京都 足立区"
                class="input-field"
            />
            <button @click="performSearch" class="search-button">検索</button>
        </div>
    </div>
</template>

<style scoped>
    .search-input{
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 5px;
        margin-top: 100px;
        /* background-color: #E5F1FF;
        margin-right: 150vh; */
        
    }

    .input-container {
        display: flex;
        gap: 10px;
    }

    .input-field {
        flex: 1; 
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .icon {
    position: absolute;
    left: 10px;
    color: #1f73d4;
    }

    .search-button {
        background: linear-gradient(to bottom, #75B6FF, #0061CC);
        color: #fff;
        padding: 8px 20px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-size: 14px;
        width: 90px;
    }
</style>