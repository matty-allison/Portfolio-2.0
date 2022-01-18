<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <router-link to="/experiences">Experiences</router-link> 
    <router-link to="/skills">Skills</router-link> 
    <router-link to="/projects">Projects</router-link> 
    <router-link to="/testimonial">Testimonials</router-link> 
    <router-link to="/contact">Contact me</router-link>
  </div>
</template>


<style>
#nav {
  padding: 30px;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 6px );
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 20px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  /* border: solid 2px white; */
  background: rgba(59, 59, 59, 0.4);
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );
  border-radius: 10px;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: black;
  background: gold;
  box-shadow: 0 5px 25px gold;
}
</style>