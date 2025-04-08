import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { scrollDuration } from "../commonConfig";
import img from "./img/My_photo.jpg"

export default function IntroSection () {
  return (
    <section
      id=""
      className="bg-primary d-flex fullscreen-with-header position-relative"
    >
      <div className="container my-auto py-5 py-lg-0">
        <div className="row py-4">
          <div className="col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0">
            <h1 className="text-12 fw-300 mb-0 text-uppercase">
              Hi, I'm Rana Waqar Ajmal
            </h1>
            <h2 className="text-15 fw-600 text-uppercase mb-0 ms-n1">
              <Typewriter
                 options={{
                  strings: ["Software Engineer 🎆", "Freelancer 👻", "Web App Developer✨"],
                  delay : 30,
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </h2>
            <Link
              className="btn btn-dark rounded-0 smooth-scroll mt-3"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              to="contact"
            >
              Contact Me
            </Link>
          </div>
          <div className="col-lg-4 text-center align-self-center mb-4 mb-lg-0 mt-lg-5 order-0 order-lg-1">
            <div className="bg-light rounded-pill d-inline-block p-2  ">
              <img
                className="img-fluid rounded-pill d-block"
                src={img}
                title="Rana"
                alt="Rana"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

