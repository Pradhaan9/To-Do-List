$(".im1").click(function(){
  var ev=$(".t").val();
  $("ol").append("<li></li>");
  $("li:last").text(ev);
 i++;

})
$(".im2").click(function()
{
  var i=$(".t").val();
  var x=parseInt(i);
  x=x-1;
  $("li").eq(x).remove();
})
