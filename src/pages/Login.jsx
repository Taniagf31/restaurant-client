import { useState } from "react";
import { authentication } from "../auth";
import "./css-components/Login.css";
import { useNavigate } from "react-router-dom";


export function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const onChangeUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      //email: ("email"== e.target.name) ? e.target.value : login.email
    });
  };
  const onSubmit = async (e) => {
    // e.preventDefault();
    console.log("login", email, password)
    const answer = await authentication({ email, password });
    console.log("token", answer.token.accessToken);
    if (answer.ok == true) {
      localStorage.setItem("user", JSON.stringify(answer.token));
      navigate("/home");
    } else {
      alert(answer.message);
    }
  };
  return (
    // sección del formulario

    <div className="grandpa">
      <div className="form">
        <img className="img-logo" src="/logo.png" alt="logo" />
        <h2 className="title-log" >L O G I N</h2>
        <form className="inputs" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={onChangeUser}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChangeUser}
          />
        </form>
        <div className="btn-dad">
          <button className="btn-signin" onClick={onSubmit}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
