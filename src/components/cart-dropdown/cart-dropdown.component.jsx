import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {/* Placeholder array being mapped, with items passed into the CartItem component */}
        {[].map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <Button> GO TO CHECKOUT </Button>
    </div>
  );
};

export default CartDropdown;
