import About from "./components/About";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
    </div>
  );
}

export default App;
