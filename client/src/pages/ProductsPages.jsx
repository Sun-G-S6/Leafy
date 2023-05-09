import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function ProductsPage() {
    const {action} = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [addedPhotots, setAddedPhotos] = useState([]);
    const [photoLinks, setPhotoLinks] = useState('');
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
                                onChange={ev => setPrice(ev.target.value)} 
                                placeholder="Example: 100" />

                        <h2 className="text-2xl mt-4">Photos</h2>
                        <p className="text-gray-500 text-sm">Upload images of your product. Remember the more the better!</p>
                        <div className="flex gap-2 ">
                            <input type="text" 
                                value={photoLinks} 
                                onChange={ev => setPhotoLinks(ev.target.value)} 
                                placeholder={'Add using a link ...(link should end with jpg)'}/>
                            <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;Image</button>
                        </div>

                        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            <button className="flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                Upload
                            </button>
                        </div>

                        <h2 className="text-2xl mt-4">Description</h2>
                        <p className="text-gray-500 text-sm">Description of your product</p>
                        <textarea value={description} onChange={ev => setDescription(ev.target.value)} />

                        <h2 className="text-2xl mt-4">Categories</h2>
                        <p className="text-gray-500 text-sm">Select your product category</p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <label className="flex border rounded-2xl p-4 gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <span>Fruits</span>
                            </label>
                            <label className="flex border rounded-2xl p-4 gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <span>Vegetables</span>
                            </label>
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