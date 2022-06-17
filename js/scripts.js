
// // Business Logic

function Pizza([toppings], size) {
  this.toppings = [toppings];
  this.size = size;
}

const myPizza = new Pizza(["anchovies, pineapple"], "medium");



// UI Logic

let PizzaOrder = new Pizza([toppings], size);

$(document).ready(function () {
  attachContactListeners();
  $("form#options").submit(function (event) {
    event.preventDefault();

    const inputtedToppings = $("input:checkbox[name=pizza-topping]:checked").val();
    const inputtedSize = $('input:radio[name=size]:checked').val();

    $("input:checkbox[name=pizza-topping]:checked").val();
    $('input:radio[name=size]:checked').val();

    let PizzaOrder = new Pizza(inputtedToppings, inputtedSize);
    $("#cart").html(PizzaOrder + "");
    
  });
});












// // Business Logic
// // function CustomPizza(toppings, size) {
// //   this.toppings = toppings;
// //   this.size = size;
// // }

// // CustomPizza.prototype.Order = function() {
// //   return this.size + " " + this.toppings;
// // };






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

// $(document).ready(function() {

//   $("form#options").submit(function (event) {
//     event.preventDefault();
//     $("#cart").show();
//     $("input:checkbox[name=pizza-topping]:checked").each(function () {
//       const toppings = $(this).val();
//       $("#cart").append(toppings + "<br>");
//     });
//     $('#options').hide();
//     });
//   });




  // $("form#options2").submit(function (event) {
    //   event.preventDefault();
    //   $("#options2").show();
    //   $('input:radio[name=size]:checked').each(function () {
    //     const size = $(this).val();
    //     $("#finalCart").append(toppings + "<br>");
    //   });