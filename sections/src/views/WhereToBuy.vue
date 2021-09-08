<template lang="pug">
.where-to-buy-container
  navigation
  locator
  image-text-row-cta(
    title="Our Wines",
    cta="Learn More",
    link="our-wines",
    path="winemaking/OurWines-Thumbnail@2x.jpg",
    linkValue="Learn More about Our Wines"
  )
    p Woodbridge by Robert Mondavi wines are fruit-forward, smooth and made for sharing.
  global-footer
</template>

<script>
// import debug from 'debug'
import Navigation from "@/components/Navigation";
import PageHero from "@/components/global/PageHero";
import GlobalFooter from "@/components/GlobalFooter";
import RoughBackground from "@/components/layout/RoughBackground";
import Locator from "@/components/where-to-buy/Locator";
import ImageTextRowCta from "@/components/global/ImageTextRowCta";

export default {
  name: "WhereToBuy",
  head: {
    title: {
      inner: "Find Wine Near You",
      complement: "California Wines",
    },
    meta: [
      {
        name: "description",
        content:
          "Find Woodbridge by Robert Mondavi wines near you with our wine locator. Learn more & discover your favorite wines today!",
      },
    ],
  },
  components: {
    Navigation,
    GlobalFooter,
    PageHero,
    RoughBackground,
    Locator,
    ImageTextRowCta,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables";
@import "../styles/_mixins";
.where-to-buy-container {
  min-height: 100vh;
  height: 100vh;
}
</style>
