import { useState, useEffect } from "react";
import { getProducts } from "../products";
import "./css-components/Products.css";


export const Products = () => {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem('access'));
  const token = user.accessToken;
  console.log(token)
  // Obteniendo el accessToken
 
  const gProducts = async () => {
    const user = JSON.parse(localStorage.getItem("access"));
    const token = user.accessToken;
    console.log(token)
    const answerP = await getProducts(token);
    return answerP;
  };
  const answer = gProducts();
  setProducts(answer);
  console.log(products);
  useEffect(() => {
    getProducts(); 
  }, []);
  
  return (
    <div className="container-nav">
      <div className="container-logo">
        <img className="img-nav" src="./logo.png" alt="logo-nav" />
        <img className="user" src="./woman.png" alt="user" />
        <h3>Susana Admin</h3>
      </div>
      <div className="barra-nav">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Users</li>
        </ul>
      </div>
      <section>
        <button>FOOD</button>
      </section>
    </div>
  );
};
