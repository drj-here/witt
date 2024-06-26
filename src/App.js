import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import DownloadButton from "./components/DownloadButton";
import travelImg from './undraw_travel_mode_re_2lxo.svg'
import VideoButton from "./components/VideoButton";
export default function App() {
  return (
    <div className="bg-slate-500 h-screen flex items-center justify-center">
      <div className="h-5/6 w-5/6 bg-white rounded-lg shadow-md">
        <BrowserRouter>
          <Navbar />
          <div className="relative">
            <div className="bg-red-500 fixed rounded-lg m-4">
            <img src={travelImg} alt="img" style={{height:"100px"}}/>
            </div>
          <div className="bg-red-500 rounded-xl m-4 p-4 shadow-inner grid">
          <div className="place-self-center sm:place-self-end">
          <VideoButton/>
          </div>
          <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          </div>
          </div>
          </div>
          <DownloadButton/>
        </BrowserRouter>
      </div>
    </div>
  );
}
