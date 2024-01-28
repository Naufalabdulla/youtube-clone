import { createBrowserRouter } from "react-router-dom";
import { Home, Watch, Subscription, Collection, Channel,
         Shorts, Studio, Saved, Histori, Mix, Liked, Uploaded, WatchLater, Music, Trends } from './pages'
import { Default, Alpha, Specials, Beta } from "./layouts";
import Kako from "./pages/kako";
import { Beranda, Playlist, Release, Video, Stream, ChannelShorts, Comunity } from "./pages/subChannel";

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
                path: "/watchlater",
                element: <WatchLater/>
            },
            {
                path: "/hosimachi",
                element: <Channel/>,
                children:[
                    {
                        path: '/hosimachi',
                        element: <Beranda />
                    },
                    {
                        path: '/hosimachi/videos',
                        element: <Video />
                    },
                    {
                        path: '/hosimachi/shorts',
                        element: <Video />
                    },
                    {
                        path: '/hosimachi/streams',
                        element: <Video />
                    },
                    {
                        path: '/hosimachi/releases',
                        element: <Release />
                    },
                    {
                        path: '/hosimachi/playlists',
                        element: <Playlist />
                    },
                    {
                        path: '/hosimachi/comunity',
                        element: <Comunity />
                    },
                    {
                        path: '/hosimachi/comunity',
                        element: <Comunity />
                    },
                ]
            },
            {
                path: '/channel',
                element: <Specials />,
                children: [
                    {
                        path: '/channel/music',
                        element: <Music />
                    },
                ]
            },
            {
                path: '/feed',
                element: <Beta />,
                children: [
                    {
                        path: '/feed/trends',
                        element: <Trends />
                    },
                ]
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