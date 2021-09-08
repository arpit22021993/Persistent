import debug from 'debug'

let log = debug('store:ui')

const ui = {

  strict: true,
  namespaced: true,
  state: {
    buyModal: false,
  },

  mutations: {
    SET_BUY_MODAL (state, isVisible) {
      log('touching state')
      state.buyModal = isVisible
    },
  },
  actions: {
    updateBuyModal ({ commit }, isVisible) {
      log('action init', isVisible)
      commit('SET_BUY_MODAL', isVisible)
    },
  },
}

export default ui
