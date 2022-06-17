
// Business Logic

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
    const size = $('input:radio[name=size]:checked').val();
    const toppings = $("input:checkbox[name=pizza-topping]:checked").val();
    const chosenOptions = (("Size: " + size) + ("Toppings: " + toppings));
      $('#cart').append(chosenOptions + "<br>");
    });
    $('#options').hide();
  });


// function getOrder() {
//   const toppings = $('#toppings').text();
//   const size = $('#size').text();
//   const price = ((toppings * $2) + $10);
  
//   return new Order(toppings, size, price);
// }