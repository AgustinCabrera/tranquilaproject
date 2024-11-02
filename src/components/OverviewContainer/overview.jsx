import { Carousel } from 'react-responsive-carousel';
import './overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBanSmoking, faRightFromBracket, faCheck, faFish, faDoorOpen, faBacon, faSailboat, faSnowflake, faUserFriends, faBath, faCar, faPaw, faWifi, faWaterLadder, faShower } from '@fortawesome/free-solid-svg-icons';

export const Overview = () => {
  return (
    <div className="overview-container">
      {/* Introduction Section */}
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
          Casa quinta ubicada en Aldea Brasilera, con vistas panoramicas al Río Paraná.
        </p>
        
        <p className="features">
          lorem ipsum dolor sit amet, consectetur adipis
        </p>
        
        <div className="home-highlights">
          <span><FontAwesomeIcon icon={faCar} /> Estacionamiento</span>
          <span><FontAwesomeIcon icon={faPaw} /> Pet Friendly</span>
          <span><FontAwesomeIcon icon={faWifi} /> Internet</span>
        </div>
      </section>

      <section className="pictures-section">
        <h2>Pictures</h2>
        <div className="pictures-gallery">
          <img src="/" alt="Villa" />
          <img src="/" alt="Outdoor pool" />
          <img src="/" alt="Courtyard" />
        </div>
      </section>

      <section className="amenities-section">
        <h2>Comodidades</h2>
        <div className="amenities-grid">
          <div><FontAwesomeIcon icon={faWaterLadder} /> Piscina</div>
          <div><FontAwesomeIcon icon={faBed} /> Sábanas</div>
          <div><FontAwesomeIcon icon={faBacon} /> Desayuno de cortesía</div>
          <div><FontAwesomeIcon icon={faShower} /> Juego de toallas</div>
          <div><FontAwesomeIcon icon={faSnowflake} /> Aire acondicionado</div>
          <div><FontAwesomeIcon icon={faSailboat} /> Bajada de lanchas</div>
          <div><FontAwesomeIcon icon={faFish} /> Muelle de pesca</div>
        </div>
      </section>

      <section className="house-rules-section">
        <h2>Reglas</h2>
        <div className="rules-grid">
          <div><FontAwesomeIcon icon={faCheck} /> Check-in: 10:00 AM</div>
          <div><FontAwesomeIcon icon={faRightFromBracket} /> Check-out: 11:00 AM</div>
          <div><FontAwesomeIcon icon={faBanSmoking} /> Prohibido fumar</div>
        </div>
      </section>

      
      <section className="policy-section">
        <h2>Política de administración</h2>
        <div className="policy-grid">
          <div>
            <p>El 50% del total al momento de la reserva, el resto en check-in. En caso de cancelacion, El dinero de reserva queda a favor para futura reserva</p>
          </div>
        </div>
      </section>
    </div>
  );
};
