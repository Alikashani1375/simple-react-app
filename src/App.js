import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/TopMenu';
import FirstSlideShow from './components/FirstSlideShow';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Middlebg from './components/Middlebg';
import Footer from './components/Footer';
import $ from "jquery"


function App() {

 


  return (
    <div className="w-100">
    
      <TopMenu />
      <FirstSlideShow />
      <Middlebg />
      <div style={{marginTop:'15vh'}}>
      <FirstSlideShow />
      </div>
      <Footer/>
     
    </div>
  );
}

export default App;
