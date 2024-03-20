import useIsAuthenticated from "@hooks/useIsAuthenticated";

const ProtectedRoute = ({children}) => {

    useIsAuthenticated();

    return (
        <>
            {children}
        </>
    )
};

export default ProtectedRoute;