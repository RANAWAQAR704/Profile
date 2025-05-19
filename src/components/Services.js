import React from "react";

export default function Services() {
  return (
    <div>
      <section id="services" className="section bg-light">
        <div className="container px-lg-5">
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light  opacity-4">
              Services
            </h2>
            <p className="text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
              What I Do?
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
            </p>
          </div>
          <div className="row">
  <div className="col-lg-11 mx-auto">
    <div className="row">
      <div className="col-md-6">
        <div className="featured-box style-3 mb-5">
          <div className="featured-box-icon text-primary shadow-sm rounded bg-white">
            <i className="fas fa-code"></i>
          </div>
          <h3 className="">Backend Development</h3>
          <p className="mb-0">
            I specialize in developing robust backend systems using Java Spring Boot, integrating secure RESTful APIs, managing database transactions, and ensuring scalable performance.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="featured-box style-3 mb-5">
          <div className="featured-box-icon text-primary shadow-sm rounded bg-white">
            <i className="fas fa-network-wired"></i>
          </div>
          <h3 className="">API Development & Integration</h3>
          <p className="mb-0">
            I build and integrate REST/SOAP APIs that enable seamless communication between microservices and third-party systems, following best practices for performance and security.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="featured-box style-3 mb-5">
          <div className="featured-box-icon text-primary shadow-sm rounded bg-white">
            <i className="fas fa-database"></i>
          </div>
          <h3 className="">Database Design & Optimization</h3>
          <p className="mb-0">
            Experienced in MySQL and DynamoDB, I design efficient database schemas, write optimized queries, and manage data migrations and stored procedures for high-performance applications.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="featured-box style-3 mb-5">
          <div className="featured-box-icon text-primary shadow-sm rounded bg-white">
            <i className="fas fa-microchip"></i>
          </div>
          <h3 className="">Microservices & Messaging</h3>
          <p className="mb-0">
            I design microservice architectures and implement event-driven solutions using Apache Kafka, enabling efficient data streaming and system decoupling.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="featured-box style-3 mb-5">
          <div className="featured-box-icon text-primary shadow-sm rounded bg-white">
            <i className="fas fa-code-branch"></i>
          </div>
          <h3 className="">Frontend Development</h3>
          <p className="mb-0">
            Proficient in HTML, CSS, JavaScript, React, and Angular to build responsive user interfaces that offer smooth and interactive user experiences across platforms.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="featured-box style-3 mb-5">
          <div className="featured-box-icon text-primary shadow-sm rounded bg-white">
            <i className="fas fa-tools"></i>
          </div>
          <h3 className="">System Maintenance & Optimization</h3>
          <p className="mb-0">
            I ensure applications remain fast, secure, and bug-free by offering code refactoring, SonarQube-based quality checks, logging, and real-time monitoring.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  );
}
