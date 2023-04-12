import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-lg mx-auto ">
                    <input type="fName" placeholder="First Name" />
                    <input type="lName" placeholder="Last Name" />
                    <input type="email" placeholder="your@email.com" />
                    <input type="password" placeholder="password" />
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Already have an account? <Link className="underline text-bn" to={'/login'}>Login Here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}