import { useState } from "react";

function formatPhoneNumber(phone) {
    // Phone format (xxx)-xxx-xxxx
    const formattedPhone = `(${phone.slice(0, 3)})-${phone.slice(3, 6)}-${phone.slice(6)}`;
    return formattedPhone;
}

export default function BookingWidget({ product, seller }) {
    const [purchaseAmount, setPurchaseAmount] = useState('');
    const [buyerName, setBuyerName] = useState('');
    const [buyerPhone, setBuyerPhone] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');

    const handlePurchaseAmountChange = (event) => {
        setPurchaseAmount(event.target.value);
    };
    const handleBuyerName = (event) => {
        setBuyerName(event.target.value);
    };
    const handleBuyerPhone = (event) => {
        setBuyerPhone(event.target.value);
    };
    const handleBuyerEmail = (event) => {
        setBuyerEmail(event.target.value);
    };

    const handleSubmit = () => {
        const amount = parseInt(purchaseAmount);
        if (isNaN(amount) || amount < 0 || amount > product.quantity) {
            alert(`Please enter a number between 0 and ${product.quantity}`);
        } else if (!buyerEmail || !validateEmail(buyerEmail)) {
            alert('Please enter a valid email');
        } else {
            // Perform the necessary actions with the valid purchase amount and email
            // For example, you can proceed with the purchase process
            alert(`You want to purchase ${amount} units. Your email is ${buyerEmail}`);
        }
    };

    const validateEmail = (email) => {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="border bg-white shadow-black rounded-2xl p-4 flex flex-col justify-center gap-4">
            <div className="mb-2">
                <div className="text-2xl text-center">Total Price: ${product.totalPrice}</div>
                <div className="text-2xl text-center">Price per unit: ${product.pricePerUnit}</div>
                <span className="ml-6 font">Contact the seller to schedule pickup/delivery and payment.<br /></span>
                
                <div className="flex p-1 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span>Seller Name: {seller.fName}<br /></span>
                </div>
                <div className="flex p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span> Email: {seller.email}<br /></span>
                </div>
                <div className="flex p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <span>Phone: {formatPhoneNumber(seller.phone)}<br /></span>
                </div>
                
               
                
            </div>
            <div className="flex gap-2">
                <span>Please fill out the form below:</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            </div>
            <div className="border  rounded-2xl p-2">
                <label htmlFor="purchaseAmount">Amount you wish to purchase</label>
                <input
                    id="purchaseAmount"
                    type="number"
                    value={purchaseAmount}
                    placeholder="Enter amount"
                    onChange={handlePurchaseAmountChange}
                    min={0}
                    max={product.quantity}
                    className="border w-full p-1 rounded-2xl text-center"
                />
            </div>
            <div className="border  rounded-2xl p-2">
                <label htmlFor="buyerName">Your Name</label>
                <input
                    id="buyerName"
                    type="text"
                    value={buyerName}
                    placeholder="Example: Kevin Gates"
                    onChange={handleBuyerName}
                    className="border w-full p-1 rounded-2xl text-center"
                />
            </div>
            <div className="border  rounded-2xl p-2">
                <label htmlFor="buyerName">Your Phone Number</label>
                <input
                    id="buyerName"
                    type="text"
                    value={buyerPhone}
                    placeholder="Example: 5103334444"
                    onChange={handleBuyerPhone}
                    className="border w-full p-1 rounded-2xl text-center"
                />
            </div>
            <div className="border  rounded-2xl p-2">
                <label htmlFor="buyerEmail">Your Email</label>
                <input
                    id="buyerEmail"
                    type="text"
                    value={buyerEmail}
                    placeholder="Example: KevinGates@gmail.com"
                    onChange={handleBuyerEmail}
                    className="border w-full p-1 rounded-2xl text-center"
                />
            </div>
            <button className="primary mt-4" onClick={handleSubmit}>Notify the Seller!</button>
        </div>
    );
}
