<script>
    export default{
    name: "navbar",

};

</script>

<template>
  <nav class="navbar">
    <div class="navbar-left">
      <span>求人検索</span>
      <span>人材を見つける</span>
      <span>企業</span>
    </div>

    <div class="navbar-center">
      <h1 class="logo">Matchit.</h1>
    </div>

    <div class="navbar-right">
      <span to="/login">ログイン</span>
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
  margin-bottom: 50vw;
  margin-left: -75%;
  font-family: Inter;
  width: 350%; 
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