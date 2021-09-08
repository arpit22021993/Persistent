<!-- change this to brand specific link !!! -->
<template lang="pug">
  .contact
    navigation
    rough-background
      .iframe-wrapper
        iframe(scrolling="yes" ref="iframe" :src="`//www.econsumeraffairs.com/cbrands/wine/contactus.htm?F2=Woodbridge%20by%20Robert%20Mondavi&css=//${location}/css/contact-iframe.css`" v-show="loaded" width="100%")
</template>

<script>
import debug from 'debug'
import Navigation from '../components/Navigation'
import RoughBackground from '@/components/layout/RoughBackground'

let log = debug('view:Contact')

export default {
  name: 'contact',
  head: {
    title: {
      inner: 'Contact Us',
    },
    meta: [
      {
        name: 'description', content: 'Contact Woodbridge by Robert Mondavi with questions and comments. We look forward to hearing from you!',
      },
    ],
  },
  data () {
    return {
      loaded: false,
      location: window.location.host,
    }
  },
  mounted: function () {
    log('Mounted')
    this.$refs.iframe.addEventListener('load', this.setLoaded())
  },
  computed: {
  },
  methods: {
    setLoaded () {
      this.loaded = true
    },
  },
  components: {
    RoughBackground,
    Navigation,
  },
}
</script>

<style lang="scss">
@import '@/styles/_fonts.scss';
.contact {
  position: relative;
  width: 100vw;

  img {
    margin-left: -20px;
  }
  .iframe-wrapper {
    padding: 100px 0px;
    position: relative;
    height: 1450px;
    width: 100vw;

    @media #{$desktop} {
      height: 1000px;
    }
  }

  iframe {
    width: 100%;
    height: 100%;
    font-family: $baseFontFamily;

    body {
      background-color: transparent;
    }
  }
}
</style>
