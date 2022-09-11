document.querySelector("#order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  setTimeout(function () {
    alert("Your order is accepted");
    alert("Please wait for your next intimation");
  });

  setTimeout(function () {
    alert("Your order is being cooked");
    alert("Please wait for your next intimation");
  }, 3000);

  setTimeout(function () {
    alert("Your order is ready");
    alert("Please wait for your next intimation");
  }, 8000);

  setTimeout(function () {
    alert("Order out for delivery");
    alert("Please wait for your next intimation");
  }, 10000);

  setTimeout(function () {
    alert("Order delivered");
    alert("Hope you enjoy your food! :)");
  }, 12000);
});
