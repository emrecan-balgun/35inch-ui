import './chekici.css';
import Chekici1 from './chekici1.svg'
import Chekici2 from './chekici2.svg'
import Header from '../../Container/Header2/Header2';

function Checkici() {
  return (
    <>
    <Header />
    <div className="chekiciDiv">
        <div className="parcaBir">
            <img className="parcaImg" src={Chekici1} alt="photo" />
        </div>
        <div className="bosluk">

        </div>
        <div className="parcaIki">
            <img className="parcaImg" src={Chekici2} alt="photo" />
        </div>
    </div>
    </>
  )
}

export default Checkici