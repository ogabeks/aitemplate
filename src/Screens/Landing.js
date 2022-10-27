import React from "react";
import ParticlesBackground from "../Components/ParticlesBackground";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div>
      <div className="my-navbar py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="menus">
            <a href="#main" className="logo">
              AITensors
            </a>
            <a href="#about" className="m-menu">
              About
            </a>
            <a href="#contact" className="m-menu">
              Contact
            </a>
          </div>
          <div className="log-menu">
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>

      <div className="container main p-5 d-flex justify-content-between align-items-center">
        <div className="main-info">
          <div className="mini-text">Welcome to </div>
          <div className="main-text">AITensors</div>
          <div className="sub-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            reprehenderit quam. Ipsum unde a cumque enim et alias quam at libero
            possimus tenetur maxime assumenda ipsam harum odio, molestias
            quaerat vero minus repudiandae. Aliquid excepturi ducimus laborum at
            eum itaque dolorum dignissimos provident? Obcaecati quod magni eum
            velit voluptates quisquam commodi, amet libero quaerat rerum
          </div>
          <button className="explore">Explore</button>
          <Link to="/login">
            <button className="sign-in">Sign in</button>
          </Link>
        </div>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <img
            className="mx-auto"
            src="https://i.pinimg.com/originals/d8/ef/e5/d8efe501d1e2e12114950aa3b57f446a.png"
            alt="ai"
          />
        </div>
      </div>

      <div className="container main p-5">
        <div className="row">
          <div className="col-sm-4 box">
            <i className="fa fa-info-circle"></i>
            <div className="col-label">Lorem Ipsum</div>
            <div className="col-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              eveniet totam iusto temporibus tenetur? Culpa vero ipsum harum
              velit beatae? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. At eveniet totam iusto temporibus tenetur? Culpa vero ipsum
              harum velit beatae?
            </div>
          </div>

          <div className="col-sm-4 box">
            <i className="fa fa-user"></i>
            <div className="col-label">Lorem Ipsum</div>
            <div className="col-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              eveniet totam iusto temporibus tenetur? Culpa vero ipsum harum
              velit beatae? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. At eveniet totam iusto temporibus tenetur? Culpa vero ipsum
              harum velit beatae?
            </div>
          </div>

          <div className="col-sm-4 box">
            <i className="fa fa-cog"></i>
            <div className="col-label">Lorem Ipsum</div>
            <div className="col-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              eveniet totam iusto temporibus tenetur? Culpa vero ipsum harum
              velit beatae? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. At eveniet totam iusto temporibus tenetur? Culpa vero ipsum
              harum velit beatae?
            </div>
          </div>
        </div>
      </div>

      <div className="container main p-5">
        <div className="main-label">Contact us</div>
        <div className="form-input">
          <label>Full name</label>
          <input type="text" required placeholder="John Doe" />
        </div>

        <div className="form-input">
          <label>Email</label>
          <input type="email" required placeholder="johndoe@mail.com" />
        </div>

        <div className="form-input">
          <label>Message</label>
          <textarea></textarea>
        </div>

        <button className="form-btn">Send</button>
      </div>
      <ParticlesBackground />
    </div>
  );
}

export default Landing;
