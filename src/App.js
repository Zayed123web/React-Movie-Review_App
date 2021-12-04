import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Menu from "./component/Menu";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Single from "./pages/Single";

function App() {
  const [popularMovies, setPopularMovies] = useState(null);

  const API_KEY = "ecb6d664e6f62f5669b12ec6bdcfaac0";
  const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setPopularMovies(res.data.results);
    });
  }, [API_URL]);

  return (
    <>
      <div class="full">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home movies={popularMovies} />} />
            <Route
              path="/reviews"
              element={<Reviews movies={popularMovies} />}
            />
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
