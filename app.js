let userClicks = 0;
let maxClicks = 25;

let productContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let renderResults = document.querySelector(".clicks-allowed");

function Product(name, src) {
  this.name = name;
  this.src = `./images/${name}.jpg`;
  this.views = 0;
  this.clicks = 0;
}

const allProducts = [
  new Product("bag"),
  new Product("banana"),
  new Product("bathroom"),
  new Product("boots"),
  new Product("breakfast"),
  new Product("bubblegum"),
  new Product("chair"),
  new Product("cthulhu"),
  new Product("dog-duck"),
  new Product("dragon"),
  new Product("pen"),
  new Product("pet-sweep"),
  new Product("scissors"),
  new Product("shark"),
  new Product("sweep"),
  new Product("tauntaun"),
  new Product("unicorn"),
  new Product("water-can"),
  new Product("wine-glass"),
];

function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();
  let product3Index = getRandomIndex();

  while (
    product1Index === product2Index ||
    product1Index === product3Index ||
    product2Index === product3Index
  ) {
    product2Index = getRandomIndex();
    product3Index - getRandomIndex();
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
}

function handleProductClick(event) {
  let clickedProduct = event.target.alt;

  if (event.target === productContainer) {
    alert("Please click on an image");
  } else {
    renderProducts();
  }

  userClicks++;

  if (userClicks >= maxClicks) {
    alert("You have run out of votes");
    return;
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

productContainer.addEventListener("click", handleProductClick);

function showResults() {
  for (let i = 0; i < allProducts.length; i++) {
    const li = document.createElement("li");
    const product = allProducts[i];
    li.textContent = `${product.name} was viewed ${product.views} times, and clicked ${product.clicks} times`;
    viewResults.appendChild(li);
  }
}

const viewResults = document.getElementById("click-here");
renderResults.addEventListener("click", showResults);

renderProducts();

// function renderChart() {
/* <script>
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
</script>  */
