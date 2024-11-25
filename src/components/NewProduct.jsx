import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./ProviderCard";

const NewProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
                    data-filter="*"
                  >
                    all
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    data-filter=".women"
                  >
                    women's
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    data-filter=".accessories"
                  >
                    accessories
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    data-filter=".men"
                  >
                    men's
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div
                className="product-grid"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                {products.map((product) => (
                  <div
                    className="product-item"
                    style={{ flex: "0 1 calc(20% - 20px)" }}
                    key={product.id}
                  >
                    <div className="product product_filter">
                      <div className="product_image">
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div className="favorite"></div>
                      <div className="product_info">
                        <h6 className="product_name">
                          <a href={`/product/${product.id}`}>{product.title}</a>
                        </h6>
                        <div className="product_price">${product.price}</div>
                      </div>
                    </div>
                    <div className="red_button add_to_cart_button">
                      <button
                        onClick={() => addToCart(product)}
                        style={{
                          border: "none",
                          backgroundColor: "red",
                          color: "white",
                          padding: "10px 20px",
                          cursor: "pointer",
                          borderRadius: "5px",
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
