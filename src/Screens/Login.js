import React from "react";
import ParticlesBackground from "../Components/ParticlesBackground";
import { Input, Button } from "react-rainbow-components";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <ParticlesBackground />
      <div className="form">
        <form>
          <div className="form-label">Welcome to AIT</div>
          <label className="mt-1">Username or Email</label>
          <Input
            id="input-component-1"
            placeholder="Enter your username or email"
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          />

          <label className="mt-3">Password</label>
          <Input
            id="input-component-1"
            type="password"
            placeholder="Enter your username or email"
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          />

          <Link to="/home">
            <Button
              label="Log in"
              variant="brand"
              className="rainbow-m-around_medium mt-3"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
