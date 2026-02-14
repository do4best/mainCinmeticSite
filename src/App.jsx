import Home from "./components/router-example/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Contact from "./components/router-example/Contact.jsx";
import ProductList from "./components/router-example/ProductList.jsx";
import ProductDetails from "./components/router-example/ProductDetails.jsx";
import Header from "./components/router-example/Header.jsx";
import Footer from "./components/router-example/Footer.jsx";
import SocialLinks from "./components/footer/socialLinks.jsx";
import HeadBody from "./components/body/headBody.jsx";
import MainHome from "./components/body/mainHome.jsx";
import MainNaveBar from "./components/MainNaveBar/MainNaveBar.jsx";
import {createContext} from "react";
import {ThemeContextProvider} from "./cinemate/ThemeContextProvider.jsx";
import MainCinemate from "./cinemate/mainCinemate.jsx";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App() {


  return (
    <>
        <ThemeContextProvider>
            <MainCinemate/>
        </ThemeContextProvider>

    </>
  )
}

