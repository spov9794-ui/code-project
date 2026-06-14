
let count = 0;
let totalPrice = 0;

function addToCart(price) {

    count++;
    totalPrice += price;

    updateCart();
}

function removeFromCart(price) {

    if (count > 0) {

        count--;
        totalPrice -= price;

        if (totalPrice < 0) {
            totalPrice = 0;
        }

        updateCart();
    }
}

function updateCart() {

    document.getElementById('count').innerText = count;

    document.getElementById('total-price').innerText =
        '$' + totalPrice.toFixed(2);
}

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}


function toggleDropdown(event) {
    event.preventDefault(); 
    const dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
    }
}

window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

function placeOrder() {
    const msgEl = document.getElementById("orderStatusMessage");
    
    if (!msgEl) return;

    if (count > 0) {
        msgEl.innerText = "🎉 Your order has been placed successfully! Thank you for your purchase.";
        msgEl.className = "status-msg success"; 
        count = 0;
        totalPrice = 0;
        updateCart();
    } else {
        msgEl.innerText = "⚠️ Your cart is empty. Please add items first!";
        msgEl.className = "status-msg error"; 
    }

    setTimeout(function() {
        msgEl.innerText = "";
        msgEl.className = "status-msg";
    }, 4000);
}
