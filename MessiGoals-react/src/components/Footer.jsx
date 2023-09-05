import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>MessiGoals</h3>
          <p>Listado de todos los goles de Lionel Messi en su carrera</p>
        </div>
        <div className="footer-social">
        <p>Juan Bogliacino</p>
          <p>Mi perfil en las siguientes redes</p>
          <ul>
            <li>
              <a
                href="https://github.com/JuanBogliacino"
                target="_blank"
              >
                <div className="footer-icono-container github">
                  <p>GitHub</p>
                  <FaGithub />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/juan-bogliacino-369b3026a/"
                target="_blank"
              >
                <div className="footer-icono-container linkedin">
                  <p>Linkedin</p>
                  <FaLinkedin />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tuusuario"
                target="_blank"
              >
                <div className="footer-icono-container instagram">
                  <p>Instagram</p>
                  <AiFillInstagram />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
