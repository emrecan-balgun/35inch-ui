import './footer.css';
import Logo from './logo.svg';

function Footer() {
  return (
    <div className="container">
    <div className="footer">
        <img src={Logo} alt="35inch-logo" />
        <ul className="footerMenu">
            <li>Anasayfa</li>
            <li>Hakkımızda</li>
            <li>Yetenekler</li>
            <li>Projeler</li>
            <li>Kariyer</li>
        </ul>
        <ul className="footerMenu">
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-instagram"></i></li>
        </ul>
    </div>
    <hr className="hr"/>
    <div className="copyright">
        <span>Copyright © 2019</span>
    </div>
    </div>
  )
}

export default Footer