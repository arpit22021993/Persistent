<template lang="pug">
  .card
    .card__image(:style="`background-image: url(${image})`")
      h2.card__headline(v-html="headline")
      .card__image-overlay
    .card__content(:style="`background-image: url(${require('@/assets/RedPaperTexture-bright-1.png')})`")
      p.card__content-text {{ text }}
      router-link.card__content-cta(:id="routerLink" v-if="routerLink !== '#'"  :to="routerLink" :aria-label="ctaLabel") {{ cta }}
      a.card__content-cta(v-if="ctaLink !== '#'"  :href="ctaLink"  :aria-label="ctaLabel") {{ cta }}
</template>

<script>
import debug from 'debug'
require('waypoints/lib/noframework.waypoints.js')
// import { mapActions, mapState } from 'vuex'

/* global Waypoint */
/* eslint no-unused-vars: "off" */

let log = debug('component:Card')

export default {
  name: 'card',
  props: {
    image: {
      type: String,
      default: 'FROM ONE FOR ALL',
    },
    headline: {
      type: String,
      default: 'ENJOY IT<br>HOWEVER,<br>WHEREVER AND<br>WHENEVER',
    },
    text: {
      type: String,
      default: 'Celebrate Mondavi’s industry-changing point of view and Woodbridge’s storied heritage.',
    },
    cta: {
      type: String,
      default: 'WATCH VIDEO',
    },
    ctaLink: {
      type: String,
      default: '#',
    },
    ctaLabel: {
      type: String,
      default: '#',
    },
    routerLink: {
      type: String,
      default: '#',
    },
  },
  data () {
    return {
    }
  },
  mounted () {
    log('Mounted')
    this.initWaypoints()
  },
  computed: {
    // ...mapState('tasks', ['allTasks'])
  },
  methods: {
    // ...mapActions('tasks', ['syncTask'])
    initWaypoints () {
      var el = this.$el
      var waypoint = new Waypoint({
        element: el,
        handler: function () {
          el.classList.add('visible')
        },
        offset: '80%',
      })
    },
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
.card {
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  $gutter: 16px;
  margin-bottom: $gutter;
  max-width: 350px;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.75s ease;
  width: calc(33% - (#{$gutter} / 2));

  @media #{$mobile} {
    width: 100%;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &__image {
    align-items: flex-end;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: px-rem(400);
    max-height: calc(106vw / 3);
    padding: px-rem(24);
    padding-bottom: px-rem(64);
    position: relative;

    @media #{$mobile} {
      max-height: 106vw;
    }

    &-overlay {
      background: linear-gradient(transparent, rgba(90, 90, 90, 1));
      position: absolute;
      right: 0;
      bottom: 1rem;
      left: 0;
      height: 10rem;
    }
  }

  &__headline {
    color: $brandTan;
    font-size: px-rem(48);
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
    padding: px-rem(40) px-rem(24) px-rem(24);
    position: relative;

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
