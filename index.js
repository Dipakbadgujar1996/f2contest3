// Define menu items and prices
const menu = {
  "Hamburger": 10,
  "Cheeseburger": 12,
  "Chicken Sandwich": 8,
  "French Fries": 5,
  "Onion Rings": 6,
  "Soda": 3
};

// Function to get the menu
function getMenu() {
  return new Promise((resolve, reject) => {
    // Simulate API call to get menu
    setTimeout(() => {
      resolve(menu);
    }, 1000);
  });
}

// Function to take an order
function takeOrder(item, quantity) {
  return new Promise((resolve, reject) => {
    // Check if item is on the menu
    if (menu.hasOwnProperty(item)) {
      resolve({ item, quantity });
    } else {
      reject(`Sorry, we do not have ${item} on our menu.`);
    }
  });
}

// Function to prepare an order
function prepareOrder(order) {
  return new Promise((resolve, reject) => {
    // Simulate order preparation time
    setTimeout(() => {
      resolve(order);
    }, 2000);
  });
}

// Function to pay for an order
function payOrder(order) {
  return new Promise((resolve, reject) => {
    // Simulate payment processing time
    setTimeout(() => {
      resolve(`Payment of $${menu[order.item] * order.quantity} received. Thank you for your business!`);
    }, 3000);
  });
}

// Function to display a thank you message
function thankYou() {
  console.log("Thank you for visiting our restaurant!");
}

// Example usage
getMenu()
  .then(menu => {
    console.log("Menu:", menu);
    return takeOrder("Hamburger", 2);
  })
  .then(order => {
    console.log("Order:", order);
    return prepareOrder(order);
  })
  .then(order => {
    console.log("Order prepared:", order);
    return payOrder(order);
  })
  .then(message => {
    console.log(message);
    thankYou();
  })
  .catch(error => {
    console.error(error);
  });
