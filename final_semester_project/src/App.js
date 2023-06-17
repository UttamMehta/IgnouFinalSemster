import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
