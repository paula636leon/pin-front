//import logo2 from './sections/Navbar/images/logo2.png';
import './App.css';
import './index.scss';
import Services from './sections/Services';
import Navbar from './sections/Navbar';
import AboutUs from './sections/AboutUs';
import Products from './sections/Products';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutUs/>
      <Products/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
