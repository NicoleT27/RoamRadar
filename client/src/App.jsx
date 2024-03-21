import { BrowserRouter, Routes, Route} from "react-router-dom";
// import "./App.css";
import Home from "./pages/home.jsx";
import Location from "./pages/location.jsx";
import Landing from "./pages/landing.jsx";
import Testimonials from "./pages/testimonials.jsx"
import Features from "./pages/features.jsx";
import Plan from "./pages/plan.jsx";
import Mobile from "./pages/mobile.jsx";
import Discover from "./pages/discover.jsx";
// import Projects from "./pages/projects.jsx";
// import Contact from "./pages/contact.jsx";
// import Interests from "./pages/interests.jsx";
// import Testimonial from "./pages/testimonial.jsx";



function App() {
  return (
    <BrowserRouter>
      <Home />
      <Landing />
      <Testimonials />
      <Features />
      <Plan />
      <Mobile />
      <Discover />
      <Routes>
        <Route path="/location" element={<Location />}  />
      </Routes>
      {/* <Landing />
      <Location />
      <Projects />
      <Testimonial />
      <Interests />
      <Contact />  */}
    </BrowserRouter>
  );
}
export default App;
