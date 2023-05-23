import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import QuotePage from "./pages/QuotePage";
import AnimeList from "./pages/AnimeList";
import Carousel from "./pages/Carousel";
import GithubSearch from "./pages/GithubSearch";
import Error404 from "./pages/Error404";
import GPS from "./pages/GPS";
import Chat from "./pages/Chat";
import MusicPlayer from "./pages/MusicPlayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-center items-center h-screen font-bold font-inter text-[5rem]">
              Welcome
            </div>
          }
        />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/anime-list" element={<AnimeList />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/github-search" element={<GithubSearch />} />
        <Route path="/gps" element={<GPS />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/music-player" element={<MusicPlayer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
