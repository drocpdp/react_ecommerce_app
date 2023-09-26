import React from 'react';
import "./header.component.css";

const Header = () => {

    return(
        <div class="header1container">
            <div class="header1containerchild">
                <div class="headerlinkscontainer">
                    <a href="" class="header1linkstop">Home</a>
                    <a href="" class="header1linkstop">Products</a>
                    <a href="" class="header1linkstop">About Us</a>
                    <a href="" class="header1linkstop">Contact</a>
                </div>
            </div>
            <div class="header1linksbottomcontainer">
                <a href="" class="header1linksbottom">Current</a>
                <a href="" class="header1linksbottom">Categories</a>
                <a href="" class="header1linksbottom">Shopping Cart</a>
                <a href="" class="header1linksbottom">Sign In</a>
            </div>
        </div>
    )
}

export default Header;