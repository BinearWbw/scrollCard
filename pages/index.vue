<template>
  <article class="home">
    <div class="home__main"></div>
  </article>
</template>

<script>
import Lenis from '@studio-freight/lenis'

export default {
  name: 'Home',
  data() {
    return {
      lenis: null,
    }
  },
  mounted() {
    this.initSmoothScrolling()
  },
  methods: {
    initSmoothScrolling() {
      this.lenis = new Lenis({
        lerp: 0.1, //值越低，更平滑
        smoothWheel: true, // 启动鼠标平滑滚动
      })
      console.log('打印lerp::=>>>', this.lenis)
      requestAnimationFrame(this.scrollFn)
    },
    scrollFn(time) {
      this.lenis.raf(time)
      requestAnimationFrame(this.scrollFn)
    },
  },
  destroyed() {
    this.initSmoothScrolling()
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.home {
  position: relative;
  .google_ad_h5 {
    display: none;
  }
  &__main {
    display: block;
    width: 100%;
    height: 3000px;
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .home {
  }
}
</style>
