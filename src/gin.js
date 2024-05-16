function generateGinPage() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gin - Wine & Liquor Store</title>
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
                    <li><a href="gin" class="nav-link active">Gin</a></li>
                </ul>
            </nav>
            <h1>Explore Our Fine Selection of Gin</h1>
        </header>
    
        <main>
            <div class="product-container">
                <div class="product">
                    <div class="product-image">
                        <img src="images/gin1.webp" alt="Bombay Sapphire">
                    </div>
                    <h3>Bombay Sapphire</h3>
                    <p>Price: $29.99</p>
                    <button class="add-to-cart" data-product="Bombay Sapphire" data-price="29.99">Add to Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/gin2.webp" alt="Hendrick's Gin">
                    </div>
                    <h3>Hendrick's Gin</h3>
                    <p>Price: $34.95</p>
                    <button class="add-to-cart" data-product="Hendrick's Gin" data-price="34.95">Add to Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/gin3.webp" alt="Tanqueray No. Ten">
                    </div>
                    <h3>Tanqueray No. Ten</h3>
                    <p>Price: $42.00</p>
                    <button class="add-to-cart" data-product="Tanqueray No. Ten" data-price="42.00">Add to Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/gin4.webp" alt="Beefeater London Dry Gin">
                    </div>
                    <h3>Beefeater London Dry Gin</h3>
                    <p>Price: $22.00</p>
                    <button class="add-to-cart" data-product="Beefeater London Dry Gin" data-price="22.00">Add to
                        Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/gin5.webp" alt="Monkey 47 Schwarzwald Dry Gin">
                    </div>
                    <h3>Monkey 47 Schwarzwald Dry Gin</h3>
                    <p>Price: $55.00</p>
                    <button class="add-to-cart" data-product="Monkey 47 Schwarzwald Dry Gin" data-price="55.00">Add to
                        Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/gin6.webp" alt="Gin Mare">
                    </div>
                    <h3>Gin Mare</h3>
                    <p>Price: $50.00</p>
                    <button class="add-to-cart" data-product="Gin Mare" data-price="50.00">Add to Cart</button>
                </div>
            </div>
        </main>
    
        <footer>
            <p>&copy; 2024 Wine & Liquor Store</p>
        </footer>
    </body>
    
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
                <input type="email" id="customer-email" name="entry.your-email-field-id" placeholder="Enter your email">
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
module.exports = generateGinPage;
