import { createBrowserRouter } from "react-router-dom";
import Default from "./views/layouts/Default";
import Home from "./views/Home";
import Experiment from "./views/experiment";
import Watch from "./views/Watch";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default/>,
        children:[
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
    {
        path: '/watch',
        element: <Watch/>
    },
    {
        path:"/experiment",
        element:<Experiment/>
    },
    {
        path: "*",
        element: <div className="flex text-4xl justify-center font-extrabold">you got fall back</div>
    }
])

export default router;