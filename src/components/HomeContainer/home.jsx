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
        <h1>La Tranquila: Casa de la Costa </h1>
        <p>
        En La Tranquila, un refugio natural a orillas del Río Paraná, desconéctate del estrés diario y sumérgete en la belleza de Aldea Brasilera.Con espacio para hasta diez personas, la casa ofrece habitaciones amplias y confortables, perfectas para el descanso. Disfruta del aire acondicionado en los días cálidos y relájate en la piscina privada o la playa exclusiva.

Para los aventureros, una bajada de lanchas privada y un muelle para pesca te invitan a explorar las tranquilas aguas del río. La Tranquila está equipada con todo lo necesario para que te sientas como en casa, desde sábanas frescas hasta un juego completo de toallas. Aquí, la naturaleza se convierte en tu hogar.
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