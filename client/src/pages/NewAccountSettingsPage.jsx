import React, { useState } from 'react';
import axios from 'axios';


const AccountInfoUpdatePage = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform API call or update logic here
        console.log({
            fName,
            lName,
            email,
            phone,
            password,
            address: {
                street,
                city,
                state,
                postalCode
            }
        });
    };

    return (
        <div>
            <h1>Account Information Update</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Street:
                    <input
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    City:
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    State:
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Postal Code:
                    <input
                        type="number"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default AccountInfoUpdatePage;
