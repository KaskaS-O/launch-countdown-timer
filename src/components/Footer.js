import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <Facebook className="footer__icon" />
        <Pinterest className="footer__icon" />
        <Instagram className="footer__icon" />
      </div>
      <span className="footer__attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">CodingDuck</a>.
      </span>
    </footer>
  );
};

export default Footer;
