/* Do not edit this file to avoid losing your changes when upgrade the theme */
$.extend(!0,BT,{openRpInterval:function(e,t,a,i){var n,r,o,s,l,d=this.selectors.rp,p=this;$(d.wrap).hasClass("hide")||(n=$(d.wrap),r=$(d.item).length-1,0==(o=Array.from(Array(1+r).keys())).length&&(o=Array.from(Array(1+r).keys())),index=this.getRandomInt(0,o.length-1),o.splice(index,1),$(d.item).hide(),(s=$(d.item+'[data-index="'+index+'"]')).find(d.minuteNumber).html(this.getRandomInt(e,t)),s.show(),(l=s.find("img")).hasClass("loaded")||(l.attr("src",l.attr("data-src")),l.addClass("loaded")),n.fadeIn(this.options.rp.duration,function(){p.data.rp.openTimeInterval&&clearTimeout(p.data.rp.openTimeInterval),p.data.rp.openTimeInterval=setTimeout(function(){p.hideRpInterval(e,t,a,i)},a)}))},hideRpInterval:function(e,t,a,i){var n=this;$(this.selectors.rp.wrap).fadeOut(n.options.rp.duration,function(){n.data.rp.closeTimeInterval&&clearTimeout(n.data.rp.closeTimeInterval),n.data.rp.closeTimeInterval=setTimeout(function(){n.openRpInterval(e,t,a,i)},i)})},runSalesNotification:function(){var d=this,p=this.options.rp.cookieName,m=this.getCookie(p);this.loadSnippetAjax("recommended-products",function(){var t=d.selectors.rp;if(0<$(t.wrap).length){for(var e=$(t.wrap),a=e.data("limit"),i=e.data("minute-from"),n=e.data("minute-to"),r=1e3*e.data("interval"),o=1e3*e.data("closing-interval"),s=($(t.item).length,[]),l=0,l=0;l<a;l++)s.push(l);s=d.shuffleArray(s),1!=m&&(d.data.rp.closeTimeInterval&&clearTimeout(d.data.rp.closeTimeInterval),setTimeout(function(){d.openRpInterval(i,n,r,o)},o)),$(document).on("click",t.closeBtn,function(e){e.preventDefault(),clearTimeout(d.data.rp.openTimeInterval),d.setCookie(p,1,1),$(t.wrap).slideUp(d.options.rp.duration)})}})}}),BT.runSalesNotification();