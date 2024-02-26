import { ThemeProvider } from "styled-components";
import GlobalStyles from "./general/components/GlobalStyles";
import theme from "./general/utils/theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import HowTo from "./pages/howto/HowTo";
import Category from "./pages/category/Category";
import Game from "./pages/game/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/how-to",
    element: <HowTo />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
