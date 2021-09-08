<template lang="pug">
  .buying-wine
    navigation
    page-hero(title="Buying Wine" :backgroundImagePath="require(`@/assets/buying-wine/BuyingWine-Banner@2x.jpg`)")
    rough-background(bottomEdge=true).bg-mt-fix
      .page-content-wrap.pt-100
        .row.mt-5
          .title
            h2 How Much<br> Wine To Buy
          .col
            p When you are hosting a party, not everyone will like the same wine. Buy a few different types and styles so that people have options. I recommend at least one red and one white - some of your guests will only drink one or the other.
            p For a light, white wine, try Sauvignon Blanc or Pinot Grigio; for a buttery, oaky wine, Chardonnay works well; for a light red, Pinot Noir is a crowd pleaser; and for a heavier red wine, Cabernet Sauvignon is often a favorite.
            p There is a simple formula to determine the right amount of wine you will need to ensure a successful party.
            ul
              li • Determine the number of guests that will be coming to your event
              li • Number of guests x number of hours = number of servings. Example: 5 guests x 2 hours = 10 Servings
              li • Once you know the number of servings you’ll need, you can then calculate the amount of wine to purchase based on the number of servings in each bottle size.
            p 750ml Bottle = 5 Servings<br> 1.5L Bottle = 10 Servings<br> Example: If you need 10 servings, you could purchase either two 750ml bottles or one 1.5L bottle.
        .row.mt-5
          .title
            h2 Glassware
          .col
            p Have appropriate glassware for the types of wine you'll be serving:
            ul
              li • White wines tend to be served in tulip shaped glasses
              li • Red wines are served in rounded and larger bowl glasses
              li • A suitable all-purpose wine glass should hold 10 ounces, be transparent, and have a light curve at the top
    image-text-row-cta(title="Wine101" cta="Learn More" link="wine-101" path="global/Wine101-Thumbnail@2x.jpg")
        p Learn the basics of storing, serving, and food pairing tips for our wines.
    globalFooter
</template>

<script>
// import debug from 'debug'

import Navigation from '../components/Navigation'
import PageHero from '../components/global/PageHero'
import GlobalFooter from '../components/GlobalFooter'
import RoughBackground from '../components/layout/RoughBackground'
import Seperator from '../components/element/Seperator'
import ImageTextRowCta from '../components/global/ImageTextRowCta'

// const log = debug('view:Home')

export default {
  name: 'BuyingWine',
  head: {
    title: {
      inner: 'Tips for Buying Wine',
      complement: 'California Wines'
    },
    meta: [
      {
        name: 'description', content: 'Discover tips on how much wine to buy and serve for parties. Trust the winemaking experts at Woodbridge for all your entertaining needs.',
      },
    ],
  },
  data () {
    return {
    }
  },
  components: {
    Navigation,
    GlobalFooter,
    PageHero,
    RoughBackground,
    Seperator,
    ImageTextRowCta,
  },
}
</script>

<style lang="scss" scoped>
.bg-mt-fix {
  margin-top: -100px;
}
.buying-wine {
  h2 {
    font-weight: 600;
  }
  ul {
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: .5rem;
  }
  .subhead {
    font-weight: 600;
    text-transform:unset;
    font-family: $baseFontFamily;
  }
  .title {
    margin-bottom: -50px;
    @media #{$tablet} {
      padding-left: 0;
      margin-bottom: 0;
    }
  }
}
.col{
  width: 60%;
  padding-left: 100px;
  @include center-block;
  @media #{$mobile} {
    padding-left: 0;
    width: 90%;
  }
}
.row {
  margin-bottom: 50px;
}
.seperator {
  position: relative;
  &:before, &:after{
    content: '';
    background-color: $brandTan;
    position: absolute;
    display: block;
    top: 35%;
    height: 2px;
    left:0;
    right: calc(65% + 80px);
  }
    &:after{
    left:calc(65% + 80px);
    right: 0;
    }
}
</style>
