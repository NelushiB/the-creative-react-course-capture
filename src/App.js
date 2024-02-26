import { Routes, Route } from "react-router-dom";
// Import Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

function App() {

   return (
      <div className="App">
         <GlobalStyle />
         <Nav />
         <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/work/:id" element={<MovieDetail />} />
            <Route path="/contact" element={<ContactUs />} />
         </Routes>
      </div>
   );
}



export default App;
