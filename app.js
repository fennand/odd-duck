const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

let userClicks = 0;
let maxClicks = 5;

const products = [];

function Product(name, display, views, clicks) {
  this.name = name;
  this.display = display;
  this.src = `./assets/${name}.jpg`;
  this.views = views;
  this.clicks = clicks;

  products.push(this);
}
if (localStorage.getItem("products") === null) {
  new Product("bag", "R2D2 Bag", 0, 0);
  new Product("banana", "Banana Slicer", 0, 0);
  new Product("bathroom", "Toilet Device Holder", 0, 0);
  new Product("boots", "Toeless Wellies", 0, 0);
  new Product("breakfast", "Breakfast Maker", 0, 0);
  new Product("bubblegum", "Meat Ball Bubblegum", 0, 0);
  new Product("chair", "Wrong Chair", 0, 0);
  new Product("cthulhu", "Cthulhu Doll", 0, 0);
  new Product("dog-duck", "Dog Duck Mask", 0, 0);
  new Product("dragon", "Dragon Meat", 0, 0);
  new Product("pen", "Pen Cutlery", 0, 0);
  new Product("pet-sweep", "Pet Sweeper", 0, 0);
  new Product("scissors", "Pizza Scissors", 0, 0);
  new Product("shark", "Shark Sleeping Bag", 0, 0);
  new Product("sweep", "Baby Sweeper", 0, 0);
  new Product("tauntaun", "Tauntaun Sleeping Bag", 0, 0);
  new Product("unicorn", "Unicorn Meat", 0, 0);
  new Product("water-can", "Wrong Watering Can", 0, 0);
  new Product("wine-glass", "Wrong Wine Glass", 0, 0);
} else {
  /* TODO */
  const productsLS = JSON.parse(localStorage.getItem("products"));
  // for each item in the productsLS array, make a new Product
  for (let i = 0; i < productsLS.length; i++) {
    // create a new product for each item in the array
    //(and the Product function automatically adds it to the producst array)
    new Product(
      productsLS[i].name,
      productsLS[i].display,
      productsLS[i].views,
      productsLS[i].clicks
    );
  }
}

function randomProdIdx() {
  return Math.floor(Math.random() * products.length);
}

function renderProducts() {
  let prod1 = randomProdIdx();
  let prod2 = randomProdIdx();
  let prod3 = randomProdIdx();

  while (prod1 === prod2 || prod1 === prod3 || prod2 === prod3) {
    prod2 = randomProdIdx();
    prod3 = randomProdIdx();
  }

  img1.src = products[prod1].src;
  img2.src = products[prod2].src;
  img3.src = products[prod3].src;
  img1.alt = products[prod1].name;
  img2.alt = products[prod2].name;
  img3.alt = products[prod3].name;

  products[prod1].views++;
  products[prod2].views++;
  products[prod3].views++;
}

function handleImgClick(event) {
  if (userClicks === maxClicks) {
    alert("You have run out of votes");
    renderChart();
    localStorage.setItem("products", JSON.stringify(products));
    return;
  }
  userClicks++;
  let clickedProduct = event.target.alt;
  for (let i = 0; i < products.length; i++) {
    if (clickedProduct === products[i].name) {
      products[i].clicks++;
      break;
    }
  }
  renderProducts();
}

img1.addEventListener("click", handleImgClick);
img2.addEventListener("click", handleImgClick);
img3.addEventListener("click", handleImgClick);

function showResults() {
  const results = document.getElementById("results");
  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    const product = products[i];
    li.textContent = `${product.display}: Viewed - ${product.views} Clicked - ${product.clicks}`;

    results.appendChild(li);
    document.getElementById("view-results").disabled = "true";
  }
}

const viewResults = document.getElementById("view-results");
viewResults.addEventListener("click", showResults);

renderProducts();

// Chart
/* function renderChart() {
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
} */

renderProducts();
/* // DOM Nodes
let productContainer = document.querySelector("section_images");
let image1 = document.querySelector("random1");
let image2 = document.querySelector("random2");
let image3 = document.querySelector("random3");

// keep each goat in an object
function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

// function to choose a random goat
function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

// function to render 2 random goats
function renderProducts() {
  // get 2 rnadom indexes from our goat array
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();
  let product3Index = getRandomIndex();

  // prevent the two images being the same goat
  /* while (
    product1Index === product2Index ||
    product1Index === product3Index ||
    product2Index === product3Index
  ) {
    product2Index = getRandomIndex();
    product3Index = getRandomIndex();
  } */

// change the src of our 2 images
/*  image1.alt = allProducts[product1Index].name;
  image2.alt = allProducts[product2Index].name;
  image3.alt = allProducts[product3Index].name;
  image1.src = allProducts[product1Index].src;
  image2.src = allProducts[product2Index].src;
  image3.src = allProducts[product3Index].src;

  // increase the goats views
  allProducts[product1Index].views++;
  allProducts[product2Index].views++;
  allProducts[product3Index].views++;
} */
/* 
// handle the goat being clicked
function handleProductClick(event) {
  // get the name of the goat we just clicked
  let clickedProduct = event.target.alt;

  // check if the click is on an image
  if (event.target === productContainer) {
    alert("Please click on an image");
  } else {
    // render more goats
    renderProducts();
  }

  // increase the clicks of the goat
  // loop through allGoats
  for (let i = 0; i < allProducts.length; i++) {
    // check if the name of the goat in the array, matches the alt tag of our image
    if (clickedProduct === allProducts[i].name) {
      // increase the number of clicks
      allProducts[i].clicks++;
      // stop the for loop because we found the goat
      break;
    }
  }
} */

// make the goats
/* const allProducts = [
  new Product("R2D2 Bag", "assets/bag.jpg"),
  new Product("Banana Slicer", "assets/banana.jpg"),
  new Product("Bathroom Device Holder", "assets/bathroom.jpg"),
  new Product("Toeless Boots", "assets/boots.jpg"),
  new Product("Breakfast Maker", "assets/breakfast.jpg"),
  new Product("Meat Ball Bubblegum", "assets/bubblegum.jpg"),
  new Product("Wrong Chair", "assets/chair.jpg"),
  new Product("Cthulhu Doll", "assets/cthulhu.jpg"),
  new Product("Dog Duck", "assets/dog-duck.jpg"),
  new Product("Dragon Meat", "assets/dragon.jpg"),
  new Product("Pen Cutlery", "assets/pen.jpg"),
  new Product("Pet Sweep", "assets/pet-sweep.jpg"),
  new Product("Pizza Scissors", "assets/scissors.jpg"),
  new Product("Shark Sleeping Bag", "assets/shark.jpg"),
  new Product("Baby Sweep", "assets/sweep.jpg"),
  new Product("Tauntaun Sleeping Bag", "assets/tauntaun.jpg"),
  new Product("Unicorn Meat", "assets/unicorn.jpg"),
  new Product("Wrong Watering Can", "assets/water-can.jpg"),
  new Product("Wrong Wrong Wine Glass", "assets/wine-glass.jpg"),
]; */

// render the results
// when the user clicks the view results button
// render a ul full of lis that tell the user how many tiems each goat has been clicked

// add the event listener to the goats
/* productContainer.addEventListener("click", handleProductClick); */

/* renderProducts();
 */
