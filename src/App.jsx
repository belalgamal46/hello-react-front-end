import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Home Page</div>,
    },
    {
      path: '/greeting-messages',
      element: <div>Greetings</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
