import './urunler.css';
import Photo1 from './photo1.svg';
import Photo2 from './photo2.svg';
import Photo3 from './photo3.png';
import Header from '../../Container/Header/Header';

function Urunler() {
  return (
    <> 
    <Header />
    <div className="urunler-container">
        <div className="urunler-bas-kisim">
            <div className="urunler-top">
                <span className="urunler-title">We do amazing Things with amazing People.</span>
            </div>
            <div className="scrool-down">
                    <span className="urunler-scrool-down">Scrool Down</span>
            </div>
        </div>
        <div className="urunler-urun-div">
            <div className="photoDiv">
                <img className="urun-photo" src={Photo1} alt="photo" />
            </div>
            <div className="urun-detay">
                <span className="urunler-isim">Checkici</span>
                <hr className="cizgi"/>
            </div>
            <div className="urun-detay2">
                <span className="urun-baslik">
                    Hızlı Teklif
                    <span className="bold">, Doğru Çekici!</span>
                </span>
                <p className="urun-aciklama">
                    Bundan böyle şehirler arası ve şehir içi araç taşıma işlemleri eskisi gibi olmayacak! Chekici bünyesindeki binlerce çekici firması sayesinde tüm Türkiye'de 7/24 planlı ve acil çekici hizmeti artık hesaplı ve güvenli şekilde parmaklarınızın ucunda!
                </p>
            </div>
        </div>
        <div className="urunler-urun-div">
            <div className="photoDiv">
                <img className="urun-photo" src={Photo2} alt="photo" />
            </div>
            <div className="urun-detay">
                <span className="urunler-isim">Logexpo</span>
                <hr className="cizgi"/>
            </div>
            <div className="urun-detay2">
                <span className="urun-baslik">
                    Dış Ticaret Sektöründe Kartlar
                    <span className="bold"> Yeniden Dağıtılıyor!</span>
                </span>
                <p className="urun-aciklama">
                    Sektörün içinden gelen uzmanlar tarafından geliştirilen Logexpo sayesinde artık tek uygulama üzerinden bütün süreçlerinizi yönetebilirsiniz.
                </p>
            </div>
        </div>
        <div className="urunler-urun-div">
            <div className="photoDiv">
                <img className="urun-photo" src={Photo3} alt="photo" />
            </div>
            <div className="urun-detay">
                <span className="urunler-isim">Samamap</span>
                <hr className="cizgi"/>
            </div>
            <div className="urun-detay2">
                <span className="urun-baslik">
                    Samamap İle
                    <span className="bold"> Yollar Artık Sizin!</span>
                </span>
                <p className="urun-aciklama">
                    Samamap, sektöre hareketlilik getirecek yenilikçi ve kullanıcı dostu bir araç takip uygulamasıdır. Standart araç takip sistemlerinin veri kalabalığı içeren karmaşık arayüzlerinden kurtulmuş tasarımı sayesinde artık tüm araç takip süreçleriniz daha pratik!
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Urunler