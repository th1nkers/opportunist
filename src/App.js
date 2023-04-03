import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Events from './components/Events/Events';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Error/>,
    children:[
      {index: true, element: <Events/> },
    ]
  }
])


function App() {
  return (
    <>
   <RouterProvider router={router}/>
    </>
  );
}

export default App;
