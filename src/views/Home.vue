<template>
  <div id="home">
    <h2>Home</h2>
    <div class="landing">
    <img src="../assets/homeImage.jpg" alt="Picture of Matthew Allison">
    <h1>Matthew Allison</h1>
    <h2>Junior Fullstack Developer</h2>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style>
/* #home {
  
} */
.landing {
  position: fixed;
  right: 40%;
  top: 20%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: 20px;
}

#home img {
  width: 20vw;
  height: 40vh;
  margin: 2%;
  border-radius: 50%;
  box-shadow: 0 5px 25px gold;
}
</style>
