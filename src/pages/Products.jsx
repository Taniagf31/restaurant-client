import "./css-components/Products.css"

export const Products = () => {
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
    </div></div>
  );
};




