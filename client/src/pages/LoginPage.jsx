import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            await axios.post('/login', { email, password });
            alert('Login successful')
        } catch (e) {
            alert('Login failed');
        }
    };
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-lg mx-auto" onSubmit={handleLoginSubmit}>
                    <input type="email" 
                        placeholder="your@email.com" 
                        value={email} 
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" 
                        placeholder="password" 
                        value={password} 
                        onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Sign up <Link className="underline text-bn" to={'/register'}> Here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}