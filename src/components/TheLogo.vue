<template>
  <div class="site-logo">
    <img src="images/logo.svg" alt="site logo" />
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style>
.site-logo {
  flex-grow: 1;
  text-align: center;
}

@media (min-width:1200px){
  .site-logo{
    flex-grow: 0;
    text-align : left;
  }
}
</style>
