$(document).ready(function(){
  $('#jump').smoothScroll({speed:1500});
  
  $("button").click(function(){
    var target = $(this).attr("href");
    $(".content").not(target).hide();
    $(target).show("slow");
  });
  
  var cw = $('.project').width();
  $('.project').css({'height':cw+'px'});
  
  $("#first").click();
  
});


function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px";
  d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener('animationend', function() {
      d.parentElement.removeChild(d);
  }.bind(this));
}
document.addEventListener('click', clickEffect);