import debug from 'debug'

let log = debug('store:barrelAged')

const barrelAged = {

  strict: true,
  namespaced: true,
  state: {
    activeWine: 0,
    showDropDown: false,
    wineList: [
      {
        'index': 0,
        'name': 'RUM BARREL-AGED CHARDONNAY',
        'description': 'Our Rum-Barrel Aged Chardonnay opens with aromas of peach, toasted coconut, and tropical notes. This silky Chardonnay with warm spice, coconut, molasses, and tropical fruit flavors well with hearty dishes such as roast chicken with white truffle risotto and creamy cheeses. Best served slightly chilled.',
        'backgroundName': 'rb-acBG',
        'bottleName': 'rum-barrel-aged-chardonnay',
        'drizlyLink': 'https://drizly.com/wine/white-wine/chardonnay/woodbridge-rum-barrel-aged-chardonnay-white-wine-by-robert-mondavi/p100378',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/ChardBG.jpg'),
        //  'backgroundImageThumb': require('../../assets/our-wines/backgrounds/CabSauvBG_tn.jpg'),
        'instacartLink': false,
      },
      {
        'index': 1,
        'name': 'BOURBON BARREL-AGED CABERNET SAUVIGNON',
        'description': 'Our Bourbon Barrel-Aged Cabernet Sauvignon displays aromas of vanilla, brown sugar, caramel with a hint of bourbon. Flavors of red cherries, brambly blackberry, lush caramel, and spices that follow with a warm vanilla and caramel finish. This deep rich ruby wine pairs deliciously with your favorite comfort food, ours is barbeque pork with honey bourbon sauce.',
        'background-name': 'bb-acsBG',
        'bottleName': 'bourbon-barrel-aged-cabernet-sauvignon',
        'drizlyLink': 'https://drizly.com/wine/red-wine/cabernet-sauvignon/woodbridge-bourbon-barrel-aged-cabernet-sauvignon-by-robert-mondavi/p100379',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/CabSauvBG.jpg'),
        //  'backgroundImageThumb': require('../../assets/our-wines/backgrounds/CabMerlotBG_tn.png'),
        'instacartLink': 'https://www.instacart.com/products/21029043-woodbridge-by-robert-mondavi-bourbon-barrel-aged-cabernet-sauvignon-red-wine-750-ml',
      },
      {
        'index': 2,
        'name': 'BOURBON BARREL-AGED RED BLEND',
        'description': 'Our Bourbon Barrel-Aged Red Blend combines some of the finest attributes of Petite Sirah, Zinfandel, and other reds with select lots finished in bourbon barrels. This wine opens with aromas of blackberry jam, dark cherry, and warm notes of vanilla and spices. Flavors of fruit jam with sweet vanilla, caramel, toffee, and baking spice follow with a rich mouthfeel and long finish. This wine pairs well with savory and spicy dishes like tri-tip, roasted vegetables and chicken.',
        'background-name': 'bb-arbBG',
        'bottleName': 'bourbon-barrel-aged-red-blend',
        'drizlyLink': 'https://drizly.com/wine/red-wine/red-blend/woodbridge-bourbon-barrel-aged-red-blend-by-robert-mondavi/p100380',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/RedBlendBG.jpg'),
        //  'backgroundImageThumb': require('../../assets/our-wines/backgrounds/ChardBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/21027924-woodbridge-by-robert-mondavi-bourbon-barrel-aged-red-blend-red-wine-750-ml',
      },
    ],
  },

  mutations: {
    SET_BUY_MODAL (state, isVisible) {
      log('touching state')
      state.buyModal = isVisible
    },
    SET_ACTIVE_WINE (state, index) {
      log('touching state')
      state.activeWine = index
    },
    SET_DROPDOWN (state, isVisible) {
      log('touching state')
      state.showDropDown = isVisible
    },
  },
  getters: {
    activeWine: (state) => {
      return state.wineList[state.activeWine]
    },
    wineList: state => state.wineList,
  },
  actions: {
    updateActiveWine ({ commit }, index) {
      log('action init', index)
      commit('SET_ACTIVE_WINE', index)
    },
    updateDropDown ({ commit }, isVisible) {
      log('action init', isVisible)
      commit('SET_DROPDOWN', isVisible)
    },
  },
}

export default barrelAged
