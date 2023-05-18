import { useState } from "react";

function formatPhoneNumber(phone) {
    // Phone format (xxx)-xxx-xxxx
    const formattedPhone = `(${phone.slice(0, 3)})-${phone.slice(3, 6)}-${phone.slice(6)}`;
    return formattedPhone;
}

export default function BookingWidget({ product, seller }) {
    const [purchaseAmount, setPurchaseAmount] = useState('');

    const handlePurchaseAmountChange = (event) => {
        setPurchaseAmount(event.target.value);
    };

    const handleSubmit = () => {
        const amount = parseInt(purchaseAmount);
        if (isNaN(amount) || amount < 0 || amount > product.quantity) {
            alert(`Please enter a number between 0 and ${product.quantity}`);
        } else {
            // Perform the necessary actions with the valid purchase amount
            // For example, you can proceed with the purchase process
            alert(`You want to purchase ${amount} units`);
        }
    };

    return (
        <div className="border bg-white shadow-black rounded-2xl p-4 flex flex-col justify-center">
            <div className="mb-2">
                <div className="text-2xl text-center">Total Price: ${product.totalPrice}</div>
                <div className="text-2xl text-center">Price per unit: ${product.pricePerUnit}</div>
                Contact the seller to schedule pickup/delivery and payment.<br />
                Seller Name: {seller.fName}<br />
                Email: {seller.email}<br />
                Phone: {formatPhoneNumber(seller.phone)}<br />
            </div>
            <div className="border  rounded-2xl p-2">
                <label htmlFor="purchaseAmount">Amount you wish to purchase</label>
                <input
                    id="purchaseAmount"
                    type="number"
                    value={purchaseAmount}
                    onChange={handlePurchaseAmountChange}
                    min={0}
                    max={product.quantity}
                    className="border w-full p-1 rounded-2xl text-center"
                />
            </div>
            <button className="primary mt-4" onClick={handleSubmit}>Buy this product</button>
        </div>
    );
}
