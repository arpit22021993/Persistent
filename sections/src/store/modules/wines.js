import debug from 'debug'

let log = debug('store:wines')

const wines = {

  strict: true,
  namespaced: true,
  state: {
    activeWine: 0,
    showDropDown: false,
    wineList: [
      {
        'index': 0,
        'name': 'CABERNET SAUVIGNON',
        'description': 'Our Cabernet Sauvignon opens with aromas of cherries, berries, cedar, brown sugar, and toast. Flavors of berries, toasted marshmallow, chocolate, and graham cracker follow with a toasty caramel finish. This medium-bodied wine pairs deliciously with grilled meats and tomato-based pasta dishes',
        'backgroundName': 'SauvBlancBG',
        'bottleName': 'cabernet-sauvignon',
        'drizlyLink': 'https://drizly.com/wine/red-wine/cabernet-sauvignon/woodbridge-by-robert-mondavi-cabernet-sauvignon/p2155',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/CabSauvBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/CabSauvBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/2900440-woodbridge-by-robert-mondavi-cabernet-sauvignon-red-wine-750-mlCabernet',
      },
      {
        'index': 1,
        'name': 'CABERNET MERLOT',
        'description': 'Our Cabernet Merlot combines some of the finest attributes of both varietals, resulting in a delicious, smooth, full-bodied blend. Merlot’s lush, plummy aromas, silky dried cherry, and raspberry flavors complement the Cabernet’s structure, blackberry and cherry jam flavors, and hints of vanilla oak. Our Cabernet Merlot pairs well with a number of dishes, particularly hearty grilled or roasted beef, pork, chicken, or game.',
        'backgroundName': 'CabMerlotBG',
        'bottleName': 'cabernet-merlot',
        'drizlyLink': 'https://drizly.com/wine/red-wine/cabernet-sauvignon/woodbridge-cabernet-merlot/p17042',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/CabMerlotBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/CabMerlotBG_tn.png'),
        'instacartLink': 'https://www.instacart.com/products/96778-woodbridge-by-robert-mondavi-cabernet-sauvignon-merlot-red-wine-1-5-l',
      },
      {
        'index': 2,
        'name': 'CHARDONNAY',
        'description': 'Woodbridge Chardonnay displays aromas of tropical fruit with a hint of cinnamon and maple, leading to a rich, toasty finish. This vibrant, medium-bodied Chardonnay is lovely to pair with appetizers, including grilled summer vegetables and fresh fruits. Additionally, the wine can be enjoyed with heartier dishes such as lemon-pepper chicken Best served slightly chilled.',
        'backgroundName': 'ChardBG',
        'bottleName': 'chardonnay',
        'drizlyLink': 'https://drizly.com/wine/white-wine/chardonnay/woodbridge-chardonnay/p2157',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/ChardBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/ChardBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/33219-woodbridge-by-robert-mondavi-chardonnay-white-wine-1-5-l',
      },
      {
        'index': 3,
        'name': 'BUTTERY CHARDONNAY',
        'description': 'Woodbridge Buttery Chardonnay offers a richer, creamier, more buttery profile than our classic Chardonnay. This medium bodied white wine displays aromas of toasty vanilla and brown spice. Flavors of golden delicious apple and tropical fruit shine through the finish. Pair this Buttery Chardonnay with creamy soups, grilled shrimp, or alfredo pasta.',
        'backgroundName': 'ChardBG',
        'bottleName': 'buttery-chardonnay',
        'drizlyLink': 'https://drizly.com/wine/white-wine/chardonnay/woodbridge-buttery-chardonnay-white-wine-by-robert-mondavi/p145776',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/ChardBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/ChardBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/store/search/woodbridge%20buttery%20chardonnay?actid=fd93dd8a-16e4-4698-852e-215fdf04bdfc',
      },
      {
        'index': 4,
        'name': 'LIGHTLY OAKED CHARDONNAY',
        'description': 'Woodbridge Lightly Oaked Chardonnay displays citrus, lemon cream, and floral aromas that lead to vibrant flavors of white nectarine and citrus that shine through the finish. The wine is crisp and fresh with just a touch of oak creaminess. Pair with light dishes, such as grilled shrimp or pasta pomodoro. Best served slightly chilled.',
        'backgroundName': 'LightlyOakedChardBG',
        'bottleName': 'lightly-oaked-chardonnay',
        'drizlyLink': 'https://drizly.com/wine/white-wine/chardonnay/woodbridge-lightly-oaked-chardonnay/p17044',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/LightlyOakedChardBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/LightlyOakedChardBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/76203-woodbridge-by-robert-mondavi-lightly-oaked-chardonnay-white-wine-1-5-l',
      },
      {
        'index': 5,
        'name': 'MALBEC',
        'description': 'Our medium-bodied Malbec is an easy-to-drink wine with traditional fresh black cherry, blueberry, and cedar aromas complemented by flavors of plum, blackberry, and vanilla. This wine is a great match for rich meat dishes. Consider pairing it with spicy empanadas or smoky cured meats to start, followed by more substantial entrees such as beef stew, carne asada tacos, or lamb chops.',
        'backgroundName': 'MalbecBG',
        'bottleName': 'malbec',
        'drizlyLink': 'https://drizly.com/wine/red-wine/malbec/woodbridge-malbec/p2158',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/MalbecBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/MalbecBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/76212-woodbridge-by-robert-mondavi-malbec-red-wine-1-5-l',
      },
      {
        'index': 6,
        'name': 'MERLOT',
        'description': 'Our Merlot displays rich aromas of cherry, chocolate, and red berries with enticing flavors of cherry cola and toasty mocha oak. This full-bodied wine possesses well-balanced acidity and beautifully integrated tannins, creating complexity and structure. Its soft, versatile style complements grilled meats, especially steak, lamb, pork chops, and hamburgers. Enjoy this savory wine with hearty pasta with Bolognese sauce.',
        'backgroundName': 'Merlot',
        'bottleName': 'merlot',
        'drizlyLink': 'https://drizly.com/wine/red-wine/merlot/woodbridge-merlot/p2159',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/Merlot.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/Merlot_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/bevmo/products/3053483-woodbridge-by-robert-mondavi-merlot-red-wine-1-5-l',
      },
      {
        'index': 7,
        'name': 'MOSCATO',
        'description': 'With its fragrant aromas of orange blossom and citrus, our Moscato displays lightly sweet flavors with notes of Fuji apple and lemon cream. Its residual sugar is balanced out by a bright acidity, making it an excellent wine to pair with a wide variety of foods. Perfect for sweet afternoon sipping, our Moscato pairs finely with fruit and cheese, or with lightly sweet desserts such as roasted pears, fruit tarts, or almond cake. Best served well chilled.',
        'backgroundName': 'MoscatoBG',
        'bottleName': 'moscato',
        'drizlyLink': 'https://drizly.com/wine/champagne-sparkling-wine/other-sparkling-wine/woodbridge-moscato/p2160',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/MoscatoBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/MoscatoBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/160915-woodbridge-by-robert-mondavi-moscato-white-wine-1-5-l',
      },
      {
        'index': 8,
        'name': 'PINOT GRIGIO',
        'description': 'With aromas of nectarine and fresh peach, our crisp and refreshing Pinot Grigio is a food-friendly wine and a delightful addition to any warm and sunny afternoon. Originating from the northern coast of Italy, Pinot Grigio has long been known for its ability to pair well with seafood and other light dishes. Our Pinot Grigio is a well-rounded wine with a refreshing peach-citrus finish that pairs nicely with oysters, roast chicken or Brie. Serve slightly chilled.',
        'backgroundName': 'PinotGrigioBG',
        'bottleName': 'pinot-grigio',
        'drizlyLink': 'https://drizly.com/wine/white-wine/pinot-grigio/woodbridge-pinot-grigio/p2161',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/PinotGrigioBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/PinotGrigioBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/126506-woodbridge-by-robert-mondavi-pinot-grigio-white-wine-750-ml',
      },
      {
        'index': 9,
        'name': 'PINOT NOIR',
        'description': 'The bright aromas of our Pinot Noir lead with strawberry and cherry notes accented by hints of spice and toast. Round on the palate with a full finish, this wine displays rich, fruit-forward flavors, and a touch of toasty oak. Enjoy this versatile wine with light red meats, pork chops, or tortellini in a creamy tomato sauce.',
        'backgroundName': 'PinotNoirBG',
        'bottleName': 'pinot-noir',
        'drizlyLink': 'https://drizly.com/wine/red-wine/pinot-noir/woodbridge-pinot-noir/p2162',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/PinotNoirBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/PinotNoirBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/2898170-woodbridge-by-robert-mondavi-pinot-noir-red-wine-750-ml',
      },
      {
        'index': 10,
        'name': 'RIESLING',
        'description': `With delicate aromas of jasmine, stone fruit, and crisp citrus, our Riesling is an excellent alternative to more traditional whites. The wine's combination of rich, round textures, lightly sweet flavor, and refreshing acidity makes it easy to enjoy. With a slightly lower alcohol content, this Riesling is the perfect wine to pair with a variety of foods, including lightly sautéed chicken, seared scallops, or a crisp apple tart. Or serve it chilled by itself on a warm afternoon.`,
        'backgroundName': 'RieslingBG',
        'bottleName': 'riesling',
        'drizlyLink': 'https://drizly.com/wine/white-wine/riesling/woodbridge-riesling/p2163',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/RieslingBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/RieslingBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/walmart/products/2897918-woodbridge-by-robert-mondavi-riesling-white-wine-1-5-l',
      },
      {
        'index': 11,
        'name': 'RED BLEND',
        'description': 'Our Red Blend combines some of the finest attributes of Petite Sirah, Zinfandel, and Syrah with a touch of other complementary reds, resulting in a deliciously rich, full-bodied blend. The wine offers warm, toasty aromas and flavors, including jammy blackberry, vanilla, and baking spices. It’s full and rich with a long, flavorful finish. Our hearty Red Blend pairs well with savory dishes like burgers, barbeque, sausages, potato skins, and other fried foods.',
        'backgroundName': 'RedBlendBG',
        'bottleName': 'red-blend',
        'drizlyLink': 'https://drizly.com/wine/proprietary-other-blend/woodbridge-red-blend/p61904',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/RedBlendBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/RedBlendBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/17421151-woodbridge-by-robert-mondavi-red-blend-red-wine-750-ml',
      },
      {
        'index': 12,
        'name': 'SAUVIGNON BLANC',
        'description': 'With crisp, bright, refreshing citrus and tropical aromas and flavors, our Sauvignon Blanc is a fruit-forward wine that shines alone and alongside food. A lovely accompaniment to seafood and light chicken dishes, our Sauvignon Blanc is a perfect complement to seared scallops over linguine. The wine’s bright style also pairs nicely with warm-weather dishes such as fresh spring salad with chèvre, and fresh appetizers such as oysters and crab cakes. Enjoy our Sauvignon Blanc slightly chilled.',
        'backgroundName': 'SauvBlancBG',
        'bottleName': 'sauvignon-blanc',
        'drizlyLink': 'https://drizly.com/wine/white-wine/sauvignon-blanc/woodbridge-sauvignon-blanc/p2164',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/SauvBlancBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/SauvBlancBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/17315134-woodbridge-by-robert-mondavi-sauvignon-blanc-white-wine-1-5-l',
      },
      {
        'index': 13,
        'name': 'WHITE ZINFANDEL',
        'description': `Our White Zinfandel is bright and crisp, making it an ideal wine to enjoy on a warm afternoon. With hints of cherry and juicy red fruits from a propietary blend of grape varieties, the wine's fruity aromas and flavors come alive through watermelon and strawberry notes. Our White Zinfandel's light flavors make it an enjoyably versatile wine that pairs well with a spicy Cajun dish, such as Andouille Cajun Fettuccine, or tangy cheeses.`,
        'backgroundName': 'WhiteZinBG',
        'bottleName': 'white-zinfandel',
        'drizlyLink': 'https://drizly.com/wine/rose-wine/white-zinfandel/woodbridge-white-zinfandel/p2166',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/WhiteZinBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/WhiteZinBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/137271-woodbridge-by-robert-mondavi-white-zinfandel-wine-750-ml',
      },
      {
        'index': 14,
        'name': 'ROSÉ',
        'description': 'A blend of primarily Syrah and Tempranillo, our Rosé opens with aromas of bright strawberry, watermelon, and grapefruit. Juicy, refreshing flavors of grapefruit and citrus follow with a nice acidity. This lightbodied wine pairs deliciously with light salads and pasta, seafood, and goat cheese.',
        'backgroundName': 'RoseBG',
        'bottleName': 'rose-bottle',
        'drizlyLink': 'https://drizly.com/wine/rose-wine/woodbridge-by-robert-mondavi-rose/p92782',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/RoseBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/RoseBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/19901628-woodbridge-by-robert-mondavi-rose-wine-750-ml',
      },
      {
        'index': 15,
        'name': 'ZINFANDEL',
        'description': `The bright aromas of our Zinfandel brim with blackberry jam, cherries, black pepper, and spice. Vanilla and toast flavors add life to this full-bodied wine that finishes with soft, velvety tannins. Our Zin's smooth and layered flavors pair beautifully with grilled salmon, grilled chicken, lamb kebobs, or chicken rubbed with peppery spices.`,
        'backgroundName': 'ZinfBG',
        'bottleName': 'zinfandel',
        'drizlyLink': 'https://drizly.com/wine/red-wine/zinfandel/woodbridge-zinfandel/p2167',
        'backgroundImagePath': require('../../assets/our-wines/backgrounds/ZinfBG.jpg'),
        'backgroundImageThumb': require('../../assets/our-wines/backgrounds/ZinfBG_tn.jpg'),
        'instacartLink': 'https://www.instacart.com/products/126210-woodbridge-by-robert-mondavi-zinfandel-red-wine-1-5-l',
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

export default wines
