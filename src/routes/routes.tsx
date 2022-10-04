import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { TaskRoutes } from "../features/task/routes"

const App = () => {
    return (
        <Suspense>
            <Outlet />
        </Suspense>
    )
}

export const routes = [
    {
        path: '',
        element: <App />,
        children: [
            { path: 'tasks/*', element: <TaskRoutes />}
        ]
    }
]