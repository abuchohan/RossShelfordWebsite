$(function(){var e=new Helper,a=e.isWork()?"../":"",s=e.getCurrentLocation(),o=new Date,d=o.getFullYear();if($("#header").hasClass("is-ms")?$("#header").html(template("public/header",{baseUrl:"http://xiaoxuezhang.info/",curLoc:s})):$("#header").html(template("public/header",{baseUrl:a,curLoc:s})),$("#footer").html(template("public/footer",{year:d})),$('[data-toggle="tooltip"]').tooltip(),e.isWork()){var i=new PController;i.createRelevance(".other-works")}else $(".header").css({position:"absolute"});0!==$("#works").length?$("#works").imagesLoaded(function(){$("#page-loader").delay(50).fadeOut(),e.isIndex()&&($(".header").addClass("animated fadeInDown"),$(".home").addClass("animated fadeInDown"),$("#works").addClass("animated fadeInDown"))}):$(".project-banner").length?$(".project-banner").imagesLoaded({background:!0},function(){$("#page-loader").delay(50).fadeOut()}):$(".project-images").eq(0).imagesLoaded(function(){$("#page-loader").delay(50).fadeOut()}),$(".attempt-list").slick({dots:!0,infinite:!0,arrows:!1,speed:500,fade:!0,cssEase:"linear",autoplay:!0});var t=$("#header");if(!t.hasClass("header-index")){var l=0,r=$(this).scrollTop();0===r?$("#header").addClass("is-top"):($("#header").removeClass("is-top"),$(".project-banner").length&&r<$(".project-banner").height()?$("#header").addClass("is-opacity"):$("#header").removeClass("is-opacity")),$(window).scroll(function(){r=$(this).scrollTop(),0===r?t.addClass("is-top"):(t.removeClass("is-top"),$(".project-banner").length&&r<$(".project-banner").height()?$("#header").addClass("is-opacity"):$("#header").removeClass("is-opacity")),r-l>10&&t.removeClass("slideDown").addClass("animated slideUp"),r-l<-10&&t.removeClass("slideUp").addClass("animated slideDown"),l=r})}$(".video").length&&$(".video").on("click",function(e){e.preventDefault();var a=$(this),s=a.find("video").get(0),o=a.find(".video-mask");a.hasClass("isPlay")?(s.pause(),a.removeClass("isPlay"),o.fadeIn()):(s.play(),a.addClass("isPlay"),o.fadeOut())});var n=300,c=1200,p=700,h=$(".cd-top");$(window).scroll(function(){$(this).scrollTop()>n?h.addClass("cd-is-visible"):h.removeClass("cd-is-visible cd-fade-out"),$(this).scrollTop()>c&&h.addClass("cd-fade-out")}),h.on("click",function(e){e.preventDefault(),$("body,html").animate({scrollTop:0},p)}),$(window).scroll(function(){$(".video").each(function(){var e=$(this),a=e.find("video").get(0),s=e.find(".video-mask");e.is(":in-viewport")?(a.play(),e.addClass("isPlay"),s.fadeOut()):(a.pause(),e.removeClass("isPlay"),s.fadeIn())})}),lightbox.option({resizeDuration:400,fadeDuration:300,imageFadeDuration:300,wrapAround:!0})});