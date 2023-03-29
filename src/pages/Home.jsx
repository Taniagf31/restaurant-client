import "./css-components/Home.css";
import {Navigation} from '../App.jsx'

export const Home = () => {
  return (
    <div className="container-nav">
      <div className="container-logo">
        <img className="img-nav" src="./logo.png" alt="logo-nav" />
        <img className="user" src="./woman.png" alt="user" />
        <h3>Susana Admin</h3>
      </div>
      <div className="barra-nav">
        <Navigation />   
      </div>

      <div className="container-home">
        <img  className="img-home" src="./restaurant.png" alt="img-home" />
        <h2>
          Thank you for using the “Sabor a mar” restaurant app Susana, if you
          want to create an order, browse through the options.
        </h2>
      </div>
    </div>
  );
};
