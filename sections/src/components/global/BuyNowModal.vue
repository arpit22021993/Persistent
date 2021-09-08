<template lang="pug">
  .buy-now-modal
    .modal-mask
      .modal-wrapper(@click.self="updateBuyModal(false)")
        .modal-container
          .modal-exit(@click="updateBuyModal(false)") x
          .modal-header
            h2 Buy Now
          .modal-body
            p Woodbridge wines can be delivered straight to your door with Drizly
            a(href='https://drizly.com/wine-brands/woodbridge-by-robert-mondavi/b1119').btn.btn-gold Order Online
            .sep OR
          .modal-footer
            p find a location near you
            router-link(@click.native="updateBuyModal(false)" to="/where-to-buy").btn.btn-gold Find a Store
</template>

<script>
import debug from 'debug'
import { mapActions } from 'vuex'
// import { mapActions, mapState } from 'vuex'

/* global Waypoint */
/* eslint no-unused-vars: "off" */

let log = debug('component:BuyNowModal')

export default {
  name: 'BuyNowModal',
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
    ...mapActions({
      updateBuyModal: 'ui/updateBuyModal',
    }),
  },
  watch: {
    $route: function () {
      this.updateBuyModal(false)
    },
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
  .sep {
    margin: 20px 0px;
    position: relative;
    &:before, &:after{
      content: '';
      position: absolute;
      display: block;
      top: 50%;
      height: 1px;
      left:0;
      right: calc(50% + 20px);
      background-color: $brandBrown;
      transform: translateY(-50%);
    }
    &:after{
      left:calc(50% + 20px);
      right: 0;
    }
  }
  a {
    &.btn {
     font-family: $baseFontFamily;
    }
    &.btn-gold {
      color: $brandGold;
      text-transform: uppercase;
      border: 1px solid $brandGold;
      width: px-rem(184);
      background-color: unset;
      padding: 10px 10px;
      transition: background-color .3s ease;
    &:hover {
      cursor: pointer;
      background-color: #fff;
    }
  }
  }
  .buy-now-modal {
    text-align: center;
  }
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000000, .6);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 412px;
  background-image: url('../../assets/global/white-full.png');
  margin: 0px auto;
  outline: 1px solid $brandGold;
  outline-offset: -10px;
  padding: 80px 40px;
  background-color: #fff;
  border-radius: 0px;
  box-shadow: 0 0px 60px rgba(#000000, .22);
  @media #{$mobile} {
    width: 100%;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}
.modal-exit {
  position: absolute;
  font-size: 30px;
  font-weight: 200;
  padding: 5px;
  top: 10px;
  right: 25px;
  color: $brandGold;
  cursor: pointer;
}
</style>
