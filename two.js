/*console.log(JSON.parse(productsFromLs));

let productsFromLs = new Product(JSON.parse(productsFromLs).name);

//productButton.addEventListener("submit", handleSubmit);

function rendermyChart() {
  const allProducts = localStorage.getItem("allProducts");
}*/

function renderChart() {
  const allProducts = JSON.parse(localStorage.getItem("allProducts"));
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
          type: "bar",
          label: "# of clicks",
          data: clicks,
          borderWidth: 1,
        },
      ],
    },
  });
}

renderChart();
