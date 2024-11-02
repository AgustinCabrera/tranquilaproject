import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar';
import { Home } from './components/HomeContainer/home';
import { Gallery } from './components/GalleryContainer/gallery';
import { Overview } from './components/OverviewContainer/overview';
import { GoogleMapContainer } from './components/MapContainer/map';
import { Rates } from './components/RatesContainer/rates';
import { LocalGuide } from './components/LocalGuideContainer/localguide';
import { Contact } from './components/ContactContainer/contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category/overview' element={<Overview/>}/>
        <Route path='category/map' element={<GoogleMapContainer/>}/>
        <Route path='category/gallery' element={<Gallery/>}/>
        <Route path='category/rates' element={<Rates/>}/>
        <Route path='category/localguide'element={LocalGuide}/>
        <Route path='category/contact' element={Contact}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
