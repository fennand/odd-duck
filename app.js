// DOM Nodes
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
  image1.alt = allProducts[product1Index].name;
  image2.alt = allProducts[product2Index].name;
  image3.alt = allProducts[product3Index].name;
  image1.src = allProducts[product1Index].src;
  image2.src = allProducts[product2Index].src;
  image3.src = allProducts[product3Index].src;

  // increase the goats views
  allProducts[product1Index].views++;
  allProducts[product2Index].views++;
  allProducts[product3Index].views++;
}
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
const allProducts = [
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
];

// render the results
// when the user clicks the view results button
// render a ul full of lis that tell the user how many tiems each goat has been clicked

// add the event listener to the goats
/* productContainer.addEventListener("click", handleProductClick); */

renderProducts();
