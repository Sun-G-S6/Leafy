import { Link } from "react-router-dom";
import AccountNav from "./AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/user-products').then(({data}) => {
        setProducts(data);
        });
    }, []);

    return(
        <div>
            <AccountNav />
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/products/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new product
                    </Link>
                </div>
                
            <div className="mt-4">
                {products.length > 0 &&
                    products.map((product) => (
                        <Link
                            to={'/account/products/' + product._id}
                            className="cursor-pointer bg-gray-200 p-4 rounded-2xl block mb-7"
                            key={product._id}
                        >
                            <h2 className="text-2xl">{product.name}</h2>
                            <div className="flex flex-row gap-3 ">
                                <div className="flex mt-3 w-40 h-40 shrink-0">
                                    {product.photos.length > 0 && <img className="rounded-2xl object-cover w-full h-full" src={'http://localhost:4000/uploads/' + product.photos[0]} alt="" />}
                                </div>
                                <p className="text-gray-500 mt-6">{product.description}</p>
                                <div className="flex flex-col gap-1 shrink-0 ml-10 font-semibold">
                                    <div className="flex gap-1">
                                        <span>Price per unit: $</span>
                                        <span>{product.pricePerUnit}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <span>Total Price: $</span>
                                        <span>{product.totalPrice}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <span>Quantity:</span>
                                        <span>{product.quantity}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <span>Category:</span>
                                        <span>{product.category}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>


        </div>
       
    );
}

//4:14