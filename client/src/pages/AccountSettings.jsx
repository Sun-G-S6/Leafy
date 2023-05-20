import React, { useState, useContext } from 'react';
import axios from "axios";
import { Button, TextField } from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import { lightGreen, lime } from '@mui/material/colors';
import { UserContext } from "../UserContext";

//***********************   yarn add @mui/material    ***********************

const useStyle = {
    root: {
        color: lightGreen[900],
        fontFamily: "Verdana",
        fontSize: 25
    },
    infoTag: {
        fontFamily: "Verdana",
        fontSize: 15
    },
    success: {
        fontFamily: "Verdana",
        fontSize: 20,
        color: lime.A700
    }
};

export default function AccountSettingsPage() {
    const {user} = useContext(UserContext);
    const [fName, setFirstName] = useState('');
    const [lName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState({
        street: '',
        state: '',
        city: '',
        postalCode: ''
    });
    const [image, setImage] = useState(null);

    const [successMessage, setSuccess] = useState('');
    
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        const { name, value } = event.target;
        setAddress(prevAddress => ({ 
        ...prevAddress,
        [name]: value
        }));
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    }

    async function handleSubmit(event){
        event.preventDefault();
        try {
            await axios.put('/updateAccountsettings', {
                id: user._id,
                fName,
                lName,
                email,
                password,
                phone,
                address
                //image
        });
        
        setSuccess("Information updated successfully! Reload profile page to see changes.");
        } catch (error) {
            alert("Update failed");
        }
    };

    return (
        <div className="mt-4">
            <div className="mb-64">
                <h1 style={useStyle.root}> Account Settings </h1> <br />
                <Avatar alt="User" src={image ? URL.createObjectURL(image) : ""} sx={{ width: 170, height: 170 }} />
                <h1 className="mt-3 mb-5">Select image:  <br />
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </h1>
                <h1 className="mt-10" style={useStyle.infoTag}> Enter any information you would like to update: </h1> <br />
                <form className="flex flex-col justify-around" onSubmit={handleSubmit}>
                    <div className='flex'>
                    <TextField input type="text" style={{ width: 250 }} size="small" label="First Name" value={fName} onChange={handleFirstNameChange} />
                    <br />

                    <TextField input type="text" style={{ width: 250 }} size="small" label="Last Name" value={lName} onChange={handleLastNameChange} />
                    <br />

                    <TextField input type="email" style={{ width: 250 }} size="small" label="Email" value={email} onChange={handleEmailChange} />
                    <br />

                    <TextField input type="text" style={{ width: 250 }} size="small" label="Phone" value={phone} onChange={handlePhoneChange} />
                    <br />

                    <TextField input type="password" style={{ width: 250 }} size="small" label="Password" value={password} onChange={handlePasswordChange} />
                    <br />
                    </div>

                    <div className='flex mt-5'>
                    <TextField input type="text" style={{ width: 250 }} size="small" label="Street Name" name="street" value={address.street} onChange={handleAddressChange} />
                    <br />

                    <TextField input type="text" style={{ width: 250 }} size="small" label="State" name="state" value={address.state} onChange={handleAddressChange} />
                    <br />

                    <TextField input type="text" style={{ width: 250 }} size="small" label="City" name="city" value={address.city} onChange={handleAddressChange} />
                    <br />

                    <TextField input type="text" style={{ width: 250 }} size="small" label="Zip Code" name="postalCode" value={address.postalCode} onChange={handleAddressChange} />
                    <br />
                    </div>
                    
                    <div className='flex justify-center mt-10'>
                    <Button type="submit" variant="contained" color='success'> Save Changes </Button>
                    </div>
                </form> <br />

                <h1 style ={useStyle.success}> {successMessage && <p>{successMessage}</p>} </h1>
            </div>
        </div>
    );
}