function generateRumPage() {
    return `



    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rum - Wine & Liquor Store</title>
        <link rel="stylesheet" href="css/WineStyle.css">
        <script defer src="wine.js"></script>
    </head>
    
    <body>
        <header>
            <nav class="minimal-nav">
                <ul class="navbar">
                    <li><a href="hm" class="nav-link">Home</a></li>
                    <li><a href="wine" class="nav-link">Wines</a></li>
                    <li><a href="rum" class="nav-link">Rum</a></li>
                    <li><a href="scotch" class="nav-link">Scotch</a></li>
                    <li><a href="Whiskey" class="nav-link">Whiskey</a></li>
                    <li><a href="vodka" class="nav-link">Vodka</a></li>
                    <li><a href="gin" class="nav-link">Gin</a></li>
                </ul>
            </nav>
            <h1>Explore Our Fine Selection of Rum</h1>
        </header>
    
        <main>
            <div class="product-container">
                <div class="product">
                    <div class="product-image">
                        <img src="images/Rum1.avif" alt="Bacardi Superior Rum">
                    </div>
                    <h3>Bacardi Superior Rum</h3>
                    <p>Price: $14.00</p>
                    <button class="add-to-cart" data-product="Bacardi Superior Rum" data-price="14.00">Add to Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/Rum3.jpg" alt="Captain Morgan Spiced Rum">
                    </div>
                    <h3>ELdorado 25 Years</h3>
                    <p>Price: $19.99</p>
                    <button class="add-to-cart" data-product="Captain Morgan Spiced Rum" data-price="19.99">Add to
                        Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/Rum3.webp" alt="Kraken Black Spiced Rum">
                    </div>
                    <h3>Kraken Black Spiced Rum</h3>
                    <p>Price: $26.50</p>
                    <button class="add-to-cart" data-product="Kraken Black Spiced Rum" data-price="26.50">Add to
                        Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/Rum4.png" alt="Mount Gay Eclipse Rum">
                    </div>
                    <h3>Mount Gay Eclipse Rum</h3>
                    <p>Price: $22.00</p>
                    <button class="add-to-cart" data-product="Mount Gay Eclipse Rum" data-price="22.00">Add to Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/rum5.jpg" alt="Appleton Estate Reserve Blend">
                    </div>
                    <h3>Appleton Estate Reserve Blend</h3>
                    <p>Price: $35.00</p>
                    <button class="add-to-cart" data-product="Appleton Estate Reserve Blend" data-price="35.00">Add to
                        Cart</button>
                </div>
    
                <div class="product">
                    <div class="product-image">
                        <img src="images/rum6.jpg" alt="Appleton Estate Reserve Blend">
                    </div>
                    <h3>Mailbu</h3>
                    <p>Price: $35.00</p>
                    <button class="add-to-cart" data-product="mailbu" data-price="35.00">Add to
                        Cart</button>
                </div>
            </div>
    
            <div class="cart">
                <h2>Shopping Cart</h2>
                <ul id="cart-items"></ul>
                <div class="cart-footer">
                    <p>Total: $<span id="total-price">0</span></p>
                    <button id="checkout-button">Checkout</button>
                </div>
            </div>
    
            <div id="checkout-modal" class="modal">
                <div class="modal-content">
                    <span id="close-modal" class="close">&times;</span>
                    <h2>Checkout Form</h2>
                    <form id="checkout-form" action="https://docs.google.com/forms/d/e/your-google-form-id/formResponse"
                        method="POST">
                        <label for="customer-name">Name:</label>
                        <input type="text" id="customer-name" name="entry.your-name-field-id" placeholder="Enter your name">
                        <label for="customer-address">Address:</label>
                        <input type="text" id="customer-address" name="entry.your-address-field-id"
                            placeholder="Enter your address">
                        <label for="billing-address">Billing Address:</label>
                        <input type="text" id="billing-address" name="entry.your-billing-address-field-id"
                            placeholder="Enter your billing address">
                        <label for="customer-email">Email:</label>
                        <input type="email" id="customer-email" name="entry.your-email-field-id"
                            placeholder="Enter your email">
                        <h3>Payment Details</h3>
                        <label for="payment-card">Card Number:</label>
                        <input type="text" id="payment-card" placeholder="1234-5678-9012-3456">
                        <label for="payment-expiry">Expiry Date:</label>
                        <input type="month" id="payment-expiry">
                        <label for="payment-cvv">CVV:</label>
                        <input type="text" id="payment-cvv" placeholder="123">
                        <button id="submit-order">Pay Now</button>
                    </form>
                </div>
            </div>
        </main>
    
        <footer>
            <p>&copy; 2024 Wine & Liquor Store</p>
        </footer>
    </body>
    
    </html>


    `;
}   
module.exports = generateRumPage;