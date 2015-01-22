// set variables
var price;
var amount;
var total;
// assign cost to variables
price = 5;
amount = 14;
// calculate total
total = price * amount;

var el = document.getElementById('cost');
el.textContent = '$' + total;
