import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="bg-[#696fe9]">
        <RouterProvider router={routes}></RouterProvider>        
        <Toaster/>
    </div>
  );
}

export default App;
