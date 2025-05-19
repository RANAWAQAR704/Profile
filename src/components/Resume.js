import React from "react";
import resume from "../components/Document/Resume.pdf"
export default function Resume() {
  return (
    <div>
      <section id="portfolio" className="section ">
        <div className="container px-lg-5">
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4">
              Summary
            </h2>
            <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
              {" "}
              Portfolio
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
            </p>
          </div>
          <div className="row gx-5">
  <div className="col-md-6">
    <h2 className="text-6 fw-600 mb-4">My Education</h2>
    
    <div className="bg-white rounded p-4 mb-4 border">
      <p className="badge bg-primary text-2 fw-400">2020 - 2024</p>
      <h3 className="text-5">Bachelor of Science in Software Engineering</h3>
      <p className="text-danger">Iqra University</p>
      <p className="mb-0">
        I graduated with a degree in Software Engineering from Iqra University. My academic journey fueled my passion for building scalable software solutions and laid a strong foundation in Java development and full-stack engineering.
      </p>
    </div>

    <div className="bg-white rounded p-4 mb-4 border">
      <p className="badge bg-primary text-2 fw-400">2017 - 2019</p>
      <h3 className="text-5">Intermediate (Pre-Engineering)</h3>
      <p className="text-danger">Govt. Comprehensive Degree College</p>
      <p className="mb-0">
        I completed my intermediate education in Pre-Engineering, which sparked my interest in problem-solving and led me toward pursuing a career in software engineering.
      </p>
    </div>

    <div className="bg-white rounded p-4 mb-4 border">
      <p className="badge bg-primary text-2 fw-400">2017 - 2019</p>
      <h3 className="text-5">Matric (Computer Science)</h3>
      <p className="text-danger">White House Grammar School</p>
      <p className="mb-0">
        I completed my matric education in computer science, which sparked my interest in problem-solving and led me toward pursuing a career in software engineering.
      </p>
    </div>
  </div>

  <div className="col-md-6">
    <h2 className="text-6 fw-600 mb-4">My Experience</h2>

    <div className="bg-white rounded p-4 mb-4 border">
      <p className="badge bg-primary text-2 fw-400">Oct 2023 – Present</p>
      <h3 className="text-5">Junior Software Engineer (Java Full Stack)</h3>
      <p className="text-danger">PublishEx Solutions Pvt Ltd</p>
      <p className="mb-0">
        Currently working as a Full Stack Java Developer where I develop and maintain microservice-based applications using Spring Boot, Hibernate, MySQL, Kafka, and Redis. I’m also responsible for integrating REST/SOAP APIs, optimizing performance, and ensuring secure, scalable solutions.
      </p>
    </div>

    <div className="bg-white rounded p-4 mb-4 border">
      <p className="badge bg-primary text-2 fw-400">May 2023 – Sep 2023</p>
      <h3 className="text-5">Front-End Developer Intern</h3>
      <p className="text-danger">Techclone Pvt Ltd</p>
      <p className="mb-0">
        Completed a front-end development internship where I worked on building responsive user interfaces using HTML, CSS, JavaScript, React, and Angular. This experience helped me strengthen my UI/UX design skills and work in agile, collaborative environments.
      </p>
    </div>

    <div className="bg-white rounded p-4 mb-4 border">
      <p className="badge bg-primary text-2 fw-400">Jan 2023 – Apr 2023</p>
      <h3 className="text-5">Database Developer Intern</h3>
      <p className="text-danger">Lucky Textile Mills</p>
      <p className="mb-0">
        As a Database Developer Intern, I was responsible for writing, optimizing, and managing SQL queries and stored procedures. I supported backend operations by working with relational databases, improving data accuracy, and contributing to performance tuning and reporting tasks for internal systems.
      </p>
    </div>



  </div>
</div>

          {/* <h2 className="text-6 fw-600 mt-4 mb-4 ">My Skills</h2>
          <div className="row gx-5">
            <div className="col-md-6">
              <p className=" fw-500 text-start mb-2 text-dark">
                Api Design and Development <span className="float-end">65%</span>
              </p>
              <div className="progress progress-sm mb-4 ">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: "65%"}}
                ></div>
              </div>
            </div>
            <div className="col-md-6">
              <p className=" fw-500 text-start mb-2 text-dark">
                HTML/CSS <span className="float-end">80%</span>
              </p>
              <div className="progress progress-sm mb-4 ">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: "85%"}}
                ></div>
              </div>
            </div>
            <div className="col-md-6">
              <p className=" fw-500 text-start mb-2 text-dark">
                JavaScript <span className="float-end">70%</span>
              </p>
              <div className="progress progress-sm mb-4 ">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: "75%"}}
                ></div>
              </div>
            </div>
            <div className="col-md-6">
              <p className=" fw-500 text-start mb-2 text-dark">
                React JS <span className="float-end">50%</span>
              </p>
              <div className="progress progress-sm mb-4 ">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: "70%"}}
                ></div>
              </div>
            </div>
            <div className="col-md-6">
              <p className=" fw-500 text-start mb-2 text-dark">
                Java  <span className="float-end">70%</span>
              </p>
              <div className="progress progress-sm mb-4 ">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: "60%"}}
                ></div>
              </div>
            </div>
            <div className="col-md-6">
              <p className=" fw-500 text-start mb-2 text-dark">
                Spring Boot framework <span className="float-end">70%</span>
              </p>
              <div className="progress progress-sm mb-4 ">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="99"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: "70%"}}
                ></div>
              </div>
            </div>
            <div className="col-md-6">
              <p className=" fw-500 text-start mb-2 text-dark">
                Git <span className="float-end">75%</span>
              </p>
              <div className="progress progress-sm mb-4 ">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="99"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: "70%"}}
                ></div>
              </div>
            </div>
            <div className="col-md-6">
              <p className=" fw-500 text-start mb-2 text-dark">
                GitHub <span className="float-end">75%</span>
              </p>
              <div className="progress progress-sm mb-4 ">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="99"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: "70%"}}
                ></div>
              </div>
            </div> */}
          {/* </div> */}
          <div className="text-center mt-5">
            <a
              className="btn btn-outline-secondary rounded-pill shadow-none"
              href={resume}
              download
            >
              Download CV
              <span className="ms-1">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
