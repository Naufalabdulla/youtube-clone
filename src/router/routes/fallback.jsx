import Kako from "../../pages/kako"

export const fallbackRoutes = [
    {
        path: '*',
        element: <div className="flex text-4xl justify-center font-extrabold">you got fall back</div>
    },
    {
        path: '/kako',
        element: <Kako />
    }
]