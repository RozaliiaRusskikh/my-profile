import './index.scss';
import LogoPhoto from '../../../assets/images/portfolio-photo.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="photo" src={LogoPhoto} alt="Roza'sPhoto" />
    </div>
  );
};

export default Logo;
