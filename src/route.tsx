import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Detatil from "./Detatil";

export const router = createBrowserRouter([
  {
    path:"/",
    children:[
      {
        path:":id",
        element:<Detatil/>
      },
      {
        path:"",
        element:<Home/>,
      },
    ]
  },
])