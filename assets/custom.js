document.addEventListener('cart:updated', function() {
    alert('Cart updated!');
  // Get cart quantity
  const cartItems = document.querySelectorAll('.cart-item-1');
  const totalQuantity = Array.from(cartItems).reduce((sum, item) => {
    const quantity = parseInt(item.querySelector('[data-quantity]')?.textContent || 0);
    return sum + quantity;
  }, 0);

  // Display quantity
  const cartBadge = document.querySelector('.cart-count, .cart-badge, [data-cart-count]');
  if (cartBadge) {
    cartBadge.textContent = totalQuantity;
    cartBadge.style.display = totalQuantity > 0 ? 'block' : 'none';
  }

  console.log('Cart updated. Total quantity:', totalQuantity);
});
