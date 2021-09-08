<!--Puts a rough background behind slotted content -->
<template lang="pug">
  .image-text-row-cta
    .row.center
      .footer-image-col.image.image-padding
        img(:src="require('@/assets/our-story/OurStory-Winemaking.jpg')")
      .footer-text-col.center-vert
        h4 {{title}}
        slot
        button.btn.btn-gold(@click="router.go(`/${link}`)") {{cta}}
</template>
<script>
import debug from 'debug'

let log = debug('component:ImageTextRow')

export default {
  name: 'ImageTextRowCta',
  props: {
    imgLink: String,
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
    // ...mapActions('tasks', ['syncTask'])
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
.image-text-row-cta {
  @include center-block;
  width: 60%;
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
  .footer-image-col {
    flex-grow: 50;
  }
  .footer-text-col {
    flex-grow: 45;
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
    max-width: 400px;
  }

  &-padding {
    padding: 20px;
  }
}
}
</style>
