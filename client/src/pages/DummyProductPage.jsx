import apple from '../assets/apple.jpg';
import orange from '../assets/orange.jpg';
import pear from '../assets/pear.jpg';
import kiwi from '../assets/kiwi.jpg';
import { useState } from 'react';
export default function DummyProductPage() {
    const [showAllPics, setShowAllPics] = useState(false);
    const list = [orange, apple, pear, kiwi];

    if (showAllPics) {
        return (
            <div className='absolute inset-0 bg-black min-h-screen'>
                <div>
                    <button onClick={() => setShowAllPics(false)} className='fixed flex gap-1 px-4 py-2 bg-white rounded-2xl shadow shadow-gray-500 right-12 top-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Close
                    </button>
                </div>
                <div className='p-8 grid gap-4 bg-black justify-center'>
                    {list?.length > 0 && list.map(photo => (
                        <div>
                            <img style={{ width: "1400px", height: "1000px" }} className='aspect-square object-cover' src={photo} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="mt-4 py-8 bg-gray-50 -mx-8 px-12">
            <h1 className="text-3xl">
                Orange (product title goes here)
            </h1>
            <a className=" flex gap-1 block font-semibold underline my-2" target="_blank" href={'https://map.google.com/?q=SanJose' /*+location*/}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                San Jose (location goes here)
            </a>
            <div className="relative">
                <div className='my-4 grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden'>
                    <div>
                        {list?.[0] && (
                            <div>
                                <img className='aspect-square object-cover' src={list[0]} />
                            </div>
                        )}
                    </div>
                    <div className='grid'>
                        {list?.[1] && (
                            <img className='aspect-square object-cover' src={list[1]} />
                        )}
                        <div className='overflow-hidden'>
                            {list?.[2] && (
                                <img className='aspect-square object-cover relative top-2' src={list[2]} />
                            )}
                        </div>
                    </div>
                </div>
                <button onClick={() => setShowAllPics(true)} className='absolute flex gap-1 bottom-2 right-2 px-4 py-2 bg-gray-500 rounded-2xl text-white shadow shadow-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    Show more pictures
                </button>
            </div>
            <div className='grid grid-cols-2'>
                <div className='bg-white rounded-2xl p-4 mt-4 max-w-2xl text-center'>
                    <h2 className='text-xl p-4'>
                        Price: $5 (price goes here) /lb
                        <div className='p-4'>
                            Quantity:
                            <input className='mx-2 border border-gray-200' type="number" placeholder='0' />
                        </div>
                    </h2>
                    <button className='bg-primary py-2 px-10 text-white rounded-2xl'>
                        <div className='flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            Add to cart
                        </div>
                    </button>
                </div>
                <div className='bg-white rounded-2xl p-4 mt-4 text-center'>
                    <h2 className='font-semibold text-2xl'>Description</h2>
                    (Description goes here) <br />
                    An orange is a citrus fruit known for its vibrant color, refreshing taste, and citrusy aroma. With a round shape and a slightly dimpled, textured skin, oranges are typically orange in color, although some varieties may have a reddish or yellow hue. When you peel the skin, you reveal juicy segments filled with tangy, sweet, and refreshing flesh. Oranges are rich in vitamin C, providing a burst of immune-boosting properties, and they offer a delightful balance of tartness and sweetness. Whether enjoyed as a standalone snack, juiced for a refreshing beverage, or used in culinary creations, oranges are a popular and versatile fruit appreciated for their delightful flavor and nutritional benefits.
                </div>
            </div>
        </div>
    );
}