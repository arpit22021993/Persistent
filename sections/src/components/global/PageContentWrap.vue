<!--Puts a rough background behind slotted content -->
<template lang="pug">
  .page-content-wrap
      slot
</template>
<script>
import debug from 'debug'

let log = debug('component:PageContentWrap')

export default {
  name: 'PageContentWrap',
  props: {
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
.page-content-wrap {
  width: 80%;
  @include center-block;
  max-width: 1070px;
}
</style>
