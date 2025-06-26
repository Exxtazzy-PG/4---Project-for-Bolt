// Translations
const translations = {
    en: {
        "Back": "Back",
        "Cart": "Cart",
        "Корзина": "Cart",
        "Sunglasses": "Sunglasses",
        "French know-how with high-technology lenses in order to never be taken by surprise when there is a sharp bright sunny turn in the road.": "French know-how with high-technology lenses in order to never be taken by surprise when there is a sharp bright sunny turn in the road.",
        "BUY 115 €": "BUY 115 €",
        "Shopping Cart": "Shopping Cart",
        "Premium Sunglasses": "Premium Sunglasses",
        "Black Leather Belt": "Black Leather Belt",
        "Total: 210 €": "Total: 210 €",
        "Checkout": "Checkout",
        "/ Sunglasses": "/ Sunglasses",
        "▼ Product details": "▼ Product details",
        "Product Details": "Product Details",
        "Materials": "Materials",
        "High-quality acetate frame with polarized lenses": "High-quality acetate frame with polarized lenses",
        "Dimensions": "Dimensions",
        "52mm lens width, 20mm bridge, 145mm temple": "52mm lens width, 20mm bridge, 145mm temple",
        "Protection": "Protection",
        "100% UV protection, anti-reflective coating": "100% UV protection, anti-reflective coating",
        "FASHION": "FASHION",
        "TRAVEL": "TRAVEL",
        "EVERY DAY": "EVERY DAY",
        "MINIATURES": "MINIATURES",
        "Add to Cart": "Add to Cart",
        "Fashion": "Fashion",
        "Travel": "Travel",
        "Every day": "Every day",
        "Miniatures": "Miniatures",
        "CONTACT": "CONTACT",
        "MEDIA": "MEDIA",
        "LEGAL": "LEGAL",
        "COOKIES": "COOKIES"
    },
    ru: {
        "Back": "Назад",
        "Cart": "Корзина",
        "Корзина": "Корзина",
        "Sunglasses": "Солнцезащитные очки",
        "French know-how with high-technology lenses in order to never be taken by surprise when there is a sharp bright sunny turn in the road.": "Французское ноу-хау с высокотехнологичными линзами, чтобы никогда не быть застигнутым врасплох при резком ярком солнечном повороте дороги.",
        "BUY 115 €": "КУПИТЬ 115 €",
        "Shopping Cart": "Корзина покупок",
        "Premium Sunglasses": "Премиум очки",
        "Black Leather Belt": "Черный кожаный ремень",
        "Total: 210 €": "Итого: 210 €",
        "Checkout": "Оформить заказ",
        "/ Sunglasses": "/ Солнцезащитные очки",
        "▼ Product details": "▼ Детали продукта",
        "Product Details": "Детали продукта",
        "Materials": "Материалы",
        "High-quality acetate frame with polarized lenses": "Высококачественная ацетатная оправа с поляризованными линзами",
        "Dimensions": "Размеры",
        "52mm lens width, 20mm bridge, 145mm temple": "Ширина линзы 52мм, мост 20мм, дужка 145мм",
        "Protection": "Защита",
        "100% UV protection, anti-reflective coating": "100% защита от УФ, антибликовое покрытие",
        "FASHION": "МОДА",
        "TRAVEL": "ПУТЕШЕСТВИЯ",
        "EVERY DAY": "КАЖДЫЙ ДЕНЬ",
        "MINIATURES": "МИНИАТЮРЫ",
        "Add to Cart": "В корзину",
        "Fashion": "Мода",
        "Travel": "Путешествия",
        "Every day": "Каждый день",
        "Miniatures": "Миниатюры",
        "CONTACT": "КОНТАКТЫ",
        "MEDIA": "МЕДИА",
        "LEGAL": "ПРАВОВАЯ ИНФОРМАЦИЯ",
        "COOKIES": "КУКИ"
    }
};

// DOM Elements
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCartBtn');
const themeToggle = document.getElementById('themeToggle');
const langSelect = document.getElementById('langSelect');
const footerLang = document.getElementById('footerLang');
const productDetailsBtn = document.getElementById('productDetailsBtn');
const productDetails = document.getElementById('productDetails');
const heroImage = document.getElementById('heroImage');
const categoryBtns = document.querySelectorAll('.category-btn');
const productsGrid = document.getElementById('productsGrid');

// Current language
let currentLang = 'en';

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    setupEventListeners();
    updateLanguage();
});

// Theme functionality
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Language functionality
function updateLanguage() {
    const elements = document.querySelectorAll('[data-en], [data-ru]');
    elements.forEach(element => {
        const key = currentLang === 'en' ? 'data-en' : 'data-ru';
        const text = element.getAttribute(key);
        if (text) {
            element.textContent = text;
        }
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    updateLanguage();
    langSelect.value = lang;
    footerLang.value = lang;
}

// Side menu functionality
function toggleSideMenu() {
    sideMenu.classList.toggle('active');
}

// Cart functionality
function openCart() {
    cartModal.classList.add('active');
}

function closeCart() {
    cartModal.classList.remove('active');
}

// Product details functionality
function toggleProductDetails() {
    productDetails.classList.toggle('active');
    const arrow = productDetailsBtn.querySelector('span');
    if (productDetails.classList.contains('active')) {
        arrow.textContent = arrow.textContent.replace('▼', '▲');
    } else {
        arrow.textContent = arrow.textContent.replace('▲', '▼');
    }
}

// Image click effect
function handleImageClick(event) {
    event.target.classList.add('pulse');
    setTimeout(() => {
        event.target.classList.remove('pulse');
    }, 300);
}

// Category filtering
function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product-card');
    
    // Update active category button
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide products based on category
    allProducts.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        if (productCategory === category) {
            product.style.display = 'block';
            product.classList.add('fade-in');
        } else {
            product.style.display = 'none';
            product.classList.remove('fade-in');
        }
    });
}

// Add to cart functionality
function addToCart(event) {
    event.stopPropagation();
    
    // Get current cart count
    const cartCount = document.getElementById('cartCount');
    let count = parseInt(cartCount.textContent.replace(/[()]/g, ''));
    count++;
    cartCount.textContent = `(${count})`;
    
    // Add animation to cart button
    cartBtn.classList.add('pulse');
    setTimeout(() => {
        cartBtn.classList.remove('pulse');
    }, 300);
    
    // Show success message (optional)
    showNotification(currentLang === 'en' ? 'Added to cart!' : 'Добавлено в корзину!');
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 4000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Remove cart item
function removeCartItem(event) {
    const cartItem = event.target.closest('.cart-item');
    cartItem.remove();
    
    // Update cart count
    const cartCount = document.getElementById('cartCount');
    let count = parseInt(cartCount.textContent.replace(/[()]/g, ''));
    count--;
    cartCount.textContent = `(${count})`;
    
    // Update total (simplified)
    updateCartTotal();
}

function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    
    cartItems.forEach(item => {
        const priceText = item.querySelector('.item-details p').textContent;
        const price = parseInt(priceText.replace(/[^\d]/g, ''));
        total += price;
    });
    
    const cartTotal = document.querySelector('.cart-total h4');
    cartTotal.textContent = currentLang === 'en' ? `Total: ${total} €` : `Итого: ${total} €`;
}

// Event listeners setup
function setupEventListeners() {
    // Menu button
    menuBtn.addEventListener('click', toggleSideMenu);
    
    // Cart button
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language selectors
    langSelect.addEventListener('change', (e) => switchLanguage(e.target.value));
    footerLang.addEventListener('change', (e) => switchLanguage(e.target.value));
    
    // Product details toggle
    productDetailsBtn.addEventListener('click', toggleProductDetails);
    
    // Hero image click effect
    heroImage.addEventListener('click', handleImageClick);
    
    // Category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            filterProducts(category);
        });
    });
    
    // Add to cart buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            addToCart(e);
        }
        if (e.target.classList.contains('remove-item')) {
            removeCartItem(e);
        }
    });
    
    // Close side menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target) && sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
        }
    });
    
    // Close cart when clicking outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCart();
        }
    });
    
    // Product image click effects
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('product-image') || e.target.closest('.product-card img')) {
            handleImageClick(e);
        }
    });
    
    // Buy buttons in side menu
    document.querySelector('.side-menu .buy-btn').addEventListener('click', () => {
        addToCart(event);
        toggleSideMenu();
    });
    
    // Hero CTA button
    document.querySelector('.cta-btn').addEventListener('click', () => {
        addToCart(event);
    });
    
    // Next button functionality
    document.querySelector('.next-btn').addEventListener('click', () => {
        // Simulate pagination
        const progress = document.querySelector('.pagination-progress');
        let currentWidth = parseInt(progress.style.width || '25%');
        currentWidth = currentWidth >= 100 ? 25 : currentWidth + 25;
        progress.style.width = currentWidth + '%';
        
        // Update pagination numbers
        const spans = document.querySelectorAll('.pagination span');
        if (currentWidth === 50) {
            spans[0].textContent = '02';
        } else if (currentWidth === 75) {
            spans[0].textContent = '03';
        } else if (currentWidth === 100) {
            spans[0].textContent = '04';
        } else {
            spans[0].textContent = '01';
        }
    });
}

// Add CSS animation for slide in notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);