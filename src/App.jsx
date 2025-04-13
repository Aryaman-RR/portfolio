import About from "./sections/About";
// import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
function App() {
  return (
    <div className="root-div" style={{ backgroundColor: "#010103" }}>
      {console.log("import.meta.env.BASE_URL", import.meta.env.BASE_URL)}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
