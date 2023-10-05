localStorage.setItem("allProducts", JSON.stringify(state.allProducts));

let allProducts = localStorage.getItem("allProducts");
console.log(JSON.parse(productsFromLs));

let productsFromLs = new Product(JSON.parse(productsFromLs).name);

//productButton.addEventListener("submit", handleSubmit);
