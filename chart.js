function renderChart() {
  const products = JSON.parse(localStorage.getItem("products"));
  const ctx = document.getElementById("myChart");

  const labels = [];
  const views = [];
  const clicks = [];

  for (let i = 0; i < products.length; i++) {
    labels.push(products[i].display);
    views.push(products[i].views);
    clicks.push(products[i].clicks);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,

      datasets: [
        {
          label: "# of views",
          data: views,
          borderWidth: 3,
          backgroundColor: ["rgba(255, 0, 110)"],
          borderColor: ["rgba(131, 56, 236)"],
        },
        {
          label: "# of clicks",
          data: clicks,
          borderWidth: 3,
          backgroundColor: ["rgba(0, 245, 212)"],
          borderColor: ["rgba(254, 228, 64)"],
        },
      ],
    },
  });
}

renderChart();
