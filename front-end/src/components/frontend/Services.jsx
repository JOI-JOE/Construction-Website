import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Hero } from "../common/Hero";
import ServiceImg from "../../assets/images/construction1.jpg";
import { aipUrl, fileUrl } from "../common/http";

const Services = () => {
  const [services, SetServices] = useState([]);
  const fetchAllServices = async () => {
    const res = await fetch(aipUrl + "get-services", {
      method: "GET",
    });
    const result = await res.json();
    console.log(result);
    SetServices(result.data);
  };

  useEffect(() => {
    fetchAllServices();
  }, []);
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="About Us"
          text="We excel at transforming visions into reality <br> through oustanding craftsmanship and precise."
        />
        <section className="section-3 bg-light py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>our services</span>
              <h2>Our construction services</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residental, commercial, and industrial projectr.
              </p>
            </div>
            <div className="row pt-4">
              {services &&
                services.map((service) => {
                  return (
                    <div className="col-md-4 col-lg-4">
                      <div className="item">
                        <div className="service-image">
                          <img
                            src={
                              `${fileUrl}uploads/services/small/` +
                              service.image
                            }
                            alt=""
                            className="w-100"
                          />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>{service.title}</h3>
                          </div>
                          <div className="service-content">
                            <p>{service.short_desc}</p>
                          </div>
                          <a href="#" className="btn btn-primary small">
                            read more
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
