<template>
  <div id="skills">
    <div class="edu1">
      <h2 class="eduTitle">RoseBank Progress College (High School)</h2>
      <p class="subject">English</p>
      <p class="subject">Afrikaans</p>
      <p class="subject">Mathamatics</p>
      <p class="subject">Economics</p>
      <p class="subject">Business Studies</p>
      <p class="subject">Life Orientation</p>
      <p class="subject">Art</p><br>
      <h2 class="eduTitle">Udemy Character Drawing</h2>
      <p class="subject">Drawing Fundamentals</p>
      <p class="subject">Style Development</p>
      <p class="subject">Drawing body forms</p>
      <p class="subject">Drawing faces</p>
    </div>
    <div class="edu2">
      <h2 class="eduTitle">LifeChoices Coding Academy (Course)</h2>
      <p class="subject">Html</p>
      <p class="subject">Css</p>
      <p class="subject">Python</p>
      <p class="subject">SQL</p>
      <p class="subject">JavaScript</p>
      <p class="subject">Flask</p><br>

      <h2 class="eduTitle">Self-Taught</h2>
      <p class="subject">VueJs/VueX</p>
      <p class="subject">FireBase</p>
      <p class="subject">KnexJs</p>
      <p class="subject">NodeJs</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#skills {
  background-color: none;
  box-shadow: 0 5px 25px gold;
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
  border-radius: 15px;
  position: fixed;
  top: 11%;
  right: 13%;
  width: 65%;
  height: 60%;
  padding: 5%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
}

.edu1 {
  font-size: 110%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}
.edu2 {
  font-size: 110%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
}

.eduTitle {
    text-shadow: 0 2px 15px gold;
}

.subject {
  font-size: 23px;
}
</style>