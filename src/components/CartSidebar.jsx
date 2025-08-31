import './CartSidebar.css';

const CartSidebar = ({ cartItems, showCart, onClose }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`cart-sidebar ${showCart ? 'open' : ''}`}>
      <div className="cart-header">
        <h5>Your Cart</h5>
        <button className="btn-close" onClick={onClose}></button>
      </div>
      <div className="cart-body">
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="mb-2">
              <div>{item.title} - ${item.price}</div>
            </div>
          ))
        )}
        <hr />
        <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartSidebar;
