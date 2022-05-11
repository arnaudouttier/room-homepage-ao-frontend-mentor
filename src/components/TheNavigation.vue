<template>
  <nav class="site-navigation desktop">
    <ul>
      <li>home</li>
      <li>shop</li>
      <li>about</li>
      <li>contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation'
}
</script>

<style lang="scss">

.site-navigation.desktop {
  display: none;
}

@media (min-width: 1200px) {
  .site-navigation.desktop {
    color: $nav_text_color;
    display: block;
    margin-left: 32px;

    ul {
      display: flex;

      li {
        margin-left: 32px;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          left: calc(50% - 8px);
          bottom: -8px;
          width: 16px;
          height: 2px;
          background-color: #fff;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        &:hover {
          &:after {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
