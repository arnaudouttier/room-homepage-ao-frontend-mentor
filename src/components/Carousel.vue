<template>
  <div class="carousel-images">
    <picture
      :id="'slide-' + post.id"
      class="carousel-image"
      v-for="post in posts"
      :key="post.id"
    >
      <source :srcset="post.imageDesktop" media="(min-width: 375px)" />
      <img :src="post.imageMobile" alt="carousel image" />
    </picture>
  </div>

  <div class="carousel-controls">
    <a
      :href="'#' + precSlideUrl"
      class="primary-btn carousel-btn"
      @click="prec()"
    >
      <img src="images/icon-angle-left.svg" alt="icon left" />
    </a>
    <a
      :href="'#' + nextSlideUrl"
      class="primary-btn carousel-btn"
      @click="next()"
    >
      <img src="images/icon-angle-right.svg" alt="icon right" />
    </a>
  </div>

  <div
    class="carousel-content"
    v-for="post in displayCurrentImg"
    :key="post.id"
  >
    <div class="carousel-content-header">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <button class="btn order-btn">
        SHOP NOW
        <img src="images/icon-arrow.svg" alt="order button" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      index: 0,
      nextSlideUrl: '',
      precSlideUrl: '',
      posts: [
        {
          id: 0,
          title: 'Discover innovative ways to decorate',
          content: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
          imageMobile: 'images/mobile-image-hero-1.jpg',
          imageDesktop: 'images/desktop-image-hero-1.jpg'
        },
        {
          id: 1,
          title: 'We are available all across the globe',
          content: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
          imageMobile: 'images/mobile-image-hero-2.jpg',
          imageDesktop: 'images/desktop-image-hero-2.jpg'
        },
        {
          id: 2,
          title: 'Manufactured with the best materials',
          content: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
          imageMobile: 'images/mobile-image-hero-3.jpg',
          imageDesktop: 'images/desktop-image-hero-3.jpg'
        }
      ]
    }
  },
  computed: {
    displayCurrentImg () {
      return this.posts.filter((post) => post.id === this.index)
    }
  },
  methods: {
    prec () {
      if (this.index > 0) {
        this.index--
        this.precSlideUrl = 'slide-' + this.index
      }
    },
    next () {
      if (this.index < 2) {
        this.index++
        this.nextSlideUrl = 'slide-' + this.index
      }
    }
  }
}
</script>

<style scoped lang="scss">
/* Carousel-images */
.carousel-images {
  @include carouselSnapScroll;

  img {
    width: 100%;
    height: 100%;
  }
}

/* Carousel-control */

.carousel-controls {
  display: flex;
  justify-content: end;
  transform: translate(0, -100%);
}

.carousel-btn {
  display: flex;
  align-items: center;
  padding: clamp(20px, calc(1.25rem + ((1vw - 3.75px) * 1.2121)), 32px);
}

/* Carousel-content */

.carousel-content {
  max-width: 80%;
  min-height: 300px;
  margin: auto;
  z-index: 99;

  h2 {
    font-size: clamp(
      2.25rem,
      calc(2.25rem + ((1vw - 0.234375rem) * 1.561)),
      3.25rem
    ); /*36px (375vw) to 54px (1400px)  */
    color: $title_primary_color;
    margin-bottom: 16px;
    line-height: 0.9;
    font-weight: 500;
  }

  p {
    line-height: 1.5;
    color: $text_color;
  }
}

/* Order Button */

.order-btn {
  max-width: 80%;
  color: $title_primary_color;
  font-size: clamp(
    12px,
    calc(0.75rem + ((1vw - 3.2px) * 0.5682)),
    17px
  ); /* 12px (320 vw) to 17px  (1200 vw)*/
  letter-spacing: 10px;
  transition: color 0.4s ease;
  margin: 40px auto 80px;

  &:hover {
    color: $title_hover_color;

    img {
      transform: translate(6px, 2px);
      transition: all 0.4s ease-in-out;
    }
  }

  img {
    margin-left: 18px;
    transform: translateY(2px);
  }
}

@media (min-width: 1400px) {
  .carousel-controls {
    transform: none;
  }

  .carousel-content {
    max-width: 64%;
  }
}
</style>
