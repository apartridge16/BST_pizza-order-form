// Global variables
let crust = document.getElementById('crust');
let sauce = document.getElementById('sauce');
// toppings array
let toppings = [];

// event listener
let formBtn = document.getElementById('btn');
formBtn.addEventListener('click', function (event) {
  event.preventDefault();
  let topping1 = document.getElementById('topping1').value;
  let topping2 = document.getElementById('topping2').value;
  let topping3 = document.getElementById('topping3').value;

  toppings.push(topping1, topping2, topping3);
  calculateTotal(toppings);
});

function calculateTotal(toppingsArray) {
  let total = 0;
  let toppingCost = 2.5;
  let baseCost = 5.5; // cost of crust and sauce

  // order string concatenation
  let orderString = `${crust.value} pizza with ${sauce.value}`;
  let toppingString = 'Toppings: ';

  // For Loop

  for (let i = 0; i < toppingsArray.length; i++) {
    if (toppingsArray[i] !== '') {
      total = total + toppingCost;
      toppingString += toppingsArray[i] + ' ';
    }
  }
  // total = baseCost + cost of all toppings
  total += baseCost;

  // set DOM total += total
  document.getElementById('total').innerHTML += total;
  // use DOM: = orderString
  document.getElementById('pizzaOrder').innerHTML = orderString;
  // use DOM: = toppingString
  document.getElementById('toppings').innerHTML = toppingString;
}
