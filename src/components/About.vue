<template>
  <section class="about">
    <img
      src="images/image-about-dark.jpg"
      alt="about image"
      class="about-image"
    />
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
    <img
      src="images/image-about-light.jpg"
      alt="about image"
      class="about-image"
    />
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style  lang='scss' scoped>
@use "../assets/scss/variables" as *;

.about {
  grid-area: about;
}

.about-content {
  max-width: 80%;
  margin: auto;
  padding-block: 64px;

  h3 {
    font-size: clamp(18px, calc(1.125rem + ((1vw - 3.75px) * 0.2424)), 20px);
    color: $title_primary_color;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 600;
  }

  p {
    color: $text_color;
    line-height: 1.5;
  }
}

img {
  width: 100%;
}

@media (min-width: 992px) {
  .about {
    display: flex;
  }

  .about-content {
    max-width: 50%;
    padding: 60px;
  }
}
</style>
