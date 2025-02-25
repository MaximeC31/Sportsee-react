import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from './pages/Home.jsx';

const Redirect = () => {
	const userId = '12';
	return (
		<Navigate
			to={`/user/${userId}`}
			replace
		/>
	);
};

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Redirect />,
				},
				{
					path: '/user',
					element: <Redirect />,
				},
				{
					path: '/user/:id',
					element: <Home />,
				},
				{
					path: '*',
					element: <Redirect />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
