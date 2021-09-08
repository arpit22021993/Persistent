<template lang="pug">
  .seperator
    span(v-if="text") {{text}}
    span(v-else)
      include ../../assets/svg/mondavi-signature.svg
</template>
<script>
export default {
  name: 'Seperator',
  props: {
    text: String,
  },
}
</script>

<style lang="scss" scoped>
.seperator{
  color: #86d1e6;
  position: relative;
  padding: 35px 0;
  &:before, &:after{
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    height: 1px;
    left:0;
    right: calc(60% + 80px);
    background-color: rgba(grey, .8);
  }

  &:after{
    left:calc(60% + 80px);
    right: 0;
  }

  svg {
    width:180px;
    fill: rgba(grey, .8);
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  @media #{$mobile} {}
}
</style>
