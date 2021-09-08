import debug from 'debug'

let log = debug('store:grabAndGo')

const grabAndGo = {

  strict: true,
  namespaced: true,
  state: {
    activeWine: 0,
    showDropDown: false,
    wineList: [
      {
        'index': 0,
        'name': 'CHARDONNAY',
        'description': 'Woodbridge Chardonnay displays aromas of tropical fruit with a hint of cinnamon and maple, leading to a rich, toasty finish. This vibrant, medium-bodied Chardonnay is lovely to pair with appetizers, including grilled summer vegetables and fresh fruits. Enjoy this convenient on-the-go and resealable box wine anytime anywhere. Best served slightly chilled.',
        'backgroundName': 'chardonnay-tetra',
        'bottleName': 'chardonnay-tetra',
        'drizlyLink': false,
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/ChardBG.jpg'),
        // 'backgroundImageThumb': require('../../assets/our-wines/backgrounds/CabSauvBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/20395767-woodbridge-by-robert-mondavi-chardonnay-white-wine-box-500-ml',
      },
      {
        'index': 1,
        'name': 'CABERNET SAUVIGNON',
        'description': 'Our Cabernet Sauvignon opens with aromas of cherries, berries, cedar, brown sugar, and toast. Flavors of berries, toasted marshmallow, chocolate, and graham cracker follow with a toasty caramel finish. This medium-bodied, convenient on-the-go, and resealable box wine pairs deliciously with grilled meats and tomato-based pasta dishes.',
        'background-name': 'cabernet-sauvignon-tetra',
        'bottleName': 'cabernet-sauvignon-tetra',
        'drizlyLink': false,
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/CabSauvBG.jpg'),
        // 'backgroundImageThumb': require('../../assets/our-wines/backgrounds/CabMerlotBG_tn.png'),
        'instacartLink': 'https://www.instacart.com/products/20474363-woodbridge-by-robert-mondavi-cabernet-sauvignon-red-wine-box-500-ml',
      },
      {
        'index': 2,
        'name': 'RED BLEND',
        'description': 'Our Red Blend combines some of the finest attributes of Petite Sirah, Zinfandel, and Syrah with a touch of other complementary reds, resulting in a deliciously rich, full-bodied blend. The wine offers warm, toasty aromas and flavors, including jammy blackberry, vanilla, and baking spices. It’s full and rich with a long, flavorful finish. Enjoy our hearty Red Blend, now conveniently on-the-go and resealable, with savory dishes like burgers, barbeque, sausages, potato skins, and other fried foods.',
        'background-name': 'red-blend-tetra',
        'bottleName': 'red-blend-tetra',
        'drizlyLink': false,
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/RedBlendBG.jpg'),
        // 'backgroundImageThumb': require('../../assets/our-wines/backgrounds/ChardBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/20512294-woodbridge-by-robert-mondavi-red-blend-red-wine-box-500-ml',
      },
      {
        'index': 3,
        'name': 'PINOT GRIGIO',
        'description': 'With aromas of nectarine and fresh peach, our crisp and refreshing Pinot Grigio is a food-friendly wine and a delightful addition to any warm and sunny afternoon. Our Pinot Grigio is a well-rounded wine with a refreshing peach-citrus finish that pairs nicely with oysters, roast chicken or Brie. Serve slightly chilled. Enjoy our convenient on-the-go and resealable Pinot Grigio box wine anytime anywhere.',
        'background-name': 'pinot-grigio-tetra',
        'bottleName': 'pinot-grigio-tetra',
        'drizlyLink': false,
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/PinotGrigioBG.jpg'),
        // 'backgroundImageThumb': require('../../assets/our-wines/backgrounds/CabMerlotBG_tn.png'),
        'instacartLink': 'https://www.instacart.com/products/20474260-woodbridge-by-robert-mondavi-pinot-grigio-white-wine-box-500-ml',
      },
      {
        'index': 4,
        'name': 'ROSE',
        'description': 'A blend of primarily Syrah and Tempranillo, our Rosé opens with aromas of bright strawberry, watermelon, and grapefruit. Juicy, refreshing flavors of grapefruit and citrus follow with a nice acidity. This light bodied, convenient on-the-go and resealable box wine pairs deliciously with light salads and pasta, seafood, and goat cheese.',
        'background-name': 'rose-tetra',
        'bottleName': 'rose-tetra',
        'drizlyLink': false,
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/RoseBG.jpg'),
        // 'backgroundImageThumb': require('../../assets/our-wines/backgrounds/ChardBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/20989990-woodbridge-by-robert-mondavi-rose-wine-box-500-ml',
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

export default grabAndGo
