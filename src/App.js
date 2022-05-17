import Header from './components/Header';
import Footer from './components/Footer';
import Container from './pages/Container';
import './styles/css/style.css';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Experience from './pages/Experience';
import Main from './pages/Main';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
