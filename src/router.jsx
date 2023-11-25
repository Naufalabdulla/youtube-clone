import { createBrowserRouter } from "react-router-dom";
import { Home, Alpha, Default, Watch, Subscription, Collection, Channel,
         Shorts, Studio, Saved, Histori, Mix, Liked, Uploaded } from './pages'
import Kako from "./pages/kako";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default/>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "shorts",
                element: <Shorts/>
            },
            {
                path: "/subscription",
                element: <Subscription/>
            },
            {
                path: "/yourchannel",
                element: <Studio/>
            },
            {
                path: "/histori",
                element: <Histori/>
            },
            {
                path: "/yourvideo",
                element: <Uploaded/>
            },
            {
                path: "/collection",
                element: <Collection/>
            },
            {
                path: "/liked",
                element: <Liked/>
            },
            {
                path: "/saved",
                element: <Saved/>
            },
            {
                path: "/channel",
                element: <Channel/>
            },
        ]
    },
    {
        path: '/',
        element: <Alpha />,
        children: [
            {
                path: 'watch',
                element: <Watch />
            }
        ]
    },
    {
        path: '/kako',
        element: <Kako/>
    },
    {
        path: "*",
        element: <div className="flex text-4xl justify-center font-extrabold">you got fall back</div>
    }
])

export default router;