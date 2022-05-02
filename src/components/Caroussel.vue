<template>
  <section class="caroussel">
    <div
      class="caroussel-post"
      v-for="post in posts"
      :key="post.id"
      :style="translateCaroussel()"
    >
      <picture class="caroussel-image">
        <source :srcset="post.imageDesktop" media="(min-width: 1024px)" />
        <img :src="post.imageMobile" alt="caroussel image" />
      </picture>
      <div class="caroussel-content">
              <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>

      </div>
    </div>
  </section>
  <div class="caroussel-control">
    <button class="primary-btn caroussel-btn" @click="prec()">
      <img src="images/icon-angle-left.svg" alt="icon left" />
    </button>
    <button class="primary-btn caroussel-btn" @click="next()">
      <img src="images/icon-angle-right.svg" alt="icon right" />
    </button>
  </div>
  <button class="order-btn">SHOP NOW</button>
</template>

<script>
export default {
  name: 'Caroussel',
  data () {
    return {
      index: 0,
      nPosition: 0,
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
  methods: {
    next () {
      if (this.index < 2) {
        this.index++
      }
    },
    prec () {
      if (this.index > 0) {
        this.index--
      }
    },
    translateCaroussel () {
      this.nPosition = this.index * 100
      return `transform : translateX(-${this.nPosition}%)`
    }
  }
}
</script>

<style lang="scss" scoped>
.caroussel {
  display: flex;
}

.caroussel > * {
  display: block;
  min-width: 100%;
  overflow: hidden;
}

.caroussel-post {
  transition: transform 0.8s ease;
}

.caroussel-content{
  width: min(90vw);
  margin: 60px auto;
}
</style>
