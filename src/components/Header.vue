<template>
   <header>
    <div class="logo">
      <img src="https://www.thedesignfrontier.com/wp-content/uploads/2019/05/f1-logo-big.png"/>
      <h2> SEASON 2023</h2>
    </div>
    <button><router-link :to="`/favorites`">Favoritos</router-link></button>
  </header>
</template>

<script>
export default {
    name : "Header"

}
</script>

<style>
header{
    display:flex;
    justify-content : space-between;
    height : 75px;
    background-color:rgb(244, 46, 46);
    align-items: center;
    padding:10px;
  
  }
  .logo{
    display:flex;
    font-family: 'Orbitron', sans-serif;
  }
  .logo img{
    height : 50px;
  }

  header button{
    background-color: white;
    font-family: 'Teko', sans-serif;
    height: 30px;
    border-radius:5px;
    font-size: 20px;
  }
</style>