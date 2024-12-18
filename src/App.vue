<script setup>
import Navbar from'./components/navbar/Navbar.vue';
import HeaderTitle from './components/HeaderTitle.vue';
import SearchBar from './components/SearchBar.vue';
import Featured from './components/Featured.vue';
</script>

<template>
  <header>
    
    <navbar/>
      <div class="title-header">
         <header-title/>
        
      </div>
      <div class="searchBar">
        <search-bar/>
      </div>
      <Featured/>
      
  </header>
  
  <body>
     
  </body>
 
</template>

<style scoped>
.title-header{
  margin-top: 100px;
}
/* .searchBar{
  margin-top: 100px;
  background-color: #E5F1FF;
  margin-right: 150vh;
  display: flex;
  justify-content: center;
} */

</style> 
