import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./component/Menu";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Single from "./pages/Single";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div class="full">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/single" element={<Single />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div class="clearfix"></div>
    </>
  );
}

export default App;
