const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product, quantity);
    saveToLocal(product, quantity);
}

const displayProduct = (p, q) => {
    const li = document.createElement('li');
    const ul = document.getElementById('product-container');
    li.textContent = `Product: ${p}, Quantity: ${q}`;
    ul.appendChild(li);
}

const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;

}

const saveToLocal = (p, q) => {
    const cart = getStoredCart();
    cart[p] = q;
    const cartStringyFy = JSON.stringify(cart);
    //    console.log(cartStringyFy);
    localStorage.setItem('cart', cartStringyFy);

}

const displayProductLocal = ()=>{
    const cart = getStoredCart();
    for(const p in cart){
        displayProduct(p, cart[p]);
    }
} 

displayProductLocal();