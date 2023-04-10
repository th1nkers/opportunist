import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Events from './components/Events/Events';
import Error from './pages/Error';
import Login from './components/Admin/Login/Login';
import Admin from './components/Admin/Admin'
import AdminList from './components/Admin/AdminList';
import Signup from './components/Admin/Signup/Signup';

const router = createBrowserRouter([
  {
    path: 'opportunist/',
    element: <Root/>,
    errorElement: <Error/>,
    children:[
      {index: true, element: <Events/> },
      {path: 'login', element: <Login/>},
      {path: 'signup', element: <Signup/>},
      {path: 'admin', element: <Admin/>},
      {path:'admin/list', element: <AdminList/>}
    ]
  }
])


function App() {
  return <RouterProvider router={router}/>
}

export default App;
