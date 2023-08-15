<template>
  <article class="home">
    <div class="home__main"></div>
  </article>
</template>

<script>
export default {
  name: 'Home',
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
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .home {
  }
}
</style>
