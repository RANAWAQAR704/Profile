import React from "react";
import resume from "../components/Document/Resume.pdf"

export default function About() {
  return (
    <div>
      <section id="about" className="section ">
        <div className="container px-lg-5">
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4">
              About Me
            </h2>
            <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
              Know Me More
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
            </p>
          </div>
          <div className="row gy-5">
            <div className="col-lg-7 col-xl-8 text-center text-lg-start">
              <h2 className="text-7 fw-600 mb-3 ">
                I'm <span className="text-primary">Rana Waqar Ajmal,</span> a Software
                Engineer
              </h2>
              <p className="" style={{textAlign:"justify"}}>
              I'm a Full Stack Developer with over 3+ year of experience, including professional work in the fintech industry. I specialize in building user-friendly, high-performance web applications using modern technologies like React and Angular on the frontend, and Java (Spring Boot) on the backend.
              I have hands-on experience working with SQL and NoSQL databases, RESTful APIs, and microservice architectures, as well as event-driven systems using tools like Kafka. I’m also familiar with cloud platforms like AWS, enabling me to deliver scalable and production-ready solutions.
              With a strong eye for detail, I focus on usability, performance optimization, and writing clean, maintainable code. I enjoy working in cross-functional teams, and I bring excellent communication skills and a passion for learning to every project. Staying current with emerging trends and technologies in app development is something I genuinely enjoy. </p>
              <p className="">
                Delivering work within time and budget which meets client’s
                requirements is my moto.
              </p>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="ps-lg-4">
                <ul className="list-style-2 ">
                  <li>
                    <span className="fw-600 me-2">Name:</span>Rana Waqar Ajmal
                  </li>
                  <li>
                    <span className="fw-600 me-2">Email:</span>
                    <a href="mailto:chat@simone.com">ranawaqar704@gmail.com</a>
                  </li>
                  {/* <li>
                    <span className="fw-600 me-2">Age:</span>23
                  </li> */}
                  <li className="border-0">
                    <span className="fw-600 me-2">From:</span>Karachi,Pakistan
                  </li>
                </ul>
                <a
                  href={resume}
                  download
                  className="btn btn-primary rounded-pill"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="brands-grid separator-border mt-5 ">
            <div className="row">
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className="text-12  mb-0 text-muted">
                    <span>3</span>+
                  </h4>
                  <p className="mb-0 ">Years Experiance</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className="text-12  mb-0 text-muted">
                    <span>5</span>+
                  </h4>
                  <p className="mb-0 ">Happy Clients</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className="text-12  mb-0 text-muted">
                    <span>5</span>+
                  </h4>
                  <p className="mb-0 ">Projects Done</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className="text-12  mb-0 text-muted">
                    <span>2</span>
                  </h4>
                  <p className="mb-0 ">Get Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
