let foodArr = JSON.parse(localStorage.getItem("cart")) || [];

let sum = 0;
for (let i = 0; i < foodArr.length; i++) {
  sum = sum + foodArr[i].price;
}

console.log(sum);
document.querySelector("#total-price").innerText = sum;

showCart(foodArr);
function showCart(foodArr) {
  document.querySelector("#cart").innerText = null;

  foodArr.map(function (item, index, array) {
    var innerDiv = document.createElement("div");

    var imgg = document.createElement("img");
    imgg.id = "imgidd";
    imgg.src = item.strMealThumb;

    var p11 = document.createElement("p");
    p11.id = "p11";
    p11.innerText = item.strMeal;

    var p22 = document.createElement("p");
    p22.id = "p22";
    p22.innerText = item.price;

    var btnn = document.createElement("button");
    btnn.id = "remove";
    btnn.innerText = "Remove";

    btnn.addEventListener("click", function () {
      removeItem(item, index);
    });

    innerDiv.append(imgg, p11, p22, btnn);

    document.querySelector("#cart").append(innerDiv);
  });

  function removeItem(item, index) {
    sum = sum - foodArr[index].price;
    document.querySelector("#total-price").innerText = sum;

    foodArr.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(foodArr));
    showCart(foodArr);
  }
}

var butn = document.createElement("button");
butn.innerText = "Checkout";
butn.addEventListener("click", function () {
  window.location.href = "checkout.html";
});

document.querySelector("body").append(butn);
