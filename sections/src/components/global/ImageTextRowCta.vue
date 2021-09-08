<!--Puts a rough background behind slotted content -->
<template lang="pug">
  .image-text-row-cta
    .row.center
      .footer-image-col.image.image-padding
        img(:src="getImg(path)" alt="")
      .footer-text-col.center-vert
        .inner
          h3 {{title}}
          slot
          button.btn.btn-gold(:aria-label="linkValue" type='button' @click="$router.push(`/${link}`)") {{cta}}
</template>
<script>
import debug from 'debug'

let log = debug('component:ImageTextRowCta')

export default {
  name: 'ImageTextRowCta',
  props: {
    title: String,
    subtitle: String,
    cta: String,
    link: String,
    path: String,
    linkValue:String,
  },
  data () {
    return {
    }
  },
  mounted () {
    log('Mounted')
  },
  computed: {
    // ...mapState('tasks', ['allTasks'])
  },
  methods: {
    getImg (path) {
      return require(`../../assets/${path}`)
    },
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
.image-text-row-cta {
  @include center-block;
  width: 60%;
  max-width: 800px;
  @media #{$tablet} {
    width: 95%;
    text-align: center;
  }
  .row {
    display: flex;
    @media #{$tablet} {
      flex-direction: column;
      padding-top: 25px;
    }
  }
  .inner{
    max-width: 280px;
    h3 {
      font-weight: 600;
    }
    @include center-block;
  }
  .footer-image-col {
    flex-basis: 40%;
  }
  .footer-text-col {
    flex-basis: 40%;
  }
  .center-vert {
  align-self: center;
  }
  .center {
  justify-content: center;
}
.image{
  img {
    width: 100%;
    max-width: 280px;
  }

  &-padding {
    padding: 20px;
  }
}
}
</style>
