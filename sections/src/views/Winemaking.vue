<template lang="pug">
  .winemaking
    navigation
    page-hero(title="Winemaking" :backgroundImagePath="require(`@/assets/winemaking/Winemaking-Banner@2x.jpg`)")
      p "At Woodbridge Winery, we set out to make great tasting wines that can be enjoyed with daily meals. Every bottle is a chance to demonstrate our craft, and an opportunity to put a smile on your face.”<br> - Todd Ziemann, Director of Winemaking
    rough-background(flipped=true)
      .page-content-wrap
        .row.waypoint
          .col-1
            .image-1
              img(:src="require('@/assets/our-story/OurStory-Winemaking.jpg')")
          .col-2
            p Robert Mondavi was a pioneer and innovator in the California wine industry. By using state-of-the-art technology for his winemaking, employing unique growing techniques, and cultivating relationships with the local growers, he was able to help ensure high quality grapes that would produce excellent wines. As an example, Woodbridge Winery was the first major winery to use the “Direct-To-Press” method for making white wine on a large scale.
            p Robert Mondavi’s desire to create appealing, drinkable wines is the same vision the Woodbridge winemaking team operates with today. Small winery traditions such as leaving the wines on the lees for greater complexity and aging select lots in French and American oak result in smooth, approachable wines. By tasting all lots separately to determine their specific flavor profiles, the Woodbridge by Robert Mondavi winemaking team ensures that the final blends are fruit-focused and well-balanced.
    .page-content-wrap
        .row.waypoint
          .col-2
            h3 Woodbridge today
            p Todd Ziemann, Director of Winemaking, was bitten by the winemaking bug while visiting a Lodi winery during his high school career day. As a fourth generation Lodi native, he feels a tremendous affinity for the land and the wine it produces. His passion to craft wonderful wines for simple, everyday enjoyment is a natural fit with the Woodbridge small winery traditions.
            p The Woodbridge by Robert Mondavi team spends as much time studying the vineyards as they do crafting the wines. “Every decision we make, from harvesting the grapes at their peak to individual lot fermentation, results in wines with consistently great flavors,” says Ziemann. “We work closely with our growers to know the vineyards inside and out, which is just about the most important thing we do.”
            p The Woodbridge winemaking team sources each grape varietal from the vineyards with the best climate and soil conditions. They check the vineyards daily, monitoring the development of sugar, flavor, and acidity, harvesting only at peak levels of flavor. The team also works to maintain the most natural vineyard management practices in keeping with their philosophy of land stewardship. The end result is wines that are perfect to share with family and friends around a communal table. This honors Robert Mondavi’s belief that wines should enrich everyday experiences.
          .col-1
            .image-2
              img(:src="require('../assets/winemaking/grapes@2x.jpg')")
        .row.waypoint
          .col-1
            .image-3
              img(:src="require('../assets/winemaking/vinyard@2x.jpg')")
          .col-2
            h3 The Lodi Region
            p Lodi, California has been a major grape growing region since the 1850’s when prospectors drawn by the California gold rush began to settle the area in earnest. Today, Lodi comprises 18% of California’s total wine grape production - more than Napa and Sonoma counties combined!
            p The Lodi wine region is located in California’s central valley approximately 100 miles directly east of San Francisco at the edge of the Sacramento River Delta and is greatly influenced by its proximity to San Francisco Bay and the Pacific Ocean. As the central valley heats up, cool maritime breezes are drawn across the Lodi region creating a Mediterranean-like climate of warm days and cool nights ideal for growing premium grapes.
    rough-background
      image-text-row-cta(title="Our Wines" cta="Learn More" link="our-wines" path="winemaking/OurWines-Thumbnail@2x.jpg")
        p Woodbridge by Robert Mondavi wines are fruit-forward, smooth and made for sharing.
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

require('waypoints/lib/noframework.waypoints.js')
// delete uneeded comments
// const log = debug('view:Winemaking')

export default {
  name: 'Winemaking',
  head: {
    title: {
      inner: 'Winemaking',
      complement: 'California Wines'
    },
    meta: [
      {
        name: 'description', content: 'Discover the history of winemaking behind the heritage of Woodbridge by Robert Mondavi. Discover today!',
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
  mounted () {
    this.initWaypoints()
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
// for waypoints
.ready{
   opacity: 0;
   transform: translateY(10px);
   transition: all .3s ease-in;
   &-active{
     opacity: 1;
     transform: translateY(0px);
   }
 }
// .winemaking{}
.row {
  display: flex;
  justify-content: space-between;
  min-height: 40vh;
  margin-top: 50px;
  margin-bottom: 75px;
  @media #{$mobile} {
    flex-direction: column;
  }
}

.image-1 {
  width: 100%;
  padding: 0 50px;
  @media #{$mobile} {
    margin-right: 0px;
    width: 100%;
    margin-bottom: 20px;
  }
}
.image-2 {
  width: 100%;
  padding: 0 50px;
  @media #{$mobile} {
   img {
    max-height: 400px;
   }
  }
  // img {
  //   max-height: 400px;
  // }
}
.image-3 {
  width: 100%;
  padding: 0 50px;
  @media #{$mobile} {
   margin-left: 0px;
    img {
    max-height: 400px;
   }
  }
}

.col-1 {
  flex-basis: 50%;
   @media #{$mobile} {
    order: 2;
  }
}
.col-2 {
  flex-basis: 50%;
}
</style>
