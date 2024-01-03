import React from "react";
import { useContext } from "react";
import { SearchBoxContext } from "../../contexts/global-search-box.context";

const SearchBox = () => {

    return (
        <div>
            <label class="px-3">Search</label>
            <input 
                type="text" 
            >
            </input>
            <label class="px-3"></label>
        </div>
    )
}

export default SearchBox;