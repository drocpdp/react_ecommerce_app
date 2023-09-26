import React from "react";
import { useContext } from "react";
import { SearchBoxContext } from "../../contexts/global-search-box.context";

const SearchBox = () => {

    const { currSearchTerm, setCurrentSearchTerm } = useContext(SearchBoxContext);

    return (
        <div>
            <label class="px-3">Search</label>
            <input 
                type="text" 
                onChange = {ev => {
                    setCurrentSearchTerm(ev.target.value)
                }}
            >
            </input>
            <label class="px-3">{currSearchTerm}</label>
        </div>
    )
}

export default SearchBox;