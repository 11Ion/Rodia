import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedUser(props) {
    const navigate = useNavigate();
    const { Component } = props;
    
    useEffect(() => {
        let login = localStorage.getItem("login");
        let userType = localStorage.getItem("typeUser");

        if (!login) {
            localStorage.setItem("loginStatus", "Vă rugăm să vă autentificați pentru a accesa corpusul!");
            navigate("/login", { replace: true });
        } else if (userType !== "user" && userType !== "admin" )  {
            navigate("/login"); 
        }
    }, [navigate]); 

    return <Component />;
}
