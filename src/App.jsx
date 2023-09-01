import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

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

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
