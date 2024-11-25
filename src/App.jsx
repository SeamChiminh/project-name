import Navbar from "./components/Navbar";
import "../src/assets/styles/bootstrap4/bootstrap.min.css"
import "../src/assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css"
import "../src/assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css"
import "../src/assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css"
import "../src/assets/plugins/OwlCarousel2-2.2.1/animate.css"
import "../src/assets/styles/main_styles.css"
import "../src/assets/styles/responsive.css"
import "../src/assets/js/jquery-3.2.1.min.js"
import "../src/assets/plugins/Isotope/isotope.pkgd.min.js"
import "../src/assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js"
import "../src/assets/js/custom.js"
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import Slice from "./components/Slice.jsx";
import NewProduct from "./components/NewProduct.jsx";

function App() {
  return <>
    <div class="super_container">
        <Navbar/>
        <Banner/>
        <Slice/>
        <NewProduct/>
        <Footer/>
    </div>
  </>;
}

export default App;
