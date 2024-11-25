import React, { useContext, useState } from "react";
import { CartContext } from "./ProviderCard";
import "../assets/styles/cart_dropdown.css";

const Navbar = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);  // Use context methods for updating cart
  const [isCartVisible, setIsCartVisible] = useState(false);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const toggleCart = () => {
    setIsCartVisible((prev) => !prev);
  };

  const handleCartClose = () => {
    setIsCartVisible(false);
  };

  const increaseQuantity = (item) => {
    addToCart(item);  // Adds one more of the item to the cart
  };

  // Decrease quantity (using removeFromCart from context)
  const decreaseQuantity = (item) => {
    removeFromCart(item);  // Decreases the quantity or removes the item completely
  };

  const deleteProduct = (item) => {
    removeFromCart(item);  // Removes the item completely
  };

  console.log("Cart Items:", cartItems);
  console.log("Is Cart Visible:", isCartVisible);

  return (
    <div>
      <header className="header trans_300">
        <div className="top_nav">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="top_nav_left">
                  free shipping on all U.S. orders over $50
                </div>
              </div>
              <div className="col-md-6 text-right">
                <div className="top_nav_right">
                  <ul className="top_nav_menu">
                    <li className="currency">
                      <a href="#">
                        usd
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="currency_selection">
                        <li>
                          <a href="#">cad</a>
                        </li>
                        <li>
                          <a href="#">aud</a>
                        </li>
                        <li>
                          <a href="#">eur</a>
                        </li>
                        <li>
                          <a href="#">gbp</a>
                        </li>
                      </ul>
                    </li>
                    <li className="language">
                      <a href="#">
                        English
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="language_selection">
                        <li>
                          <a href="#">French</a>
                        </li>
                        <li>
                          <a href="#">Italian</a>
                        </li>
                        <li>
                          <a href="#">German</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                      </ul>
                    </li>
                    <li className="account">
                      <a href="#">
                        My Account
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="account_selection">
                        <li>
                          <a href="#">
                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                            Sign In
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-user-plus"
                              aria-hidden="true"
                            ></i>
                            Register
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_nav_container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-right">
                <div className="logo_container">
                  <a href="#">
                    colo<span>shop</span>
                  </a>
                </div>
                <nav className="navbar">
                  <ul className="navbar_menu">
                    <li>
                      <a href="#">home</a>
                    </li>
                    <li>
                      <a href="#">shop</a>
                    </li>
                    <li>
                      <a href="#">promotion</a>
                    </li>
                    <li>
                      <a href="#">pages</a>
                    </li>
                    <li>
                      <a href="#">blog</a>
                    </li>
                    <li>
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                  <ul className="navbar_user">
                    <li>
                      <a href="#">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="checkout">
                      <a href="#" onClick={toggleCart}>
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        <span id="checkout_items" className="checkout_items">
                          {cartItemCount}
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="hamburger_container">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isCartVisible && (
        <div className="cart_dropdown">
          <div className="cart_header">
            <h3>Cart Items</h3>
            <button className="close_button" onClick={handleCartClose}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="cart_item">
                    <div className="cart_item_details">
                      <span>{item.title}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="cart_item_controls">
                      <button
                        className="quantity_button"
                        onClick={() => decreaseQuantity(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="quantity_button"
                        onClick={() => increaseQuantity(item)}
                      >
                        +
                      </button>
                      <button
                        className="delete_button"
                        onClick={() => deleteProduct(item)}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart_total">
                <strong>Total Price:</strong> ${totalPrice}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
