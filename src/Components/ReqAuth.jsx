import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ children }) => {
    const auth = useSelector((store) => store.authReducer.isAuth);
    const location = useLocation()

    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default ReqAuth;
