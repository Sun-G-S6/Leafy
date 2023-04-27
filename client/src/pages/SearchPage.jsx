import React, { useState } from 'react';
import apple from '../pictures/apple.jpg';
import banana from '../pictures/banana.jpg';
import carrot from '../pictures/carrot.jpg';
import broccoli from '../pictures/broccoli.jpg';
import grapes from '../pictures/grapes.jpg';
import kiwi from '../pictures/kiwi.jpg';
import lemon from '../pictures/lemon.jpg';
import mango from '../pictures/mango.jpg';
import orange from '../pictures/orange.jpg';
import pear from '../pictures/pear.jpg';
import pineapple from '../pictures/pineapple.jpg';
import strawberry from '../pictures/strawberry.jpg';


export default function SearchPage() {
    const dummyProducts = [
        { name: "Apple", price: "$1.99", imgSrc: apple, seller: "John's Market", distance: "1.2 miles", quantity: 2 },
        { name: "Banana", price: "$0.99", imgSrc: banana, seller: "Mary's Market", distance: "0.8 miles", quantity: 1 },
        { name: "Carrot", price: "$0.49", imgSrc: carrot, seller: "Fresh Produce", distance: "1.5 miles", quantity: 3 },
        { name: "Broccoli", price: "$0.79", imgSrc: broccoli, seller: "Healthy Foods", distance: "2.3 miles", quantity: 2 },
        { name: "Grapes", price: "$2.99", imgSrc: grapes, seller: "John's Market", distance: "1.2 miles", quantity: 4 },
        { name: "Kiwi", price: "$1.49", imgSrc: kiwi, seller: "Fresh Produce", distance: "1.5 miles", quantity: 1 },
        { name: "Lemon", price: "$0.69", imgSrc: lemon, seller: "Healthy Foods", distance: "2.3 miles", quantity: 3 },
        { name: "Mango", price: "$2.49", imgSrc: mango, seller: "Mary's Market", distance: "0.8 miles", quantity: 2 },
        { name: "Orange", price: "$0.89", imgSrc: orange, seller: "John's Market", distance: "1.2 miles", quantity: 1 },
        { name: "Pear", price: "$1.29", imgSrc: pear, seller: "Fresh Produce", distance: "1.5 miles", quantity: 5 },
        { name: "Pineapple", price: "$3.99", imgSrc: pineapple, seller: "Healthy Foods", distance: "2.3 miles", quantity: 2 },
        { name: "Strawberry", price: "$1.99", imgSrc: strawberry, seller: "Mary's Market", distance: "0.8 miles", quantity: 3 },
    ];
      

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(dummyProducts);
    const [cart, setCart] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let results = [];
        if (searchTerm.trim() === "") {
        results = dummyProducts; // Display all products when search term is empty
        } else {
        results = dummyProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        }
        setSearchResults(results);
    };

  

    const addToCart = (product) => {
    setCart([...cart, product]);
    };

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
      };
    
    const handleDecrease = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
    };

  return (
    <div>
      <div>
        {/* <h1>Search Page</h1> */}
        
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <label style={{ padding: "10px", maxWidth: "500px", marginRight: "10px", display: "flex", alignItems: "center" }}>
              <input type="text" placeholder = "Search Produce" value={searchTerm} onChange={handleChange} style={{ width: "100%" , textAlign: "center" }} />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#4CAF50",
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  margin: "4px 2px",
                   cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        
      </div>
        
      <div>
        
        {searchResults.length === 0 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>No search results found.</p>
          </div>
        )}
        {searchResults.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {searchResults.map((product) => (
              <div
                key={product.name}
                style={{
                  backgroundColor: "white",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "0.7rem",
                }}
              >
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  style={{ height: "65%", objectFit: "contain" }}
                />
                <div style={{ padding: "0.5rem", textAlign: "center" }}>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                  <p>{product.distance}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" , paddingBottom: "10px"}}>
                    <button
                        onClick={() => addToCart(product)}
                        style={{
                            backgroundColor: "#4CAF50",
                            border: "none",
                            color: "white",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "16px",
                            margin: "4px 2px",
                            cursor: "pointer",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "120px",
                        }}
                    >
                        <span style={{ marginRight: "10px" }}>Add to cart</span>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "white",
                                color: "#4CAF50", 
                                width: "20px",
                                height: "30px",
                                borderRadius: "5px",
                                justifyContent: "center",
                                marginLeft: "10px",
                            }}
                        >
                            {/* <button onClick={handleDecrease} style={{ color: 'white' }}>-</button>
                            <span style={{ margin: "0 10px" }}>{quantity}</span>
                            <button onClick={handleIncrease} style={{ color: 'white' }}>+</button> */}
                            <div style={{ display: "flex", alignItems: "center" }}>
                                    <button onClick={handleDecrease} style={{ marginRight: "11px", color: 'white' }}>-</button>
                                    {/* <input type="number" min="1" value={quantity} style={{ width: "10px", textAlign: "center", color: 'green' }} /> */}
                                    <span style={{ margin: "0px" }}>{quantity}</span>
                                    <button onClick={handleIncrease} style={{ marginLeft: "11px", color: 'white' }}>+</button>
                            </div>
                        </div>
                    </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
}
