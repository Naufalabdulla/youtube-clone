import { createBrowserRouter } from "react-router-dom";
import Default from "./views/layouts/Default";
import Home from "./views/Home";

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
        path: "*",
        element: <div className="flex text-4xl justify-center font-extrabold">you got fall back</div>
    }
])

export default router;