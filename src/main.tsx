import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import { CoinPage } from './pages/CoinPage/index'
import StartPage from './pages/StartPage/index';


const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
    children:[
      {
        path: "coin/:coinId",
        element: <CoinPage/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)



