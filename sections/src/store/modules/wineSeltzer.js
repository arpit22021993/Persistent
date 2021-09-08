import debug from 'debug'

let log = debug('store:wineSeltzers')

const wineSeltzers = {

  strict: true,
  namespaced: true,
  state: {
    activeWine: 0,
    showDropDown: false,
    wineList: [
      {
        'index': 0,
        'name': 'Peach Mango',
        'description': 'Our Peach Mango Wine Seltzer is made with white wine, sparkling water, and natural flavors. Juicy peach, ripe mango, and citrus flavors complement a crisp, white wine base. This Peach Mango Wine Seltzer has 0g added sugar and is only 70 calories. Enjoy this refreshing drink no matter the occasion.',
        'background-name': 'peach-mango-seltzer',
        'bottleName': 'peach-mango-seltzer',
        'drizlyLink': false,
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/RedBlendBG.jpg'),
        // 'backgroundImageThumb': require('../../assets/our-wines/backgrounds/ChardBG_tn.jpg'),
        'instacartLink': false,
      },
      {
        'index': 1,
        'name': 'Wildberry Watermelon',
        'description': 'Our Wildberry Watermelon Wine Seltzer is made with rose wine, sparkling water, and natural flavors. Wildberries and watermelon flavors complement this delightful rose based hard seltzer. This wine seltzer has 0g added sugar and is only 70 calories. Enjoy this refreshing drink no matter the occasion.',
        'background-name': 'wildberry-watermelon-seltzer',
        'bottleName': 'wildberry-watermelon-seltzer',
        'drizlyLink': false,
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/CabSauvBG.jpg'),
        // 'backgroundImageThumb': require('../../assets/our-wines/backgrounds/CabMerlotBG_tn.png'),
        'instacartLink': false,
      },
      {
        'index': 2,
        'name': 'Cranberry Apple',
        'description': 'Our Cranberry Apple Wine Seltzer is made with white wine, sparkling water, and natural flavors. Natural cranberry, apple, and berry flavors complement a crisp, white wine base. This Cranberry Apple Wine Seltzer has 0g Added Sugar and is only 70 calories. Enjoy this refreshing drink no matter the occasion.',
        'background-name': 'cranberry-apple-seltzer',
        'bottleName': 'cranberry-apple-seltzer',
        'drizlyLink': false,
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/RedBlendBG.jpg'),
        // 'backgroundImageThumb': require('../../assets/our-wines/backgrounds/ChardBG_tn.jpg'),
        'instacartLink': false,
      },
      {
        'index': 3,
        'name': 'Variety Pack',
        'description': 'Our Wine Seltzer Variety Pack includes Peach Mango, Wildberry Watermelon and Cranberry Apple flavors and are made with real wine, sparkling water, and natural flavors. With 0g Added Sugar and only 70 calories, these wine seltzers are perfect for any occasion.',
        'background-name': 'variety-pack-seltzer',
        'bottleName': 'variety-pack-seltzer',
        'drizlyLink': false,
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/RedBlendBG.jpg'),
        // 'backgroundImageThumb': require('../../assets/our-wines/backgrounds/ChardBG_tn.jpg'),
        'instacartLink': false,
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

export default wineSeltzers
