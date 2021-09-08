<template lang="pug">
  .wine-101
    navigation
    page-hero(title="Wine 101" :backgroundImagePath="require(`@/assets/wine-101/Wine101-Banner@2x.jpg`)")
    rough-background(bottomEdge=true).bg-mt-fix
      .page-content-wrap.pt-100.waypoint
        .row.mt-5
          .back-button
            router-link(to='/eat-and-drink') Back to recipes
          .title
            h2 Chilling<br> Wine
          .col
            h5 Red
            p Red wines are typically served at below normal room temperature (58F-65F), while white wines are served slightly chilled (50F-55F). Place the red wine in refrigerator 20 minutes before serving. Remove and serve.
            h5 White and rosé
            p For white and rosé wines, place it in the refrigerator for 2 hours to chill properly. If the wine has been in the refrigerator for some time, remove it 20 minutes before serving.
            h5 Sparkling
            p Sparkling wine should be chilled. Place in the refrigerator for 2 hours to chill properly. Serve directly from the refrigerator, or place in an ice bucket. Never put a sparkling wine bottle in the freezer! If you don’t have enough refrigerator space, place the bottle in an ice bucket filled with water and ice for about 20 minutes.
      .page-content-wrap.waypoint
        .row
          .title
            h2 Serving<br> Wine
          .col
            h5 Opening
            p If needed, remove the capsule. (Woodbridge by Robert Mondavi wines do not have capsules.)
            p Hold the bottle by the neck and insert the tip of the corkscrew at an angle and slightly off center. Turn the corkscrew until it is fully into the cork.
            p Hook the lever of the corkscrew onto the rim of the bottle. Hold the lever in place with the thumb of the hand that is holding the bottle. Lift up the corkscrew in one firm slow motion until the cork is fully extracted.
            h5 Quick Tips
            p If you are hosting a large party or are serving multiple wines, open enough wine just before you get ready to pour so you have enough for everyone.
            p Depending on the size of your gathering, you may want to have both red and white wines available so your guests can choose. Regardless of tradition, people tend to have favorites and will enjoy having a choice.
            p For after your party, store red or white in the refrigerator after opening. It will last 2-3 days.
            h5 Pouring Wine
            p Serve women and older guests first, then men, then finish with yourself.
            p Leave each wine glass on the table, and pour wine into it.
            p Pour toward the center of the glass, unless the wine is sparkling, in which case pour against the side of the glass to preserve bubbles.
            p Fill each glass no more than two-thirds full. Leaving room in the glass allows your guest to swirl the wine.
            p When you are finished pouring, twist the bottle to control drips.
            p Keep glasses full for your guests, and appoint a friend to help when you’re preoccupied with other host duties.
      .page-content-wrap.waypoint
        .row
          .title
            h2 Food & Wine<br> Pairing Tips
          .col
            p Still not sure which wines to serve? As Robert Mondavi once said, “Drink what you like and like what you drink.”
            h5.subhead Pair Sweet Foods with Sweeter Wines
            p Wine that’s equally or less sweet than the food can make the combination taste sour.
            h5.subhead Pair Rich Foods with Full-Bodied or Crisp Wines
            p Full-bodied wines complement rich foods, while crisp wines cut through the fat and provide a tasty contrast.
            h5.subhead Pair Light Foods with Light Wines
            p Neither the food nor the wine overpowers the flavors or textures of the other.
            h5.subhead Pair Spicy Foods with Sweet or Light Wines
            p The acid in light wine and the sugar in sweet wine cool the fire of the dish.
            h5.subhead Pair Strongly Flavored Foods with Bold Wines
            p Neither the food nor the wine overpowers the flavors or textures of the other.
            p For more information about pairing food and wine, download our <a href="#">Holiday Entertaining Guide.</a>
    image-text-row-cta(title="Buying Wine" cta="Learn More" link="buying-wine" path="winemaking/OurWines-Thumbnail@2x.jpg")
        p Feeling overwhelmed? Let us guide you through what to buy and how to serve it.
    globalFooter
</template>

<script>

import Navigation from '../components/Navigation'
import PageHero from '../components/global/PageHero'
import GlobalFooter from '../components/GlobalFooter'
import RoughBackground from '../components/layout/RoughBackground'
import Seperator from '../components/element/Seperator'
import ImageTextRowCta from '../components/global/ImageTextRowCta'
require('waypoints/lib/noframework.waypoints.js')

export default {
  name: 'Wine101',
  head: {
    title: {
      inner: 'Wine 101',
      complement: 'California Wines'
    },
    meta: [
      {
        name: 'description', content: 'Enjoy food and cocktail recipes, food pairing tips, and answers to common questions about wine. Trust the winemaking experts at Woodbridge for all your entertaining needs!',
      },
    ],
  },
  data () {
    return {
    }
  },
  mounted: function () {
    this.initWaypoints()
  },
  components: {
    Navigation,
    GlobalFooter,
    PageHero,
    RoughBackground,
    Seperator,
    ImageTextRowCta,
  },
  methods: {
    initWaypoints () {
      this.$el.querySelectorAll('.waypoint').forEach((el) => {
        this.createWaypoint(el)
      })
    },
    createWaypoint (el) {
      let waypoint = new Waypoint({ // eslint-disable-line
        element: el,
        handler: (direction) => {
          if (direction === 'down') {
            el.classList.add('ready-active')
          }
          waypoint.destroy()
        },
        offset: '70%',
      })
      el.classList.add('ready')
    },
  },
}
</script>

<style lang="scss" scoped>
.ready{
   opacity: 0;
   transform: translateY(10px);
   transition: all .3s ease-in;
   &-active{
     opacity: 1;
     transform: translateY(0px);
   }
 }
.back-button {
  display: block;
  cursor: pointer;
  font-family: $baseFontFamily;
  text-transform: uppercase;
  width: 150px;
  margin-bottom: 20px;
}

.bg-mt-fix {
  margin-top: -140px;
}
.wine-101 {
  h2 {
    font-weight: 600;

  }
  .subhead {
    font-weight: 600;
    text-transform:unset;
    font-family: $baseFontFamily;
  }
  .title {
    margin-bottom: -100px;
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
  margin-bottom: 100px;
}
</style>
