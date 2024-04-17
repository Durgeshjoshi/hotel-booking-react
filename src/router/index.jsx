import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Hotel from "../pages/hotel/Hotel";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>,
    },
    {
        path:"/list",
        element: <List></List>,
    },
    {
        path:"/hotel",
        element: <Hotel></Hotel>,
    }
]);

export default router;