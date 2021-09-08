<template lang="pug">
  .div
    ul.award-grid
      li(v-for="value in awardList" v-bind:key="value.index").awarditem
        .border
          a(:href="value.winemagLink" target="_blank")
            .name {{ value.name }}
            .bottom-container
              .points {{ value.points }}
                span  POINTS
              .best-buy BEST #[br]
                span BUY
</template>

<script>
export default {
  name: 'Awards',
  data () {
    return {
      awardList: [
        {
          'index': 0,
          'name': '2018 Sauvignon Blanc',
          'points': '86',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2018-sauvignon-blanc-california/',
        },
        {
          'index': 1,
          'name': '2018 Pinot Grigio',
          'points': '87',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2018-pinot-grigio-california/',
        },
        {
          'index': 2,
          'name': '2018 Chardonnay',
          'points': '88',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2018-chardonnay-california/',
        },
        {
          'index': 3,
          'name': '2018 Lightly Oaked Chardonnay',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2018-lightly-oaked-chardonnay-california/',
        },
        {
          'index': 4,
          'name': '2017 Merlot',
          'points': '87',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2017-merlot-california/',
        },
        {
          'index': 5,
          'name': '2017 Pinot Noir',
          'points': '86',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2017-pinot-noir-california/',
        },
        {
          'index': 6,
          'name': '2017 Red',
          'points': '86',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2017-red-california/',
        },
        {
          'index': 7,
          'name': '2017 Cabernet Sauvignon',
          'points': '87',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-2017-cabernet-sauvignon-california/',
        },
        {
          'index': 8,
          'name': '2017 Pinot Grigio',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2017-pinot-grigio-california/',
        },
        {
          'index': 9,
          'name': '2017 Sauvignon Blanc',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2017-sauvignon-blanc-california/',
        },
        {
          'index': 10,
          'name': '2016 Zinfandel',
          'points': '86',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2016-zinfandel-california/',
        },
        {
          'index': 11,
          'name': '2016 Merlot',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2016-merlot-california/',
        },
        {
          'index': 12,
          'name': '2016 Pinot Grigio',
          'points': '88',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2016-pinot-grigio-california/',
        },
        {
          'index': 13,
          'name': '2016 White Zinfandel',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2016-white-zinfandel-california/',
        },
        {
          'index': 14,
          'name': '2016 Chardonnay',
          'points': '88',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2016-chardonnay-california/',
        },
        {
          'index': 15,
          'name': '2016 Lightly Oaked Chardonnay',
          'points': '87',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2016-lightly-oaked-chardonnay-california/',
        },
        {
          'index': 16,
          'name': '2016 Sauvignon Blanc',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2016-sauvignon-blanc-california/',
        },
        {
          'index': 17,
          'name': '2015 Cabernet Sauvignon',
          'points': '86',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2015-cabernet-sauvignon-california/',
        },
        {
          'index': 18,
          'name': '2015 Cabernet Merlot',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2015-cabernet-merlot-california/',
        },
        {
          'index': 19,
          'name': '2015 Pinot Noir',
          'points': '89',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2015-pinot-noir-california/',
        },
        {
          'index': 20,
          'name': '2014 Pinot Grigio',
          'points': '88',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2014-pinot-grigio-california/',
        },
        {
          'index': 21,
          'name': '2014 Sauvignon Blanc',
          'points': '84',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2014-sauvignon-blanc-california/',
        },
        {
          'index': 22,
          'name': '2014 Lightly Oaked Chardonnay',
          'points': '86',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2014-lightly-oaked-chardonnay-california/',
        },
        {
          'index': 23,
          'name': '2014 Chardonnay',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2014-chardonnay-california/',
        },
        {
          'index': 24,
          'name': '2013 Zinfandel',
          'points': '84',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2013-zinfandel-california/',
        },
        {
          'index': 25,
          'name': '2013 Merlot',
          'points': '86',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2013-merlot-california/',
        },
        {
          'index': 26,
          'name': '2013 Chardonnay',
          'points': '84',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2013-chardonnay-other/',
        },
        {
          'index': 27,
          'name': '2013 Lightly Oaked Chardonnay',
          'points': '84',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2013-lightly-oaked-chardonnay-other/',
        },
        {
          'index': 28,
          'name': '2012 Sauvignon Blanc',
          'points': '84',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2012-sauvignon-blanc-other/',
        },
        {
          'index': 29,
          'name': '2012 Pinot Grigio',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2012-pinot-grigio-gris-grigio-other/',
        },
        {
          'index': 30,
          'name': '2011 Cabernet Sauvignon',
          'points': '87',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2011-cabernet-sauvignon-other/',
        },
        {
          'index': 31,
          'name': '2011 Zinfandel',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2011-zinfandel-other/',
        },
        {
          'index': 32,
          'name': '2011 Sauvignon Blanc',
          'points': '87',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2011-sauvignon-blanc-other/',
        },
        {
          'index': 33,
          'name': '2010 Zinfandel',
          'points': '86',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2010-zinfandel-other/',
        },
        {
          'index': 34,
          'name': '2010 Riesling',
          'points': '84',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2010-riesling-other/',
        },
        {
          'index': 35,
          'name': '2010 Lightly Oaked Chardonnay',
          'points': '86',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2010-lightly-oaked-chardonnay-other/',
        },
        {
          'index': 36,
          'name': '2010 Moscato',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2010-muscat-moscato-other/',
        },
        {
          'index': 37,
          'name': '2010 Sauvignon Blanc',
          'points': '85',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2010-sauvignon-blanc-other/',
        },
        {
          'index': 38,
          'name': '2010 Pinot Grigio',
          'points': '84',
          'winemagLink':
          'https://www.winemag.com/buying-guide/woodbridge-by-robert-mondavi-2010-pinot-grigio-gris-grigio-other/',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.award-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  min-height: 170px;
  grid-template-rows: 1fr min-content;
  list-style-type: none;
  margin: 5% 5%;
  gap: 16px;
  row-gap: 38px;
  justify-content: center;
  align-content: center;
  align-items: center;
   @media #{$tablet} {
     grid-template-columns: 1fr 1fr 1fr;
   }
   @media #{$mobile} {
     grid-template-columns: 1fr 1fr;
   }
   @media #{$mobile-xs} {
     grid-template-columns: 1fr;
   }

  .awarditem {
    text-align: center;
    min-width: 100%;
    background-color: #FBF6E6;
    padding: .75rem;
    position: relative;
    margin: auto;

    .border {
      padding: 1.25rem 0rem;
      border:  1px solid #B59F61;
      min-height: 100%;
    }
    .name {
      font-size: 18px;
      @media #{$mobile} {
        font-size: 16px;
      }
    }

    // BOTTOM PORTION OF BOX

    .bottom-container {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      .points {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 48px;
        line-height: .9;
        margin-right: 1.5rem;
        @media #{$mobile} {
          font-size: 42px;
        }
        span {
          font-size: 16px;
          @media #{$mobile} {
            font-size: 14px;
          }
        }
      }
      .best-buy {
        display: flex;
        flex-direction: column;
        font-size: 28px;
        line-height: .9;
        font-weight: 700;
        justify-content: center;
        text-align: left;
        @media #{$mobile} {
            font-size: 24px;
          }
        span {
          font-size: 1.3em;
        }
      }
    }
  }
}

  .abs {
    position: absolute;
    z-index: 200;
  }
</style>
