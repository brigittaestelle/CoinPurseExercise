"use strict";

let span = document.querySelector("span");
let purse = document.querySelector("section");
let balance = 0;

// on form submission
document.querySelector("form").addEventListener("submit", function (event) {
  // prevent refresh
  event.preventDefault();
  // wait wait wait wait
  // we need to get form data before we add the coin
  // because the amount of coins depends on the form data

  let number = +new FormData(document.querySelector("form")).get(
    "coinQuantity"
  );
  let coinValue = +new FormData(document.querySelector("form")).get("coinName");
  let coinName = document.querySelector("select").selectedOptions[0].innerText;

  console.log(number);
  console.log(coinValue);
  console.log(coinName);

  //need this to happen several times, so this requires a loop

  //add coin to html - then I want to add it to the form submission
  for (let i = 0; i < number; i++) {
    document.querySelector(
      "section"
    ).innerHTML += `<div class="coin ${coinName} value="${coinValue}"></div>`;
  }

  // calculate balance
  balance += number * coinValue;
  console.log(balance);

  //update html to reflect the balance
  span.innerText = balance;
});

// when you click a coin
purse.addEventListener("click", function (event) {
  // remove that coin
  if (event.target.localName === "div") {
    event.target.remove();

    //update html to reflect balance
    span.innerText = balance;

    // deduct balance - DO NOT UNDERSTAAND THIS PART
    balance -= +event.target.attributes.value.value;
    console.log("new balance:", balance);
  }
});
