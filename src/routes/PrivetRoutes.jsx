/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useContext } from "react";
// import { useGetMeQuery } from "../Redux/features/User/user.api";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading/Loading";


const PrivetRoutes = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const token = localStorage.getItem('auth')
    console.log(token);
    if (loading) {
        return <div> <Loading></Loading> </div>
    }
    if (token && user) {
        return children
    }
    return <Navigate to="/login" />;
};

export default PrivetRoutes;