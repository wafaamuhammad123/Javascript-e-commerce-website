
    //add to cart

    
//  Identify Add to Cart Buttons
const addToCartButtons = document.querySelectorAll('.product-action-btn-2');


//  Adding Event Listeners: It loops through each of these buttons and attaches an event listener to each one. 
// When clicked, these buttons will trigger the addToCartAndUpdateCount function.
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartAndUpdateCount);
});

// Function to add product to cart and update product count=> 2 in 1 fn
function addToCartAndUpdateCount(event) {
    // Step 1: Add product to cart
    addToCart(event);

    // Step 2: Update product count in shopping bag icon
    updateProductCount();
     // Step 3: Update mini cart
     updateMiniCart();
}

// Add to Cart Function
function addToCart(event) {
    const productWrap = event.target.closest('.product-wrap');
    const productName = productWrap.querySelector('.product-content h3').textContent;
    const productPrice = productWrap.querySelector('.price').textContent;

    // Step 1: Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Step 2: Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(product => product.name === productName);
//check if product already in cart
    if (existingProductIndex !== -1) {
        // If already in the cart, update its quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If the product is not in the cart, add it with quantity 1
        const product = {
            name: productName,
            price: productPrice,
            quantity: 1
        };
        cart.push(product);
    }

    // Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));


    // Update product count in shopping bag icon
    updateProductCount();

    // Update mini cart and cart subtotal
    updateMiniCart();
    updateCartAndSubtotal();
}


// Function to remove product from cart

function removeProductFromCart(productName) {
    // Retrieve stored products from local storage
    let storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the product to be removed
    const removedProductIndex = storedCart.findIndex(product => product.name === productName);

    // Update the total quantity in the mini cart
    const removedProductQuantity = storedCart[removedProductIndex].quantity;
    const productCountElement = document.querySelector('.product-count');
    productCountElement.textContent = parseInt(productCountElement.textContent) - removedProductQuantity;

    //  Remove the product from the cart
    storedCart.splice(removedProductIndex, 1);

    // Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(storedCart));

    // Update mini cart and cart subtotal
    updateMiniCart();
    updateCartAndSubtotal();

    // Update the cart table in the UI
    updateCartTable();
}

// Function to update the mini cart
function updateMiniCart() {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const miniCart = document.querySelector('.sidebar-cart-all ul');

    // Clear existing items in mini cart
    miniCart.innerHTML = '';

    // Initialize total quantity and total price
    let totalQuantity = 0;
    let totalPrice = 0;

    // If there are products in the cart, update the mini cart
    if (storedCart && storedCart.length > 0) {
        storedCart.forEach(product => {
            // Calculate total price for the current product
            const productTotalPrice = parseFloat(product.price.replace('$', '')) * product.quantity;

            // Update total quantity and total price
            totalQuantity += product.quantity;
            totalPrice += productTotalPrice;

            // Add product to mini cart
            miniCart.innerHTML += `
                <li>
                    <div class="cart-img">
                        <a href="#"><img src="assets/images/cart/cart-1.webp" alt=""></a>
                    </div>
                    <div class="cart-title">
                        <h4><a href="#">${product.name}</a></h4>
                        <span>${product.quantity} × ${product.price}</span>
                       
                    </div>
                    
                </li>
            `;
        });

        // Update subtotal and total quantity in mini cart
        const subtotalElement = document.querySelector('.cart-total h4 span');
        subtotalElement.textContent = `$${totalPrice.toFixed(2)}`; // Update subtotal

        const productCountElement = document.querySelector('.product-count');
        productCountElement.textContent = totalQuantity; // Update total quantity
    } else {
        // If the cart is empty, update the product count to 0
        const productCountElement = document.querySelector('.product-count');
        productCountElement.textContent = '0';

        // Update subtotal to 0
        const subtotalElement = document.querySelector('.cart-total h4 span');
        subtotalElement.textContent = '$0.00';
    }
}


function updateProductCount() {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const productCountElement = document.querySelector('.product-count');

    if (storedCart && storedCart.length > 0) {
        productCountElement.textContent = storedCart.length;
    } else {
        productCountElement.textContent = '0';
    }
}


// Function to update the cart and subtotal in the cart page..taking the products from the localStorage, 
// then calculates the subtotal and total price, and dynamically generates HTML elements
function updateCartAndSubtotal() {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const yourOrderMiddle = document.querySelector('.your-order-middle ul');
    const subtotalElement = document.querySelector('.order-subtotal li span');
    const totalElement = document.querySelector('.order-total li span');

    // Clear existing items in your order middle
    yourOrderMiddle.innerHTML = '';

    // Initialize subtotal
    let subtotal = 0;
    let total = 0;

    // If there are products in the cart, update the cart and subtotal
    if (storedCart && storedCart.length > 0) {
        storedCart.forEach(product => {
            // Add product to your order middle
            yourOrderMiddle.innerHTML += `
                <li>${product.name} × ${product.quantity} 
                <span>${(parseFloat(product.price.replace('$', '')) * product.quantity).toFixed(2)}</span></li>
            `;

            // Calculate subtotal
            subtotal += parseFloat(product.price.replace('$', '')) * product.quantity;
            total += parseFloat(product.price.replace('$', '')) * product.quantity;
        });
    }

    // Update subtotal in the subtotal element
    subtotalElement.textContent = `$${total.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}


// Initial update of product count on page load
updateProductCount();
updateMiniCart();
updateCartAndSubtotal();
// Function to clear the cart




// Function to clear the cart
function clearCart() {
    //  Clear products from localStorage
    localStorage.removeItem('cart');

    // Update mini cart and cart subtotal
    updateMiniCart();
    updateCartAndSubtotal();

    //  Update product count after clearing the cart
    updateProductCount();

    // Clear the cart table and subtotal elements in the UI
    const cartTableBody = document.querySelector('.table-content tbody');
    cartTableBody.innerHTML = ''; // Clear the cart table content

    const subtotalElement = document.querySelector('.order-subtotal li span');
    subtotalElement.textContent = '$0'; // Set subtotal to $0
    const totalElement = document.querySelector(' .order-total li span');
    totalElement.textContent = '$0'; // Set subtotal to $0
    const carttotalElement = document.querySelector('.cart-total h4 span');
    carttotalElement.textContent = '$0'; // Set subtotal to $0
    
   
}

// Add an event listener to the Clear Cart button
document.addEventListener('DOMContentLoaded', function() {
    // Identify the Clear Cart Button
    const clearCartButton = document.querySelector('.cart-clear a');

    // Add Event Listener to Clear Cart Button
    clearCartButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link

        // Call the clearCart Function
        clearCart();
    });
});



//adding the products to cart to show them in cart ui 

    // Retrieve stored products from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart'));

    // Check if there are products in the cart
    if (storedCart && storedCart.length > 0) {
        const cartTableBody = document.querySelector('.table-content tbody');
    
        //  generate HTML elements for each product
        storedCart.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="product-thumbnail">
                    <a href="product-details.html"><img src="assets/images/cart/cart-1.webp" alt=""></a>
                </td>
                <td class="product-name">
                    <h5><a href="product-details.html">${product.name}</a></h5>
                </td>
                <td class="product-cart-price"><span class="amount">${product.price}</span></td>
                <td class="cart-quality">
                    <div class="product-quality">
                        <input class="cart-plus-minus-box input-text qty text" name="qtybutton" value="1">
                    </div>
                </td>
                <td class="product-total"><span>${product.price}</span></td>
                <td class="product-remove"><a href="#"><i class="ti-trash"></i></a></td>
            `;
            cartTableBody.appendChild(row);
        });
    
        // Step 4: Update the cart page with the generated HTML elements
        const subtotalElement = document.querySelector('.order-subtotal li span');
        const totalElement = document.querySelector('.order-total li span');
    
        let subtotal = 0;
        storedCart.forEach(product => {
            subtotal += parseFloat(product.price.replace('$', ''));
        });
    
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${subtotal.toFixed(2)}`;
    }


// Function to update the cart table in the UI
function updateCartTable() {
    const cartTableBody = document.querySelector('.table-content tbody');
    cartTableBody.innerHTML = ''; // Clear the cart table content

    // Retrieve stored products from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Dynamically generate HTML elements for each product
    storedCart.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="product-thumbnail">
                <a href="product-details.html"><img src="assets/images/cart/cart-1.webp" alt=""></a>
            </td>
            <td class="product-name">
                <h5><a href="product-details.html">${product.name}</a></h5>
            </td>
            <td class="product-cart-price"><span class="amount">${product.price}</span></td>
            <td class="cart-quantity">
            <div class="quantity-control" style="display:flex;" >
                <button class="quantity-btn minus-btn" style="background-color: #bc6c27 !important;
                border: none;        
                color: white;
                font-weight: 600;width:20%" onclick="decreaseQuantity(this)">-</button>
                <input type="text" class="quantity-input" style="text-align:center" value="${product.quantity}" readonly>
                <button class="quantity-btn plus-btn" style="background-color: #bc6c27 !important;
                border: none;        
                color: white;
                font-weight: 600;width:20%"  onclick="increaseQuantity(this)">+</button>
            </div>
        </td>
        
            <td class="product-total"><span>${(parseFloat(product.price.replace('$', '')) * product.quantity).toFixed(2)}</span></td>
            <td class="product-remove"><a href="#"><i class="ti-trash"></i></a></td>
        `;
        cartTableBody.appendChild(row);
    });

    // Update subtotal in the cart
    const subtotalElement = document.querySelector('.order-subtotal li span');
    let subtotal = 0;
    storedCart.forEach(product => {
        subtotal += parseFloat(product.price.replace('$', '')) * product.quantity;
    });
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

    // Remove existing event listeners from trash buttons
    const trashButtons = document.querySelectorAll('.product-remove a');
    trashButtons.forEach(button => {
        button.removeEventListener('click', removeProductHandler);
    });

    // Attach event listeners to trash buttons and quantity inputs in the cart
    trashButtons.forEach(button => {
        button.addEventListener('click', removeProductHandler);
    });

    const quantityInputs = document.querySelectorAll('.cart-quantity input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function(event) {
            const productName = this.closest('tr').querySelector('.product-name h5 a').textContent;
            const newQuantity = parseInt(this.value);
            updateQuantityInCart(productName, newQuantity);
        });
    });
}

// Function to handle product removal
function removeProductHandler(event) {
    event.preventDefault(); // Prevent the default action of the link
    const productName = this.closest('tr').querySelector('.product-name h5 a').textContent;
    removeProductFromCart(productName);
}



function decreaseQuantity(button) {

    const input = button.nextElementSibling;
    let value = parseInt(input.value);
    if (value > 1) {
        value--;
        input.value = value;
        updateQuantityInCart(input);
    }
}

function increaseQuantity(button) {
    const input = button.previousElementSibling;
    let value = parseInt(input.value);
    value++;
    input.value = value;
    updateQuantityInCart(input);
}
// Function to update the quantity of a product in the cart and reload the page
function updateQuantityInCart(input) {
    const productName = input.closest('tr').querySelector('.product-name h5 a').textContent;
    const newQuantity = parseInt(input.value);

    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the product in the cart
    const productIndex = cart.findIndex(product => product.name === productName);

    // If the product is found, update its quantity
    if (productIndex !== -1) {
        cart[productIndex].quantity = newQuantity;
        // Update the cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update mini cart and cart subtotal
        updateMiniCart();
        updateCartAndSubtotal();

        // Reload the page to reflect the updated cart
        location.reload();
    }
}


// Initial update of product count on page load
updateProductCount();
updateMiniCart();
updateCartAndSubtotal();
updateCartTable(); // Call updateCartTable to attach event listeners immediately

