const products = [
  { id: 1, name: "iPhone XR 64GB", price: "R 5,499", image: "images/iphonexr.jpg" },
  { id: 2, name: "iPhone 11 64GB", price: "R 6,999", image: "images/iphone11.jpg" },
  { id: 3, name: "iPhone 13 128GB", price: "R 11,999", image: "images/iphone13.jpg" },
  { id: 4, name: "iPhone 13 Pro 256GB", price: "R 14,999", image: "images/iphone13pro.jpg" },
  { id: 5, name: "iPhone 14 128GB", price: "R 17,499", image: "images/iphone14.jpg" }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");

let cart = [];

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="\${product.image}" alt="\${product.name}">
    <h2>\${product.name}</h2>
    <p>Price: \${product.price}</p>
    <button onclick="addToCart(\${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.name + " - " + item.price;
    cartItems.appendChild(li);
  });
}

document.getElementById("checkout").addEventListener("click", () => {
  alert("Thank you for your order! (Just a demo)");
});
