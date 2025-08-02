// List of products (admin adds manually here)
const products = [
    {
        name: "iPhone 14 Pro Max",
        price: "₹1299 - 1999",
        image: "img/phone5.jpg.jpg"
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        price: "₹1249 - 1999",
        image: "img/phone6.jpg.jpg"
    },
    {
        name: "OnePlus 11R 5G",
        price: "₹999 - 1999",
        image: "img/phone7.jpg.jpg"
    },
    {
        name: "Redmi Note 12 Pro+ 5G",
        price: "₹1199 - 1999",
        image: "img/phone8.jpg.jpg"
    },
    {
        name: "Realme Narzo 60 Pro",
        price: "₹2399 - 2999",
        image: "img/phone9.jpg.jpg"
    },
    
];

// Function to create a product card
function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onerror="this.src='img/placeholder.jpg'">
        <h3>${product.name}</h3>
        <button class="btn">Get Served At DR.phone</button>

        <p class="price">${product.price}</p>
    `;
    return card;
}

// Function to load products into the container
function loadProducts() {
    const productContainer = document.getElementById("product-container");
    if (!productContainer) return;

    productContainer.innerHTML = ""; // clear existing content

    products.forEach(product => {
        const card = createProductCard(product);
        productContainer.appendChild(card);
    });
}

// Load products after DOM is ready
document.addEventListener("DOMContentLoaded", loadProducts);
