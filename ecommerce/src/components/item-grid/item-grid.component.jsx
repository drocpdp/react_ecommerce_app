import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

const ItemGridComponent = () => {

    const items = [
        {
            'id': 101,
            'name': 'Item1',
            'description': 'Description for Item1 abcdef',
            'price': 123.23
        },
        {
            'id': 102,
            'name': 'Item2',
            'description': 'Description for Item2 ghijkl',
            'price': 223.23
        },
        {
            'id': 103,
            'name': 'Item3',
            'description': 'Description for Item3 abcdef',
            'price': 323.23
        },
        {
            'id': 104,
            'name': 'Item4',
            'description': 'Description for Item4 efghijk',
            'price': 323.23
        },
        {
            'id': 105,
            'name': 'Item5',
            'description': 'Description for Item5 wxyz',
            'price': 323.23
        },
        {
            'id': 106,
            'name': 'Item6',
            'description': 'Description for Item6',
            'price': 323.23
        },                        
    ];

    const { currShoppingCartItems, addToCart } = useContext(ShoppingCartContext);

    const processAddToCart = (item) => {
        addToCart(item);
    }

    return(
        <div class="container">
            <div class="row">
            {
                items
                    .filter((ob) => ob.description.includes(""))
                    .map((ob) => 
                    <div key={ob.id} class="col-md-3">
                        <p>{ob.name}</p>
                        <p>{ob.description}</p>
                        <p>{ob.price}</p>
                        <button onClick = {() => processAddToCart(ob)}>
                            Add {ob.id}, {ob.name} to Cart
                        </button>
                        
                        <hr />
                    </div>
                    )
            }
            </div>
            <Link to="/shopping-cart">Shopping Cart</Link>
        </div>
    )
}

export default ItemGridComponent;