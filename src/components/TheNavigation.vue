<template>
  <div class="site-navigation" :class="{ activeNav: isActiveNav }">
    <nav>
      <button class="btn close-nav" @click="enableNav()">
        <img src="images/icon-close.svg" alt="close navigation button" />
      </button>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheNavigation',
  data () {
    return {
      activeNav: false
    }
  },
  props: {
    isActiveNav: Boolean
  },
  methods: {
    enableNav () {
      this.$emit('toogleNavigation')
    }
  }
}
</script>

<style lang="scss" >
.site-navigation {
  height: 0;
  background-color: #ffff;
  transition: height 0.4s ease;

  &.activeNav {
    height: 120px;

    & + header {
      opacity: 0;
      z-index: -1;
    }
  }

  nav {
    height: inherit;
    width: min(90vw);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      column-gap: 18px;
    }
  }
}
</style>
