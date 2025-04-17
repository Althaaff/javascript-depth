const form = document.getElementById("addItemForm");
const itemNameInput = document.getElementById("itemName");
const itemPriceInput = document.getElementById("itemPrice");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalDisplay = document.getElementById("cartTotal");

let cart = [];

form.addEventListener("submit", addToCartItem);
cartItemsContainer.addEventListener("click", handleCartActions);

function addToCartItem(e) {
  e.preventDefault();

  const name = itemNameInput.value.trim();
  const price = parseFloat(itemPriceInput.value);

  if (isNaN(price) || !name || price <= 0) {
    alert("Please enter a valid item name and price.");
    return;
  }

  cart.push({
    name,
    price,
    quantity: 1,
  });

  itemNameInput.value = "";
  itemPriceInput.value = "";
  renderCart();
}

function handleCartActions(e) {
  const index = parseInt(e.target.dataset.index);

  if (e.target.classList.contains("remove")) {
    cart.splice(index, 1);
  } else if (e.target.classList.contains("increment")) {
    cart[index].quantity++;
  } else if (e.target.classList.contains("decrement")) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    }
  }

  renderCart(); // called for realtime changes in the cart container display //
}

function renderCart() {
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const itemElement = document.createElement("div");
    itemElement.className = "cart-item";
    itemElement.innerHTML = `
     <span>${item.name} - ${item.price.toFixed(2)} x ${item.quantity}</span>


     <div className="quantity">
      <button class="increment" data-index="${index}">+</button>
      <button class="decrement" data-index="${index}">-</button> 
      <button class="remove" data-index="${index}">Remove</button> 
    </div>
    `;

    cartItemsContainer.appendChild(itemElement);
  });

  cartTotalDisplay.textContent = total.toFixed(2);
}

renderCart(); // load initial cart
