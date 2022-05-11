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

@media (min-width: 1400px) {
  button.open-nav {
    display: none;
  }

  /* MAIN */

  #main {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr) auto 1fr;
    grid-template-rows: 2fr 0.3fr 1fr;
  }

  .carousel-images {
    grid-area: 1 / 1 / 3 / 3;
  }
  .carousel-controls {
    grid-area: 2 / 3 / 3 / 4;
  }
  .carousel-content {
    grid-area: 1 / 3 / 3 / 5;
  }

  .about-images.left {
    grid-area: 3 / 1 / 4 / 2;
  }
  .about-content {
    grid-area: 3 / 2 / 4 / 4;
  }
  .about-images.right {
    grid-area: 3 / 4 / 4 / 5;
  }
}
</style>
