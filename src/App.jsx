import './App.css'
import Navbar from "./layout/Navbar.jsx";
import AboutMe from "./layout/AboutMe.jsx";
import MyExpertise from "./layout/MyExpertise.jsx";
import MyProject from "./layout/MyProject.jsx";
import ContactMe from "./layout/ContactMe.jsx";
import Footer from "./layout/Footer.jsx";

function App() {

  return (
    <>
        <Navbar/>
        <AboutMe/>
        <MyExpertise/>
        <MyProject/>
        <ContactMe/>
        <Footer/>
    </>
  )
}

export default App
