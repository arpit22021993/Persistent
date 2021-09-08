<template lang="pug">
  footer.global-footer
    ul.global-footer__menu
      li.global-footer__menu-item
        router-link.global-footer__menu-link(to="/where-to-buy") Find Wine
      li.global-footer__menu-item
        router-link.global-footer__menu-link(to="/contact") Contact Us
      li.global-footer__menu-item
        router-link.global-footer__menu-link(to="/privacy-policy") Privacy Policy
      li.global-footer__menu-item
        router-link.global-footer__menu-link(to="/terms") Terms
      li.global-footer__menu-item
        a.global-footer__menu-link(href="https://globalbrandcenter.cbrands.com/news/article/16EBC382-8A3A-47E3-91EE453355EC390A/") Trade
      li.global-footer__menu-item
        router-link.global-footer__menu-link(to="/contact") Do Not Sell My Personal Information
    hr.global-footer__divider
    .global-footer__copyright(v-if="MLBPresent") Major League Baseball trademarks and copyrights are used with permission of Major League Baseball. Visit&nbsp;MLB.com.
    br(v-if="MLBPresent")
    span.global-footer__copyright Please enjoy responsibly. &copy; {{date}}
    span.global-footer__address Woodbridge, Acampo, CA
</template>

<script>
import debug from 'debug'
// import { mapActions, mapState } from 'vuex'

let log = debug('component:GlobalFooter')

export default {
  name: 'globalFooter',
  props: {
    MLBPresent: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      date: new Date().getFullYear(),
    }
  },
  mounted () {
    log('Mounted')
  },
  computed: {
    // ...mapState('tasks', ['allTasks'])
  },
  methods: {
    // ...mapActions('tasks', ['syncTask'])
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
.global-footer {
  padding: 4.625rem 1rem 2.75rem;
  text-align: center;

  @media #{$mobile} {
    padding: 1rem 1.5rem 1.5rem;
  }

  &__menu {
    text-align: center;

    &-item {
      display: inline-block;
      margin: 0 px-rem(17);

      @media #{$mobile} {
        display: block;
        margin: auto;
        padding: px-rem(12) 0;
      }
    }

    &-link {
      color: $brandBrown;
      font-size: px-rem(18);
      font-weight: 300;
      text-decoration: none;
      text-transform: uppercase;

      &:after {
        background: $brandBrown;
      }
    }
  }

  &__divider {
    background: $brandBrown;
    border: none;
    height: 1px;
    margin: px-rem(22) auto;
    max-width: 100%;
    width: px-rem(400);
  }

  &__copyright,
  &__address {
    font-weight: $bodyFontLightWeight;
    margin: 0 2px;

    @media #{$mobile} {
      display: block;
    }
  }
}
</style>
