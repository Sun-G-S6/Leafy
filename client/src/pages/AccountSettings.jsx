import React, { useState } from 'react';
import axios from "axios";
import {Button, TextField} from '@mui/material/';
import Avatar from '@mui/material/Avatar';

export default function AccountSettingsPage() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('First Name:', firstname);
    // console.log('Last Name:', lastname);
    // console.log('Email:', email);
    // console.log('Password:', password);
    axios.post("/accountsettings", {
        firstname,
        lastname,
        email,
        password
    });
  };

  return (
    <div className="mt-4">
        <div className="mb-64">
          <h1 className= "text-2xl mb-4"> Account Settings </h1>
            <Avatar alt="User" src="src/assets/avatar.jpg" sx={{width: 200, height: 200}}/>
            <form className="max-w-lg" onSubmit={handleSubmit}>
              <TextField input type="text" margin="dense" size="small" label="First Name" value={firstname} onChange={handleFirstNameChange}/>
              <br />
                
              <TextField input type="text" margin="dense" size="small" label="Last Name" value={lastname} onChange={handleLastNameChange}/>
              <br />

              <TextField input type="email" margin="dense" size="small" label="Email" value={email} onChange={handleEmailChange} />
              <br />
       
              <TextField input type="password" margin="dense" size="small" label="Password" value={password} onChange={handlePasswordChange} />
              <br />
              <Button type="submit" variant="contained" color='primary'> Save Changes </Button>
            </form>
        </div>
    </div>
  );
}