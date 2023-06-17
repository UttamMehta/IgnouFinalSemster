import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div
    // className="App"
    // style={{
    //   backgroundColor: "rgb(26, 26, 26)",
    //   fontFamily: "sans-serif",
    //   height: "100vh",
    //   color: "white",
    // }}
    >
      <BrowserRouter>
        {/* <Navbar /> */}
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
