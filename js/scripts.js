



// UI Logic

$(document).ready(function() {
  $("form#toppings").submit(function(event) {
    event.preventDefault();
    $("#cart").show();
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      const chosenToppings = $(this).val();
      $('#cart').append(chosenToppings + "<br>");
    });
    $('#toppings').hide();
  });
});