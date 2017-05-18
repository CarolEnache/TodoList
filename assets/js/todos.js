// Check off Specific Todos by Clicking

$("li").click(function(){
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("span").click(function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    // ctare a new li and add to ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});
