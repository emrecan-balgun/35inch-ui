import './header3.css';
import Logo from '../logo.svg';

function Header3() {
  return (
    <div className="header3">
        <img src={Logo} alt="35inch-logo" />
        <ul className="menu">
            <li>Anasayfa</li>
            <li>Hakkımızda</li>
            <li>
              Servisler
              <i class="faItem fas fa-chevron-down fa-xs"></i>
              </li>
            <li>Ürünler</li>
            <li>Kariyer</li>
            <li>
                <div className="item">
                    <div className="circle"></div>
                    <div className="circleText">Hadi Konuşalım!</div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Header3