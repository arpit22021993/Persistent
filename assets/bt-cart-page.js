/* Do not edit this file to avoid losing your changes when upgrade the theme */
var BTCartPage={selectors:{content:".cart-page__content",updateAllBtn:".cart__update__all",qtyInput:".cart__qty-input",upsell:{wrap:".cart-page__upsell",content:".cart-page__upsell__content"},crosssell:{wrap:".cart-page__cross_sell",content:".cart-page__cross_sell__content"},itemsTable:".cart-page__items-table",countdown:".cart-countdown"},data:{cartUpsellRequests:[],cartCrosssellRequests:[],item_size:0},cleanOldUpsellRequests:function(){$(this.data.cartUpsellRequests).each(function(t,e){e&&4!=e.readyState&&e.abort()}),this.data.cartUpsellRequests=[]},cleanOldCrosssellRequests:function(){$(this.data.cartCrosssellRequests).each(function(t,e){e&&4!=e.readyState&&e.abort()}),this.data.cartCrosssellRequests=[]},loadUpsellProduct:function(){var c=this,d=this.selectors.upsell,u=$(d.wrap);0!=u.length&&(this.cleanOldUpsellRequests(),this.data.cartUpsellRequests.push(BT.callAjax(theme.cartUrl,"GET",{view:"upsell_tags"},null,function(t){try{var e=$.parseJSON(t.replace("\x3c!-- BEGIN template --\x3e","").replace("\x3c!-- cart.upsell_tags --\x3e","").replace("\x3c!-- END template --\x3e","")),l=[],s=$(d.content),n=e.length,i=[],o=upsellRandom?100:parseInt(u.attr("data-limit"));s.hasClass("slick-initialized")&&s.slick("unslick"),s.html(""),s.siblings(BT.selectors.loadingNotFull).show();var r=0;$(d.wrap).show();var a=u.attr("data-slider")?"upsell_slider":"upsell";0<n?$(e).each(function(t,e){c.data.cartUpsellRequests.push(BT.callAjax(theme.collectionAllUrl+"/"+e,"GET",{view:a},null,function(t){r++;var a,e=t.replace("\x3c!-- BEGIN template --\x3e\x3c!-- collection.upsell --\x3e","").replace("\x3c!-- END template --\x3e","");$(".product-item",e).each(function(){var t=$(this).attr("data-id");l.indexOf(t)<0&&l.length<o&&(i.push($(this).html()),l.push(t))}),r==n&&(upsellRandom&&(i=BT.shuffleArray(i)),s.siblings(BT.selectors.loadingNotFull).hide(),0<i.length?(a=0,$(i).each(function(t,e){a<o&&s.append(e),a++}),BT.convertCurrencySilence(d.content+" span.money"),s.removeClass(BT.selectors.waitingData.replace(".","")),$(d.content).hasClass("slick-initialized")&&$(d.content).slick("unslick"),BT.applyCustomColorSwatches(s),BT.popularAddedWishlistItems(s),setTimeout(function(){BT.initSlider(d.wrap,!1)},500)):$(d.wrap).hide())}))}):(s.siblings(BT.selectors.loadingNotFull).hide(),$(d.wrap).hide())}catch(t){}})))},loadCrosssellProduct:function(t){var e,a,l,s,n,i,o,r,c,d,u=this,p=this.selectors.crosssell,h=$(p.wrap);0!=h.length&&(this.cleanOldCrosssellRequests(),t&&(0<(e=$(this.selectors.itemsTable)).length?(a=[],e.find("tbody .cart__row").each(function(){a.push($(this).attr("data-product-id"))}),h.attr("data-product-ids",a.join(","))):h.attr("data-product-ids","")),(l=h.attr("data-product-ids"))?(s=l.split(","),n=parseInt(h.attr("data-limit")),i=[],o={},r=s.length,c=0,(d=h.children(p.content)).hasClass("slick-initialized")&&d.slick("unslick"),d.html(""),h.children(BT.selectors.loadingNotFull).show(),h.removeClass("hide"),$.each(s,function(t,e){u.data.cartCrosssellRequests.push(BT.callAjax(theme.recommendationUrl+".json","GET",{product_id:e,limit:n},"json",function(t){var e;c++,0<t.products.length&&$.each(t.products,function(t,e){s.indexOf(e.id)<0&&(i[t]?i[t]=i[t]+","+e.handle:i[t]=e.handle,o[e.handle]=e.url)}),c==r&&((i=i.join(",").split(",").filter(function(t,e,a){return a.indexOf(t)>=e})).length>n&&(i=i.slice(0,n-1)),h.children(BT.selectors.loadingNotFull).hide(),0<i.length?(e=i.join(","),u.data.cartCrosssellRequests.push(BT.callAjax(theme.rootUrl,"GET",{view:"recommendation",q:e},null,function(t){d.html(t),BT.convertCurrencySilence(d.find("span.money")),BT.addRecommendationUrls(d,o),d.addClass(BT.selectors.slider.useTouchMobile+" "+BT.selectors.slider.default.replace(".","")),BT.initSlider(h,!1),BT.initDealCountdown(d),BT.applyCustomColorSwatches(d),BT.reLoadReview(d),BT.popularAddedWishlistItems(d)}))):h.addClass("hide"))}))})):h.addClass("hide"))},initCartEvent:function(){var l=this;$(document).on("ajaxCart.afterCartLoad",function(){BT.callAjax(theme.cartUrl,"GET",{view:"ajax"},null,function(t){$(l.selectors.content).html($(l.selectors.content,t).html()),BT.convertCurrencySilence(l.selectors.content+" span.money");var e=l.data.item_size;l.updateItemSize(),e!=l.data.item_size&&(l.loadUpsellProduct(),l.loadCrosssellProduct(!0)),window.Shopify&&Shopify.StorefrontExpressButtons&&Shopify.StorefrontExpressButtons.initialize(),BT.resetCartTerms(),0==l.data.item_size&&0<$(l.selectors.countdown).length&&($(l.selectors.countdown).addClass("hide"),BT.setCookie("countdown_reverse_cart-page",null)),0<$("#shipping-calculator").length&&void 0!==Shopify.Cart&&void 0!==Shopify.Cart.ShippingCalculator&&Shopify.Cart.ShippingCalculator.show({submitButton:theme.strings.shippingCalcSubmitButton,submitButtonDisabled:theme.strings.shippingCalcSubmitButtonDisabled,customerIsLoggedIn:theme.strings.shippingCalcCustomerIsLoggedIn,moneyFormat:theme.strings.shippingCalcMoneyFormat})})}),$(document).on("click",this.selectors.updateAllBtn,function(t){t.preventDefault(),BT.showLoadingFull();var e={},a=[];$(l.selectors.qtyInput).each(function(){a.push($(this).val())}),e.updates=a,0<$("#CartSpecialInstructions").length&&(e.note=$("#CartSpecialInstructions").val()),BT.callAjax(theme.cartUpdateUrl,"POST",e,"json",function(t){BT.updateHeaderCartHtml(!0),BT.hideLoadingFull()})})},updateItemSize:function(){var t=$(this.selectors.itemsTable);0<t.length?this.data.item_size=t.find("tbody .cart__row").length:this.data.item_size=0},init:function(){this.initCartEvent()}};theme.cartTemplate={},theme.CartTemplateSection=function(t){BTCartPage.loadUpsellProduct(),BTCartPage.loadCrosssellProduct(!1),BTCartPage.updateItemSize(),BT.initDealCountdown(".cart-countdown")},theme.CartTemplateSection.prototype=_.assignIn({},theme.CartTemplateSection.prototype,{onSelect:function(t){t.detail.load&&0<$(".cart-countdown").length&&(BT.setCookie("countdown_reverse_cart-page",null),BT.initDealCountdown(".cart-countdown"))},onUnload:function(){}}),BTCartPage.init(),theme.sections.constructors["cart-template"]=theme.CartTemplateSection;