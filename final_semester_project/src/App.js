import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import Login from "./components/pages/Login";

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
      <SessionProvider>
        {/* <BrowserRouter>
          <Navbar />
          <AllRoutes />
        </BrowserRouter> */}
        <Login />
      </SessionProvider>
    </div>
  );
}

export default App;
