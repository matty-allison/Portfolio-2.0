<template>
<div id="footer">
  <h3>By Matthew Morne Allison</h3>
  <a href="https://github.com/matty-allison" target="_blank"><i class="fab fa-github"></i></a> |
  <a href="www.linkedin.com/in/matthew-morne-allison-97254a1b2" target="_blank"><i class="fab fa-linkedin"></i></a> |
  <a href="https://codepen.io/matty-allison" target="_blank"><i class="fab fa-codepen"></i></a>
</div>
</template>

<script>
export default {

}
</script>

<style>
#footer {
    position: fixed;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    width: 100vw;
    font-size: 16px;
}

#footer h3 {
  margin: 10px;
}

#footer a {
  margin: 25px;
  color: white;
  text-decoration: none;
}

@media (max-width: 1366px) {
  #footer {
    font-size: 14px;
  }
}
</style>