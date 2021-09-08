<template lang="pug">
.recipe-detail
  navigation
  rough-background(bottomEdge)
    .recipe-container.page-content-wrap.pt-5.mt-5
      .col-1
        //- .back-button
        //-   router-link(to='/eat-and-drink') Back to recipes
        .recipe__img
          img(
            :src="require(`../assets/eat-and-drink/${foodType}-recipes/${recipeData.image}`)"
          )
        .recipe__title
          h1 {{ recipeData.title }}
        .recipe__pairing(v-if="recipeData.pair[0]")
          p Pair With: <router-link :to="{name: 'our-wines', params: { bottleName: recipeData.pair[0] } }">{{ wineName }}</router-link>
        .recipe__servings(v-if="recipeData.serves")
          p Serves: {{ recipeData.serves }}
        .recipe__description(v-if="recipeData.description")
          p {{ recipeData.description }}
      .col-2
        div(v-for="section in recipeData.sections")
          .section
            .section__header(v-if="section.headline")
              h4 {{ section.headline }}
            .section__content
              .section__paragraph(v-if="section.type === 'paragraph'")
                p(v-for="item in section.items", v-html="item")
              .section__list(v-if="section.type === 'list'")
                ul
                  li(v-for="item in section.items") {{ item }}
          .recipe__ingredients
            .recipe__ingredients-optional
          .recipe__directions

  global-footer
</template>

<script>
import debug from "debug";
import GlobalFooter from "../components/GlobalFooter";
import Navigation from "../components/Navigation";
import RoughBackground from "../components/layout/RoughBackground";

import { mapState } from "vuex";

let log = debug("component:RecipeDetail");
export default {
  name: "RecipeDetail",
  head: {
    title: function () {
      if (this.$route.params.type === "food") {
        return {
          inner: `${this.recipeData.title} | Wine and Food Recipes`,
        };
      }
      if (this.$route.params.type === "drink") {
        return {
          inner: `${this.recipeData.title} | Wine Cocktail Recipes`,
        };
      }
    },
    meta: function () {
      if (this.$route.params.type === "food") {
        return [
          {
            name: "description",
            content: `Woodbridge wines are easy to pair and enjoy with a variety of recipes and wine cocktails, like our ${this.recipeData.title} recipe. Try it today!`,
          },
        ];
      }
      if (this.$route.params.type === "drink") {
        return [
          {
            name: "description",
            content: `Woodbridge wines are not only refreshing, but also perfectly crafted to mix with your beverage, like our ${this.recipeData.title}. Try it today!`,
          },
        ];
      }
    },
  },
  props: [],
  data() {
    return {
      foodType: this.$route.params.type,
    };
  },
  beforeCreate: function () {},
  mounted: function () {
    log("Mounted");
  },
  computed: {
    recipeData() {
      // returns first object where id matches
      if (this.$route.params.type === "food") {
        return this.foodRecipeList.find(
          (recipe) => recipe.slug === this.$route.params.id
        );
      }
      if (this.$route.params.type === "drink") {
        return this.drinkRecipeList.find(
          (recipe) => recipe.slug === this.$route.params.id
        );
      }
    },
    wineName() {
      if (!this.recipeData.pairwith) {
        let wine = this.wineList.find(
          (wine) => wine.bottleName === this.recipeData.pair[0]
        );
        if (wine) {
          return wine.name;
        }
      }

      return this.recipeData.pairwith;
    },
    ...mapState({
      foodRecipeList: (state) => state.recipes.foodRecipeList,
      drinkRecipeList: (state) => state.recipes.drinkRecipeList,
      wineList: (state) => state.wines.wineList,
    }),
  },
  methods: {},
  components: {
    Navigation,
    GlobalFooter,
    RoughBackground,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables";
@import "../styles/_mixins";
.recipe-detail {
  min-height: 100vh;
  height: 100vh;
  color: $FoodTitles;
}

.recipe-container {
  margin-bottom: 25px;
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  @media #{$tablet} {
    flex-direction: column;
  }
}

.back-button {
  display: block;
  cursor: pointer;
  font-family: $baseFontFamily;
  text-transform: uppercase;
  width: 150px;
  margin-bottom: 20px;
}
.col-1 {
  flex-grow: 40%;
  margin-right: 50px;
}
.col-2 {
  flex-grow: 60%;
}
.recipe {
  &__img {
    img {
      max-width: 350px;
    }
  }
  &__title {
    margin-top: 25px;
    h1 {
      font-size: 3rem;
      font-weight: 600;
    }
  }
  &__description {
    p {
      line-height: px-rem(26);
      font-size: px-rem(18);
    }
  }
  &__pairing {
    a {
      color: $linkRed;
      &:after {
        background: $linkRed;
      }
    }
  }
  &__ingredients {
    margin-top: 25px;
    line-height: px-rem(30);
    font-family: $caslonFontFamily;
    p {
      font-family: $caslonFontFamily;
      font-size: px-rem(16);
    }
    &-optional {
      margin-top: 3%;
    }
  }
  &__directions {
    margin-top: 50px;
    p {
      line-height: px-rem(30);
      font-weight: 200;
    }
  }
}
</style>
