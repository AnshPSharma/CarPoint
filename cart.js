document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');  // Check if JS is loaded

    // Retrieve cart from localStorage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart items from localStorage:', cart);

    // Add event listeners for each button (1 to 6)
    document.getElementById('add-to-cart-1').addEventListener('click', () => addToCart(1, 'Engine', '10000 INR'));
    document.getElementById('add-to-cart-2').addEventListener('click', () => addToCart(2, 'Auto Transmission', '120000 INR'));
    document.getElementById('add-to-cart-3').addEventListener('click', () => addToCart(3, 'Car Accessories', '220000 INR'));
    document.getElementById('add-to-cart-4').addEventListener('click', () => addToCart(4, 'Brake Pads', '8000 INR'));
    document.getElementById('add-to-cart-5').addEventListener('click', () => addToCart(5, 'Tires', '40000 INR'));
    document.getElementById('add-to-cart-6').addEventListener('click', () => addToCart(6, 'Exhaust System', '30000 INR'));

    // Function to handle adding product to cart
    function addToCart(id, name, price) {
        const product = { id, name, price };
        
        // Add product to cart array
        cart.push(product);

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Log cart for debugging purposes
        console.log('Cart after adding item:', cart);

        // Redirect to cart page
        window.location.href = 'cart.html';
    }

    // Display the cart items on the cart page
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        if (cart.length > 0) {
            cartItemsContainer.innerHTML = ''; // Clear existing content

            // Loop through the cart and display each item
            cart.forEach(product => {
                const item = document.createElement('div');
                item.innerHTML = `<h2>${product.name}</h2><p>${product.price}</p>`;
                cartItemsContainer.appendChild(item);
            });
        } else {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        }
    }
});
