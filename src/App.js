// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Import Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
   const location = useLocation();

   return (
      <div className="App">
         <GlobalStyle />
         <Nav />
         <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
               <Route path="/" element={<AboutUs />} />
               <Route path="/work" element={<OurWork />} />
               <Route path="/work/:id" element={<MovieDetail />} />
               <Route path="/contact" element={<ContactUs />} />
            </Routes>
         </AnimatePresence>
      </div>
   );
}



export default App;
