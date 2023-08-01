import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import Login from "./components/pages/Login";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
