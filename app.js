$(function(){
  $("button").on("click", function(){
    $("ul").children().css("color", "red");
  });

  $("ul").css("list-style-type", "none");
  
});

