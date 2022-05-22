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
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
