// https://github.com/mazharulislamshakil2/assignment

function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  return meter;
}
var result = kilometerToMeter(23);
console.log(result);
// end kilometerToMeter;

function budgetCalculat(watch, phone, laptop) {
  var totalPrice = 0;
  var watchPrice = 50 * watch;
  var phonePrice = 100 * phone;
  var laptopPrice = 500 * laptop;
  totalPrice = watchPrice + phonePrice + laptopPrice;
  return totalPrice;
}
var result = budgetCalculat(10, 10, 10);
console.log(result);
//end budgetCalculat

function hotelCost(day) {
  var TotalCost = 0;
  if (day <= 10) {
    totalPrice = day * 100;
  }
  else if (day <= 20) {
    var fristTendays = 10 * 100;
    var remaing = day - 10;
    var secentTendays = remaing * 80;
    totalPrice = fristTendays + secentTendays;
  }
  else {
    var fristTendays = 10 * 100;
    var remaing = day - 20;
    var secentTendays = 10 * 80;
    var therdTendays = remaing * 50;
    totalPrice = fristTendays + secentTendays + therdTendays;
  }
  return totalPrice;
}
var result = hotelCost(23);
console.log(result);
// end hotel cost js


function megaFriend(name) {
  var lgth = 0;
  for (var i = 0; i < name.length; i++) {
    if (name[i].length > lgth) {
      var lgth = name[i].length;
      var longest = name[i];
    }
  }
  return longest;
}
var result =["ropik", "rohim", "mazharul", "shakil", "korim", "abdul"];
console.log(megaFriend(result));
// end  megaFriend js
// end  megaFriend js