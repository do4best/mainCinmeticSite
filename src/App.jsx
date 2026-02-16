
import {ThemeContextProvider} from "./cinemate/ThemeContextProvider.jsx";
import MainCinemate from "./cinemate/mainCinemate.jsx";

// export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App() {


  return (
    <>
        <ThemeContextProvider>
            <MainCinemate/>
        </ThemeContextProvider>

    </>
  )
}

