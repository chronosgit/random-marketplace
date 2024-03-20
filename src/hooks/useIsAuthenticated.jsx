import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "@contexts/auth-context/AuthContext";

const useIsAuthenticated = () => {
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);

    useEffect(() => {
        if(!user || !user.isAuthenticated) {
            navigate("/login");
        }
    }, []);
};

export default useIsAuthenticated;