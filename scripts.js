document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.99 },
  ];

  const STORAGE_KEY = "shopping_cart";

  // Load cart from localStorage, fallback to empty array
  let cart = [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    cart = stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Failed to load cart from localStorage:", err);
    cart = [];
  }

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <span>${product.name} - $${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) {
      const productId = parseInt(btn.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.error("Failed to save cart to localStorage:", err);
    }
  }

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);

    //quantity button rather displaying duplicates product
    if(existingItem){
      existingItem.quantity += 1;
    }else{
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    saveCart();
    renderCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    const hasItems = cart.length > 0;

    emptyCartMessage.classList.toggle("hidden", hasItems);
    cartTotalMessage.classList.toggle("hidden", !hasItems);

    let totalPrice = 0;

    cart.forEach((item, index) => {
      totalPrice += item.price;
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <span>${item.name} - $${item.price.toFixed(2)}</span>
        <button data-index="${index}" class="remove-btn" aria-label="Remove ${item.name} from cart">Remove</button>
      `;
      cartItems.appendChild(cartItem);
    });

    totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
  }

  cartItems.addEventListener("click", (e) => {
    const btn = e.target.closest(".remove-btn");
    if (btn) {
      const index = parseInt(btn.getAttribute("data-index"));
      removeFromCart(index);
    }
  });

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    saveCart();
    alert("Checkout successfully");
    renderCart();
  });

  // Initial render on page load (in case cart had saved items)
  renderCart();
});
