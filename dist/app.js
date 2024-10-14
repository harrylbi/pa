document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("hamburgerButton");
  const navbar = document.getElementById("navbar-solid-bg");

  hamburgerButton.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
  });
});

// Sample product data (replace with actual product content)
const products = [
  {
    image: "img/bangku_tatami-removebg-preview.png",
    name: "Bangku Tatami",
    price: "4 juta",
  },
  {
    image: "img/chair_vintage-removebg-preview.png",
    name: "Chair Vintage",
    price: "600",
  },
  {
    image: "img/kursi_cafe-removebg-preview.png",
    name: "Cafe Chair",
    price: "400",
  },
  {
    image: "img/kursi_rotan-removebg-preview.png",
    name: "Rotan Chair",
    price: "1 juta",
  },
  {
    image: "img/long_chair-removebg-preview.png",
    name: "Long Chair",
    price: "600 ",
  },
  { image: "img/stool-removebg-preview.png", name: "Stool", price: "750" },
  {
    image: "img/stool_bulat-removebg-preview.png",
    name: "Round Stool",
    price: "400",
  },
  {
    image: "img/stool_solid-removebg-preview.png",
    name: "Stool Solid",
    price: "350",
  },
  {
    image: "img/T_CHAIR-removebg-preview(1).png",
    name: "Round Stool",
    price: "1 juta",
  },
  {
    image: "img/goat cabinet 1.png",
    name: "Goat Cabinet",
    price: "5 juta",
  },
  {
    image: "img/bufet_2_pintu_1_laci-removebg-preview.png",
    name: "Bufet",
    price: "4 juta",
  },
  {
    image: "img/bufet_2_pintu-removebg-preview.png",
    name: "Bufet 2 pintu",
    price: "3.5 juta",
  },
  {
    image: "img/bufet_8_laci_2-removebg-preview.png",
    name: "Round Stool",
    price: "4 juta",
  },
  {
    image: "img/bufet_8_laci-removebg-preview.png",
    name: "Bufet 8 laci",
    price: "1.3 juta",
  },
  {
    image: "img/bufet_art_puper-removebg-preview.png",
    name: "Bufet art puper",
    price: "1 juta",
  },
  {
    image: "img/bufet_krepyak-removebg-preview.png",
    name: "Bufet Krepyak",
    price: "1.5 juta",
  },
  {
    image: "img/bufet_laci_4-removebg-preview.png",
    name: "Bufet laci 4",
    price: "900",
  },
  {
    image: "img/bufet_laci_7-removebg-preview.png",
    name: "Bufet laci 7",
    price: "1.5 juta",
  },
  {
    image: "img/bufet_lengkung-removebg-preview.png",
    name: "Bufet Lengkung",
    price: "3 juta",
  },
  {
    image: "img/buffet_2_pintu_3_laci-removebg-preview.png",
    name: "Buffet 2 pintu 3 laci",
    price: "3 juta",
  },
  {
    image: "img/buffet_2_pintu_item-removebg-preview.png",
    name: "Buffet 2 pintu",
    price: "2.5 juta",
  },
  {
    image: "img/buffet_4_pintu_1_laci-removebg-preview.png",
    name: "Bufet 4 pintu",
    price: "4.5 juta",
  },
  {
    image: "img/buffet_5_laci-removebg-preview.png",
    name: "Buffet 5 laci",
    price: "2.7 juta",
  },
  {
    image: "img/chair_vintage-removebg-preview.png",
    name: "Chair vintage",
    price: "600",
  },
  
];

// Configuration
const itemsPerPage = 8; // Number of products per page
let currentPage = 1; // Track current page

// Render products based on the current page
function renderProducts(page) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = ""; // Clear previous products

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedProducts = products.slice(start, end);

  paginatedProducts.forEach((product) => {
    const productHTML = `
		<div class="product bg-ijooo-1100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-[250px] h-[350px]">
		  <img src="${product.image}" alt="Product Image" class="w-full h-48 object-cover mb-4 rounded-lg">
		  <h3 class="text-lg font-semibold">${product.name}</h3>
		  <p class="text-orange-600 font-semibold mb-2">${product.price}</p>
		  <button class="bg-ijotuo-100 text-white px-4 py-2 rounded-md">Buy</button>
		</div>
	  `;
    productContainer.innerHTML += productHTML;
  });
}

// Render pagination buttons
function renderPagination() {
  const paginationControls = document.getElementById("pagination-controls");
  paginationControls.innerHTML = ""; // Clear previous pagination

  const totalPages = Math.ceil(products.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.className = `
		px-4 py-2 rounded-md border
		${i === currentPage ? "bg-gray-400" : "bg-gray-100"}
		hover:bg-gray-200 transition duration-300
	  `;
    button.addEventListener("click", () => {
      currentPage = i;
      renderProducts(currentPage);
      renderPagination();
    });
    paginationControls.appendChild(button);
  }
}

// Initial render
renderProducts(currentPage);
renderPagination();
