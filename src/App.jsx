import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage"; // Make sure this file exists
import ImpactPage from "./pages/ImpactPage";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/Project/About";
import Gallery from "./pages/Project/Gallery";
import Location from "./pages/Project/Location";
import Price from "./pages/Project/Price";
import BlogGrid from "./pages/BlogPage";
import BlogContent from "./pages/BlogContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/blogs" element={<BlogGrid/>} />
        <Route path="/blog/:id" element={<BlogContent/>} />
        <Route path="/project" element={<ProjectPage />}>
          <Route path="about" element={<About />} />
          {/* <Route path="amenities" element={<Amenities />} /> */}
          <Route path="location" element={<Location />} />
          <Route path="prices" element={<Price />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
