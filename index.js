const cartItemsList = document.getElementById("cart-items");

function addToCart() {
  const items = document.querySelector(".items");
  const productName = items.querySelector("h6").textContent;

  // Check if the item is already in the cart
  const existingCartItem = cartItemsList.querySelector(`li[data-name="${productName}"]`);

  if (existingCartItem) {
    // If the item is already in the cart, update its quantity
    const quantity = parseInt(existingCartItem.getAttribute("data-quantity")) + 1;
    existingCartItem.setAttribute("data-quantity", quantity);
    existingCartItem.textContent = `${productName} (x${quantity})`;
  } else {
    // If the item is not in the cart, add it as a new item
    const newItem = document.createElement("li");
    newItem.setAttribute("data-name", productName);
    newItem.setAttribute("data-quantity", "1");
    newItem.textContent = `${productName} (x1)`;
    cartItemsList.appendChild(newItem);
  }
}