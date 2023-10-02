let productContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();
  let product3Index = getRandomIndex();
}

while (product1Index === product2Index) {
  product2Index = getRandomIndex();
}

image1.src = allProducts[product1Index].src;
image2.src = allProducts[product2Index].src;
image3.src = allProducts[product3Index].src;

image1.alt = allProducts[product1Index].name;
image2.alt = allProducts[product2Index].name;
image3.alt = allProducts[product3Index].name;

allProducts[product1Index].views++;
allProducts[product2Index].views++;
allProducts[product3Index].views++;

function handleProductClick(event) {
  let clickedProduct = event.target.alt;

  if (event.target === productContainer) {
    alert("Please click on an image");
  } else {
    renderProducts();
  }

  for (let i = 0; i < allProducts.length; i++) {
    // check if the name of the product in the array, matches the alt tag of our image
    if (clickedProduct === allProducts[i].name) {
      // increase the number of clicks
      allProducts[i].clicks++;
      // stop the for loop because we found the product
      break;
    }
  }
}

const allProducts = [
  new Product(
    "Bag",
    "https://github.com/Wollivan/lab11-assets/blob/main/bag.jpg?raw=true"
  ),
  new Product(
    "Breakfast",
    "https://github.com/Wollivan/lab11-assets/blob/main/breakfast.jpg?raw=true"
  ),
  new Product(
    "Unicorn Meat",
    "https://github.com/Wollivan/lab11-assets/blob/main/unicorn.jpg?raw=true"
  ),
  new Product(
    "Tauntaun",
    "https://github.com/Wollivan/lab11-assets/blob/main/tauntaun.jpg?raw=true"
  ),
  new Product(
    "Banana",
    "https://github.com/Wollivan/lab11-assets/blob/main/banana.jpg?raw=true"
  ),
  new Product(
    "Shark",
    "https://github.com/Wollivan/lab11-assets/blob/main/shark.jpg?raw=true"
  ),
  new Product(
    "Bathroom",
    "https://github.com/Wollivan/lab11-assets/blob/main/bathroom.jpg?raw=true"
  ),
  new Product(
    "Bubblegum",
    "https://github.com/Wollivan/lab11-assets/blob/main/bubblegum.jpg?raw=true"
  ),
];

productContainer.addEventListener("click", handleProductClick);

renderProducts();
