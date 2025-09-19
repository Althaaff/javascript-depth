// shopping cart calculator:
function ShoppingCart() {
  this.items = [];
  this.taxRate = 0.08;
}

ShoppingCart.prototype.addItem = function (name, price, quantity) {
  if (name && price && quantity) {
    var item = {
      name: name,
      price: price,
      quantity: quantity,
      total: price * quantity,
    };
    this.items.push(item);
    console.log(item.name + " added to cart!");
  }
};

ShoppingCart.prototype.removeItem = function (name) {
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].name === name) {
      this.items.splice(i, 1);
      console.log(name + " removed from cart!");

      console.log("Updated Cart :", this.items);
      break;
    }
  }
};

ShoppingCart.prototype.calculateSubtotal = function () {
  var subtotal = 0;
  for (var i = 0; i < this.items.length; i++) {
    subtotal += this.items[i].total;
  }
  return subtotal;
};

ShoppingCart.prototype.calculateTotal = function () {
  var subtotal = this.calculateSubtotal();
  const taxRate = this.taxRate;
  var tax = subtotal * taxRate;
  var total = subtotal + tax;
  return total;
};

ShoppingCart.prototype.displayCart = function () {
  console.log("\n--- Shopping Cart ---");
  if (this.items.length === 0) {
    console.log("Your cart is empty!");
    return;
  }

  for (var i = 0; i < this.items.length; i++) {
    var item = this.items[i];
    console.log(
      item.name +
        " - $" +
        item.price +
        " x " +
        item.quantity +
        " = $" +
        item.total
    );
  }

  console.log("Subtotal: $" + this.calculateSubtotal().toFixed(2));
  console.log("Tax: $" + (this.calculateSubtotal() * this.taxRate).toFixed(2));
  console.log("Total: $" + this.calculateTotal().toFixed(2));
};

var cart = new ShoppingCart();
cart.addItem("Apple", 1.5, 3);
cart.addItem("Banana", 0.75, 5);
cart.addItem("Orange", 2.0, 2);

cart.displayCart();
cart.removeItem("Banana");
cart.displayCart();
