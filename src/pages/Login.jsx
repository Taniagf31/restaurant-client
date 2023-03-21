import "./css-components/Login.css";
// import logo from '../assets/img/'

export const Login = () => {
  return (
    // sección del formulario

    <div className="grandpa">
      <div className="form">
        <div className="logo-sam">
        <img src="{logo}" alt="" />
        </div>
        <h2>L O G I N</h2>
        <div className="inputs">
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="btn-dad">
        <button className="btn-signin">Sign in</button></div>
      </div>
    </div>
  );
};
