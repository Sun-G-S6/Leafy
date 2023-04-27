import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function registerUser(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                fName,
                lName,
                email,
                password
            });
            alert('Registration successful. Now you can log in.');
        } catch (e) {
            alert('Registration failed. Try again later.')
        }
        
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-lg mx-auto" onSubmit={registerUser}>
                    <input type="text" placeholder="First Name" 
                        value={fName} 
                        onChange={ev => setFName(ev.target.value)} />
                    <input type="text" placeholder="Last Name"
                        value={lName}
                        onChange={ev => setLName(ev.target.value)} />
                    <input type="email" placeholder="your@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already have an account? <Link className="underline text-bn" to={'/login'}>Login Here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}