<script>
import { RouterLink } from 'vue-router';
    export default{
    name: "navbar",

};

</script>

<template>
  <nav class="navbar">
    <div class="navbar-left">
      <!-- <router-link>求人検索</router-link>
      <router-link>人材を見つける</router-link>
      <router-link>企業</router-link> -->
    </div>

    <div class="navbar-center">
      <h1 class="logo">Matchit.</h1>
    </div>

    <div class="navbar-right">
      <router-link to="/login">ログイン</router-link>
      <button class="cta-button">今すぐ参加</button>
    </div>
  </nav>
</template>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #007bff;
  margin: auto;
  font-family: Inter;
}

.navbar-left,
.navbar-right {
  display: flex;
  gap: 20px;
}

.navbar-center .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff; /* Blue color for "Matchit." */
}

.cta-button {
  padding: 5px 10px;
  border: 1px solid #007bff;
  border-radius: 20px;
  background-color: white;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
}

.cta-button:hover {
  background-color: #007bff;
  color: white;
}
</style>