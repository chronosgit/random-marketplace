import ProtectedRoute from "@pages/protected-route/ProtectedRoute";
import Home from "@pages/home/Home";
import NotFound from "@pages/not-found/NotFound";
import Login from "@components/layout/login/Login";
import Regisration from "@components/layout/registration/Registration";

const routes = [
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/registration",
        element: <Regisration/>
    },   
    {
        path: "*",
        element: <NotFound />
    },  
];

export default routes;