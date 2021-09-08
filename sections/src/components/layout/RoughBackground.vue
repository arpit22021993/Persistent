<!--Puts a rough background behind slotted content -->
<template lang="pug">
  .rough-background
    .rough-background__bg-edge(v-if="!onlyBottomEdge")
    .rough-background__bg-edge-bot(v-if="bottomEdge || onlyBottomEdge")
    .rough-background__main
    .rough-background__content
      slot
</template>
<script>
import debug from 'debug'

let log = debug('component:RoughBackground')

export default {
  name: 'RoughBackground',
  props: {
    // adds only bottom edge
    onlyBottomEdge: Boolean,
    // adds bottom edge in addition to default top edge
    bottomEdge: Boolean,
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
.rough-background {
  width: 100%;
  margin: 0;
  margin-bottom: 40px;
  position: relative;
  &__wrapper {
    width: 100%;
  }
  &__bg-edge{
    background-image: url('../../assets/global/white-paper-edge.png');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 3vw;
    min-height: 50px;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transform: rotate(180deg);
    @media #{$tablet} {
      height: 50px;
    }
    &-bot {
      background-image: url('../../assets/global/white-paper-edge.png');
      background-position: center bottom;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      height: 50px;
      bottom: -40px;
      left: 0;
      right: 0;
      width: 100%;
    }
  }
  &__main {
    background-image: url('../../assets/global/white-paper-middle.png');
    background-position: unset;
    background-repeat: repeat;
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__content {
    position: relative;
    padding-top: 30px;
  }
}
</style>
