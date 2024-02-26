import { Alpha } from "../../layouts";
import { Watch } from "../../pages";

export const watchRoutes = [
    {
        path: '/watch',
        element: <Alpha />,
        children: [
            {
                path: '/watch',
                element: <Watch />
            }
        ]
    }
]