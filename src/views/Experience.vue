<template>
  <div id="experience">
    <div class="Box1">
      <div class="boxTitle">
      <h3 class="company">Funky Lemon</h3>
      <p class="time">2016 - 2022</p>
      </div>
      <q align="justify" class="content">Funky Lemon is a casting agency for actors/extras in adverts or films, I still take part in these films/adverts when they require someone.</q>
    </div>
    <div class="Box2">
      <div class="boxTitle">
      <h3 class="company">Hillsong Church Volunteer</h3>
      <p class="time">2018 - 2020</p>
      </div>
      <q align="justify" class="content">
        I was a volunteer at Hillsong Church every Sunday for 2 years working with children and teaching them about the Bible.
      </q>
    </div>
    <div class="Box3">
      <div class="boxTitle">
      <h3 class="company">Gottlied Construction</h3>
      <p class="time">2020 - 2021</p>
      </div>
      <q align="justify" class="content">
        I was a casual worker at Gottlieb Construction the company my step-father owns and will probably work there when they need me.
      </q>
    </div>
    <div class="Box4">
      <div class="boxTitle">
      <h3 class="company">Pick n Pay</h3>
      <p class="time">Febuary 2021 - June 2021</p>
      </div>
      <q align="justify" class="content">
        I worked at Pick n Pay plumstead, once I started my lessons I decided to work weekends till ultimately leaving completely to focus on my studies.
      </q>
    </div>
    <div class="Box5">
      <div class="boxTitle">
      <h3 class="company">LC Studio</h3>
      <p class="time">Currently</p>
      </div>
      <q align="justify" class="content">
        LC Studio is Life Choices in house Coding team that students of the academy go after finishing the course to obtain experience and learn more. 
      </q>
    </div>
  <div class="container">
    <div class="line"></div>
    <div class="arrow"><i class="fas fa-caret-down"></i></div>
  </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#experience {
  background-color: none;
  box-shadow: 0 5px 25px gold;
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
  border-radius: 15px;
  font-size: 115%;
  position: fixed;
  top: 11%;
  right: 8%;
  width: 75%;
  height: 60%;
  padding: 5%;
  display: grid;
  grid-template-areas: 
  "first . second"
  "third . fourth"
  ". fifth ."
  ;
  /* grid-column-gap: 20px; */
  grid-row-gap: 40px;
}

.Box1 {
  grid-area: first;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 15px gold;
  border: solid 2px #abd7eb;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.Box2 {
  grid-area: second;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 15px gold;
  border: solid 2px #abd7eb;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.Box3 {
  grid-area: third;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 15px gold;
  border: solid 2px #abd7eb;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.Box4 {
  grid-area: fourth;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 15px gold;
  border: solid 2px #abd7eb;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.Box5 {
  grid-area: fifth;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 15px gold;
  border: solid 2px #abd7eb;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.container {
  position: fixed;
  z-index: 100;
  bottom: 42%;
  right: 50%;
  width: 10px;
  height: 38vh;
}
.line {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 10px gold;
  border: 1px solid #abd7eb;
  width: 100%;
  height: 98%;
}
.arrow {
  font-size: 20px;
  color: #abd7eb;
  text-shadow: 0 2px 10px gold;
}
@media (max-width: 1366px) {
  #experience {
  font-size: 13px;
  top: 16%;
  right: 8%;
  width: 75%;
  height: 65%;
  padding: 2% 5%;
  grid-row-gap: 10px;
  }

  .Box1 {
  grid-area: first;
  padding: 6px;
  gap: 20px;
  }

  .Box2 {
  grid-area: second;
  padding: 6px;
  gap: 20px;
  }

  .Box3 {
  grid-area: third;
  padding: 6px;
  gap: 20px;
  }

  .Box4 {
  grid-area: fourth;
  padding: 6px;
  gap: 20px;
  }

  .Box5 {
  grid-area: fifth;
  padding: 6px;
  gap: 20px;
  }

  .container {
  position: fixed;
  z-index: 100;
  bottom: 42%;
  right: 50%;
  width: 10px;
  height: 38vh;
  }
  .line {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 10px gold;
  border: 1px solid #abd7eb;
  width: 100%;
  height: 98%;
  }
  .arrow {
  font-size: 20px;
  color: #abd7eb;
  text-shadow: 0 2px 10px gold;
  }
}
</style>