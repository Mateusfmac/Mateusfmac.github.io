$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $("#btnTop").show()
    }else {
      $("#btnTop").hide()
    }
  })
  $("#btnTop").click(function(){
    $("html, body").animate({scrollTop:0},1000);
  })

  

  $(".card-popup").click(function(event){
    $(".box-popup").addClass("active")
  })

  $(".close-box").click(function(event){
    $(".box-popup").removeClass("active")
  })
})