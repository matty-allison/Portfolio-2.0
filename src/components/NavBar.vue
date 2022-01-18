<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/experiences">Experiences</router-link> |
    <router-link to="/skills">Skills</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonial">Testimonials</router-link> |
    <router-link to="/contact">Contact me</router-link>
  </div>
</template>


<style>
#nav {
  padding: 30px;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 33%;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: gold;
}
</style>