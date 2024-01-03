import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

const AddToCartButton = ({ itemName }) => {
    const { items, addToCart } = useContext(ShoppingCartContext);

    return (
        <button onClick={() => addToCart(itemName)}>
            Add {itemName} to Cart
        </button>
    );
};

export default AddToCartButton;