import './header2.css';
import Logo from '../logo2.svg';

function Header2() {
  return (
    <div className="header2">
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

export default Header2