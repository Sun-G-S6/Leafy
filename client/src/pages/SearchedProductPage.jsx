import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "./BookingWidget";

export default function SearchedProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const [seller, setSeller] = useState(null);
    console.log(id);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/products/${id}`).then(response => {
            setProduct(response.data);
            fetchSeller(response.data.owner);
        }).catch(error => {
            console.error(error);
        });
    }, [id]);

    const fetchSeller = (ownerId) => {
        axios.get(`/users/${ownerId}`).then(response => {
            setSeller(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    if (!product || !seller) {
        return <div>Loading...</div>; // Show a loading indicator
    }

    if(showAllPhotos) {
        return (
            <div className="absolute inset-0 bg-black min-h-screen">
                <div className="bg-black p-8 grid gap-4">
                    <h2 className="text-3xl text-white">Photos of {product.name}</h2>
                    <div>
                        <button onClick={() => setShowAllPhotos(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 border rounded-2xl bg-gray-200 shadow shadow-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Close photos
                        </button>
                    </div>
                    {product?.photos?.length > 0 && product.photos.map(photo => (
                        <div>
                            <img src={'http://localhost:4000/uploads/' + photo} alt="" />
                        </div>
                    ))}
                </div>
                
            </div>
        );
    }
//*************dont forget to replace href to this href={'https://maps.google.com/?q=' + product.name} */
    return (
        <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-4 py-8">
            <h1 className="text-3xl">{product.name}</h1>

            <a className="flex gap-1 my-3 font-semibold underline" target="_blank" href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {product.name} CHANGE THIS ONCE U ADD USER'S INFO UPDATE
            </a>

            <div className="relative">
                <div className="grid gap-2 grid-cols-[2fr_1fr]">
                    <div className="object-fill">
                        {product.photos?.[0] && (
                            <img className="w-full h-full object-cover rounded-2xl shadow shadow-black" src={'http://localhost:4000/uploads/' + product.photos?.[0]} alt="" />
                        )}
                    </div>

                    <div className="grid gap-2">
                        {product.photos?.[1] && (
                            <img className="rounded-2xl shadow shadow-black" src={'http://localhost:4000/uploads/' + product.photos?.[1]} alt="" />
                        )}
                        {product.photos?.[2] && (
                            <img className="rounded-2xl shadow shadow-black" src={'http://localhost:4000/uploads/' + product.photos?.[2]} alt="" />
                        )}
                    </div>
                </div>

                <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 rounded-2xl border bg-white shadow-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                    Show all photos
                </button>
            </div>
            <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr] ">
                <div className="p-4">
                    <div className="my-4">
                        <h2 className="text-xl font-semibold">Description</h2>
                        <p className="my-1 p-2">{product.description}</p>
                    </div>
                    <div className="text-xl bg-gray-300 rounded-2xl p-2">
                        Quantity: {product.quantity}<br />
                        Category: {product.category}
                    </div>
                </div>
                <BookingWidget seller={seller} product={product} />
            </div>
        </div>
    );
}
