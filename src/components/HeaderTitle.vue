<script>
    export default{
    name: "header-title",

};
</script>
<template>    
    <div class="heading">
         <div class="left-image">
            <img src="../assets/Resume.png" alt="left-picture" class="person-image">
        </div>

        <div class="description-center">
            <h1 class="main-title"> 夢のある仕事を見つけ</h1>
            <h1 class="main-title">てください。</h1>
            <p class="description"> 主要な企業からの求人情報を豊富に取り揃えています。
                 <br/> 今すぐあなたのキャリアアップを実現しましょう。
            </p>
        </div>

       <div class="right-image">
            <img src="../assets/undraw_hiring_re_yk5n 1.png" alt="right-picture" class="resume-image">
        </div>  
        
    </div> 
   
</template>


<style>
   
.person-image {
  width: 296px; 
  height: auto;
}

.main-title{
    font-size: 64px;
    text-align: center;
    font-style: 'Roboto';
    font-family: 'Inter',serif;
}

.resume-image {
    width: 296px;     
    height: auto;
}

.description {
  font-size: 1rem;
  line-height: 1.5;
  color : #959595;
  text-align: center;
}

.heading{
    display: flex;
    justify-content: space-between;
    margin-left: 46vw;
}
</style>