import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import LogIn from "./components/LogIin";

function App() {
  return (
    <div className="App">
      {/* <LogIn /> */}
      <BrowserRouter>
        {" "}
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
