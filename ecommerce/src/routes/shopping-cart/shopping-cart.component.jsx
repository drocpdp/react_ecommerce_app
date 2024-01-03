import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

const ShoppingCart = () => {

    const { removeFromCart, currShoppingCartItems } = useContext(ShoppingCartContext);

    const handleClearCart = () => {
      localStorage.clear();
      window.location.reload();
    };

    return (
        <div>
        <h2>Shopping Cart</h2>
        <Link to='/'>Go Back to Main Page</Link>
        <ul>
          {currShoppingCartItems.map(item => (
            <li key={item.id}>
              {item.id}, {item.name}, ${item.price}
              <button onClick={() => removeFromCart(item.name)}>Remove</button>
            </li>
          ))}

        </ul>
        <button onClick={handleClearCart}>Clear cart</button>
      </div>
    )
}

export default ShoppingCart;