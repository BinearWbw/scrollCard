<template>
  <main class="main" v-cloak>
    <Nuxt class="main__page" />
    <transition name="fade">
      <div>
        <div class="home_sun" v-if="$route.path == '/'">
          <!-- <i class="home_sun_icon"></i> -->
        </div>
        <i class="home_bg"></i>
      </div>
    </transition>
  </main>
</template>

<script>
export default {
  data() {
    return {
      visiblePrivacy: false,
      showScrollToTop: false,
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // 平滑滚动到顶部
      })
      setTimeout(() => {
        this.showScrollToTop = false
      }, 500)
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
[v-cloak] {
  display: none !important;
}
.main {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  .home_bg {
    display: inline-block;
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1500px;
    height: 1500px;
    z-index: -1;
    border-radius: 50%;
    background: rgba(151, 71, 255, 0.3);
    filter: blur(241px);
  }
  .home_sun {
    display: inline-block;
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    &_icon {
      display: inline-block;
      width: 1156px;
      height: 1156px;
      background: url('/img/rotating_sun.png') no-repeat top center;
      animation: rotate 20s linear infinite;
    }
  }

  .scroll_to_top {
    position: fixed;
    z-index: 99;
    border-radius: 50%;
    background-color: #9747ff;
    display: none;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .main {
    .home_bg {
      width: 100%;
      height: 900 * $pr;
      background: rgba(151, 71, 255, 0.3);
      filter: blur(85 * $pr);
    }
    .home_sun {
      display: inline-block;
      position: absolute;
      top: -120 * $pr;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
      &_icon {
        display: inline-block;
        width: 600 * $pr;
        height: 600 * $pr;
        background: url('/img/rotating_sun.png') no-repeat top center;
        animation: rotate 20s linear infinite;
        background-size: cover;
      }
    }
    .scroll_to_top {
      display: block;
      bottom: 100 * $pr;
      right: 5 * $pr;
      width: 48 * $pr;
      height: 48 * $pr;
      img {
        width: 20 * $pr;
      }
    }
  }
}
</style>
