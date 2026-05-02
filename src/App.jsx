// import React from "react";
// import Home from "./components/Home/Home";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Fruits from "./components/Category/Fruits/Fruits";
// import Dairy from "./components/Category/Dairy/Dairy";
// import Foodgrains from "./components/Category/Foodgrains/Foodgrains";
// import SeeFood from "./components/Category/SeeFood/SeeFood";
// import Beverages from "./components/Category/Beverages/Beverages";
// import PackagedFood from "./components/Category/PackagedFood/PackagedFood";
// import AllProducts from "./components/Products/AllProducts/AllProducts";
// import AllCategory from "./components/Category/AllCategory/AllCategory";
// import Layout from "./components/Layout/Layout";

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/all-category",
//           element: <AllCategory />,
//         },
//         {
//           path: "/fruits-veggies",
//           element: <Fruits />,
//         },
//         {
//           path: "/dairy-bakery",
//           element: <Dairy />,
//         },
//         {
//           path: "/grains-oil-masala",
//           element: <Foodgrains />,
//         },
//         {
//           path: "/meet-seefood",
//           element: <SeeFood />,
//         },
//         {
//           path: "/beverages",
//           element: <Beverages />,
//         },
//         {
//           path: "/packaged-food",
//           element: <PackagedFood />,
//         },
//         {
//           path: "/all-products",
//           element: <AllProducts />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default App;

import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Category/Fruits/Fruits";
import Dairy from "./components/Category/Dairy/Dairy";
import Foodgrains from "./components/Category/Foodgrains/Foodgrains";
import SeeFood from "./components/Category/SeeFood/SeeFood";
import Beverages from "./components/Category/Beverages/Beverages";
import PackagedFood from "./components/Category/PackagedFood/PackagedFood";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import AllCategory from "./components/Category/AllCategory/AllCategory";
import Layout from "./components/Layout/Layout";
import ShopNow from "./components/ShopNow/ShopNow"; // ⬅️ NEW
import OrderSuccess from "./components/OrderSuccess/OrderSuccess"; // ⬅️ NEW

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/all-category",
          element: <AllCategory />,
        },
        {
          path: "/fruits-veggies",
          element: <Fruits />,
        },
        {
          path: "/dairy-bakery",
          element: <Dairy />,
        },
        {
          path: "/grains-oil-masala",
          element: <Foodgrains />,
        },
        {
          path: "/meet-seefood",
          element: <SeeFood />,
        },
        {
          path: "/beverages",
          element: <Beverages />,
        },
        {
          path: "/packaged-food",
          element: <PackagedFood />,
        },
        {
          path: "/all-products",
          element: <AllProducts />,
        },
        {
          path: "/shop-now", // ⬅️ NEW ROUTE
          element: <ShopNow />,
        },
        {
          path: "/order-success",
          element: <OrderSuccess />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
