import { BrowserRouter, Routes, Route} from "react-router-dom";
// import "./App.css";
import Home from "./pages/home.jsx";
import Location from "./pages/location.jsx";
// import Projects from "./pages/projects.jsx";
// import Contact from "./pages/contact.jsx";
// import Interests from "./pages/interests.jsx";
// import Testimonial from "./pages/testimonial.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Location />} />
 </Routes>
      {/* <Home /> */}
      {/* <Location /> */}
      {/* <Projects />
      <Testimonial />
      <Interests />
      <Contact />  */}
    </BrowserRouter>
  );
}
export default App;
