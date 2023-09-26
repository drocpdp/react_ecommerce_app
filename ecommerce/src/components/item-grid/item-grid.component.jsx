import React from 'react';
import { useContext } from "react";
import { SearchBoxContext } from '../../contexts/global-search-box.context';

const ItemGridComponent = () => {

    const { currSearchTerm } = useContext(SearchBoxContext);

    const items = [
        {
            'id': 1,
            'name': 'Item1',
            'description': 'Description for Item1 abcdef',
            'price': 123.23
        },
        {
            'id': 2,
            'name': 'Item2',
            'description': 'Description for Item2 ghijkl',
            'price': 223.23
        },
        {
            'id': 3,
            'name': 'Item3',
            'description': 'Description for Item3 abcdef',
            'price': 323.23
        },
        {
            'id': 4,
            'name': 'Item4',
            'description': 'Description for Item4 efghijk',
            'price': 323.23
        },
        {
            'id': 5,
            'name': 'Item5',
            'description': 'Description for Item5 wxyz',
            'price': 323.23
        },
        {
            'id': 6,
            'name': 'Item6',
            'description': 'Description for Item6',
            'price': 323.23
        },                        
    ]

    return(
        <div class="container">
            <div class="row">
            {
                items
                    .filter((ob) => ob.description.includes(currSearchTerm))
                    .map((ob) => 
                    <div key={ob.id} class="col-md-3">
                        <p>{ob.name}</p>
                        <p>{ob.description}</p>
                        <p>{ob.price}</p>
                        <hr />
                    </div>
                    )
            }
            </div>
        </div>
    )
}

export default ItemGridComponent;