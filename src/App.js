import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import LoginFormTail from "./components/LoginFormTail";
import Navber from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
    {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
    <Navber />
    <Home />
   
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <SocialLinks />
 
    {/* <LoginFormTail /> */}
  
    </div>
  );
}

export default App;
 