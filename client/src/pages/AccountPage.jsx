import { useContext, useState} from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductsPages from "./ProductsPages";
import AccountNav from "./AccountNav";
import { lightGreen, lime } from '@mui/material/colors';

const useStyle = {
    root: {
        color: lightGreen[900],
        fontFamily: "Verdana",
        fontSize: 19
    },
    email: {
        fontFamily: "Verdana",
        fontSize: 19
    },
    success: {
        fontFamily: "Verdana",
        fontSize: 20,
        color: lime.A700
    }
};


export default function AccountPage() {
    const [redirect, setRedirect] = useState(null);
    const {ready, user, setUser} = useContext(UserContext);

    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (!ready) {
        return 'Loading...'
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }
   
    if (redirect) {
        return <Navigate to={redirect} />
    }

    return(
        <div>
           <AccountNav />
            {subpage === 'profile'&& (
                <div className="text-center max-w-lg mx-auto">
                    <h1 style={useStyle.root}> Name: {user.fName} {user.lName} </h1>
                    <h1 style={useStyle.root}> Email: {user.email}</h1>
                    <h1 style={useStyle.root}> Phone: {user.phone} </h1>
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage === 'products' && (
                <ProductsPages />
            )}
        </div>
    );
}