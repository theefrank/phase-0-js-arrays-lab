// Write your code here
// Write your code here
// Task 2: Create the array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];


// Task 3: Log first product
function logFirstProduct() {
    console.log(products[0]);
}


// Task 4: Add a product
function addProduct(productName) {
    products.push(productName);
}


// Task 5: Update product name
function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    } else {
        console.log("Invalid index");
    }
}


// Task 6: Remove last product
function removeLastProduct() {
    products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

logFirstProduct(); // Laptop

addProduct("Tablet");
console.log(products); 
// ["Laptop", "Phone", "Headphones", "Monitor", "Tablet"]

updateProductName(1, "Smartphone");
console.log(products);
// ["Laptop", "Smartphone", "Headphones", "Monitor", "Tablet"]

removeLastProduct();
console.log(products);
// ["Laptop", "Smartphone", "Headphones", "Monitor"]