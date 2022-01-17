import styles from './Styles/App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router/AppRouter';
import Navbar from './UI/Navbar';
import Footer from './UI/Footer';


const App = () => {

  return (
    <Router>
      <Navbar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
