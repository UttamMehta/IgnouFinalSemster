import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "./components/footer/Footer";
import { store } from './Redux/store/Redux_store';
import { Provider } from 'react-redux';
import { mystore } from "./Redux/store/Redux_store";


function App() {
  return (
    <div>
      <Provider store={store}>
     
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
        <AllRoutes />
        </main>
        <Footer />
      </BrowserRouter>
      
      </Provider>
    </div>
  );
}

export default App;
