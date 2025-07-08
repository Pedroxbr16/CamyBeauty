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
            href="https://online.maapp.com.br/camilagualandebeauty"
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCalendarCheck className="icon calendar" />
            Agende seu horário
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5521966762411&text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20um%20hor%C3%A1rio"
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon whatsapp" />
            Marque seu horário
          </a>
          <a
            href="https://www.instagram.com/camilagualande"
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon instagram" />
            Nosso Instagram
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Estrada%20do%20Lameir%C3%A3o%2030,%20Santissimo%20-%20RJ,%2023092032"
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
