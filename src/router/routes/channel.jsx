import { Default } from "../../layouts";
import { Channel, Beranda, Video, Release, Comunity, Playlist } from "../../pages";

export const channelRoutes = [
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: "/@hosimachi",
                element: <Channel/>,
                children:[
                    {
                        path: '/@hosimachi',
                        element: <Beranda />
                    },
                    {
                        path: '/@hosimachi/videos',
                        element: <Video />
                    },
                    {
                        path: '/@hosimachi/shorts',
                        element: <Video />
                    },
                    {
                        path: '/@hosimachi/streams',
                        element: <Video />
                    },
                    {
                        path: '/@hosimachi/releases',
                        element: <Release />
                    },
                    {
                        path: '/@hosimachi/playlists',
                        element: <Playlist />
                    },
                    {
                        path: '/@hosimachi/comunity',
                        element: <Comunity />
                    },
                    {
                        path: '/@hosimachi/comunity',
                        element: <Comunity />
                    },
                ]
            }
        ]
    }
]