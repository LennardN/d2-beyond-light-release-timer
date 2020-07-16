
var d, h, m, s;
d = 14;
h = 20;
m = 32;
s = 10;
//created by Spackor

var timer = setInterval(function(){

  var countDownDate = new Date("Nov 10, 2020 19:00:00").getTime();
  var now = new Date().getTime();

  var distance = countDownDate - now;



  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(pad2(d) + " Days " + pad2(h) + " Hours " + pad2(m) + " Minutes " + pad2(s) + " Seconds");
  $(".timer").html(pad2(d) + ":" + pad2(h) + ":" + pad2(m) + ":" + pad2(s));

  if (distance <= 0) {
    clearInterval(timer);
    $(".timer").html("Europa is Haunted!")
  }


}, 1000);

function pad2(number) {
     return (number < 10 ? '0' : '') + number;
}
