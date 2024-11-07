import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";
const About = () => {
  return (
    <div>
      <section className="section-2 py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={AboutImg} className="w-100" alt="" />
            </div>

            <div className="col-md-6">
              <span>about us</span>
              <h2>Crafting structures the last a lifetime</h2>
              <p>
                Building enduring structures requires a comprehensive approach
                that combines advanced materials, resilent design, routine
                maintence, and sustainable practice. By drawing on historical
                insights and utilizinig modern technogy.
              </p>
              <p>
                Designing structures that stand the test of time involves a
                seamless blend of cutting-edge materials, durable design,
                ongoing upkeep, and eco-friendly practices. By combining lessons
                from the past with the power of modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
