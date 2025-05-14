// callback function in js

function greet(name) {
  console.log(`Hello ${name}`);
}

function processInput(callback) {
  const name = "Muhammad Althaf";

  callback(name);
}

processInput(greet);

// example 2 --> (callback) :

// step 1: simulate getting the user from the database :
function getUser(userId, callback) {
  console.log("fetching user from database!");

  setTimeout(() => {
    const user = { id: userId, name: "Muhammad Althaf" };
    console.log("user fetched!");
    callback(user);
  }, 2000);
}

// step 2: simulate getting the orders from the database :
function getOrders(user, callback) {
  console.log("fetching the orders from the database!");

  setTimeout(() => {
    const orders = [
      {
        id: 1,
        item: "Laptop",
      },
      {
        id: 2,
        item: "Computer",
      },
    ];

    console.log(`Fetching orders from ${user.name} .`);
    console.log("Orders fetched!");
    callback(orders);
  }, 4000);
}

function displayOrders(orders) {
  console.log("user's orders :");

  orders.forEach((order) => {
    console.log(`- ${order.item}`);
  });
}

// run the full flow using callbacks :
getUser(101, (user) => {
  getOrders(user, (orders) => {
    displayOrders(orders);
  });
});
