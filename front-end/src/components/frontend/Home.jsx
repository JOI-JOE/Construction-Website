// rafce
import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
// Img
import ServiceImg from "../../assets/images/construction1.jpg";
import ConstrutionImg from "../../assets/images/construction2.jpg";
import BlogImg from "../../assets/images/construction3.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import AvatarImg from "../../assets/images/author-2.jpg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Contructions</span>
                <h1>
                  Crafting dream with <br /> precision and excellence
                </h1>
                <p>
                  We excel at transforming visions into reality through
                  outstanding craftsmanship and persice <br />
                  attention to detail. With years of experience and a dedication
                  to quality.
                </p>
                <div className="mt-4">
                  <a className="btn btn-primary large">Contact Now</a>
                  <a className="btn btn-secondary ms-2 large">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About us Section */}
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
                  ongoing upkeep, and eco-friendly practices. By combining
                  lessons from the past with the power of modern technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
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
            <div className="row">
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speicalty Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        contruction industry that forcuses on project requiring
                        specialed skills, materials, and techniques.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speicalty Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        contruction industry that forcuses on project requiring
                        specialed skills, materials, and techniques.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speicalty Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        contruction industry that forcuses on project requiring
                        specialed skills, materials, and techniques.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speicalty Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        contruction industry that forcuses on project requiring
                        specialed skills, materials, and techniques.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Use */}
        <section className="section-4">
          <div className="container">
            <div className="section-header text-center">
              <span>Why choose us</span>
              <h2>Discover our wide variety of projects </h2>
              <p>
                Created in close partnership with with our clients and
                collaborators, this approach merges industry experise,
                <br />
                decades of experience, innovation, and flexibility to
                consistently deliver excellence.
              </p>
            </div>

            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <div>
                    <p>
                      Small actions create big impacts. It all begins and ends
                      with each employee comitting to to safer work practices
                      daily, ensuring they return home safefly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <div>
                    <p>
                      Small actions create big impacts. It all begins and ends
                      with each employee comitting to to safer work practices
                      daily, ensuring they return home safefly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon3} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <div>
                    <p>
                      Small actions create big impacts. It all begins and ends
                      with each employee comitting to to safer work practices
                      daily, ensuring they return home safefly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Project */}
        <section className="section-3 bg-light">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>our projects</span>
              <h2>Discover our diverse range of projects</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residental, commercial, and industrial projectr.
              </p>
            </div>
            <div className="row">
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ConstrutionImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Kolkata Project</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        contruction industry that forcuses on project requiring
                        specialed skills, materials, and techniques.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ConstrutionImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Kolkata Project</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        contruction industry that forcuses on project requiring
                        specialed skills, materials, and techniques.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ConstrutionImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Kolkata Project</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        contruction industry that forcuses on project requiring
                        specialed skills, materials, and techniques.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ConstrutionImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Kolkata Project</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        contruction industry that forcuses on project requiring
                        specialed skills, materials, and techniques.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-5 py-5">
          <div className="container">
            <div className="section-header text-center">
              <span>terstimonials</span>
              <h2>What people are saying about us</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residental, commercial, and industrial projectr.
              </p>
            </div>
            <Swiper
              className="my-swiper"
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-4 pb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae voluptatum dicta beatae delectus deserunt unde
                      velit, fugiat voluptatem excepturi alias voluptates minima
                      dolorem accusamus quaerat explicabo blanditiis eos.
                      Voluptatem, vel.
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvatarImg} width={50} alt="" />
                      </div>
                      <div className="ps-3 ">
                        <div className="name">John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-4 pb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae voluptatum dicta beatae delectus deserunt unde
                      velit, fugiat voluptatem excepturi alias voluptates minima
                      dolorem accusamus quaerat explicabo blanditiis eos.
                      Voluptatem, vel.
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvatarImg} width={50} alt="" />
                      </div>
                      <div className="ps-3 ">
                        <div className="name">John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-4 pb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae voluptatum dicta beatae delectus deserunt unde
                      velit, fugiat voluptatem excepturi alias voluptates minima
                      dolorem accusamus quaerat explicabo blanditiis eos.
                      Voluptatem, vel.
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvatarImg} width={50} alt="" />
                      </div>
                      <div className="ps-3 ">
                        <div className="name">John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-4 pb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae voluptatum dicta beatae delectus deserunt unde
                      velit, fugiat voluptatem excepturi alias voluptates minima
                      dolorem accusamus quaerat explicabo blanditiis eos.
                      Voluptatem, vel.
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvatarImg} width={50} alt="" />
                      </div>
                      <div className="ps-3 ">
                        <div className="name">John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="section-6  py-5 bg-light">
          <div className="container">
            <div className="section-header text-center">
              <span>Blog & News</span>
              <h2>Articles & blog posts </h2>
              <p>
                We offer a diverse array of construction services, spanning
                residental, commercial, and industrial projects.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <a href="#" className="title">
                        Dummy blog title
                      </a>
                    </div>
                    <a href="" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <a href="#" className="title">
                        Dummy blog title
                      </a>
                    </div>
                    <a href="" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <a href="#" className="title">
                        Dummy blog title
                      </a>
                    </div>
                    <a href="" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
