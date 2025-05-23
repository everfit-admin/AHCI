import { BrowserRouter } from "react-router-dom";
import { About, Contact, Navbar } from "./components";

import globalBg from "./assets/bg-white-authentic.png";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 w-full bg-center bg-blackColor">
        <div className="relative z-20 bg-transparent bg-center">
          <Navbar />
        </div>

        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
