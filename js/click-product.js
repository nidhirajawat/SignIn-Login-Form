// Sample data for testing purposes
const productData = {
  image: "./assets/images/pendrive1.png",
  title: 'Fastrack Optimus Pro with 1.43" AMOLED Display & AOD(466x466)',
  description:
    "Functional Crown, BT Calling Smartwatch (Green Strap, Free Size)",
  price: "₹1,699",
  ratings: "31,009 Ratings & 2,012 Reviews",
};

// Set the product details dynamically
document.getElementById("product-image").src = productData.image;
document.getElementById("product-title").innerText = productData.title;
document.getElementById("product-description").innerText =
  productData.description;
document.getElementById("product-price").innerText = productData.price;
document.getElementById("product-ratings").innerText = productData.ratings;
// Function to get URL parameters
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    image: params.get("image"),
    title: params.get("title"),
    price: params.get("price"),
    ratings: params.get("ratings"),
    description: params.get("description"),
  };
}

window.onload = () => {
  const productData = getUrlParams();

  // Dynamically setting the content based on URL params
  document.getElementById("product-image").src =
    "./assets/images/" + productData.image;
  document.getElementById("product-title").innerText = productData.title;
  document.getElementById("product-description").innerText =
    productData.description;
  document.getElementById("product-price").innerText = "₹" + productData.price;
  document.getElementById("product-ratings").innerText =
    productData.ratings + " Ratings";
};
