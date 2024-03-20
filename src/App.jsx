import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "@contexts/auth-context/AuthContext";
import routes from "./routes/routes";

const App = () => {

	const router = createBrowserRouter(routes);

	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
};

export default App;