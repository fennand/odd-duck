const chartButton = document.getElementById("chartButton");

const handleButtonClick = function () {
  const productsLS = localStorage.getItem("products");
  const parsedProds = JSON.parse(productsLS);
  console.log(parsedProds);

  for (let i = 0; i < parsedProds.length; i++) {
    const newProd = new Product(parsedProds[i].name);
    products.push(newProd);
    renderChart();
  }
};

chartButton.addEventListener("click", handleButtonClick);
