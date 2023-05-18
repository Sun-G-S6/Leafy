import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import PhotosUploader from '../PhotosUploader';
import AccountNav from './AccountNav';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';

export default function ProductsFormPage() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [pricePerUnit, setPricePerUnit] = useState('');
    const [quantity, setQuantity] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/products/' + id).then(response => {
            const {data} = response;
            setName(data.name);
            setTotalPrice(data.totalPrice);
            setPricePerUnit(data.pricePerUnit);
            setQuantity(data.quantity);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setCategories(data.category);
        });
    }, [id]);

    async function savePlace(ev) {
        ev.preventDefault();
        const placeData = {
            name,
            totalPrice,
            pricePerUnit,
            quantity,
            addedPhotos,
            description,
            categories
        };
        if (id) {
            await axios.put('/products', {
                id, ...placeData
            });
            setRedirect(true);
        } else {
            await axios.post('/products', placeData);
            setRedirect(true);
        }
        
    }

    if (redirect) {
        return <Navigate to={'/account/products'} />
    }

    return(
        <div>
            <AccountNav />
            <form onSubmit={savePlace}>
                <h2 className="text-2xl mt-4">Name</h2>
                <p className="text-gray-500 text-sm">Name of your product</p>
                <input
                    type="text"
                    value={name}
                    onChange={ev => setName(ev.target.value)}
                    placeholder="Example: Orange, Peach, etc..." />

                <h2 className="text-2xl mt-4">Total Price</h2>
                <p className="text-gray-500 text-sm">Total price of your product</p>
                <input
                    className="border rounded-md"
                    type="number"
                    value={totalPrice}
                    onChange={ev => setTotalPrice(ev.target.value)}
                    placeholder="Example: 10.99" />

                <h2 className="text-2xl mt-4">Price per unit</h2>
                <p className="text-gray-500 text-sm">Price for a single unit of your product</p>
                <input
                    className="border rounded-md"
                    type="number"
                    value={pricePerUnit}
                    onChange={ev => setPricePerUnit(ev.target.value)}
                    placeholder="Example: 1.50" />

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
                <textarea className="p-1 w-full border rounded-2xl" value={description} onChange={ev => setDescription(ev.target.value)} />

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
    );
}