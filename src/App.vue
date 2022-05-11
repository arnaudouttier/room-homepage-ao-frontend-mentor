<template>
  <MobileNavigation :isActiveNav="activeNav" @toogleNavigation="toogleNav" />
  <header id="header">
    <div class="header-inner">
      <button class="btn open-nav" @click="toogleNav">
        <img src="images/icon-hamburger.svg" alt="open navigation button" />
      </button>
      <TheLogo />
      <TheNavigation />
    </div>
  </header>
  <main id="main">
    <Carousel />
    <About />
  </main>
</template>

<script>
import MobileNavigation from './components/MobileNavigation.vue'
import TheLogo from './components/TheLogo.vue'
import TheNavigation from './components/TheNavigation.vue'
import Carousel from './components/Carousel.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    MobileNavigation,
    TheLogo,
    TheNavigation,
    Carousel,
    About
  },
  data () {
    return {
      image: 'images/logo.svg',
      activeNav: false
    }
  },
  methods: {
    toogleNav () {
      this.activeNav = !this.activeNav
    }
  }
}
</script>

<style lang="scss">

/* APP */

#app {
  position: relative;
}

/* HEADER */

header {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 40px 0;
  background-color: transparent;
  z-index: 99;
  transition: opacity 0.4s ease 0.2s;
  cursor: pointer;
}

.header-inner {
  width: min(90vw, 85vw);
  margin: 0 auto;
  display: flex;
}

@media (min-width: 1200px) {
  #app {
    height: 100vh;
  }

  button.open-nav {
    display: none;
  }

  /* MAIN */

  #main {
    height: inherit;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    grid-template-areas:
      "carousel"
      "about";
  }
}
</style>
