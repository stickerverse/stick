import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AccountOrders } from "./screens/AccountOrders";
import { AccountUpdateinfo } from "./screens/AccountUpdateinfo";
import { Cart } from "./screens/Cart";
import { Checkout } from "./screens/Checkout";
import { Holographic } from "./screens/Holographic";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Matte } from "./screens/Matte";
import { Shippingfaqs } from "./screens/Shippingfaqs";
import { Stickers } from "./screens/Stickers";
import { Stickersheets } from "./screens/Stickersheets";
import { Textdecals } from "./screens/Textdecals";
import { ThestickerverseCom } from "./screens/ThestickerverseCom";
import { Vinylstickers } from "./screens/Vinylstickers";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Stickersheets />,
  },
  {
    path: "/stickersheets",
    element: <Stickersheets />,
  },
  {
    path: "/textdecals",
    element: <Textdecals />,
  },
  {
    path: "/stickers",
    element: <Stickers />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/shippingfaqs",
    element: <Shippingfaqs />,
  },
  {
    path: "/matte",
    element: <Matte />,
  },
  {
    path: "/accountu47orders",
    element: <AccountOrders />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/holographic",
    element: <Holographic />,
  },
  {
    path: "/accountu47updateinfo",
    element: <AccountUpdateinfo />,
  },
  {
    path: "/thestickerverseu46comu47stickers",
    element: <ThestickerverseCom />,
  },
  {
    path: "/vinylstickers",
    element: <Vinylstickers />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
