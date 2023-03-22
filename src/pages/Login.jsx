import "./css-components/Login.css";


export const Login = () => {
  return (
    // sección del formulario

    <div className="grandpa">
      <div className="form">
      <img className="img-logo" src="/logo.png" alt="logo" />
        <h2>L O G I N</h2>
        <div className="inputs">
          <input type="email" name="email" placeholder="E-mail"  />
          <input type="password" name="password"placeholder="Password" />
        </div>
        <div className="btn-dad">
          <button className="btn-signin">Sign in</button>
        </div>
      </div>
    </div>
  );
};
