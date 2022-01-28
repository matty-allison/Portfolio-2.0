<template>
  <div id="testimonial">
    	  <div class="wrapper">
            <div class="carousel owl-carousel">
              <div class="carouselcard card-1">
                <p>Adam Africa</p>
                <p>Co-worker</p>
                <img
                  class="testimonialimg"
                  src="../assets/Adam-Africa-min.JPG-min.png"
                  alt="image of testimonial giver"
                />
                <q class="quote" align="justify">
                  Matthew is not only a great programmer but also a phenominal
                  co-worker. He is extremely hard-working and has a great eye
                  for programming and design. He would never do anything
                  half-way, he will always go the extra mile.
                </q>
              </div>
              <div class="carouselcard card-2">
                <p>Jason Wandrag</p>
                <p>Lecturer</p>
                <img
                  class="testimonialimg"
                  src="../assets/2021-team-jason-wandrag-min.jpg"
                  alt="image of testimonial giver"
                />
                <q class="quote" align="justify">
                  Matthew works extremely well both by himself and in groups. He
                  is diligent in doing his own research, and tackles projects
                  head on. He is always eager to improve himself and give his
                  best to what he is doing.
                </q>
              </div>
              <div class="carouselcard card-3">
                <p>Thapelo Tsotetsi</p>
                <p>Lecturer</p>
                <img
                  class="testimonialimg"
                  src="../assets/thapelo-tsotetsi-min.jpg"
                  alt="image of testimonial giver"
                />
                <q class="quote" align="justify">
                  Matthew is a great student. He possesses a skill that allows
                  him to learn new technologies quickly. He has great
                  communication skills and works well withing a team having
                  individual skill set. He will be a great addition to your
                  team.
                </q>
              </div>
              <div class="carouselcard card-4">
                <p>Gary Africa</p>
                <p>Co-worker</p>
                <img
                  class="testimonialimg"
                  src="../assets/garyPic.png"
                  alt="image of testimonial giver"
                />
                <q class="quote" align="justify">
                  Matthew is good partner to work with . He is always keen on
                  learning new things when it comes to he's work. Matthew is
                  also a good team player. Works hard and always delivers 5 star
                  rating work. It's always and honor to work with him.
                </q>
              </div>
              <div class="carouselcard card-5">
                <p>Zipho Sithandathu</p>
                <p>Co-worker</p>
                <img
                  class="testimonialimg"
                  src="../assets/ziphoPic.png"
                  alt="image of testimonial giver"
                />
                <q class="quote" align="justify">
                  Matthew is a very punctual guy, who is always available to help others
                  when you run into a problem. He works well both alone and
                  within a team
                </q>
              </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
}
</script>

<style>
#testimonial{
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
}

.wrapper {
  width: 100%;
}

.wrapper .carousel {
  max-width: 1200px;
  margin: auto;
  padding: 0px 20x;
  position: fixed;
}

.carousel .carouselcard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  gap: 20px;
  border-radius: 10px;
  padding: 40px;
  font-size: 22px;
}

.quote {
  text-align: center;
}


.owl-carousel .owl-item img {
  width: 250px; 
  object-fit: cover;
  border-radius: 50%;
  height: 250px;
}

@media (max-width: 1400px) {
  .testimonialimg {
    width: 150px;
    height: 150px;
  }
  .carousel .carouselcard {
    line-height: 25px;
    margin-right: 20px;
    padding: 20px;
    font-size: 15px;
  }
}
@media (max-width: 1300px) {
  .testimonialimg {
    width: 300px;
    height: 200px;
  }
  .carousel .carouselcard {
    line-height: 25px;
    margin-right: 20px;
    font-size: 18px;
  }
}

@media (max-width: 1250px) {
  .carousel .carouselcard {
    line-height: 25px;
    padding: 20px;
    font-size: 16px;
  }

  .testimonialimg {
    width: 250px;
    height: 200px;
  }
}

@media (max-width: 1150px) {
  .testimonialimg {
    width: 250px;
    height: 150px;
  }
  .carousel .carouselcard {
    line-height: 22px;
  }
}

@media (max-width: 1000px) {
  .testimonialimg {
    width: 350px;
    height: 150px;
  }
  .carousel .carouselcard {
    line-height: 20px;
    padding: 15px;
  }
}

@media (max-width: 999px) {
  .carousel .carouselcard {
    line-height: 40px;
  }
  .testimonialimg {
    height: 200px;
  }
}
@media (max-width: 950px) {
  .carousel .carouselcard {
    line-height: 33px;
    padding: 15px;
  }
}

@media (max-width: 850px) {
  .carousel .carouselcard {
    line-height: 30px;
    padding: 5px;
  }
}

@media (max-width: 740px) {
  .carousel .carouselcard {
    line-height: 25px;
    padding: 0px;
  }
}

@media (max-width: 680px) {
  .carousel .carouselcard {
    line-height: 23px;
    font-size: 13px;
  }
  .testimonialimg {
    height: 165px;
  }
}

@media (max-width: 600px) {
  .carousel .carouselcard {
    padding: 0px;
  }
}

@media (max-width: 550px) {
  .carousel .carouselcard {
    margin: 10px 0px;
    padding: 10px;
  }
}

@media (max-width: 360px) {
  .carousel .carouselcard {
    line-height: 22px;
  }
}
</style>