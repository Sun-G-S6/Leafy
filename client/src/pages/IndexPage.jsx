import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/products').then(response => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.length > 0 && products.map(product => (
                <Link to={'/product/' + product._id} key={product.id}>
                    <div className="bg-gray-500 rounded-2xl flex mb-2">
                        {product.photos?.[0] && (
                            <img className="rounded-2xl aspect-square object-cover" src={'http://localhost:4000/uploads/' + product.photos?.[0]} alt="" />
                        )}
                    </div>
                    <h2 className="leading-4 ">{product.name}</h2>
                    <h3 className="leading-4 text-sm text-gray-500">Quantity: {product.quantity}</h3>
                    <h3 className="leading-4 text-sm text-gray-500">Type: {product.category}</h3>
                    <div className="mt-1">
                        Total Price: <span className="leading-4 text-sm font-bold">${product.price} </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
