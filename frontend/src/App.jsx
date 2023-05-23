import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import QuotePage from "./pages/QuotePage";
import AnimeList from "./pages/AnimeList";
import Carousel from "./pages/Carousel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/anime-list" element={<AnimeList />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="*" element={<>Error 404</>} />
      </Routes>
    </Router>
  );
}

export default App;
