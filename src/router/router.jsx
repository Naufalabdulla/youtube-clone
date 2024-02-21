import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./routes/public";
import { channelRoutes } from "./routes/channel";
import { fallbackRoutes } from './routes/fallback'
 
export function AppRoutes(){
    // const doParse = (routes) => {
    //     return routes.map((route) => ({
    //         path: route.path,
    //         element: route.element
    //     }))
    // }

    // const publicRoute = doParse(publicRoutes)
    // const channelRoute = doParse(channelRoutes)
    // const fallbackRoute = doParse(fallbackRoutes)

    const gather = [
        ...publicRoutes,
        ...channelRoutes,
        ...fallbackRoutes,
    ]

    const routers = createBrowserRouter(gather)

    return routers
}