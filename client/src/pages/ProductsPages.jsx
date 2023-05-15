import { Link } from "react-router-dom";
import AccountNav from "./AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/products').then(({data}) => {
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
                    {products.length > 0 && products.map(product => (
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <h2 className="text-xl">{product.name}</h2>
                            <div className="flex gap-3">
                                <div className="mt-3 w-32 h-32 bg-gray-300 shrink-0">
                                    {product.photos.length > 0 && (
                                        <img src={product.photos[0]} alt="" />
                                    )}
                                </div>
                                <p className="text-gray-500 grow-0">{product.description}</p>
                                <div className="flex flex-col gap-1 text-right">
                                    <div className="flex gap-1">
                                        <span className="">Price: $</span>
                                        <span className="">{product.price}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <span className="">Quantity:</span>
                                        <span className="">{product.quantity}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <span className="">Category:</span>
                                        <span className="">{product.category}</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    ))}
                </div>

        </div>
       
    );
}

//4:14