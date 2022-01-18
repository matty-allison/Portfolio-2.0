<template>
<NavBar/>

<Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                url="http://foo.bar/particles.json"
        />
        <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                :options="{
                    background: {
                        color: {
                            value: '#000000'
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'bubble'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 300,
                                duration: 1,
                                opacity: 0.2,
                                size: 20
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.3
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#FFD700'
                        },
                        links: {
                            color: '#FFD700',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
        />
  <router-view />
  <Footer/>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Footer from "./components/footer.vue"

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: black;
  height: 100vh;
}
</style>
