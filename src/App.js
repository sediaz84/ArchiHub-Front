import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/home/news/NewsReel";
import LandingPage from "./components/landingPage/LandingPage"
import NewsDetail from "./components/home/news/NewsDetail";

// import News from "./components/home/news/News";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newsDetail/:id" element={<NewsDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
