import { Carousel } from 'react-responsive-carousel';
import './overview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBanSmoking, faRightFromBracket, faCheck,faUmbrellaBeach,faFish,faDoorOpen,faBacon,faSailboat, faSnowflake,faUserFriends, faBath, faCar, faPaw, faWifi ,faWaterLadder, faShower} from '@fortawesome/free-solid-svg-icons';


export const Overview = () => {
return (
  <div className="overview-container">
  <section className="intro-section">
    <h1>Bienvenidos a La Tranquila</h1>
    <p className="property-type">Casa quinta</p>
    <ul className="property-details">
        <Carousel />
        <li><FontAwesomeIcon icon={faUserFriends} /> 10 Huespedes</li>
        <li><FontAwesomeIcon icon={faDoorOpen} /> 3 Habitaciones</li>
        <li><FontAwesomeIcon icon={faBed} /> 10 Camas</li>
        <li><FontAwesomeIcon icon={faBath} /> 2 Baños</li>
    </ul>
    <p className="description">
      Casa quinta ubicada en Aldea Brasilera, con vistas panoramicas al Río Paraná<br />
    </p>
    <p className="features">
      Tennis court, jacuzzi, swimming pool, and water slide. Gym, home theatre, bar, spa, 
      sauna, premium snooker table, rooftop deck. Includes boat deck.
    </p>
    <button className="view-more-btn">VIEW MORE</button>
    <div className="home-highlights">
      <span><FontAwesomeIcon icon={faCar} /> Estacionamiento</span>
      <span><FontAwesomeIcon icon={faPaw} /> Pet Friendly</span>
      <span><FontAwesomeIcon icon={faWifi} /> Internet</span>
    </div>
  </section>

  <section className="pictures-section">
    <h2>Pictures</h2>
    <div className="pictures-gallery">
      <img src="./assets/patio.jpg" alt="Villa" />
      <img src="/assets/pool.jpg" alt="Outdoor pool" />
      <img src="/assets/courtyard.jpg" alt="Courtyard" />
    </div>
  </section>

  <section className="amenities-section">
    <h2>Amenities</h2>
    <div className="amenities-grid">
      <div><FontAwesomeIcon icon={faWaterLadder} /> Piscina</div>
      <div><FontAwesomeIcon icon={faBed} /> Sábanas</div>
      <div><FontAwesomeIcon icon={faBacon} /> Desayuno incluído</div>
      <div><FontAwesomeIcon icon={faShower} /> Juego de toallas </div>
      <div><FontAwesomeIcon icon={faSnowflake} /> Aire acondicionado</div>
      <div><FontAwesomeIcon icon={faSailboat} /> Bajada de lanchas</div>
      <div><FontAwesomeIcon icon={faUmbrellaBeach} /> Playa privada</div>
      <div><FontAwesomeIcon icon={ faFish} /> Muelle de pesca</div>
    </div>
  </section>

  <section className="house-rules-section">
    <h2>Reglas</h2>
    <div className="rules-grid">
      <div><FontAwesomeIcon icon={ faCheck} /> Check-in: 10:00 AM</div>
      <div><FontAwesomeIcon icon={ faRightFromBracket} /> Check-out: 11:00 AM</div>
      <div><FontAwesomeIcon icon={ faBanSmoking} /> Prohibido fumar </div>
    </div>
  </section>
  

  <section className="policy-section">
    <h2>Policy and notes</h2>
    <div className="policy-grid">
      <div>
        <h3>Payment Schedule</h3>
        <p>50% of the total amount is due at time of booking. Remaining amount due upon arrival.</p>
      </div>
      <div>
        <h3>Cancellation Policy</h3>
        <p>All paid prepayments are non-refundable.</p>
      </div>
    </div>
  </section>
</div>
);
}