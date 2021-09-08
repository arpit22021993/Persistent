<template lang="pug">
  .card
    router-link(:to="`recipes/${recipeType}/${link}`")
      .card__image
        .card__image-bg(:style="`background-image: url(${image})`")
        .card__image-content
          h4.card__headline(v-html="headline")
        .card__image-overlay
      .card__content(:style="`background-image: url(${require('@/assets/RedPaperTexture-bright-1.png')})`")
        .card__content-cta {{ text }}
</template>

<script>
import debug from 'debug'
// require('waypoints/lib/noframework.waypoints.js')
// import { mapActions, mapState } from 'vuex'

/* global Waypoint */
/* eslint no-unused-vars: "off" */

let log = debug('component:FoodDrinkCard')

export default {
  name: 'FoodDrinkCard',
  props: {
    image: {
      type: String,
      default: require('@/assets/hp-ourwines.jpg'),
    },
    headline: {
      type: String,
      default: 'Need Headline Prop',
    },
    text: {
      type: String,
      default: 'Need Text Prop',
    },
    link: {
      type: String,
      default: '#',
    },
    recipeType: {
      type: String,
    },
  },
  data () {
    return {
    }
  },
  mounted () {
    log('Mounted')
  },
  computed: {
  },
  methods: {
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  $gutter: 16px;
  max-width: 350px;
  height: 287px;
  opacity: 1;
  transform: translateY(30px);
  transition: 0.3s ease;
  width: calc(33% - (#{$gutter} / 2));

  >a {
    &::after {
      display: none;
    }
  }

  @media #{$mobile} {
    width: 100%;
  }

  &__image {
    position: relative;
    height: 300px;
    &-content {
      position: absolute;
      bottom: 50px;
      left: 10px;
      right: 10px;
      max-height: calc(106vw / 3);
    }
    &-bg {
      position: absolute;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      top: 0;
      right: 0;
      left:0;
      bottom: 0;
    }

    @media #{$mobile} {
      max-height: 106vw;
    }

    &-overlay {
      background: linear-gradient(transparent, rgba(90, 90, 90, 1));
      position: absolute;
      right: 0;
      bottom: 1.6rem;
      left: 0;
      height: 10rem;
    }
  }

  &__headline {
    color: $brandTan;
    font-weight: bold;
    position: relative;
    z-index: 10;
  }

  &__content {
    align-items: flex-start;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    margin-top: -5rem;
    padding: 1.5rem .5rem .5rem;
    position: relative;
    bottom: -26px;
    text-shadow: 0px 3px 6px $brandGrey;
    &-text {
      color: $brandTan;
      max-width: 100%;
    }

    &-cta {
      color: $brandTan;
      &:after {
        width: 30%;
      }

      &:hover:after {
        width: 100%;
      }
    }
  }
}
</style>
