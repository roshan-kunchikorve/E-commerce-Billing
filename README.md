# E-commerce-Billing
 
A simple shopping cart and billing app built with vanilla HTML, CSS, and JavaScript. Browse a product list, add items to your cart, see a live running total, and check out — with your cart persisted in the browser via `localStorage` so it survives page refreshes.
 
## Features
 
- Dynamically rendered product list
- Add products to a shopping cart
- Remove individual items from the cart
- Live total price calculation
- Cart state persisted in `localStorage` (survives page reloads)
- Checkout flow that clears the cart and confirms the order
- Clean, minimal dark UI
## Tech Stack
 
- HTML5
- CSS3 (vanilla, no frameworks)
- JavaScript (vanilla, ES6+)
- Browser `localStorage` for cart persistence
## Project Structure
 
```
.
├── index.html    # App markup (product list & cart layout)
├── styles.css    # Styling
├── scripts.js    # Product rendering, cart logic, checkout, persistence
└── LICENSE       # MIT License
```
 
## Getting Started
 
No build step or dependencies required.
 
1. Clone or download this repository.
2. Open `index.html` directly in your browser.
That's it — the app runs entirely client-side.
 
## Usage
 
1. Browse the list of available products.
2. Click **Add to cart** on any product to add it to your cart.
3. The cart updates live, showing each item and a running total.
4. Click **Remove** next to a cart item to take it out of your cart.
5. Click **Checkout** to complete the order — this clears the cart and shows a confirmation.
6. Your cart is saved automatically, so it will still be there if you refresh the page.
## Notes / Possible Improvements
 
- Products are currently hardcoded in `scripts.js`; a future version could load them from a JSON file or an API.
- There's no quantity selector yet — adding the same product twice creates two separate line items rather than incrementing a quantity.
- Checkout is simulated (an alert + cart clear); there's no real payment processing or order history.
## License
 
This project is licensed under the [MIT License](./LICENSE).
