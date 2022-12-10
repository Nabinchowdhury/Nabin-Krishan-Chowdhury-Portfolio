
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/home",
      element: <h1>hi2222</h1>
    },
  ])


  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
