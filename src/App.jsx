import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage"; // Make sure this file exists
import ImpactPage from "./pages/ImpactPage";



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
        
      </Routes>
    </Router>
  );
}

export default App;
