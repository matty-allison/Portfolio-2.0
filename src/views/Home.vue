<template>
  <div id="home">
    <h2>Home</h2>
    <div class="landing">
    <img src="../assets/homeImage-min.jpg" alt="Picture of Matthew Allison">
    <h1>Matthew Allison</h1>
    <h2>Aspiring Fullstack Developer</h2>
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
  align-items: center;
  gap: 25px;
  font-size: 20px;
}

.landing h1, .landing h2 {
  text-shadow: 0px 5px 25px gold
}

#home img {
  width: 20vw;
  height: 40vh;
  margin: 2%;
  border: solid 2px #abd7eb;
  border-radius: 50%;
  box-shadow: 0 5px 25px gold;
}

@media (max-width: 1366px) {
  .landing {
  right: 40%;
  top: 20%;
  gap: 25px;
  font-size: 14px;
  }

  #home img {
  width: 18vw;
  height: 38vh;
  margin: 2%;
  border: solid 2px #abd7eb;
  border-radius: 50%;
  box-shadow: 0 5px 25px gold;
  }
}
</style>
