$('.resume').click(function() {
  $('html, body').animate({scrollTop:0}, 300);
});
$('.1st').click(function() {
  $('html, body').animate({scrollTop:0}, 300);
});
$('.2nd').click(function() {
  var offset = $(".projects").offset();
  $('html, body').animate({scrollTop: offset.top - 55}, 300);
});
$('.3rd').click(function() {
  var offset = $(".experience").offset();
  $('html, body').animate({scrollTop: offset.top - 55}, 300);
});
$('.4th').click(function() {
  var offset = $(".award").offset();
  $('html, body').animate({scrollTop: offset.top - 55}, 300);
});
$('.5th').click(function() {
  var offset = $(".education").offset();
  $('html, body').animate({scrollTop: offset.top - 55}, 300);
});