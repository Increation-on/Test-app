import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import AppRouter from './components/AppRouter';
import Navbar from './UI/Navbar';
import Footer from './UI/Footer';

const  App = ()=> {

  return (
    <Router>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </Router>
  );
}

export default App;
