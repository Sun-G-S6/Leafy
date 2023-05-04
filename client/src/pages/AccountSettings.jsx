import React, { useState } from 'react';
import axios from "axios";
import {Button, TextField} from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import { lightGreen } from '@mui/material/colors';

const useStyle = {
  root: {
    color: lightGreen[900],
    fontFamily: "Verdana",
    fontSize: 25
  },
  infoTag: {
    fontFamily: "Verdana",
    fontSize: 15
  }
};

export default function AccountSettingsPage() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

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

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  }

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
        password,
        image
    });
  };

  return (
    <div className="mt-4">
        <div className="mb-64">
          <h1 style={useStyle.root}> Account Settings </h1> <br />
          {/* <Avatar alt="User" src={URL.createObjectURL(image)} sx={{width: 200, height: 200}} /> */}
          <Avatar alt="User" src={image ? URL.createObjectURL(image) : ""} sx={{width: 170, height: 170}} />
          <h1 className= "mt-3 mb-5">Select image: 
            <input type="file" accept="image/*" onChange={handleImageChange} /> 
          </h1>
          <h1 className="mt-10" style={useStyle.infoTag}> Change information: </h1> <br />
          <form className="flex items-center justify-around" onSubmit={handleSubmit}>
              <TextField input type="text" style={{width: 250}} size="small" label="First Name" value={firstname} onChange={handleFirstNameChange}/>
              <br />
                
              <TextField input type="text" style={{width: 250}} size="small" label="Last Name" value={lastname} onChange={handleLastNameChange}/>
              <br />

              <TextField input type="email" style={{width:250}} size="small" label="Email" value={email} onChange={handleEmailChange} />
              <br />
       
              <TextField input type="password" style={{width:250}} size="small" label="Password" value={password} onChange={handlePasswordChange} />
              <br />
              <Button type="submit" variant="contained" color='success'> Save Changes </Button>
            </form>
        </div>
    </div>
  );
}
