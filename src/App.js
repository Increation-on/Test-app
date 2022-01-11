import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import AppRouter from './components/AppRouter';
import Navbar from './UI/Navbar';


const  App = ()=> {

  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  );
}

export default App;
