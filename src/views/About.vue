<template>
  <div id="about">
    <div>
      <p align="justify">
        Hello! My name is Matthew Morne Allison and I was born on the 24<sup>th</sup> of July 2002, I am a kind and understanding person. My hobbies are swimming, hiking, drawing and gaming which is one of the biggest reasons why I enjoy technology. I have these traits
        because of the care and support from family and friends that I
        have surrounded myself with over my short but eventful life so
        far. I am a hard worker and because of the type of person I am,
        I have worked in a few places throughout my life. For example as
        a children's church leader where we taught younger age groups
        about God and the religion.
      </p>
        <h3>When my passion for coding started</h3>
      <p align="justify">
        My passion for the tech industry started when my father used to
        explain to me how he built a computer from scratch and how he
        wanted to learn "the language of a computer". I thought he
        was crazy at that age but after a few years and being a gamer I
        wanted to switch to pc so I decided to do some research and the
        things I discovered blew me away. I was going to attend The
        Animation School this year but because of the lack of funds, I
        was directed to this school, Life Choices Academy. Now I am still
        building my skills and hope that I can achieve my dreams
        one day.
      </p>
    </div>
    <img src="../assets/aboutImage-min.jpg" alt="Picture of Matthew Allison">
  </div>
</template>

<script>

export default {
}
</script>

<style>
#about {
  background-color: none;
  box-shadow: 0 5px 25px gold;
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
  border-radius: 15px;
  position: fixed;
  top: 11%;
  right: 11%;
  width: 70%;
  height: 60%;
  padding: 5%;
  display: flex;
  gap: 7%; 
}
#about div {
  font-size: 115%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100%;
}
#about p {
  height: 40%;
}

#about img {
  border-radius: 15px;
  width: 50%;
  height: 95%;
  border: solid 2px #abd7eb;
  box-shadow: 2px 2px 15px gold;
}

@media (max-width: 1366px) {
  #about {
  top: 16%;
  right: 11%;
  width: 65%;
  height: 50%;
  padding: 5%;
  gap: 7%; 
  }
  
  #about div {
  font-size: 14px;
  gap: 20px;
  height: 100%;
  }

  #about img {
  width: 45%;
  height: 95%;
  }
}
</style>