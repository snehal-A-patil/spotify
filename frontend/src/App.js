import Bottombar from "./components/Bottombar";
import Sidebar from "./components/Sidebar";
import SongState from "./context/SongState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import  Search  from "./components/Search";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <SongState>
          <div className="flex h-[calc(100vh-theme(space.24))]">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/search" element={<Search />}></Route>
            </Routes>
          </div>
          <Bottombar />
        </SongState>
      </BrowserRouter>
    </>
  );
}