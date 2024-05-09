import "./index.css";
import "./index.scss";
import ConversionCard from "./Components/ConversionCard";
import SavedConversionContainer from "./Components/SavedConversionContainer";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"



function App() {
    return(
<div className="app" >

    <Navbar/>
    <div className="body">
    <ConversionCard/>
    <SavedConversionContainer/>
    
    </div>
    <Footer/>
    </div>);
}

export default App;
