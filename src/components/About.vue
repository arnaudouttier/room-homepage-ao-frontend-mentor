<template>
  <div class="about-images left">
    <img
      src="images/image-about-dark.jpg"
      alt="about image"
      class="about-image"
    />
  </div>

  <div class="about-content">
    <h3>About our fourniture</h3>
    <p>
      Our multifunctional collection blends design and function to suit your
      individual taste. Make each room unique, or pick a cohesive theme that
      best express your interests and what inspires you. Find the furniture
      pieces you need, from traditional to contemporary styles or anything in
      between. Product specialists are available to help you create your dream
      space.
    </p>
  </div>

  <div class="about-images right">
    <img
      src="images/image-about-light.jpg"
      alt="about image"
      class="about-image"
    />
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style  lang='scss' scoped>
.about-content {
  max-width: 80%;
  margin: auto;
  padding-block: 64px;

  h3 {
    font-size: clamp(
      1rem,
      calc(1rem + ((1vw - 0.234375rem) * 0.4848)),
      1.25rem
    ); /* 16px (375vw) to 20px (1200vw)*/
    color: $title_primary_color;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 600;
  }

  p {
    color: $text_color;
    line-height: 1.5;
  }
}

.about-images {
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>
