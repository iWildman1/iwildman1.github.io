$(".work-item").mouseenter(function(){$(this).find(".work-item-info").removeClass("item-hidden")}),$(".work-item").mouseleave(function(){$(this).find(".work-item-info").addClass("item-hidden")});var elem=document.querySelector(".social-media-grid"),pckry=new Packery(elem,{itemSelector:".social-media-item",columnWidth:".grid-sizer",percentageWidth:!0}),navigationState=!1;$(".nav-toggle").click(function(){navigationState?($(".navigation-main").addClass("navigation-closed"),$(".nav-toggle").removeClass("nav-open"),navigationState=!1,setTimeout(function(){$(".navigation-main").css("display","none")},300)):($(".navigation-main").css("display","block"),$(".nav-toggle").addClass("nav-open"),setTimeout(function(){$(".navigation-main").removeClass("navigation-closed")},25),navigationState=!0)});var bodyOffset=0,scrollPos=0,passedMarker=!1,navFixed=!1;$(window).scroll(function(){scrollPos=$(this).scrollTop(),bodyOffset=$(".main-body").offset().top,passedMarker=scrollPos>bodyOffset-85?!0:!1,console.log(passedMarker),passedMarker&&!navFixed?($(".navigation-bar").addClass("navigation-fixed"),navFixed=!0):!passedMarker&&navFixed&&($(".navigation-bar").removeClass("navigation-fixed"),navFixed=!1)}),$(document).ready(function(){$('a[href*="#"]').on("click",function(e){e.preventDefault(),e.stopPropagation();var a=$(this).attr("href");$(a).velocity("scroll",{duration:1e3,offset:-80,easing:"easeInOutQuint"})})});