import { Route, Routes } from "react-router-dom";
import { Tasks } from "./Tasks";

export const TaskRoutes = () => (
    <Routes>
        <Route path="" element={<Tasks />} />
    </Routes>
)