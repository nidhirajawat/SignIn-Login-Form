// Sample data for cart items
let cart = [
  { name: "Product 1", price: 10.0, quantity: 1 },
  { name: "Product 2", price: 15.5, quantity: 2 },
];

// Function to render cart items
function renderCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let totalPrice = 0;
  cart.forEach((item, index) => {
    totalPrice += item.price * item.quantity;

    let itemElement = document.createElement("div");
    itemElement.className = "cart-item";
    itemElement.innerHTML = `
              <span>${item.name} (x${item.quantity})</span>
              <span>$${(item.price * item.quantity).toFixed(2)}</span>
          `;
    cartItems.appendChild(itemElement);
  });

  document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}

// Function for checkout
function checkout() {
  alert(
    "Proceeding to checkout. Total price: $" +
      document.getElementById("total-price").innerText
  );
}

// Initial render
renderCart();
