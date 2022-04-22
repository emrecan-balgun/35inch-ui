import './App.css';
import Header from './Container/Header/Header';
import Footer from './Container/Footer/Footer';
import Manifesto from './Components/Manifesto/Manifesto';
import Urunler from './Components/Urunler/Urunler';

function App() {
  return (
    <>
    <Header/>
    {/* <Manifesto /> */}
    <Urunler />
    <Footer/>
    </>
  );
}

export default App;
