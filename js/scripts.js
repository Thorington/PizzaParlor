
// Business Logic

function customPizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

customPizza.prototype.Order = function() {
  return this.size + " " + this.toppings + " " + this.price;
}








// Total.prototype.calculateTotal = function() {

//   const basePrice = 10;
//   const toppings = [0];
//   let output = [basePrice + (toppings * 2)];
//   if (size === Medium) {
//     output[0] -= 2;
//   }
//   if (size === Large) {
//     output[0] += 2;
//   }
//   return output;
// };

// function cost(toppings, size) {
//   this.toppings = toppings;
//   this.size = size;
//   this.price = this.calculateTotal();
// }


// UI Logic

$(document).ready(function() {
  $("form#options").submit(function(event) {
    event.preventDefault();
    $("#cart").show();
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      const toppings = $(this).val();
      $("#cart").append(toppings + "<br>");
    });
    $('#options').hide();
  });
});