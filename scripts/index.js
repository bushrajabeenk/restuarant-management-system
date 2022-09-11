show();
async function show() {
  try {
    let food = await fetch(
      `https://masai-food-api.herokuapp.com/api/meals/india`
    );
    let res = await food.json();

    let data = res[0].meals;
    console.log(data);

    appendData(data);
  } catch (error) {
    console.log(error);
  }
}

let count = 0;

function appendData(data) {
  data.map(function (item, index, array) {
    var innerDiv = document.createElement("div");

    var img = document.createElement("img");
    img.id = "imgid";
    img.src = item.strMealThumb;

    var p1 = document.createElement("p");
    p1.id = "p1";
    p1.innerText = item.strMeal;

    var p2 = document.createElement("p");
    p2.id = "p2";
    p2.innerText = item.price;

    var btn = document.createElement("button");
    btn.id = "addtocart";
    btn.innerText = "Add to cart";

    btn.addEventListener("click", function () {
      count = count + 1;
      document.querySelector("#count").innerText = count;

      let foodArr = JSON.parse(localStorage.getItem("cart")) || [];

      foodArr.push(item);
      console.log(foodArr);
      localStorage.setItem("cart", JSON.stringify(foodArr));
    });

    innerDiv.append(img, p1, p2, btn);

    document.querySelector("#menu").append(innerDiv);
  });
}
