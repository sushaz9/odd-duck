let userClicks = 0;
let maxClicks = 25;

let productContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let renderResults = document.querySelector(".clicks-allowed");

const allProducts = [];

function Product(name, views, clicks) {
  this.name = name;
  this.src = `./images/${name}.jpg`;
  this.views = views;
  this.clicks = clicks;
  allProducts.push(this);
}

if (localStorage.getItem("allProducts") === null) {
  new Product("bag", 0, 0);
  new Product("banana", 0, 0);
  new Product("bathroom", 0, 0);
  new Product("boots", 0, 0);
  new Product("breakfast", 0, 0);
  new Product("bubblegum", 0, 0);
  new Product("chair", 0, 0);
  new Product("cthulhu", 0, 0);
  new Product("dog-duck", 0, 0);
  new Product("dragon", 0, 0);
  new Product("pen", 0, 0);
  new Product("pet-sweep", 0, 0);
  new Product("scissors", 0, 0);
  new Product("shark", 0, 0);
  new Product("sweep", 0, 0);
  new Product("tauntaun", 0, 0);
  new Product("unicorn", 0, 0);
  new Product("water-can", 0, 0);
  new Product("wine-glass", 0, 0);
} else {
  const productsFromLs = JSON.parse(localStorage.getItem("allProducts"));
  for (let i = 0; i < productsFromLs.length; i++) {
    // crrate new product for each item in array and product function automatically adds it to product array
    new Product(
      productsFromLs[i].name,
      productsFromLs[i].views,
      productsFromLs[i].clicks
    );
  }
}

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
  if (event.target === productContainer) {
    alert("Please click on an image");
  } else {
    renderProducts();
  }

  //userClicks++;

  if (userClicks >= maxClicks) {
    alert("You have run out of votes");
    renderChart();
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
    return;
  }

  userClicks++;

  let clickedProduct = event.target.alt;

  for (let i = 0; i < allProducts.length; i++) {
    // check if the name of the product in the array, matches the alt tag of our image
    if (clickedProduct === allProducts[i].name) {
      // increase the number of clicks
      allProducts[i].clicks++;
      // stop the for loop because we found the product
      break;
    }
  }

  renderProducts();
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

function renderChart() {
  const ctx = document.getElementById("myChart");

  const labels = [];
  const views = [];
  const clicks = [];

  for (let i = 0; i < allProducts.length; i++) {
    labels.push(allProducts[i].name);
    views.push(allProducts[i].views);
    clicks.push(allProducts[i].clicks);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: views,
          borderWidth: 1,
        },
        {
          type: "line",
          label: "# of clicks",
          date: clicks,
          borderWidth: 1,
        },
      ],
    },
  });
}

renderProducts();
