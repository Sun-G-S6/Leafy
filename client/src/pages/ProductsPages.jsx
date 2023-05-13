import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Categories from "./Categories";
import PhotosUploader from "../PhotosUploader";

export default function ProductsPage() {
    const {action} = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);

    return(
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/products/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new product
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>
                    <form>
                        <h2 className="text-2xl mt-4">Name</h2>
                            <p className="text-gray-500 text-sm">Name of your product</p>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={ev => setName(ev.target.value)} 
                                placeholder="Example: Orange, Peach, etc..." />
                        
                        <h2 className="text-2xl mt-4">Price</h2>
                            <p className="text-gray-500 text-sm">Price of your product</p>
                            <input 
                                className="border rounded-md" 
                                type="number" 
                                value={price} 
                                onChange={ev => setPrice(ev.target.value)} 
                                placeholder="Example: 10.99" />

                        <h2 className="text-2xl mt-4">Quantity</h2>
                            <p className="text-gray-500 text-sm">Quantity of your product</p>
                            <input 
                                className="border rounded-md" 
                                type="number" 
                                value={quantity} 
                                onChange={ev => setQuantity(ev.target.value)} 
                                placeholder="Example: 100" />

                        <h2 className="text-2xl mt-4">Photos</h2>
                        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

                        <h2 className="text-2xl mt-4">Description</h2>
                        <p className="text-gray-500 text-sm">Description of your product</p>
                        <textarea className="w-full border rounded-2xl" value={description} onChange={ev => setDescription(ev.target.value)} />

                        <h2 className="text-2xl mt-4">Categories</h2>
                        <p className="text-gray-500 text-sm">Select your product category</p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <Categories selected={categories} onChange={setCategories} />
                        </div>
                        <div>
                            <button className="bg-primary text-white rounded-2xl px-4 py-2 my-4 w-full">Save</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
       
    );
}