
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import MasterLayout from '../MasterLayout/MasterLayout';
import NotFound from '../Notfound/NotFound';
import Portofolio from '../Portofolio/Portofolio';
import StartReact from '../StartReact/StartReact';
import './App.scss';

function App() {
  let routes=createBrowserRouter([{path:"/",element:<MasterLayout/>
  ,errorElement:<NotFound/>,
    children:[
    {index:true,element:<StartReact/>},
    {path:"about",element:<About/>},
    {path:"contact",element:<Contact/>},
    {path:"portofolio",element:<Portofolio/>},
  ]}
])
  return (
    <>
    <RouterProvider router={routes}/>
        </>
  );
}

export default App;
