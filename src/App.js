// import { Search } from "./components/Search";
// import { SearchTag } from "./components/SearchTag";
import { Nav } from "./components/Nav";
import { Home } from "./components/pages/Home";
import { CorpusCuvinte } from "./components/pages/CorpusCuvinte";
import { CorpusMorlfologic } from "./components/pages/CorpusMorlfologic";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col bg-gradient-to-t from-[#1c2225] to-[#101416]">
    <Router>
      <Nav />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corpus-cuvinte" element={<CorpusCuvinte />} />
          <Route path="/corpus-morfologie" element={<CorpusMorlfologic />} />

          {/* <Route path="/*" nelement={<Page404 />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  </div>
  );
}

export default App;
