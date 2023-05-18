import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import orange from '../assets/orange.jpg';

export default function ProductsPage() {
    const { action } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);

    const productsNum = 3;

    function uploadPhotos(ev) {
        const files = ev.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append('photos', files[i]);
        }

        axios.post('/upload', data, {
            headers: { 'Content-type': 'multipart/form-data' }
        }).then(response => {
            const { data: filenames } = response;
            setAddedPhotos(prev => {
                return [...prev, ...filenames];
            });
        })
    }

    return (
        <div>
            {action !== 'new' && (
                <div>
                    <div className="text-center">
                        <Link className="gap-1 inline-flex bg-primary text-white py-2 px-6 rounded-full max-w-sm justify-center" to={'/account/products/new'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add a new product
                        </Link>
                    </div>

                    <div className="mt-4">
                        <div className="border gap-4 flex bg-gray-200 p-4 rounded-2xl">
                            <div className="w-32 h-32 bg-gray-300 rounded-xl">
                                <img className="rounded-xl" src={orange} alt="orange image" />
                            </div>
                            Orange  <br />
                            Description  <br />
                            Quantity: 10lbs  <br />
                            Price: $3/lb  <br />
                            Location: San Jose
                        </div>
                    </div>

                </div>
            )}

            {action === 'new' && (
                <div>
                    <form >
                        <h2 className="text-xl mt-4">Product Name</h2>
                        <input type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder="name of the product, for example: orange" />

                        <h2 className="text-xl mt-4">Price</h2>
                        <input type="text" value={price} onChange={ev => setPrice(ev.target.value)} placeholder="price" />

                        <h2 className="text-xl mt-4">Quantity</h2>
                        <input className="w-full border my-1 py-3 px-3 rounded-2xl" value={quantity} onChange={ev => setQuantity(ev.target.value)} type="number" placeholder="quantity" />

                        <h2 className="text-xl mt-4">Description</h2>
                        <textarea value={description} onChange={ev => setDescription(ev.targer.value)} className="w-full border my-1 py-3 px-3 rounded-2xl" />

                        <h2 className="text-xl mt-4">Location</h2>
                        <input type="text" value={location} onChange={ev => setLocation(ev.target.value)} placeholder="your city, for example: San Jose" />

                        <h2 className="text-xl mt-4">Photos</h2>
                        <div className="grid grip-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-2">
                            <label className="cursor-pointer flex justify-center gap-2 border bg-transparent rounded-2xl p-8 text-gray-600">
                                <input type="file" multiple className="hidden" onChange={uploadPhotos} />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                Upload
                            </label>
                        </div>
                        <div>
                            <button className="primary my-4">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}