import React, { useEffect, useState } from "react";
import ServiceImg from "../../assets/images/construction1.jpg";
import { aipUrl, fileUrl } from "../common/http";

const LatestServices = () => {
  const [services, SetServices] = useState([]);
  const fetchLatestServices = async () => {
    const res = await fetch(aipUrl + "get-latest-services?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    console.log(result);
    SetServices(result.data);
  };

  useEffect(() => {
    fetchLatestServices();
  }, []);
  return (
    <>
      <section className="section-3 bg-light">
        <div className="container-fluid py-5">
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
                  <div className="col-md-3 col-lg-3">
                    <div className="item">
                      <div className="service-image">
                        <img
                          src={
                            `${fileUrl}uploads/services/small/` + service.image
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
    </>
  );
};

export default LatestServices;
