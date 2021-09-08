<!-- hardcoded cards until I get data -->
<template lang="pug">
  .eat-and-drink
    navigation
    page-hero(title="EAT & DRINK" :backgroundImagePath="require(`@/assets/eat-and-drink/EatDrink-Banner@2x.jpg`)")
      p Woodbridge by Robert Mondavi fulfills Robert Mondavi’s vision of putting great California wine on every table and bringing his beloved wine and food culture to the world. Our wines are made to complement food, with bright, balanced fruit flavors and a smooth finish.
    rough-background(bottomEdge=true)
      .page-content-wrap.pt-5.waypoint
        .food-recipes__header
          h2.title Food recipes
            a.btn(@click="showMoreFood = !showMoreFood") Explore All
          p We invite you to try one of our recipes paired with your favorite Woodbridge by Robert Mondavi wines.
        .row
          div(v-for="food in foodRecipeList.slice(0,3)")
            food-drink-card(:headline="food.title" recipeType="food" :link="food.slug" :image="requireImg(food.image, 'food-recipes')" :text="getPair(food)").flex-item
          div(v-if="showMoreFood" v-for="food in foodRecipeList.slice(3)")
            food-drink-card(:key="food.slug" :headline="food.title" recipeType="food" :link="food.slug" :image="requireImg(food.image, 'food-recipes')" :text="getPair(food)").flex-item
        .cocktail-recipes__header.mt-5
          h2.title Cocktail recipes
            a.btn(@click="showMoreDrink = !showMoreDrink") Explore All
          p We invite you to try one of our cocktail or popsicle recipes featuring your favorite Woodbridge by Robert Mondavi wines.
        .row
          div(v-for="drink in drinkRecipeList.slice(0,3)")
            food-drink-card(:headline="drink.title" recipeType="drink" :link="drink.slug" :image="requireImg(drink.image, 'drink-recipes')" :text="getPair(drink)").flex-item
          div(v-if="showMoreDrink" v-for="drink in drinkRecipeList.slice(3)")
              food-drink-card(:headline="drink.title" recipeType="drink" :link="drink.slug" :image="requireImg(drink.image, 'drink-recipes')" :text="getPair(drink)").flex-item
    .page-footer.page-content-wrap
      .row
        .col
          .image-col.image.image-padding
            img(:src="require('@/assets/global/Wine101-Thumbnail@2x.jpg')" alt="")
          .text-col
            h3 Wine101
            p Learn the basics of storing, serving, and food pairing tips for our wines.
            button.btn.btn-gold(type='button' @click="$router.push(`/wine-101`)" aria-label="Learn More about Wine 101") Learn More
        .col
          .image-col.image.image-padding
            img(:src="require('@/assets/our-story/BuyingWine-Thumbnail@2x.jpg')" alt="")
          .text-col
            h3 Buying Wine
            p Feeling overwhelmed? Let us guide you through what to buy and how to serve it.
            button.btn.btn-gold(type='button' @click="$router.push(`/buying-wine`)" aria-label="Learn More about Buying Wine") Learn More
    globalFooter
</template>

<script>
// import debug from 'debug'

import Navigation from '../components/Navigation'
import PageHero from '../components/global/PageHero'
import GlobalFooter from '../components/GlobalFooter'
import RoughBackground from '../components/layout/RoughBackground'
import FoodDrinkCard from '../components/global/FoodDrinkCard'

import { mapState } from 'vuex'
// const log = debug('view:Home')
require('waypoints/lib/noframework.waypoints.js')

export default {
  name: 'EatAndDrink',
  head: {
    title: {
      inner: 'Food & Wine Pairings',
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
      showMoreFood: false,
      showMoreDrink: false,
    }
  },
  mounted: function () {
    this.showMoreFood = false
    this.showMoreDrink = false
    // this.initWaypoints()
  },
  methods: {
    // if pair exists, return first one, else return empty string
    // also capitalizes and replaces '-' with ' '
    getPair (recipe) {
      if (recipe.pair) {
        return this.toTitleCase(recipe.pair[0].replace(/-/g, ' '))
      } else {
        return ''
      }
    },
    toTitleCase (str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    requireImg (img, type) {
      return require(`../assets/eat-and-drink/${type}/${img}`)
    },
    foodPreview () {
    },
    /* initWaypoints () {
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
        offset: '60%',
      })
      el.classList.add('ready')
    }, */
  },
  computed: {
    ...mapState({
      foodRecipeList: state => state.recipes.foodRecipeList,
      drinkRecipeList: state => state.recipes.drinkRecipeList,
    }),
  },
  components: {
    Navigation,
    PageHero,
    GlobalFooter,
    RoughBackground,
    FoodDrinkCard,
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
.eat-and-drink {
  background-color:  #fbf6e6;
  min-height: 100vh;
  height: 100vh;
  color: $FoodTitles;
  .title {
    font-weight: 700;
  }
  .row{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 50px;
  }
  .flex-item {
    min-width: 250px;
  }
  .food-recipes__header, .cocktail-recipes__header {
    margin-bottom: 25px;
    p {
      width: 50%;
      font-size: px-rem(16);

      @media #{$mobile} {
        width: 100%;
      }
    }
    @media #{$mobile} {
      text-align: center;
    }
  }
  .btn {
    margin-left: 10px;
    &:after {
      background: $brandGold;
      width: 30%;
    }
    &:hover:after {
      width: 100%;
    }

    @media #{$mobile} {
      display: block;
      margin: 1em auto;
      width: fit-content;
    }
  }
}

// footer/cta section
.page-footer {
  .row {
    display: flex;
    @media #{$tablet} {
      flex-direction: column;
      padding-top: 25px;
    }
  }
  .image-col {
    flex-basis: 50%;

  }
  .text-col {
    flex-basis: 25%;
    align-self: center;
  }
  .image {
    img {
      width: 100%;
      max-width: 400px;
    }
    &-padding {
      padding: 20px;
    }
  }
  .col {
    display: flex;
    flex-basis: 50%;
    @media #{$mobile-xs} {
      text-align: center;
      flex-direction: column;
      padding-top: 25px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
