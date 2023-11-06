import React from "react";
import "./Login.scss";
export const Login = () => {
  return (
    <div className="content-login">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-actions">
            <button type="submit">Ingresar</button>
            <button type="button">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
