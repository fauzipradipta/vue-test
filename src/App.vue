<script setup>
import Navbar from'./components/navbar/Navbar.vue';
import HeaderTitle from './components/HeaderTitle.vue';
import SearchBar from './components/SearchBar.vue';
import Featured from './components/Featured.vue';
import EmployeerJobPosting from './components/EmployeerJobPosting.vue';

</script>

<template>
  <header class="header">
        <navbar/>
  </header>  
    
  <div class="body">
      <div class="header-title">
         <HeaderTitle/>
      </div>

      <div class="searchBar">
        <search-bar/>
      </div>
      <div class="featured">
        <Featured/>
      </div>
      


  </div>
</template>

<style scoped>

.searchBar{
  margin-left: -11vw; 
  margin-top: 6vw;
}

.header-title{
  margin-top: 10vw;
  margin-left: -82vw;
}

.featured{
  margin-left: -26vw;
}
</style> 
