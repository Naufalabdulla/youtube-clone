import { Default } from "../../layouts";
import { Home, Shorts, Subscription, Studio, Histori, Uploaded, Collection, Saved, Liked, WatchLater, Search } from "../../pages";

export const publicRoutes = [
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/shorts",
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
                path: "/watchlater",
                element: <WatchLater/>
            },
            {
                path: '/results',
                element: <Search />
            }
        ]
    }
]