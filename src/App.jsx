import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage"; // Make sure this file exists
import ImpactPage from "./pages/ImpactPage";
import NotFound from "./pages/NotFound";



import BlogGrid from "./pages/BlogPage";
import BlogContent from "./pages/BlogContent";
import { ContactPage } from "./pages/ContactPage";
import CSitePage from "./pages/CsitePage";
import UbPage from "./pages/UbPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/blogs" element={<BlogGrid/>} />
        <Route path="/blog/:id" element={<BlogContent/>} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/csite" element={<CSitePage/>}/>
        <Route path="/unbroker" element={<UbPage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
