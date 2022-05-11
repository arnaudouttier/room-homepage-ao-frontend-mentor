<template>
  <div class="site-navigation mobile" :class="{ activeNav: isActiveNav }">
    <nav>
      <button class="btn close-nav" @click="enableNav()">
        <img src="images/icon-close.svg" alt="close navigation button" />
      </button>
      <ul>
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      activeNav: false,
    };
  },
  props: {
    isActiveNav: Boolean,
  },
  methods: {
    enableNav() {
      this.$emit("toogleNavigation");
    },
  },
};
</script>

<style lang="scss" >
@use "../assets/scss/variables" as *;

.site-navigation.mobile {
  height: 0;
  background-color: $white;
  color: $nav_mobile_text_color;
  transition: height 0.4s ease;
  cursor: pointer;

  &.activeNav {
    height: 120px;

    & ~ header {
      opacity: 0;
      z-index: -1;
    }
  }

  /* Site Navigation List */

  nav {
    height: inherit;
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;

    ul {
      display: flex;
      column-gap: 40px;
    }
  }
}

@media (min-width: 1200px) {
  .site-navigation.mobile {
    display: none;
  }
}
</style>
