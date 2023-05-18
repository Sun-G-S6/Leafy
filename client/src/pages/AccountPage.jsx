import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ProductsPage from './ProductsPage';


export default function AccountPage() {
    const { ready, user } = useContext(UserContext);
    let { subpage } = useParams();

    if (subpage === undefined)
    {
        subpage = 'profile';
    }


    /*if (!ready)
    {
        return 'loading...';
    }*/

    if (ready && !user) {
        return < Navigate to={"/login"} />;
    }

    async function logout() {
        await axios.post('/logout');
    }

    function linkClasses(type = null) {
        let classes = 'flex py-2 px-6 gap-1 rounded-full';
        if (subpage === type) {
            classes += ' bg-primary text-white';
        } else {
            classes += ' bg-gray-200'
        }
        return classes;
    }

    return (
        <div>
            <nav className="w-full flex mt-8 gap-4 justify-center mb-8" >
                <Link className={linkClasses('profile')} to={'/account'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    My Profile
                </Link>
                <Link className={linkClasses('pastOrder')} to={'/account/pastOrder'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                    My Past Order
                </Link>
                <Link className={linkClasses('products')} to={'/account/products'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                    My Products
                </Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as (Username go here) <br />
                    <button className="primary mt-2 max-w-sm">
                        Logout
                    </button>
                </div>
            )}

            {subpage === 'products' && (
                <ProductsPage />
            )}

        </div>
    );
}