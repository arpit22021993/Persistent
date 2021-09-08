<template lang="pug">
  .page-not-found
    .wrap
      h1.pt 404
      h2 Page not found
      router-link(:to="{name: 'home'}")
        h3  Home
      router-link(:to="{name: 'our-wines'}")
        h3  Our Wines
      router-link(:to="{name: 'our-story'}")
        h3  Our Story
      router-link(:to="{name: 'contact'}")
        h3  Contact

</template>

<script>

export default {
  name: 'PageNotFound',
}
</script>

<style lang="scss" scoped>
.page-not-found {
  .wrap {
    @include center-block;
    max-width: 400px;
  }
  .pt {
    padding-top: 20px;
  }
  height: 100vh;
  h1, h2, h3{
    text-align: center;
  }
  h3 {
    margin-top: 50px;
    color: $brandRed;
  }
}

</style>
