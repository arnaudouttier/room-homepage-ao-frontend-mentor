<template>
    <TheNavigation :isActiveNav="activeNav" @toogleNavigation="toogleNav" />
  <header id="header">
    <div class="header-inner">
      <button class="btn open-nav" @click="toogleNav">
      <img src="images/icon-hamburger.svg" alt="open navigation button" />
    </button>
    <TheLogo />
    </div>
  </header>
  <main id="main">
    <Caroussel />
    <About />
  </main>
</template>

<script>
import TheLogo from './components/TheLogo.vue'
import TheNavigation from './components/TheNavigation.vue'
import Caroussel from './components/Caroussel.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    TheLogo,
    TheNavigation,
    Caroussel,
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
@import "./assets/scss/variables";
@import "./assets/scss/global";

#app{
  width: 100%;
  height: auto;
  position: relative;
}

header{
  position: absolute;
  top: 0;
  width: 100%;
  padding: 40px 0 ;
  background-color: transparent;
  z-index: 99;
  transition: opacity .4s ease .2s;
}

.header-inner{
  width: min(90vw , 1270px);
  margin: 0 auto;
  display: flex;
}

#main{
  position: absolute;
}
</style>
