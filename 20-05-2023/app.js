const cart = [];
const productsDiv = document.querySelector(".products")
const products = [
   {
      name: "Pen",
      price: 20
   },
   {
      name: "Pencil",
      price: 15
   },
   {
      name: "Copy",
      price: 50
   },
   {
      name: "Book",
      price: 100
   },
   {
      name: "Chart",
      price: 17
   },
   {
      name: "Rubber",
      price: 12
   },
   {
      name: "Sharpner",
      price: 8
   },
   {
      name: "Ruler",
      price: 25
   },
   {
      name: "Sheet",
      price: 10
   },
   {
      name: "Stapler",
      price: 1000
   },
];

products.forEach((product , index) => {
   const productDiv = document.createElement("div");
   const productName = document.createElement("p");
   const productNo = document.createElement("p");
   const productPrice = document.createElement("p");
   const buyButton = document.createElement("button");
   buyButton.innerText = "Buy Item"
   buyButton.addEventListener("click", () => {
      cart.push(product)
   });
   productName.innerText = product.name;
   productPrice.innerText = product.price;
   productNo.innerText = index+1;
   productDiv.appendChild(productNo);
   productDiv.appendChild(productName);
   productDiv.appendChild(productPrice);
   productDiv.appendChild(buyButton);
   productsDiv.appendChild(productDiv);

});

document.getElementById("checkout").addEventListener("click", () => {
   const cartDiv = document.querySelector(".cart");
   cartDiv.innerHTML = "";
   let totalAmount = 0;
   cart.forEach((item) => {
      const cartItemDiv = document.createElement("div");
      const cartName = document.createElement("p");
      const cartPrice = document.createElement("p");

      cartName.innerText = item.name;
      cartPrice.innerText = item.price;
      cartItemDiv.appendChild(cartName);
      cartItemDiv.appendChild(cartPrice);

      cartDiv.appendChild(cartItemDiv)
      totalAmount = totalAmount + item.price;
   });

   const totalPriceDiv = document.createElement("div");
   const totalPriceName = document.createElement("p");
   const totalPriceAmount = document.createElement("p");
   totalPriceName.innerText = "Total Amount";
   totalPriceAmount.innerText = totalAmount;
   cartDiv.appendChild(totalPriceName)
   cartDiv.appendChild(totalPriceAmount)

   cartDiv.appendChild(totalPriceDiv)

})

document.querySelector("#pay").addEventListener("click", () => {
   if (cart.length === 0) {
      alert("Please Buy Something to pay")
   } else {
      location.href = 'thanks.html';
   }
})
