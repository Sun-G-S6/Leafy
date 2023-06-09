import React, { useState, useContext, useEffect} from 'react';
import apple from '../assets/apple.jpg';
import banana from '../assets/banana.jpg';
import carrot from '../assets/carrot.jpg';
import broccoli from '../assets/broccoli.jpg';
import grapes from '../assets/grapes.jpg';
import kiwi from '../assets/kiwi.jpg';
import lemon from '../assets/lemon.jpg';
import mango from '../assets/mango.jpg';
import orange from '../assets/orange.jpg';
import pear from '../assets/pear.jpg';
import pineapple from '../assets/pineapple.jpg';
import strawberry from '../assets/strawberry.jpg';
import cart from '../assets/cart.jpg';
import remove from '../assets/delete.png';
import axios from "axios";
import { UserContext } from '../UserContext';
import {useParams, Link} from 'react-router-dom';
import BookingWidget from "./BookingWidget";

// export default function SearchPage() {
//     // const dummyProducts = [
//     //     { name: "Apple", price: "$1.99", imgSrc: apple, seller: "John's Market", distance: "1.2 miles", quantity: 2 },
//     //     { name: "Banana", price: "$0.99", imgSrc: banana, seller: "Mary's Market", distance: "0.8 miles", quantity: 1 },
//     //     { name: "Carrot", price: "$0.49", imgSrc: carrot, seller: "Fresh Produce", distance: "1.5 miles", quantity: 3 },
//     //     { name: "Broccoli", price: "$0.79", imgSrc: broccoli, seller: "Healthy Foods", distance: "2.3 miles", quantity: 2 },
//     //     { name: "Grapes", price: "$2.99", imgSrc: grapes, seller: "John's Market", distance: "1.2 miles", quantity: 4 },
//     //     { name: "Kiwi", price: "$1.49", imgSrc: kiwi, seller: "Fresh Produce", distance: "1.5 miles", quantity: 1 },
//     //     { name: "Lemon", price: "$0.69", imgSrc: lemon, seller: "Healthy Foods", distance: "2.3 miles", quantity: 3 },
//     //     { name: "Mango", price: "$2.49", imgSrc: mango, seller: "Mary's Market", distance: "0.8 miles", quantity: 2 },
//     //     { name: "Orange", price: "$0.89", imgSrc: orange, seller: "John's Market", distance: "1.2 miles", quantity: 1 },
//     //     { name: "Pear", price: "$1.29", imgSrc: pear, seller: "Fresh Produce", distance: "1.5 miles", quantity: 5 },
//     //     { name: "Pineapple", price: "$3.99", imgSrc: pineapple, seller: "Healthy Foods", distance: "2.3 miles", quantity: 2 },
//     //     { name: "Strawberry", price: "$1.99", imgSrc: strawberry, seller: "Mary's Market", distance: "0.8 miles", quantity: 3 },
//     // ];
//     const {user} = useContext(UserContext);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     //const [cart, setCart] = useState([]);
//     const [quantity, setQuantity] = useState(1);
//     const [product, setProducts] = useState([]);
//     const [inventory, setInventory] = useState([]);
//     useEffect(() => {
//         axios.get('/products').then(response => {
//             setSearchResults(response.data);
//             setProducts(response.data);
//             setInventory(response.data);
//         });
//     }, []);


//     const dummyProducts = product;

//     const handleChange = event => {
//         setSearchTerm(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         let results = [];
//         if (searchTerm.trim() === "")
//         {
//             results = dummyProducts; // Display all products when search term is empty
//         }
//         else {
//             results = dummyProducts.filter((product) =>
//                 product.name.toLowerCase().includes(searchTerm.toLowerCase())
//             );

//         }
//         setSearchResults(results);
//     };

//     //const [inventory, setInventory] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [cartLength, setCartLength] = useState(0);
//     const [purchased, setPurchased] = useState(cart);

//     const clearCart = (event) => {
//         event.preventDefault();
//         if(cart.length == 0){
//             return;
//         }
//         setCart([]);
//         setCartLength(0);
//         alert('Cart Cleared!');
        
//     }

//     const buyCart = (event) => {
//         event.preventDefault();

//         // create a copy of the inventory
//         const updatedInventory = [...inventory];
//         //var existingItemIndex;
//         var temp = [];

//         // update the quantities in the inventory
//         cart.forEach((item) => {
//             const existingItemIndex = updatedInventory.findIndex((inventoryItem) => inventoryItem.name === item.name);
//             if (existingItemIndex !== -1) {
//                 //updatedInventory[existingItemIndex] = {
//                 product[existingItemIndex] = {
//                     ...updatedInventory[existingItemIndex],
//                     quantity: updatedInventory[existingItemIndex].quantity - item.quantity,
//                 };

//                 temp.push(existingItemIndex);
//             }
//         });

//         // update the purchased items state
//         const updatedPurchasedItems = [...purchased];
//         inventory.forEach((item) => {
//             const existingItemIndex = updatedPurchasedItems.findIndex((purchasedItem) => purchasedItem.name === item.name);
//             if (existingItemIndex !== -1) {
//                 updatedPurchasedItems[existingItemIndex] = {
//                     ...updatedPurchasedItems[existingItemIndex],
//                     quantity: updatedPurchasedItems[existingItemIndex].quantity + item.quantity,
//                 };
//             } else {
//                 updatedPurchasedItems.push({ ...item });
//             }
//         });

//         setPurchased(updatedPurchasedItems);
//         //setPurchased(product);

//         // update the cart state and cart length
//         setCart([]);
//         setCartLength(0);

//         // update the inventory state
//         //setInventory(updatedInventory);
//         setInventory(product);

//         alert("We have purchased your cart!");
//         temp.forEach((item) => {
//             handleUpdateProd(event, product[item]);
//         })
//     };

//     const removeCart = (event, product) => {
//         event.preventDefault(); // prevent the default behavior of the img element (e.g. opening the image in a new tab)
//         const newCart = cart.filter((p) => p !== product); // create a new array of products that don't match the clicked product
//         setCartLength(cartLength - product.quantity);
//         setCart(newCart); // update the cart state with the new array
//     }

//     const addToCart = (event, product, quantity) => {
//         event.preventDefault();
//         const existingItemIndex = cart.findIndex((item) => item.name === product.name);
//         const inventoryItemIndex = inventory.findIndex((item) => item.name === product.name);
//         if (inventoryItemIndex === -1) {
//             alert(`Sorry, ${product.name} is out of stock.`);
//             return;
//         }
//         const availableQuantity = inventory[inventoryItemIndex].quantity;
//         if (quantity <= availableQuantity) {
//             if (existingItemIndex !== -1) {
//                 const existingQuantity = cart[existingItemIndex].quantity;
//                 if (existingQuantity + quantity <= availableQuantity) {
//                     const updatedCartItems = [...cart];
//                     updatedCartItems[existingItemIndex] = {
//                         ...updatedCartItems[existingItemIndex],
//                         quantity: existingQuantity + quantity,
//                     };
//                     setCart(updatedCartItems);
//                     setCartLength(cartLength + quantity);
//                 } else {
//                     alert(`You cannot add more than ${availableQuantity} ${product.name}(s) to the cart.`);
//                 }
//             } else {
//                 setCart([...cart, { ...product, quantity: quantity }]);
//                 setCartLength(cartLength + quantity);
//             }
//         } else {
//             alert(`You cannot add more than ${availableQuantity} ${product.name}(s) to the cart.`);
//         }
//         setQuantity(1);
//     };


//     const handleIncrease = () => {
//         setQuantity(quantity + 1);
//     };

//     const handleDecrease = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };

//     async function handleUpdateProd(event, product){
//         event.preventDefault();
//         //console.log(product.quantity);
//         try {
//             await axios.put('/updateProductquan', {
//                     id: product._id,
//                     quantity: product.quantity
//             });
//         }
//         catch (error) {
//             alert("meow!");
//         }
//     }

//     return (
//         <div>
//             <div>
//                 {/* <h1>Search Page</h1> */}

//                 <div>
//                     <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px", paddingRight: "5px"}}>
//                         <a className="d-block text-center">
//                             <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
//                                 <img onClick={(event) => clearCart(event)} src="src/assets/cart.jpg" alt="Add to Cart" style={{ width: "50px", height: "50px" }} />

//                             </div>
//                             <h10>Cart: {cartLength}</h10>
//                             <div>
//                                 {cart.map((product) => (
//                                     <div key={product.name} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                                         <p>{`${product.name} (${product.quantity})`}</p>
//                                         <img onClick={(event) => removeCart(event, product)} src={remove} style={{ paddingLeft: "10px", paddingTop: "3px" }} width="4%" height="4%" />

//                                     </div>
//                                 ))}
//                                 <div style={{ display: "flex", paddingTop: "5px", padding: "10px", paddingRight: "5px", justifyContent: "center", alignItems: "center" }}>
//                                     <button
//                                         onClick={(event) => buyCart(event)}
//                                         style={{
//                                             backgroundColor: "#4CAF50",
//                                             border: "none",
//                                             color: "white",
//                                             padding: "2px 8px",
//                                             textAlign: "center",
//                                             textDecoration: "none",
//                                             fontSize: "12px",
//                                             margin: "2px",
//                                             cursor: "pointer",
//                                             borderRadius: "4px",
//                                             display: "flex",
//                                             alignItems: "center",
//                                             justifyContent: "center",
//                                             height: "24px",
//                                             minWidth: "30px",
//                                         }}
//                                     >
//                                         Buy Cart
//                                     </button>
//                                 </div>

//                             </div>
//                         </a>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <div style={{ display: "flex", justifyContent: "center" }}>
//                             <label style={{ padding: "10px", maxWidth: "500px", marginRight: "10px", display: "flex", alignItems: "center" }}>
//                                 <input type="text" placeholder="Search Produce" value={searchTerm} onChange={handleChange} style={{ width: "100%", textAlign: "center" }} />
//                             </label>
//                         </div>
//                     </form>
//                 </div>

//                 <div style={{ display: "flex", justifyContent: "center" }}>
//                     <div>
//                         <button
//                             type="submit"
//                             style={{
//                                 backgroundColor: "#4CAF50",
//                                 border: "none",
//                                 color: "white",
//                                 padding: "10px 20px",
//                                 textAlign: "center",
//                                 textDecoration: "none",
//                                 fontSize: "16px",
//                                 margin: "4px 2px",
//                                 cursor: "pointer",
//                                 borderRadius: "5px",
//                             }}
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </div>

//             </div>

//             <div>

//                 {searchResults.length === 0 && (
//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                         <p>No search results found.</p>
//                     </div>
//                 )}
//                 {searchResults.length > 0 && (
//                     <div
                        
//                         style={{
//                             display: "grid",
//                             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//                             gap: "1rem",
//                         }}
//                     >
//                         {searchResults.map((product) => (
//                             <div
//                                 key={product.name}
//                                 style={{
//                                     backgroundColor: "white",
//                                     height: "350px",
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     justifyContent: "space-between",
//                                     padding: "0.7rem",
//                                 }}
//                             >
//                                 <img
//                                     //src={product.imgSrc}
//                                     src={"http://localhost:4000/uploads/"+ product.photos[0]}
//                                     //alt={product.name}
//                                     style={{ height: "65%", objectFit: "contain" }}
//                                 />
//                                 <div style={{ padding: "0.5rem", textAlign: "center" }}>
//                                     <p>{product.name}</p>
//                                     <p>Price Per Unit: ${product.pricePerUnit}</p>
//                                     <p>Available stock: {product.quantity}</p>
//                                     {/* <p>{product.distance}</p> */}
//                                 </div>
//                                 <div style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
//                                     <button

//                                         style={{
//                                             backgroundColor: "#4CAF50",
//                                             border: "none",
//                                             color: "white",
//                                             padding: "10px 20px",
//                                             textAlign: "center",
//                                             textDecoration: "none",
//                                             fontSize: "16px",
//                                             margin: "4px 2px",
//                                             cursor: "pointer",
//                                             borderRadius: "5px",
//                                             display: "flex",
//                                             alignItems: "center",
//                                             justifyContent: "center",
//                                             minWidth: "120px",
//                                         }}
//                                     >
//                                         <div>
//                                             <span onClick={(event) => addToCart(event, product, quantity)} style={{ marginRight: "10px" }}> Add to cart </span>
//                                         </div>

//                                         <div
//                                             style={{
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 backgroundColor: "white",
//                                                 color: "#4CAF50",
//                                                 width: "20px",
//                                                 height: "30px",
//                                                 borderRadius: "5px",
//                                                 justifyContent: "center",
//                                                 marginLeft: "10px",
//                                             }}
//                                         >
//                                             <div style={{ display: "flex", alignItems: "center" }}>
//                                                 <button onClick={handleDecrease} style={{ marginRight: "11px", color: 'white' }}>-</button>
//                                                 <span style={{ margin: "0px" }}>{quantity}</span>
//                                                 <button onClick={handleIncrease} style={{ marginLeft: "11px", color: 'white' }}>+</button>
//                                             </div>
//                                         </div>
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }



export default function SearchPage() {
    const {id} = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [product, setProducts] = useState([]);

    useEffect(() => {
         axios.get('/products').then(response => {
            setSearchResults(response.data);
            setProducts(response.data);
        });

    }, []);

    const dummyProducts = product;

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let results = [];
        if (searchTerm.trim() === "")
        {
            results = dummyProducts; // Display all products when search term is empty
        }
        else {
            results = dummyProducts.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

        }
        setSearchResults(results);
    };

//*************dont forget to replace href to this href={'https://maps.google.com/?q=' + product.name} */
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <label style={{ padding: "10px", maxWidth: "500px", marginRight: "10px", display: "flex", alignItems: "center" }}>
                        <input type="text" placeholder="Search Produce" value={searchTerm} onChange={handleChange} style={{ width: "100%", textAlign: "center" }} />
                    </label>
                </div>
            {/* </form> */}
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
                            fontSize: "16px",
                            margin: "4px 2px",
                            cursor: "pointer",
                            borderRadius: "5px",
                            }}>
                                Submit
                        </button>
                    </div>
                </div>

            <div>
                {searchResults.length === 0 && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>No search results found.</p>
                </div> )}

                <div>
                {searchResults.length > 0 && (
                        <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5">
                            {product.length > 0 && searchResults.map(product => (
                            <div key={product.id}>
                            <Link to={'/product/' + product._id}>
                        
                            <div className="bg-gray-500 rounded-2xl flex-wrap mb-2">
                                {product.photos?.[0] && (
                                <img className="rounded-2xl aspect-square object-cover" src={'http://localhost:4000/uploads/' + product.photos?.[0]} alt="" />
                                )}
                            </div>

                            <h2 className="leading-4 ">{product.name}</h2>
                            <h3 className="leading-4 text-sm text-gray-500">Quantity: {product.quantity}</h3>
                            <h3 className="leading-4 text-sm text-gray-500">Type: {product.category}</h3>
                        
                            <div className="flex mt-1">
                                <div className="flex-grow text-left leading-4 text-sm font-bold">
                                    Total Price: ${product.totalPrice}
                                </div>
                                <div className="leading-4 text-sm font-bold text-right">
                                     Price per unit: ${product.pricePerUnit}
                                </div>
                            </div>
                            </Link>
                            </div>
                        
                            ))}</div>
                )}
                </div>
            </div>
            </form>
    </div>);
}