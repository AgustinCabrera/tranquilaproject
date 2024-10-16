import Banner from '../banner/banner';
import BookingForm from '../bookingForm/bookingForm';
import { FooterComponent } from '../footerContainer/footer';
import './home.css'

export const Home = () => {
  return(
    <div className='home'>
      <header>
        <Banner />
        <BookingForm />
      </header>
      <div className="villa-info-section">
      <div className="villa-info-text">
        <h1>Casa Quinta en Aldea Brasilera </h1>
        <h3>Contamos con vista panorámica al río Paraná</h3>
        <p>
        Sed ut perspiciatis unde omnis iste natus error
          <br />
          Sed ut perspiciatis unde omnis iste natus error
          <br />
          Sed ut perspiciatis unde omnis iste natus error
        </p>
      </div>
      <div className="villa-info-image">
        <img src="/home.jpg" alt="Luxurious villa" />
      </div>
    </div>
      <FooterComponent/>
    </div>
    
  );
}