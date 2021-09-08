const wines = {
  winelist: [
    {
      'name': 'CABERNET SAUVIGNON',
      'description': 'Our Cabernet Sauvignon opens with aromas of cherries, berries, cedar, brown sugar, and toast. Flavors of berries, toasted marshmallow, chocolate, and graham cracker follow with a toasty caramel finish. \nThis medium-bodied wine pairs deliciously with grilled meats and tomato-based pasta dishes',
      'background-name': 'SauvBlancBG',
      'bottleName': 'cabernet-sauvignon',
    },
    {
      'name': 'CABERNET MERLOT',
      'description': 'Our Cabernet Merlot combines some of the finest attributes of both varietals, resulting in a delicious, smooth, full-bodied blend. Merlot’s lush, plummy aromas, silky dried cherry, and raspberry flavors complement the Cabernet’s structure, blackberry and cherry jam flavors, and hints of vanilla oak.\nOur Cabernet Merlot pairs well with a number of dishes, particularly hearty grilled or roasted beef, pork, chicken, or game.',
      'background-name': 'CabMerlotBG',
      'bottleName': 'cabernet-merlot',
    },
    {
      'name': 'CHARDONNAY',
      'description': 'Woodbridge Chardonnay displays aromas of tropical fruit with a hint of cinnamon and maple, leading to a rich, toasty finish. This vibrant, medium-bodied Chardonnay is lovely to pair with appetizers, including grilled summer vegetables and fresh fruits.\nAdditionally, the wine can be enjoyed with heartier dishes such as lemon-pepper chicken. Best served slightly chilled.',
      'background-name': 'ChardBG',
      'bottleName': 'chardonnay',
    },
    {
      'name': 'LIGHTLY OAKED CHARDONNAY',
      'description': 'Woodbridge Lightly Oaked Chardonnay displays citrus, lemon cream, and floral aromas that lead to vibrant flavors of white nectarine and citrus that shine through the finish. The wine is crisp and fresh with just a touch of oak creaminess.\nPair with light dishes, such as grilled shrimp or pasta pomodoro. Best served slightly chilled.',
      'background-name': 'LightlyOakedChardBG',
      'bottleName': 'lightly-oaked-chardonnay',
    },
    {
      'name': 'MALBEC',
      'description': 'Our medium-bodied Malbec is an easy-to-drink wine with traditional fresh black cherry, blueberry, and cedar aromas complemented by flavors of plum, blackberry, and vanilla. This wine is a great match for rich meat dishes.\nConsider pairing it with spicy empanadas or smoky cured meats to start, followed by more substantial entrees such as beef stew, carne asada tacos, or lamb chops.',
      'background-name': 'MalbecBG',
      'bottleName': 'malbec',
    },
    {
      'name': 'MERLOT',
      'description': 'Our Merlot displays rich aromas of cherry, chocolate, and red berries with enticing flavors of cherry cola and toasty mocha oak. This full-bodied wine possesses well-balanced acidity and beautifully integrated tannins, creating complexity and structure.\nIts soft, versatile style complements grilled meats, especially steak, lamb, pork chops, and hamburgers. Enjoy this savory wine with hearty pasta with Bolognese sauce.',
      'background-name': 'Merlot',
      'bottleName': 'merlot',
    },
    {
      'name': 'MOSCATO',
      'description': 'With its fragrant aromas of orange blossom and citrus, our Moscato displays lightly sweet flavors with notes of Fuji apple and lemon cream. Its residual sugar is balanced out by a bright acidity, making it an excellent wine to pair with a wide variety of foods.\nPerfect for sweet afternoon sipping, our Moscato pairs finely with fruit and cheese, or with lightly sweet desserts such as roasted pears, fruit tarts, or almond cake. Best served well chilled.',
      'background-name': 'MoscatoBG',
      'bottleName': 'moscato',
    },
    {
      'name': 'PINOT GRIGIO',
      'description': 'With aromas of nectarine and fresh peach, our crisp and refreshing Pinot Grigio is a food-friendly wine and a delightful addition to any warm and sunny afternoon. Originating from the northern coast of Italy, Pinot Grigio has long been known for its ability to pair well with seafood and other light dishes.\nOur Pinot Grigio is a well-rounded wine with a refreshing peach-citrus finish that pairs nicely with oysters, roast chicken or Brie. Serve slightly chilled.',
      'background-name': 'PinotGrigioBG',
      'bottleName': 'pinot-grigio',
    },
    {
      'name': 'PINOT NOIR',
      'description': 'The bright aromas of our Pinot Noir lead with strawberry and cherry notes accented by hints of spice and toast. Round on the palate with a full finish, this wine displays rich, fruit-forward flavors, and a touch of toasty oak.\nEnjoy this versatile wine with light red meats, pork chops, or tortellini in a creamy tomato sauce.',
      'background-name': 'PinotNoirBG',
      'bottleName': 'pinot-noir',
    },
    {
      'name': 'RIESLING',
      'description': `With delicate aromas of jasmine, stone fruit, and crisp citrus, our Riesling is an excellent alternative to more traditional whites. The wine's combination of rich, round textures, lightly sweet flavor, and refreshing acidity makes it easy to enjoy.\nWith a slightly lower alcohol content, this Riesling is the perfect wine to pair with a variety of foods, including lightly sautéed chicken, seared scallops, or a crisp apple tart. Or serve it chilled by itself on a warm afternoon.`,
      'background-name': 'RieslingBG',
      'bottleName': 'riesling',
    },
    {
      'name': 'RED BLEND',
      'description': 'Our Red Blend combines some of the finest attributes of Petite Sirah, Zinfandel, and Syrah with a touch of other complementary reds, resulting in a deliciously rich, full-bodied blend. The wine offers warm, toasty aromas and flavors, including jammy blackberry, vanilla, and baking spices. It’s full and rich with a long, flavorful finish.\nOur hearty Red Blend pairs well with savory dishes like burgers, barbeque, sausages, potato skins, and other fried foods.',
      'background-name': 'RedBlendBG',
      'bottleName': 'red-blend',
    },
    {
      'name': 'SAUVIGNON BLANC',
      'description': 'With crisp, bright, refreshing citrus and tropical aromas and flavors, our Sauvignon Blanc is a fruit-forward wine that shines alone and alongside food.\nA lovely accompaniment to seafood and light chicken dishes, our Sauvignon Blanc is a perfect complement to seared scallops over linguine. The wine’s bright style also pairs nicely with warm-weather dishes such as fresh spring salad with chèvre, and fresh appetizers such as oysters and crab cakes. Enjoy our Sauvignon Blanc slightly chilled.',
      'background-name': 'SauvBlancBG',
      'bottleName': 'sauvignon-blanc',
    },
    {
      'name': 'WHITE ZINFANDEL',
      'description': `Our White Zinfandel is bright and crisp, making it an ideal wine to enjoy on a warm afternoon. With hints of cherry and juicy red fruits from a propietary blend of grape varieties, the wine's fruity aromas and flavors come alive through watermelon and strawberry notes.\nOur White Zinfandel's light flavors make it an enjoyably versatile wine that pairs well with a spicy Cajun dish, such as Andouille Cajun Fettuccine, or tangy cheeses.`,
      'background-name': 'WhiteZinBG',
      'bottleName': 'white-zinfandel',
    },
    {
      'name': 'ROSÉ',
      'description': 'A blend of primarily Syrah and Tempranillo, our Rosé opens with aromas of bright strawberry, watermelon, and grapefruit. Juicy, refreshing flavors of grapefruit and citrus follow with a nice acidity.\nThis lightbodied wine pairs deliciously with light salads and pasta, seafood, and goat cheese.',
      'background-name': 'RoseBG',
      'bottleName': 'rose-bottle',
    },
    {
      'name': 'ZINFANDEL',
      'description': `The bright aromas of our Zinfandel brim with blackberry jam, cherries, black pepper, and spice. Vanilla and toast flavors add life to this full-bodied wine that finishes with soft, velvety tannins.\nOur Zin's smooth and layered flavors pair beautifully with grilled salmon, grilled chicken, lamb kebobs, or chicken rubbed with peppery spices.`,
      'background-name': 'ZinfBG',
      'bottleName': 'zinfandel',
    },
  ],
}
export default wines
