import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cover from './pages/Cover';
import About from './pages/About';
import Service from './pages/Service';
import Attractions from './pages/Attractions';
import Houseboat from './pages/Houseboat';
import PeriyarPark from './pages/PeriyarPark';
import Kottavanchi from './pages/Kottavanchi';
import Igloocamping from './pages/Igloocamping';
import ElephantSafari from './pages/ElephantSafari';
import Kalaripayattu from './pages/Kalaripayattu';
import Kathakali from './pages/Kathakali';
import Ayurveda from './pages/Ayurveda';
import Offroad from './pages/Offroad';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Cover/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/attractions' element={<Attractions/>}/>
        <Route path='/houseboat' element={<Houseboat/>}/>
        <Route path='/periyarpark' element={<PeriyarPark/>}/>
        <Route path='/kottavanchi' element={<Kottavanchi/>}/>
        <Route path='/igloo' element={<Igloocamping/>}/>
        <Route path='/elephant' element={<ElephantSafari/>}/>
        <Route path='/kalaripayattu' element={<Kalaripayattu/>}/>
        <Route path='/kathakali' element={<Kathakali/>}/>
        <Route path='/ayurveda' element={<Ayurveda/>}/>
        <Route path='/offroad' element={<Offroad/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
