$(document).ready(function () {
  //    console.log("%c学长说，手机号码放在网页里是不好滴~嘿嘿\nHR姐姐赶紧来电话吧 ： 18605110053"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
  console.log("简历版本: 1.1.2(实现响应式，基本排除排版故障)\n");
  console.error("警告，尚未录取热爱web开发的唐品同学！");
  console.warn("HR姐姐请来电：18605110053");
  //    


  //鼠标移进卡片，tag变化效果，移出，变回原来的状态
  $(".card").on("mouseover", function () {
    $(this).find(".card-tag").addClass("shadowedTag")
      .find(".atag").addClass("hltextcolor");
    $(".card-comment-header").addClass("hltextcolor");
  }).on("mouseout", function () {
    $(this).find(".card-tag").removeClass("shadowedTag")
      .find(".atag").removeClass("hltextcolor");
    $(".card-comment-header").removeClass("hltextcolor");
  });

  $(".first-tag").nextAll().hide()
    .end().on("mouseover", function () {
      $(this).nextAll().show();
    }).parent().on("mouseleave", function () {
      $(this).children().first().nextAll().hide();
    });
  //鼠标移动到第一个tag上，显示后面的tag，移出，隐藏
  $(".more").on("mouseover", function () {
    $(".more-confirm").show().on("mouseover", function () {
      $(this).show();
    }).on("mouseleave", function () {
      $(this).hide();
    });
  }).on("mouseleave", function () {
    $(".more-confirm").hide();
  });

  var count = 0;
  var fenavitime;
  //导航部分效果
  $(".fenavi").on("mouseover", function () {
    if (count < 1) {
      count++;
      fenavitime = setTimeout(function () {
        $(".fenavi-box").show();
        console.log("show");
      }, 100);
    }

  }).on("mouseleave", function () {
    clearTimeout(fenavitime);
    $(".fenavi-box").hide();
    count--;
  });
  $(".fenavi-box").on("mouseover", function () {
    $(this).show();
  }).on("mouseleave", function () {
    $(this).fadeOut(200);
  });

  //    $(document).on("scroll",function(){
  //        if($(this).scrollTop() > 70){
  //            $(".header").addClass("opaciter");
  //            $(".fenavi").fadeIn(200);
  //            $(".siteTitle").fadeOut(200);
  //        }else{
  //            $(".header").removeClass("opaciter");
  //            $(".fenavi").fadeOut(200);
  //            $(".siteTitle").fadeIn(200);
  //        }
  //    });



});