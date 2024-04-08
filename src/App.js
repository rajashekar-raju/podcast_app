import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    }
  ])

  return (
    <>
        <RouterProvider router={appRouter}/>
    </>
  );
}

export default App;
