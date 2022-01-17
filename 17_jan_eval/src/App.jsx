import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { JobListing } from "./components/JobListing";
import { Navbar } from "./components/Navbar";
import { PostJob } from "./components/PostJob";
import { Jobs } from "./components/Jobs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="/post" element={<PostJob />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
