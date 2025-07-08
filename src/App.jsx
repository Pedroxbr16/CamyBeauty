import './App.css';
import { FaCalendarCheck, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <div className="card">
        <img
          src="/camila.jpg"
          alt="Camila Gualande"
          className="profile-pic"
        />
        <h1 className="title">Camila Gualande Beauty</h1>
        <p className="subtitle">Agende sua transformação <span className="emoji">👇🏽</span></p>

        <div className="buttons">
          <a
            href="https://exemplo.com/agendamento"
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCalendarCheck className="icon calendar" />
            Agende seu horário
          </a>
          <a
            href="https://wa.me/5599999999999"
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon whatsapp" />
            Marque seu horário
          </a>
          <a
            href="https://instagram.com/seuusuario"
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon instagram" />
            Nosso Instagram
          </a>
          <a
            href="https://maps.google.com/?q=Seu+Salão"
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt className="icon location" />
            Como chegar
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
