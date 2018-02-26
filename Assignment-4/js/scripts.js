var today = new Date();
var hour = today.getHours();
var greeting;
var price = 1899.99;
var studentPrice = 0;
var welcome = 'Welcome to my Product Review ' + 'written by Brian Hoang';
if(hour > 18){
  greeting= 'Good Evening!';
}
else if(hour > 12){
  greeting = 'Good Afternoon!';
}
else{
  greeting = 'Good Morning!';
}

document.write(greeting);
var el = document.getElementById('greeting');
el.textContent = welcome;

var priceElement = document.getElementById('price');
priceElement.textContent = "Price: $" + price;
var studentPriceElement = document.getElementById('student-price');
var studentDiscount = 0.20;
studentPrice = (price - (price*studentDiscount)).toFixed(2);
studentPriceElement.textContent = "Student Price: $" + studentPrice;
