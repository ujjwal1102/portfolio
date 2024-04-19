import React, { useEffect, useState } from "react";
import ecommerce2 from "../assets/img/projects/ecommerce2.png";
import ChatApp from "../assets/img/projects/ChatApp.png";
import guitar from "../assets/img/hobbies/guitar.jpg";
import faceRect from "../assets/img/hobbies/face-rect.jpg";
import soulful from "../assets/img/hobbies/soulful.mp4";
import performance1 from "../assets/img/hobbies/first-performance.mp4";
import beverp from "../assets/img/projects/beverp.png";
import mainScript from "../assets/js/main.js"
const MainPage = () => {
  const [wh, setWH] = useState(24);
  useEffect(() => {
    mainScript();
    // setWH(32);
    // const script = document.createElement("script");
    // script.src = mainScript;
    // script.async = true;
    // document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

  // const [portfolioIsotope, setPortfolioIsotope] = useState(null);
  // const [portfolioFilters, setPortfolioFilters] = useState([]);

  // useEffect(() => {
  //   const select = (el, all = false) => {
  //     if (all) {
  //       return [...document.querySelectorAll(el)];
  //     } else {
  //       return document.querySelector(el);
  //     }
  //   };

  //   const initializePortfolio = () => {
  //     const portfolioContainer = select(".portfolio-container");
  //     if (portfolioContainer) {
  //       const isotope = new Isotope(portfolioContainer, {
  //         itemSelector: ".portfolio-item",
  //         layoutMode: "fitRows",
  //       });
  //       setPortfolioIsotope(isotope);

  //       const filters = select("#portfolio-flters li", true);
  //       setPortfolioFilters(filters);

  //       filters.forEach(filter => {
  //         filter.addEventListener("click", handleFilterClick);
  //       });
  //     }
  //   };

  //   const handleFilterClick = (e) => {
  //     e.preventDefault();
  //     portfolioFilters.forEach((el) => {
  //       el.classList.remove("filter-active");
  //     });
  //     e.target.classList.add("filter-active");
  //     portfolioIsotope.arrange({
  //       filter: e.target.getAttribute("data-filter"),
  //     });
  //   };

  //   initializePortfolio();

  //   // Cleanup function to remove event listeners
  //   return () => {
  //     if (portfolioFilters.length > 0) {
  //       portfolioFilters.forEach(filter => {
  //         filter.removeEventListener("click", handleFilterClick);
  //       });
  //     }
  //   };
  // }, [portfolioIsotope, portfolioFilters]);
  
  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="/" className="logo">
            {/* <img src={logo} alt="" className="img-fluid" /> */}
            <h3 className="caveat">Ujjwal Srivastava</h3>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link  scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link  scrollto" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="nav-link  scrollto" href="#journal">
                  Blog
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      <div id="hero" className="home">
        <div className="container">
          <div className="hero-content">
            <h1>
              I'm{" "}
              <span
                className="typed"
                data-typed-items="Ujjwal Srivastava, Software Engineer, Designer, Developer"
              ></span>
            </h1>
            <p>Software Engineer, Designer, Developer</p>
            <ul className="list-unstyled list-social">
              <li>
                <a
                  id="facebook-icon"
                  href="https://www.facebook.com/profile.php?id=100010600869272"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  id="twitter-icon"
                  href="https://twitter.com/ujjwals93571574"
                  target="_blank"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  id="instagram-icon"
                  href="https://www.instagram.com/_.ujjwal_srivastava._/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  id="linkedin-icon"
                  href="https://www.linkedin.com/in/ujjwalsrivastava1102/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  id="github-icon"
                  href="https://github.com/ujjwal1102"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  id="spotify-icon"
                  href="https://open.spotify.com/user/31z62veiohfr5fmizemtgzi5e3su?si=2c3841ee43644ebb"
                  target="_blank"
                >
                  <i className="fa-brands fa-spotify"></i>
                </a>
              </li>
              <li>
                <a
                  id="threads-icon"
                  href="https://www.threads.net/@_.ujjwal_srivastava._"
                  target="_blank"
                >
                  <i className="fa-brands fa-threads"></i>
                </a>
              </li>
              <li>
                <a
                  id="youtube-icon"
                  href="https://youtube.com/@acousticujjwal3179?si=L_LMFXc2vKE2K9We"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <main id="main">
        <div id="about" className="paddsection">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 ">
                <div className="div-img-bg">
                  <div className="about-img">
                    <img src={faceRect} className="img-responsive" alt="me" />
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="about-descr">
                  <p className="p-heading">
                    Enthusiastic Full Stack Web Developer, ML/DL Engineer
                    aspiring to secure a rewarding position by delivering
                    impactful work in the IT industry.
                  </p>
                  {/* <p className="separator">
                      To an English person, it will seem like simplified English,
                      as a skeptical Cambridge friend of mine told me what
                      Occidental is. The European languages are members of the
                      same family.English person.
                    </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="services">
          <div className="container">
            <div
              className="services-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-briefcase"></i>
                    <span>UI/UX DESIGN</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-card-checklist"></i>
                    <span>BRAND IDENTITY</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-bar-chart"></i>
                    <span>WEB DESIGN</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-binoculars"></i>
                    <span>MOBILE APPS</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-brightness-high"></i>
                    <span>Analytics</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-calendar4-week"></i>
                    <span>PHOTOGRAPHY</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div> */}
        <div id="portfolio" className="paddsection">
          <div className="container">
            <div className="section-title text-center">
              <h2>My Portfolio</h2>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">Projects</li>
                  <li data-filter=".filter-card">Hobbies</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container">
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src={ecommerce2} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Ecommerce</h4>
                  <p>Webapp | Customer Seller Admin</p>
                  <a
                    href={ecommerce2}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://ecommerce-django.netlify.app/"
                    className="details-link"
                    title="More Details"
                    target="_blank"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src={ChatApp} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Chat App</h4>
                  <p>GAN Chat App</p>
                  <a
                    href={ChatApp}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Chat App"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src={beverp} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Bevrage ERP</h4>
                  <p>Odoo Technology</p>
                  <a
                    href={beverp}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Web 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://beverp.com/"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <img
                  src={guitar}
                  className="img-fluid"
                  alt=""
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    maxHeight: "500px",
                  }}
                />
                <div className="portfolio-info">
                  <h4>Cover</h4>
                  <p>Random click while creating a moment</p>
                  <a
                    href={guitar}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="App 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <video
                  src={performance1}
                  className="img-fluid"
                  alt=""
                  style={{
                    objectFit: "contain",
                    maxHeight: "500px",
                    width: "100%",
                  }}
                />
                <div className="portfolio-info">
                  <h4>Performance</h4>
                  <p>First College Stage Performance</p>
                  <a
                    href={performance1}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="First College Stage Performance"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <video
                  src={soulful}
                  className="img-fluid"
                  alt=""
                  style={{
                    objectFit: "contain",
                    maxHeight: "500px",
                    width: "100%",
                  }}
                />

                <div className="portfolio-info">
                  <h4>Cover </h4>
                  <p>Main Dhundne ko Zamane Me</p>
                  <a
                    href={soulful}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Main Dhundne ko Zamane Me"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title text-center">
              <h2>Skills</h2>
              <p>
                my expertise extends to various programming languages such as
                Python, JavaScript, and Java and web development, machine
                learning and deep learning frameworks like React.js and Django,
                Django REST Framework, Tensorflow, Keras, Matplotlib, OpenCV, as
                well as proficiency in database management systems such as
                MySQL,PostgresSQL and MongoDB. Beyond technical abilities, I
                excel in communication, teamwork, and problem-solving, allowing
                me to collaborate effectively with multidisciplinary teams and
                adapt to dynamic project requirements.
              </p>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    HTML
                    <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    />
                  </div>
                  <div className="row align-item-start">
                    <div className="col">
                      <span>
                        <svg
                          className="py-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 128"
                          width={wh}
                          height={wh}
                        >
                          <path
                            fill="#E44D26"
                            d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                          />
                          <path
                            fill="#F16529"
                            d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                          />
                          <path
                            fill="#EBEBEB"
                            d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                          />
                          <path
                            fill="#fff"
                            d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    />
                  </div>
                  <div className="flex-row d-flex pt-1">
                    <div className="">
                      <svg
                        className="py-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={wh}
                        height={wh}
                      >
                        <path
                          fill="#1572B6"
                          d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                        />
                        <path
                          fill="#33A9DC"
                          d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                        />
                        <path
                          fill="#fff"
                          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                        />
                        <path
                          fill="#EBEBEB"
                          d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                        />
                        <path
                          fill="#fff"
                          d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                        />
                        <path
                          fill="#EBEBEB"
                          d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                        />
                      </svg>
                    </div>
                    <div className="">
                      <svg
                        viewBox="0 0 128 128"
                        width={wh}
                        height={wh}
                        className="py-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m41.135 3.8146c-2.6492 0-5.0168 0.5933-7.037 1.7624-1.9426 1.1244-3.5749 2.7996-4.8527 4.9798-1.1972 2.0429-2.0792 4.5292-2.6229 7.3892-1.0468 5.5127-0.82002 12.414 0.65649 19.954 0.18621 0.94893 0.39151 1.9098 0.61173 2.8647-1.1781 0.35809-2.3222 0.72687-3.4096 1.1058-7.1176 2.4815-13.07 5.724-17.213 9.3783-2.1485 1.8925-3.81 3.8929-4.9469 5.9454-1.208 2.1825-1.8209 4.4212-1.8209 6.6539 0 4.4761 2.4797 9.0118 7.1706 13.126 4.4164 3.8751 10.662 7.2584 18.057 9.7877 0.68693 0.23335 1.3858 0.46013 2.0888 0.67677-0.24589 1.0701-0.47323 2.1485-0.67794 3.2228-1.4061 7.4052-1.5702 14.182-0.47745 19.596 0.56757 2.805 1.4687 5.2453 2.679 7.2553 1.2867 2.1366 2.9202 3.7862 4.8544 4.9017 2.0381 1.1751 4.4368 1.7707 7.129 1.7707 3.6656 0 7.7639-1.0868 12.181-3.2306 4.3304-2.1014 8.7511-5.111 13.138-8.9455 0.67619-0.59084 1.3727-1.2229 2.0686-1.8818h1.0389v-2e-3h31.486c4.5923 0 8.5534-0.67018 11.883-2.0106 3.3368-1.338 6.0516-3.1441 8.1888-5.412s3.6955-4.9732 4.6945-8.1166c0.99906-3.1171 1.498-6.4932 1.498-10.1 2e-3 -6.2886-1.1386-11.493-3.3952-15.668-2.2384-4.116-5.5317-6.7862-9.8797-8.0109a0.17009 0.17009 0 0 1-0.10678-0.17018 0.17904 0.17904 0 0 1 0.0817-0.15993c3.2371-1.8 5.7252-4.3633 7.4691-7.6332 1.7566-3.298 2.6351-7.2665 2.6355-11.906 0-7.6541-1.9367-13.348-5.7927-17.135-3.856-3.7874-8.9891-5.6697-15.38-5.6697h-34.46c-0.53662-0.50387-1.0841-1.0042-1.6311-1.4914-4.5549-4.0416-9.0972-7.2124-13.504-9.417-4.5185-2.2631-8.6914-3.4102-12.402-3.4102zm0.0376 8.9927c2.2959 0 5.2662 0.90117 8.5886 2.6063 3.6012 1.8501 7.5061 4.6021 11.293 7.9645 0.23475 0.20848 0.47488 0.42505 0.72037 0.64985-3.3308 3.6829-6.6132 7.7753-9.7686 12.181-5.3761 0.5252-10.544 1.3094-15.383 2.3341-0.17487-0.7663-0.33906-1.5368-0.48945-2.2977l-0.0143-0.0788c-1.1536-5.8941-1.4347-11.28-0.81281-15.567 0.53713-3.6847 1.7391-6.3185 3.3045-7.225 0.64993-0.37659 1.5124-0.56697 2.5622-0.56697zm27.308 17.013v68.336l-4.0517-5.0026-2.647-3.2675c-1.3363-1.6496-3.4764-4.7023-6.0278-8.5941-2.0292-3.0939-3.5069-5.5783-4.2075-6.7815l-0.0763-0.13195c-1.2229-2.1085-2.1312-3.807-2.8605-5.1707-0.91312-1.7087-1.8137-3.4537-2.6803-5.1922l0.15876-0.30854 0.01-0.0174c0.9549-1.9468 1.9599-3.9013 2.9942-5.8099l9e-3 -0.0161 1.0974-2.1294 1.621-2.6856 0.0101-0.0174c0.60517-1.0301 1.233-2.0697 1.8662-3.0902l1.1155-1.8424c1.4849-2.4583 2.6785-4.2511 4.5614-6.849 1.0146-1.3983 1.9766-2.626 3.5009-4.531l4e-3 -4e-3 0.0752-0.0949 0.0293-0.0375c0.6189-0.78898 1.2437-1.5666 1.8566-2.3115l0.0203-0.0251 0.0119-0.0149c1.1922-1.4763 2.4033-2.9556 3.6101-4.4109zm12.651 1.3433h20.259c3.3988 0 5.9984 0.95494 7.7972 2.8379 1.7988 1.8829 2.6977 5.1564 2.6977 9.7984 0 4.1287-0.99906 7.2763-2.999 9.4941-1.9999 2.2178-4.4982 3.3016-7.4978 3.3016h-20.259c-0.0746 0-0.13545-0.0782-0.13545-0.17484l1e-3 -25.082c0-0.0967 0.0597-0.17484 0.13545-0.17484zm-35.663 14.932c-0.73288 1.2002-1.4526 2.4117-2.1485 3.6191s-1.3798 2.4285-2.0483 3.6573c-0.80748-2.0709-1.5469-4.1258-2.2082-6.1358 2.0632-0.42553 4.2081-0.80756 6.405-1.1406zm-15.158 3.3517c1.5236 4.7226 3.4306 9.6081 5.6704 14.54l5.8e-4 5.8e-4c-2.2738 5.0132-4.2064 9.9763-5.7515 14.769-0.53713-0.16711-1.0677-0.34145-1.5905-0.5193-6.1472-2.1014-11.267-4.8138-14.806-7.8439-2.7077-2.3186-4.3239-4.7644-4.3239-6.5429 0-1.8256 1.6168-4.1776 4.4367-6.4574 3.2825-2.654 7.9537-5.0795 13.499-7.0125 0.94236-0.32705 1.902-0.64041 2.8647-0.93345zm50.82 18.747h21.952c3.7993 0 6.7182 1.187 8.8369 3.6614 2.1187 2.4744 3.159 5.9574 3.159 10.522 1e-3 4.6414-1.0599 8.2521-3.1577 10.779-2.0805 2.552-5.0377 3.8196-8.837 3.8196h-21.953c-0.0746 0-0.13545-0.0782-0.13545-0.17485v-28.432c0-0.0967 0.0596-0.17485 0.13545-0.17485zm-39.85 6.3948c0.6738 1.2354 1.3649 2.4648 2.0638 3.6721 0.73228 1.2646 1.492 2.5353 2.2648 3.7945-2.2953-0.31751-4.5131-0.68811-6.6198-1.1047v-5.8e-4c0.68335-2.0805 1.4509-4.2111 2.2912-6.3614zm-4.7291 15.052c4.7745 0.97698 10.002 1.7135 15.562 2.191 3.1858 4.4367 6.4957 8.5564 9.8504 12.261-0.41419 0.38136-0.83198 0.7567-1.2474 1.1214-4.8562 4.2451-9.7333 7.314-14.101 8.8752l-0.0908 0.0322c-1.9575 0.69111-3.7056 1.0415-5.1922 1.0415-1.0969 0-1.9826-0.18984-2.6325-0.56463-1.5822-0.91253-2.8133-3.4889-3.3779-7.0692-0.66007-4.1723-0.42911-9.4278 0.66664-15.198l5.8e-4 5.8e-4c0.17069-0.89521 0.35807-1.7958 0.56277-2.691z"
                          fill="#41e0ff"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        width={wh}
                        height={wh}
                        className="py-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#0acf83"
                          d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                        />
                        <path
                          fill="#a259ff"
                          d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                        />
                        <path
                          fill="#f24e1e"
                          d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                        />
                        <path
                          fill="#ff7262"
                          d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                        />
                        <path
                          fill="#1abcfe"
                          d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        width={wh}
                        height={wh}
                        className="py-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <g fill="#00c4cc">
                          <path d="M59.39.152c-.484.051-1.995.23-3.328.387-5.374.613-11.468 2.227-16.816 4.48C19.891 13.106 5.324 30.849 1.305 51.2.359 56.04.129 58.418.129 64c0 7.195.715 12.16 2.61 18.434 6.195 20.53 22.323 36.632 42.906 42.851 6.195 1.871 11.187 2.586 18.355 2.586 7.195 0 12.16-.715 18.434-2.61 20.53-6.195 36.632-22.323 42.851-42.906 1.871-6.195 2.586-11.187 2.586-18.355 0-3.047-.152-6.527-.332-7.809-2.074-14.796-8.168-27.238-18.328-37.402C99.07 8.703 86.68 2.586 72.19.512c-1.996-.282-11.238-.54-12.8-.36zm-20.863 40.32c1.36.41 1.996.794 2.918 1.715 1.793 1.82 2.203 2.817 2.203 5.555 0 2.051-.078 2.434-.691 3.508-1.18 1.996-3.918 3.84-5.812 3.89-1.333.028-1.278-.562.18-2.097 1.945-2.023 2.226-2.79 2.226-5.813-.024-2.917-.383-3.914-1.739-4.734-1.128-.691-2.355-.64-4.148.203-4.66 2.23-9.703 9.653-11.672 17.258-2.613 10.137 2.02 18.25 9.649 16.867 2.226-.41 6.425-2.558 8.246-4.25 1.508-1.379 1.508-1.406 1.66-3.12.336-3.587 2.867-7.169 6.25-8.833 1.558-.77 1.945-.844 4.043-.844 1.996 0 2.457.102 3.43.637 3.097 1.77 2.457 5.89-.895 5.89-1.945 0-2.945-1-1.535-1.534 1.383-.512.867-2.434-.742-2.868-1.895-.488-4.047.793-5.403 3.25-1.64 2.97-1.715 6.504-.156 8.114 1.512 1.613 3.406.336 4.867-3.329.766-1.867 1.867-2.867 3.149-2.867 1.125 0 1.332.692.843 2.793-.718 3.25-.23 4.094 1.793 3.098.664-.309 1.766-1.023 2.43-1.535l1.254-1 .848-4.43c.922-4.965 1.277-5.633 3.172-5.988 1.82-.336 2.23.562 1.562 3.402l-.36 1.59 1.333-1.36c3.148-3.226 7.015-4.812 8.347-3.48.715.715.637 1.613-.386 4.785-.485 1.512-1.153 3.895-1.457 5.25-.461 2.047-.489 2.535-.23 2.868.82.972 3.327-.028 5.554-2.204l1.305-1.277.156-2.844c.152-3.277.457-4.453 1.328-5.504.82-.972 2.305-1.687 3.098-1.484.793.207.793.973.078 3.227-1 3.097-.895 10.238.129 10.238.41 0 2.507-2.2 3.84-4.043l.996-1.36-.793-.816c-1.383-1.46-1.715-2.406-1.715-4.789 0-1.738.129-2.379.562-3.227.719-1.328 1.844-2.3 3.176-2.687 1.406-.434 3.148.281 3.863 1.562.719 1.305.54 4.223-.383 6.223l-.664 1.457h.895c1.23 0 1.715-.305 3.918-2.379 1.152-1.101 2.484-2.05 3.48-2.511 3.918-1.84 8.528-.895 9.293 1.921.64 2.254-.765 3.84-3.226 3.66-1.766-.128-2.098-.59-1.074-1.456 1.843-1.54 0-3.508-2.637-2.793-1.434.386-3.047 1.996-3.89 3.867-1.692 3.738-.794 8.14 1.636 8.14.973 0 2.691-1.921 3.355-3.789.793-2.152 2.457-3.507 3.711-3.02.692.255.743.946.309 3.122-.488 2.383-.563 4.61-.18 5.633.153.382.614 1.101 1.051 1.586.816.921.844 1.254.152 1.691-.332.23-.77.129-1.843-.46-1.485-.77-2.766-2.153-3.227-3.458l-.281-.766-1.024.766c-.59.41-1.511.871-2.047 1.023-2.125.563-4.738-.894-5.964-3.351-.489-.95-.641-3.738-.282-4.813.204-.59.204-.59-.617-.18-.433.231-1.355.485-2.07.563-1.18.13-1.36.258-2.535 1.742-1.664 2.07-4.61 4.864-5.813 5.454-2.558 1.277-3.402.918-4.07-1.72l-.461-1.765-1.102.973c-1.406 1.23-4.222 2.715-5.836 3.074-1.535.332-3.175-.156-3.84-1.18-.995-1.535-.663-4.785.922-9.164 1.176-3.25.333-3.3-2.636-.203-2.203 2.328-3.149 3.992-3.762 6.578-.64 2.688-1.41 3.66-3.148 4.07-1.051.231-1.54-.41-1.332-1.816l.152-1.129-.973.668c-1.383.946-3.125 1.817-4.328 2.149-1.203.332-2.789-.024-3.172-.692-.691-1.175-.691-1.175-1.765-.332-2.332 1.895-5.66 1.356-7.348-1.152l-.54-.793-1.687 1.562c-4.867 4.454-10.957 6.45-15.464 5.067-5.735-1.738-8.907-6.656-8.856-13.746.024-7.117 3.172-14.617 8.473-20.172 2.996-3.125 5.812-4.969 8.68-5.66 2.07-.512 3.328-.485 5.296.129zm0 0" />
                          <path d="M90.418 58.676c-.563.562-.356 2.816.36 4.25.359.742.742 1.332.87 1.332.102 0 .332-.59.512-1.309.64-2.66-.512-5.504-1.742-4.273zm0 0" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "75%" }}
                    />
                  </div>
                  <span>
                    <svg
                      className="py-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      width={wh}
                      height={wh}
                    >
                      <path
                        fill="#F0DB4F"
                        d="M1.408 1.408h125.184v125.185H1.408z"
                      />
                      <path
                        fill="#323330"
                        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div
                className="col-lg-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="progress">
                  <span className="skill">
                    React <i className="val">75 %</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div className="flex-row d-flex pt-1">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="py-1"
                        viewBox="0 0 128 128"
                        width={wh}
                        height={wh}
                      >
                        <g fill="#61DAFB">
                          <circle cx="64" cy="64" r="11.4" />
                          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                        </g>
                      </svg>
                    </div>
                    <div className=""></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Python <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    />
                  </div>
                  <div className="flex-row d-flex pt-1">
                    <div>
                      <svg
                        className="py-1"
                        width={wh}
                        height={wh}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <linearGradient
                          id="python-original-a"
                          gradientUnits="userSpaceOnUse"
                          x1="70.252"
                          y1="1237.476"
                          x2="170.659"
                          y2="1151.089"
                          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                        >
                          <stop offset={0} stopColor="#5A9FD4" />
                          <stop offset={1} stopColor="#306998" />
                        </linearGradient>
                        <linearGradient
                          id="python-original-b"
                          gradientUnits="userSpaceOnUse"
                          x1="209.474"
                          y1="1098.811"
                          x2="173.62"
                          y2="1149.537"
                          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                        >
                          <stop offset={0} stopColor="#FFD43B" />
                          <stop offset={1} stopColor="#FFE873" />
                        </linearGradient>
                        <path
                          fill="url(#python-original-a)"
                          d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                          transform="translate(0 10.26)"
                        />
                        <path
                          fill="url(#python-original-b)"
                          d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                          transform="translate(0 10.26)"
                        />
                        <radialGradient
                          id="python-original-c"
                          cx="1825.678"
                          cy="444.45"
                          r="26.743"
                          gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset={0}
                            stopColor="#B8B8B8"
                            stopOpacity=".498"
                          />
                          <stop
                            offset={1}
                            stopColor="#7F7F7F"
                            stopOpacity={0}
                          />
                        </radialGradient>
                        <path
                          opacity=".444"
                          fill="url(#python-original-c)"
                          d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        fill="#000000"
                        viewBox="0 0 24 24"
                        role="img"
                        className="py-1"
                        width={wh}
                        height={wh}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>pandas icon</title>
                        <path d="M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={wh}
                        height={wh}
                        className="py-1"
                      >
                        <path
                          d="M112.871 66.602c9.004 5.277 15.055 15.027 15.074 26.191.032 16.805-13.617 30.453-30.48 30.48-16.863.032-30.559-13.57-30.59-30.375-.02-11.164 5.996-20.933 14.984-26.246l8.774 14.778c.219.37.094.847-.262 1.09-3.32 2.25-5.496 6.046-5.488 10.347.012 6.895 5.633 12.477 12.55 12.461 6.919-.012 12.516-5.61 12.504-12.504-.007-4.3-2.195-8.09-5.523-10.328-.355-.242-.484-.719-.266-1.09zm0 0"
                          fill="#128dff"
                        />
                        <path
                          d="M45.477 66.422a30.495 30.495 0 00-14.907-3.867C13.703 62.555.035 76.18.035 92.985c0 16.804 13.668 30.43 30.535 30.43 16.946 0 30.95-14.337 30.524-31.212H43.906c-.453 0-.808.383-.812.832-.043 6.723-5.672 12.434-12.524 12.434-6.922 0-12.527-5.59-12.527-12.485 0-6.894 5.605-12.484 12.527-12.484 1.809 0 3.532.383 5.086 1.074.383.168.836.04 1.047-.316zm0 0"
                          fill="#8bda67"
                        />
                        <path
                          d="M47.945 61.648c-8.992-5.293-15.027-15.054-15.027-26.218C32.918 18.625 46.59 5 63.453 5s30.535 13.625 30.535 30.43c0 11.164-6.035 20.925-15.027 26.218L70.21 46.86c-.219-.37-.094-.847.266-1.09 3.32-2.246 5.503-6.039 5.503-10.34 0-6.894-5.609-12.484-12.527-12.484-6.918 0-12.527 5.59-12.527 12.485 0 4.3 2.183 8.093 5.504 10.34.36.242.484.718.265 1.09zm0 0"
                          fill="#ff2a44"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        width={wh}
                        height={wh}
                        className="py-1"
                        viewBox="-9 0 274 274"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                      >
                        <g>
                          <path
                            d="M145.726081,42.0651946 L145.726081,84.1347419 L218.586952,126.204312 L218.586952,84.1347419 L145.726081,42.0651946 Z M-1.98726454e-07,84.1347419 L-1.98726454e-07,126.204312 L36.4304238,147.234755 L36.4304238,105.169527 L-1.98726454e-07,84.1347419 Z M109.291294,105.169527 L72.8608701,126.204312 L72.8608701,252.404316 L109.291294,273.439101 L109.291294,189.304303 L145.726081,210.339088 L145.726081,168.26954 L109.291294,147.234755 L109.291294,105.169527 Z"
                            fill="#E55B2D"
                          ></path>
                          <path
                            d="M145.726081,42.0651946 L36.4304238,105.169527 L36.4304238,147.234755 L109.291294,105.169527 L109.291294,147.234755 L145.726081,126.204312 L145.726081,42.0651946 Z M255.021717,63.0999794 L218.586952,84.1347419 L218.586952,126.204312 L255.021717,105.169527 L255.021717,63.0999794 Z M182.156505,147.234755 L145.726081,168.26954 L145.726081,210.339088 L182.156505,189.304303 L182.156505,147.234755 Z M145.726081,210.339088 L109.291294,189.304303 L109.291294,273.439101 L145.726081,252.404316 L145.726081,210.339088 Z"
                            fill="#ED8E24"
                          ></path>
                          <path
                            d="M145.726081,-3.41864288e-05 L-1.98726454e-07,84.1347419 L36.4304238,105.169527 L145.726081,42.0651946 L218.586952,84.1347419 L255.021717,63.0999794 L145.726081,-3.41864288e-05 Z M145.726081,126.204312 L109.291294,147.234755 L145.726081,168.26954 L182.156505,147.234755 L145.726081,126.204312 Z"
                            fill="#F8BF3C"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="px-1">
                      <svg
                        width={wh}
                        height={wh}
                        className="py-1"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>file_type_numpy</title>
                        <polygon
                          points="14.048 7.689 9.405 5.327 4.309 7.89 9.078 10.303 14.048 7.689"
                          style={{ fill: "#4dabcf" }}
                        />
                        <polygon
                          points="16.177 8.771 21.045 11.247 15.994 13.803 11.218 11.386 16.177 8.771"
                          style={{ fill: "#4dabcf" }}
                        />
                        <polygon
                          points="22.678 5.363 27.679 7.89 23.207 10.153 18.328 7.674 22.678 5.363"
                          style={{ fill: "#4dabcf" }}
                        />
                        <polygon
                          points="20.526 4.274 16.023 2 11.57 4.239 16.209 6.597 20.526 4.274"
                          style={{ fill: "#4dabcf" }}
                        />
                        <polygon
                          points="17.006 23.809 17.006 30 22.46 27.258 22.454 21.064 17.006 23.809"
                          style={{ fill: "#4dabcf" }}
                        />
                        <polygon
                          points="22.452 18.903 22.446 12.774 17.006 15.499 17.006 21.63 22.452 18.903"
                          style={{ fill: "#4dabcf" }}
                        />
                        <polygon
                          points="29 17.754 29 23.969 24.348 26.308 24.345 20.122 29 17.754"
                          style={{ fill: "#4dabcf" }}
                        />
                        <polygon
                          points="29 15.581 29 9.491 24.339 11.826 24.343 17.967 29 15.581"
                          style={{ fill: "#4dabcf" }}
                        />
                        <path
                          d="M15.08,15.5l-3.674-1.861v8.045S6.9P13,12.05,6.5,11.185a.9.9,0,0,0-.331-.264C5.361,10.5,3,9.29,3,9.29V23.5L6.266,25.26V17.832s4.445,8.607,4.49,8.7a4.026,4.026,0,0,0,.968,1.32c.635.423,3.357,2.073,3.357,2.073Z"
                          style={{ fill: "#4d77cf" }}
                        />
                      </svg>
                    </div>
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={wh}
                        height={wh}
                        className="py-1"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#fff"
                          d="M63.975 125.09c-16.317 0-31.658-6.355-43.197-17.893S2.885 80.318 2.885 64 9.24 32.341 20.778 20.803 47.657 2.91 63.975 2.91s31.659 6.355 43.198 17.893S125.065 47.682 125.065 64s-6.355 31.659-17.893 43.198-26.879 17.892-43.197 17.892z"
                        />
                        <path
                          fill="none"
                          stroke="#858585"
                          strokeDasharray=".407,.8139"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="7.976"
                          strokeWidth=".856"
                          d="M63.974 63.784h61.09m-61.09 0 43.197-43.196M63.974 63.784V2.694m0 61.09L20.778 20.588m43.196 43.196H2.884m61.09 0-43.196 43.197m43.196-43.197v61.09m0-61.09 43.197 43.197"
                          opacity=".9"
                        />
                        <g
                          fill="none"
                          stroke="#818181"
                          strokeDasharray=".407,.8139"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                          strokeMiterlimit="199.409"
                          strokeWidth=".856"
                        >
                          <path
                            d="m70.764 63.784-.202-1.643-.593-1.543-.949-1.355-1.25-1.085-1.474-.751-1.61-.373-1.654.03-1.599.429-1.447.801-1.209 1.128-.9 1.388-.539 1.565-.145 1.649.259 1.634.646 1.523.994 1.321 1.286 1.041 1.5.698 1.623.316 1.653-.086 1.582-.484 1.418-.852 1.17-1.17.851-1.417.484-1.582.105-1.182h0"
                            opacity=".9"
                          />
                          <path
                            d="m84.339 63.784-.198-2.833-.59-2.779-.973-2.669-1.333-2.509-1.67-2.299-1.973-2.044-2.238-1.75-2.461-1.42-2.633-1.064-2.758-.688-2.825-.297-2.84.099-2.797.494-2.702.877-2.554 1.246-2.356 1.588-2.111 1.901-1.826 2.177-1.506 2.408-1.155 2.596-.782 2.73-.396 2.814v2.842l.396 2.814.782 2.73 1.155 2.596 1.506 2.408 1.826 2.177 2.111 1.902 2.356 1.588 2.554 1.245 2.702.877 2.798.494 2.84.1 2.824-.298 2.758-.687 2.633-1.065 2.461-1.42 2.238-1.75 1.973-2.044 1.67-2.299 1.333-2.51.972-2.668.591-2.779.198-2.83h0"
                            opacity=".9"
                          />
                          <path
                            d="m97.914 63.784-.185-3.548-.555-3.509-.92-3.43-1.272-3.317-1.613-3.166-1.935-2.978-2.236-2.762-2.512-2.511-2.761-2.236-2.979-1.935-3.165-1.613-3.317-1.273-3.43-.919-3.51-.555-3.548-.185-3.548.185-3.508.555-3.43.92-3.318 1.272-3.165 1.613-2.979 1.935-2.761 2.236-2.512 2.511-2.236 2.762-1.935 2.978-1.613 3.166-1.273 3.317-.919 3.43-.555 3.509-.185 3.548.185 3.548.555 3.509.92 3.43 1.272 3.317 1.613 3.166 1.935 2.978 2.236 2.762 2.512 2.511 2.761 2.236 2.979 1.935 3.165 1.614 3.317 1.272 3.43.92 3.51.555 3.547.185 3.549-.185 3.508-.556 3.43-.919 3.318-1.272 3.165-1.614 2.979-1.935 2.761-2.236 2.512-2.511 2.236-2.762 1.935-2.978 1.613-3.166 1.272-3.317.92-3.43.555-3.509.185-3.548h0"
                            opacity=".9"
                          />
                          <path
                            d="m111.489 63.784-.26-4.966-.78-4.911-1.286-4.804-1.782-4.642-2.257-4.432-2.709-4.171-3.13-3.866-3.516-3.517-3.866-3.13-4.171-2.709L83.3 20.38l-4.642-1.781-4.804-1.287-4.912-.779-4.966-.26-4.966.26-4.91.779-4.805 1.287-4.642 1.781-4.432 2.257-4.17 2.71-3.867 3.13-3.517 3.516-3.13 3.866-2.708 4.17-2.257 4.433-1.782 4.642-1.287 4.804-.778 4.911-.261 4.966.26 4.966.779 4.911 1.287 4.805 1.782 4.642 2.257 4.431 2.709 4.171 3.13 3.866 3.516 3.517 3.866 3.13 4.171 2.709 4.432 2.257 4.642 1.781 4.804 1.288 4.911.778 4.966.26 4.966-.26 4.912-.778 4.804-1.288 4.642-1.781 4.432-2.257 4.17-2.71 3.867-3.129 3.516-3.517 3.13-3.866 2.71-4.17 2.256-4.432 1.782-4.642 1.287-4.805.778-4.91.261-4.967h0"
                            opacity=".9"
                          />
                        </g>
                        <path
                          fill="#11557c"
                          d="M64 126c-16.56 0-32.13-6.449-43.84-18.159S2 80.561 2 64s6.449-32.13 18.159-43.841S47.439 2 64 2s32.131 6.449 43.841 18.159S126 47.439 126 64s-6.449 32.131-18.159 43.841S80.561 126 64 126zM64 3.82c-16.074 0-31.187 6.26-42.553 17.626C10.08 32.813 3.82 47.925 3.82 64c0 16.075 6.26 31.188 17.626 42.554S47.925 124.18 64 124.18c16.075 0 31.188-6.26 42.554-17.626S124.18 80.075 124.18 64c0-16.075-6.26-31.187-17.626-42.554C95.187 10.08 80.075 3.82 64 3.82z"
                        />
                        <path
                          fill="#004cff"
                          d="m63.975 63.784.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.129-.042.025.046.013.041.013.041.013.041.013.041.013.041.012.041.012.041.011.039.012.041.012.041.012.041.012.041.011.041.011.041.011.041.011.041.011.041.011.041.011.041.011.041.01.041.01.041.01.041.01.041.01.041.01.042.01.042.009.042.009.042.009.042.009.042.009.042.009.042.009.042.009.042.009.042.008.042.008.042.008.042.008.042.008.042.008.042.007.042.007.042.007.042.007.042.007.042.007.042.007.042.007.042.007.042.006.042.006.042.006.042.006.042.006.042.006.042.006.042.005.042.005.042.005.042.005.042.005.042.005.042.005.042.005.042.004.042.004.042.004.042.004.042.004.042.004.042.004.043.003.043.003.043.003.043.003.043.003.043.003.043.003.043.003.043.002.043.002.043.002.043.002.043.002.043.002.043.002.043.001.043.001.043.001.043.001.043.001.043.001.043.001.043v.172H64.11l-.135-.004z"
                          opacity=".6"
                        />
                        <path
                          fill="#ceff29"
                          d="m63.975 63.784.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.143-.381.154-.411.143-.381.143-.381.12.045.12.046.119.046.119.046.119.047.119.047.119.047.119.048.119.048.118.049.118.049.118.049.118.05.118.05.118.05.117.051.117.051.117.051.117.052.117.052.117.053.116.053.116.053.116.054.116.054.116.054.116.055.115.055.115.055.115.056.115.056.115.057.115.057.114.057.114.058.114.058.114.058.114.059.113.059.113.059.113.06.113.06.113.061.113.061.112.061.112.062.112.062.112.062.112.063.111.063.111.063.111.064.111.064.111.064.11.065.11.065.11.065.11.066.11.066.109.066.109.067.109.067.109.067.108.068.108.068.108.068.108.069.108.069.107.069.107.07.107.07.107.071.107.071.106.071.106.072.106.072.106.072.105.073.105.073.105.073.105.074.104.074.104.074.104.074.104.075.104.075.103.075.103.076.103.076.103.076.102.077.102.077.102.077.102.078.101.078.101.078.101.079.101.079.1.079.1.08-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.252.324-.254.318-.254.318-.254.318-.254.318-.254.318-.253.32-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.252.332-.254.318-.254.318-.254.318-.254.318-.254.318-.254.32-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.252.328-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.254.318-.253.326z"
                          opacity=".6"
                        />
                        <path
                          fill="#ff6800"
                          d="m63.975 63.784-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.349-.403-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417-.348-.417.197-.164.198-.163.198-.162.199-.161.2-.16.201-.159.201-.158.202-.157.203-.156.204-.155.204-.154.205-.153.206-.152.206-.151.207-.15.208-.149.209-.148.209-.147.21-.146.211-.145.211-.144.212-.143.213-.142.213-.141.214-.14.215-.139.215-.138.216-.137.217-.136.217-.135.218-.134.219-.133.219-.132.22-.131.22-.13.221-.129.222-.128.222-.127.223-.126.223-.125.224-.124.225-.123.225-.122.226-.121.226-.12.227-.118.227-.117.228-.116.228-.115.229-.114.23-.113.23-.112.231-.111.231-.11.232-.109.232-.108.233-.107.233-.105.234-.104.234-.103.235-.102.235-.101.236-.1.236-.099.237-.098.237-.097.237-.095.238-.094.238-.093.239-.092.239-.091.24-.09.24-.089.24-.088.241-.086.241-.085.242-.084.242-.083.242-.082.243-.081.243-.08.244-.078.244-.077.244-.076.245-.075.245-.074.245-.073.246-.072.246-.07.246-.069.247-.068.247-.067.247-.066.248-.065.248-.063.248-.062.249-.061.249-.06.249-.059.249-.058.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.113.543.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.121.529.11.556z"
                          opacity=".6"
                        />
                        <path
                          fill="#ffc400"
                          d="m63.975 63.784-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.463.083-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.462.083-.468.085-.468.085-.468.085-.466.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.456.081-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.45.079-.468.085-.468.085-.468.085-.466.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.468.085-.052-.294-.051-.294-.049-.295-.047-.295-.045-.295-.038-.297-.041-.296-.039-.296-.038-.296-.036-.296-.034-.297-.032-.297-.03-.297-.028-.297-.026-.297-.024-.298-.023-.298-.021-.298-.019-.298-.017-.298-.015-.298-.013-.298-.011-.298-.009-.298-.008-.298-.006-.298-.004-.299-.002-.299v-.299l.002-.299.004-.299.005-.298.007-.298.009-.298.011-.298.013-.298.015-.298.017-.298.019-.298.02-.298.022-.298.024-.298.026-.297.028-.297.03-.297.032-.297.034-.297.035-.296.037-.296.039-.296.041-.296.043-.295.045-.295.047-.295.048-.295.05-.294.052-.294.054-.294.056-.293.058-.293.059-.293.061-.292.063-.292.065-.291.067-.291.069-.291.07-.29.072-.29.074-.289.076-.289.078-.288.08-.288.081-.287.083-.287.085-.286.087-.286.089-.285.09-.285.092-.284.094-.283.096-.283.097-.282.099-.282.101-.281.103-.28.105-.28.106-.279.108-.278.11-.278.112-.277.113-.276.115-.276.117-.275.118-.274.12-.273.122-.273.124-.272.125-.271.127-.27.129-.269.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.428.206.436.223z"
                          opacity=".6"
                        />
                        <path
                          fill="#29ffce"
                          d="m63.975 63.784-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.224.151-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.232.137-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.223.155-.231.138-.223.155-.024-.035-.024-.035-.024-.035-.024-.035-.024-.035-.024-.035-.024-.035-.024-.035-.024-.035-.024-.035-.024-.035-.024-.035-.024-.036-.024-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.023-.036-.022-.036-.022-.036-.022-.036-.022-.036-.022-.036-.022-.036-.022-.036-.022-.036-.022-.037-.022-.037-.022-.037-.022-.037-.022-.037-.022-.037-.022-.037-.022-.037-.022-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.021-.037-.02-.037-.02-.037-.02-.037-.02-.038-.02-.038-.02-.038-.02-.038-.02-.038-.02-.038-.02-.038-.02-.038-.02-.038-.02-.038-.02-.038-.02-.038-.02-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.038-.019-.041-.019-.038-.019-.038.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.245-.118.208-.098z"
                          opacity=".6"
                        />
                        <path
                          fill="#7dff7a"
                          d="m63.975 63.784.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335.057.335-.131.022-.132.022-.132.021-.132.021-.132.02-.132.019-.132.019-.132.018-.132.018-.132.017-.132.017-.132.016-.132.016-.132.015-.132.015-.132.014-.133.014-.133.013-.133.013-.133.012-.133.012-.133.011-.133.011-.133.01-.133.01-.133.009-.133.009-.133.008-.133.007-.133.007-.133.007-.133.006-.133.005-.133.005-.133.004-.133.004-.133.003-.133.003-.133.002-.133.002-.133.001-.133.001h-.266l-.133-.001-.133-.001-.133-.002-.133-.002-.133-.003-.133-.003-.133-.004-.153-.047-.133-.005-.133-.005-.133-.006-.133-.007-.134-.007-.133-.008-.133-.008-.133-.009-.133-.009-.133-.01-.133-.01-.133-.011-.133-.011-.133-.012-.133-.012-.133-.013-.133-.013-.133-.014-.132-.015-.13-.015-.132-.015-.132-.016-.132-.017-.132-.017-.132-.018-.132-.018-.132-.019-.132-.019-.132-.02-.132-.02-.132-.021-.132-.021-.131-.022-.131-.022-.131-.023-.131-.023-.131-.024-.131-.024-.131-.025-.131-.025-.131-.026-.131-.026-.131-.027-.13-.027-.13-.028-.13-.028-.13-.029-.13-.029.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.076-.331.027-.318z"
                          opacity=".6"
                        />
                        <path
                          fill="#ff6800"
                          d="m63.975 63.784.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.433.33.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334.428.334-.079.101-.079.101-.079.1-.079.1-.08.1-.08.1-.08.1-.08.1-.081.099-.081.099-.081.099-.081.099-.082.099-.082.098-.082.098-.082.098-.083.098-.083.098-.083.097-.083.097-.083.097-.084.097-.084.097-.084.096-.084.096-.085.096-.085.096-.085.096-.085.095-.085.095-.086.095-.086.095-.086.095-.086.094-.087.094-.087.094-.087.094-.087.094-.087.093-.088.093-.088.093-.088.093-.088.093-.089.092-.089.092-.089.092-.089.092-.089.092-.09.091-.09.091-.09.091-.09.091-.09.09-.091.09-.091.09-.091.09-.091.09-.092.089-.092.089-.092.089-.092.089-.092.089-.093.088-.093.088-.093.088-.093.088-.093.087-.094.087-.094.087-.094.087-.094.087-.094.086-.068.066-.095.086-.095.086-.095.085-.095.085-.096.085-.096.085-.096.084-.096.084-.096.084-.097.084-.097.084-.097.083-.097.083-.097.083-.098.083-.098.082-.098.082-.098.082-.098.082-.099.082-.099.081-.099.081-.099.081-.099.081-.1.08-.1.08-.1.08-.339-.425-.338-.424-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.33-.414-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.339-.425-.307-.391z"
                          opacity=".6"
                        />
                        <path
                          fill="#2c2c2c"
                          d="m77.551 64.198-13.576-.001a.414.414 0 0 1-.128-.806l12.912-4.194a.413.413 0 0 1 .521.265c.455 1.398.685 2.853.684 4.323a.413.413 0 0 1-.413.413zm-10.965-.828h10.545a13.114 13.114 0 0 0-.516-3.258L66.586 63.37z"
                        />
                        <path
                          fill="#2c2c2c"
                          d="M63.975 64.197a.414.414 0 0 1-.387-.558L77.899 25.51a.412.412 0 0 1 .532-.242 41 41 0 0 1 11.196 6.351.414.414 0 0 1 .066.581L64.298 64.041a.415.415 0 0 1-.323.156zm14.552-38.008L65.28 61.484l23.507-29.475a40.163 40.163 0 0 0-10.26-5.82z"
                        />
                        <path
                          fill="#2c2c2c"
                          d="M63.975 64.197a.415.415 0 0 1-.317-.148L28.857 22.364a.412.412 0 0 1 .052-.582A54.784 54.784 0 0 1 51.801 10.44a.414.414 0 0 1 .495.312l12.083 52.941a.415.415 0 0 1-.22.463.444.444 0 0 1-.184.041zM29.757 22.152l33.431 40.044-11.607-50.857a53.967 53.967 0 0 0-21.824 10.813z"
                        />
                        <path
                          fill="#2c2c2c"
                          d="M17.224 72.681a.413.413 0 0 1-.406-.339c-1.813-9.884-.401-20.309 3.977-29.355a.414.414 0 0 1 .552-.193l42.808 20.615a.413.413 0 0 1-.106.78l-46.75 8.485a.318.318 0 0 1-.075.007zm4.136-28.96c-4.103 8.678-5.448 18.61-3.801 28.067l45.09-8.183L21.36 43.721z"
                        />
                        <path
                          fill="#2c2c2c"
                          d="M41.657 79.659a.42.42 0 0 1-.341-.178 27.673 27.673 0 0 1-2.177-3.738.413.413 0 0 1 .193-.552l24.462-11.78a.413.413 0 0 1 .415.713L41.893 79.586a.414.414 0 0 1-.236.073zm-1.59-3.904a27.058 27.058 0 0 0 1.697 2.913L59.42 66.436l-19.353 9.319z"
                        />
                        <path
                          fill="#2c2c2c"
                          d="M63.99 98.132c-2.58 0-5.165-.287-7.66-.857a.415.415 0 0 1-.311-.496l7.552-33.088c.044-.192.223-.354.415-.321a.412.412 0 0 1 .396.344l5.685 33.46a.414.414 0 0 1-.339.477 34.201 34.201 0 0 1-5.738.481zm-7.072-1.574c4 .86 8.22.98 12.264.344l-5.267-30.999-6.997 30.655z"
                        />
                        <path
                          fill="#2c2c2c"
                          d="M97.832 106.652a.413.413 0 0 1-.324-.156L63.651 64.041a.413.413 0 0 1 .577-.584l42.833 33.379a.414.414 0 0 1 .072.581 54.697 54.697 0 0 1-9.045 9.146.409.409 0 0 1-.256.089zM66.477 66.258l31.42 39.399a53.985 53.985 0 0 0 8.329-8.423L66.477 66.258z"
                        />
                      </svg>
                    </div>
                    <div className="px-1">
                      <svg
                        version="1.0"
                        width={wh}
                        height={wh}
                        className="py-1"
                        viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#092e20"
                      >
                        <path d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z" />
                        <path d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z" />
                      </svg>
                    </div>
                    <div className="px-1">
                      <svg
                        width={wh}
                        height={wh}
                        className="py-1"
                        viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m64.347 41.619v4.2915h-19.475l-0.02875-0.02794-0.02794 0.02794h-38.119a0.069444 0.069444 0 0 0-0.069437 0.06944v18.955h-6.127v0.41662h6.127v18.717a0.069444 0.069444 0 0 0 0.069437 0.06944h18.837v8.5399h0.41662v-8.5399h18.685v0.06971h0.11039l0.0971 0.09737 0.10063-0.09737h0.1085v-0.06971h19.295v3.0463h0.41662v-3.0463h19.377v0.06971h0.1085l0.10063 0.09737 0.0971-0.09737h0.11039v-0.06971h18.674v4.1551h0.41662v-4.1551h18.849a0.069444 0.069444 0 0 0 0.0694-0.06944v-18.717h4.9341v-0.41662h-4.9341v-18.955a0.069444 0.069444 0 0 0-0.0694-0.06944h-18.849v-0.01302h-0.41662v0.01302h-18.853l-0.02794-0.02794-0.02875 0.02794h-19.557v-4.2915zm-57.484 4.4304h18.67v18.709zm19.087 0h18.685v0.040415l-18.685 18.656zm19.102 0h19.295v18.706l-19.295-18.671zm19.712 0h19.377v0.03553l-19.377 18.75zm19.793 0h18.674v18.685l-18.674-18.645zm19.09 0h18.682l-18.682 18.721zm-96.882 0.09846 18.747 18.787h-18.747zm115.66 0v18.787h-18.747zm-77.375 0.13019 19.28 18.657h-19.28zm39.088 0v18.657h-19.28zm-39.505 0.0081v18.648h-18.677zm39.922 0 18.674 18.645v0.0035h-18.674zm-77.791 19.065h18.578l-18.578 18.55zm19.359 0h18.51v18.549zm18.927 0h19.178l-19.178 18.558zm19.911 0h19.178v18.558zm19.595 0h18.51l-18.51 18.549zm19.09 0h4e-3l18.676 18.648h-18.681zm0.20099 0h18.578v18.55zm-39.085 0.0011 19.27 18.647h-19.27zm-39.23 0.0062v18.64h-18.669zm0.41662 0.01383 18.588 18.626h-18.588zm77.281 0.01139v18.615h-18.576zm-38.884 0.04774v18.567h-19.188z"
                          fill="#cecece"
                        />
                        <path
                          d="m64.556 51.492c-0.36077 0-0.72168 0.13743-0.99653 0.41228-0.52992 0.52992-0.54737 1.3783-0.0556 1.9312l-33.827 19.228 0.03608 0.06076c2.157 3.643 4.7912 6.9835 8.055 9.9235l0.05208 0.04692 0.04638-0.05235 25.746-29.097c0.55266 0.50018 1.4076 0.48539 1.9404-0.04747 0.54971-0.54971 0.54971-1.4431 0-1.9928-0.27485-0.27486-0.63549-0.41228-0.99626-0.41228zm0 0.13806c0.32494 0 0.64975 0.12409 0.89807 0.37241 0.49664 0.49664 0.49664 1.2998 0 1.7964-0.49664 0.49664-1.2998 0.49664-1.7964 0-0.49664-0.49664-0.49664-1.2998 0-1.7964 0.24832-0.24832 0.5734-0.37241 0.89834-0.37241zm48.339 0.42639v0.13887h1.5501v30.911h-1.5501v0.13887h3.2389v-0.13887h-1.5498v-30.911h1.5498v-0.13887zm-93.671 0.51291-0.06944 3e-3h-3e-3c-0.0235 1e-3 -0.04704 0.0022-0.07052 0.0035l-0.06537 0.0038v4.1144l0.07676-0.0081c0.02056-0.0022 0.04144-0.0036 0.06211-0.0038h2.77e-4c0.35722 1.39e-4 0.64528 0.28829 0.64528 0.64555 7e-6 0.35726-0.28805 0.64541-0.64528 0.64555-0.02094-4.4e-5 -0.04209-0.0012-0.06293-0.0033l-0.07622-0.0076v4.1152l0.06645 3e-3c0.02348 9.72e-4 0.04703 0.0018 0.07052 0.0024h0.001934c2.6255 4.9e-5 4.7554-2.1298 4.7554-4.7553 4.8e-5 -2.6017-2.0932-4.7102-4.6859-4.7483zm-0.06835 0.14186c2.5499 5.56e-4 4.6154 2.0664 4.6154 4.6165 4.7e-5 2.5503-2.0657 4.6162-4.6159 4.6165-1.39e-4 -4e-6 -4.17e-4 6e-6 -5.55e-4 0v-3.8321c0.43241 1e-5 0.78443-0.35202 0.78442-0.78442 8e-6 -0.43241-0.35202-0.78443-0.78442-0.78442v-3.8318c4.16e-4 -1.7e-5 6.94e-4 -2.5e-4 0.0011-2.78e-4zm59.98 0.19149v0.0035c-1.3819 0.03719-2.493 1.1678-2.493 2.5586s1.1111 2.5214 2.493 2.5586v13.596c-2e-3 -6e-6 -4e-3 -2.78e-4 -6e-3 -2.78e-4 -1.4143-3e-6 -2.5621 1.1479-2.5621 2.5621-1e-6 1.4143 1.1479 2.5624 2.5621 2.5624 1.4143 0 2.5624-1.1481 2.5624-2.5624 0-1.3653-1.071-2.4792-2.4175-2.5548v-13.603c1.3819-0.03719 2.4927-1.1678 2.4927-2.5586s-1.1108-2.5214-2.4927-2.5586v-0.0035zm0 0.1424v4.8394c-1.3067-0.03704-2.3541-1.104-2.3541-2.4197 0-1.3158 1.0473-2.3827 2.3541-2.4197zm0.13887 0c1.3067 0.03704 2.3538 1.104 2.3538 2.4197 0 1.3158-1.0471 2.3827-2.3538 2.4197zm-16.016 1.0896-25.448 28.76c-3.21-2.902-5.8079-6.1934-7.9402-9.7825zm-31.086 0.85332v3.2389h0.13887v-1.5499h6.5648v1.5499h0.13887v-3.2389h-0.13887v1.5501h-6.5648v-1.5501zm24.894 12.705v0.13887h1.5501v10.069h-1.5501v0.13887h3.2389v-0.13887h-1.5499v-10.069h1.5499v-0.13887zm22.063 4.0645c2e-3 -1e-6 4e-3 2.78e-4 6e-3 2.78e-4v4.8462c-2e-3 5e-6 -4e-3 2.77e-4 -6e-3 2.77e-4 -1.3392 0-2.4232-1.0843-2.4232-2.4235 0-1.3392 1.084-2.4232 2.4232-2.4232zm0.14484 0.0073c1.2713 0.07521 2.2787 1.1256 2.2787 2.4159 0 1.2903-1.0074 2.341-2.2787 2.4162zm13.243 0.43561v3.2389h0.13887v-1.5501h12.023v1.5501h0.13887v-3.2389h-0.13887v1.5499h-12.023v-1.5499z"
                          fill="#6c6c6c"
                        />
                        <path
                          d="m81.067 45.112c-0.09946-8.89e-4 -0.19843-4.58e-4 -0.29674 0.0011-1.5153 0.02396-4.7619 0.01795-7.6695 1.334-2.9076 1.316-5.4641 4.0435-5.4641 9.2476 0 2.1998 0.73464 4.101 1.8867 5.7299h-23.211v-10.511h15.238v-5.3507h-21.365v5.3507h0.0016v10.511h-0.0016v5.351h0.0016v12.456l-3.5798-0.02143-4.9539 0.02278-7.755-12.048c1.8177-0.74956 3.5966-1.8279 4.9658-3.3387 1.4892-1.6432 2.4864-3.7902 2.4864-6.4468v-0.76408c0-3.8875-1.4825-6.6762-3.9001-8.4542-2.4176-1.778-5.7247-2.5638-9.4006-2.6476h-11.8v5.4112h0.030159v12.708h-0.030108v5.0513h0.030108v15.854h6.1256v-15.87l6.1604-0.01736 8.4575 13.759 0.01193 0.016c0.71617 0.94845 2.2048 3.0543 4.6105 4.5709l0.2037 0.12857 4.8617-2.564 3.8936-0.02333h20.944v-5.5609h-15.237v-12.222h30.129c0.01106 0.0052 0.01931 0.0092 0.03119 0.01465 1.8665 0.85339 4.132 1.6256 5.8956 2.7382 1.7636 1.1125 2.9969 2.4888 2.9969 4.6753 0 2.3534-1.0619 3.5857-2.5589 4.3336s-3.4534 0.93306-5.064 0.93306h-0.0028c-3.087 0.01916-6.7181-1.2924-9.8188-2.3278l-0.54844-0.18309v5.8834l0.24384 0.11121c3.0434 1.3874 7.5514 1.9289 10.135 1.8306 1.8531-9.72e-4 5.2375-0.36382 8.225-1.8591 2.9915-1.4972 5.5845-4.2095 5.5845-8.7219 0-3.492-1.3144-5.9958-3.1534-7.7878-1.839-1.7919-4.1825-2.8912-6.2751-3.7065l-8.19e-4 -2.78e-4 -5.42e-4 -2.78e-4c-0.7937-0.30608-2.299-0.9071-3.7957-1.7218-1.4944-0.81348-2.9719-1.8536-3.7103-2.944-0.4595-0.74598-0.74286-1.5768-0.79256-2.3617 0.0044-2.3794 1.1134-3.6626 2.5496-4.4196 1.4391-0.75844 3.2316-0.91934 4.4019-0.83487 2.3554 0.17001 6.4131 1.4988 7.711 2.053l0.4131 0.1763 0.60079-1.7649h16.244v33.667h6.1256v-33.667h11.011v-5.3038h-11.011v-0.0236h-6.1256v0.0236h-21.167c-1.1756-0.28384-2.3573-0.46504-3.5188-0.47548zm-0.0076 0.83324c1.0998 0.0099 2.2408 0.18255 3.3897 0.46355l0.04882 0.01194h22.089v-0.0236h4.4592v0.0236h11.011v3.6373h-11.011v33.667h-4.4592v-33.667h-17.674l-0.50938 1.497c-1.6373-0.6495-5.1548-1.7857-7.5586-1.9592-1.3007-0.09389-3.2078 0.06293-4.8506 0.92872-1.6427 0.86579-2.9953 2.5105-2.9953 5.1701v0.01248l8.19e-4 0.01275c0.05757 0.9537 0.39266 1.914 0.92221 2.7704l0.0043 0.0071 0.0046 0.0068c0.88251 1.3074 2.4554 2.3702 4.0067 3.2147 1.5514 0.84447 3.0889 1.4569 3.8939 1.7674 2.0511 0.79916 4.2887 1.8638 5.9949 3.5264 1.7066 1.6629 2.9017 3.9047 2.9017 7.1911 0 4.1997-2.3126 6.5696-5.1242 7.9768-2.8117 1.4072-6.1217 1.7715-7.8608 1.7715h-0.0081l-0.0079 2.78e-4c-2.3569 0.09074-6.6803-0.44192-9.5207-1.6597v-4.1757c2.9689 1.0013 6.4059 2.2062 9.5395 2.1867 1.6703-1.38e-4 3.7322-0.17082 5.4337-1.0209 1.7024-0.85056 3.0197-2.4597 3.0197-5.0789 0-2.5097-1.4992-4.1903-3.3856-5.3803-1.8864-1.19-4.1886-1.9658-5.9936-2.791-0.0316-0.01445-0.06825-0.03215-0.11012-0.05153l-0.08327-0.03852h-31.147v13.888h15.237v3.8944h-20.114l-4.0998 0.02441-4.6062 2.4292c-2.1169-1.3966-3.4676-3.2698-4.1844-4.2199l-8.681-14.122-7.4585 0.02061v15.868h-4.4592v-15.854h-0.030108v-3.3848h0.030108v-14.375h-0.030108v-3.7447h10.948c3.5677 0.08126 6.7076 0.85422 8.9259 2.4856 2.2183 1.6314 3.5605 4.1028 3.5605 7.7829v0.76408c0 2.4505-0.89759 4.3723-2.2705 5.8872-1.3729 1.5149-3.2316 2.6104-5.1196 3.3248l-0.4798 0.18161c2.8628 4.4171 5.7035 8.8487 8.5524 13.275l5.4069-0.02495 4.4136 0.02631v-14.127h-0.0016v-3.6845h0.0016v-12.178h-0.0016v-3.6842h19.699v3.6842h-15.238v12.178h25.726l-0.55902-0.68108c-1.3488-1.6431-2.1767-3.5777-2.1767-5.8821 0-4.9391 2.2818-7.2701 4.9742-8.4887 2.6924-1.2186 5.8075-1.2354 7.3392-1.2596 0.09212-0.0015 0.18424-0.0019 0.27612-0.0011zm-69.487 4.1665v14.375h5.0564c2.1262 0 4.3615-0.31202 6.1129-1.3668 1.7514-1.0547 2.9736-2.9004 2.9736-5.7199v-0.76408c0-2.8548-1.6037-4.5536-3.3362-5.4513-1.7325-0.89779-3.5777-1.0725-4.3387-1.0725zm0.83324 0.83324h5.6347c0.62035 0 2.4042 0.17503 3.9555 0.9789 1.5513 0.80387 2.8862 2.1587 2.8862 4.7117v0.76408c0 2.5883-1.0288 4.0777-2.5703 5.006s-3.6409 1.2474-5.683 1.2474h-4.2232z"
                          fill="#7f2d2d"
                        />
                        <path
                          d="m12.074 28.415a0.13889 0.13889 0 0 0-0.13887 0.13887v2.7444c0 0.14744 0.0092 0.33363 0.02685 0.56092 0.0075 0.09593 0.01505 0.14935 0.02251 0.22838-0.10936-0.12435-0.20838-0.25643-0.3442-0.36102-0.21961-0.17329-0.47933-0.30974-0.77655-0.40984-0.30238-0.10184-0.65005-0.15108-1.0426-0.15108-0.93303 0-1.7021 0.31987-2.2705 0.95259-0.57313 0.63368-0.85006 1.5614-0.85006 2.762 0 1.1879 0.27019 2.1055 0.83026 2.7311a0.13889 0.13889 0 0 0 2.778e-4 2.78e-4c0.5605 0.62095 1.3297 0.93333 2.2705 0.93333 0.40109 0 0.75289-0.04911 1.0557-0.15108a0.13889 0.13889 0 0 0 0.0011-2.77e-4c0.30145-0.10434 0.56336-0.24484 0.78307-0.42259l2.78e-4 -2.78e-4c0.15299-0.12138 0.26388-0.26659 0.38055-0.40848l0.12504 0.74211a0.13889 0.13889 0 0 0 0.13698 0.11582h0.88017a0.13889 0.13889 0 0 0 0.13887-0.13887v-9.7274a0.13889 0.13889 0 0 0-0.13887-0.13887zm4.1147 0.31274c-0.21589 0-0.41232 0.06873-0.56472 0.2037-0.15962 0.14108-0.23082 0.35882-0.23082 0.61652 0 0.25398 0.07168 0.47058 0.22893 0.6149a0.13889 0.13889 0 0 0 0.0016 0.0016c0.15243 0.13508 0.34902 0.20397 0.56499 0.20397 0.20801 0 0.39953-0.0698 0.55061-0.20316 0.16622-0.14284 0.2452-0.36191 0.2452-0.61734 0-0.25872-0.07859-0.47866-0.24656-0.61815-0.1509-0.13266-0.3418-0.20207-0.54926-0.20207zm21.769 2.2974c-0.59268 0-1.1051 0.09405-1.5347 0.28751-0.42877 0.19308-0.76444 0.47963-0.99382 0.85359-0.2301 0.37098-0.34257 0.81766-0.34258 1.3296 0 0.4858 0.12341 0.92213 0.37106 1.2957a0.13889 0.13889 0 0 0 0.0011 0.0016c0.2028 0.29669 0.47137 0.50851 0.77438 0.66833-0.2149 0.14386-0.3997 0.29306-0.5262 0.45595a0.13889 0.13889 0 0 0-5.56e-4 2.78e-4c-0.16273 0.21121-0.24547 0.4645-0.24547 0.74129 0 0.24472 0.0773 0.47133 0.22675 0.66101a0.13889 0.13889 0 0 0 0.0014 0.0016c0.07898 0.097 0.16842 0.18005 0.265 0.25225-0.38353 0.1191-0.72122 0.287-0.96724 0.546a0.13889 0.13889 0 0 0-8.33e-4 8.19e-4c-0.30688 0.32804-0.46436 0.73512-0.46436 1.1951 0 0.6432 0.28692 1.1681 0.8308 1.5225 1.39e-4 1.07e-4 4.16e-4 1.66e-4 5.55e-4 2.77e-4l2.78e-4 2.78e-4c0.54504 0.35884 1.3011 0.52864 2.2629 0.52864 1.2413 0 2.2032-0.20202 2.8846-0.6271 0.68114-0.42491 1.0372-1.064 1.0372-1.8621 0-0.63231-0.23149-1.1422-0.68569-1.4801l-5.55e-4 -2.78e-4c-0.44943-0.3375-1.0807-0.49637-1.8827-0.49637h-1.2678c-0.22012 0-0.40548-0.01637-0.55468-0.04692-0.14441-0.03366-0.24505-0.08412-0.30894-0.14132-0.05428-0.05211-0.0811-0.11287-0.0811-0.21672 0-0.1504 0.04274-0.27318 0.13318-0.38733 0.09282-0.11184 0.23878-0.21972 0.42422-0.32088 0.19554 0.02818 0.38886 0.04692 0.57801 0.04692 0.87126 0 1.5746-0.20668 2.0912-0.63198a0.13889 0.13889 0 0 0 5.56e-4 -2.78e-4c0.5156-0.42886 0.77927-1.022 0.77927-1.7384 0-0.29372-0.04621-0.56556-0.1405-0.81236-0.06238-0.16329-0.15239-0.2906-0.2376-0.42422l1.1224-0.13236a0.13889 0.13889 0 0 0 0.1226-0.13779v-0.66882a0.13889 0.13889 0 0 0-0.13887-0.13887h-2.4566c-0.08928-0.02418-0.18724-0.04484-0.29945-0.06076-0.1231-0.02161-0.25236-0.03644-0.38733-0.04503h-5.55e-4c-0.12977-0.01262-0.25952-0.01926-0.3895-0.01926zm-15.918 0.02496c-0.47536 0-0.92977 0.05777-1.3624 0.17359-0.42747 0.11443-0.80802 0.25274-1.1416 0.41581a0.13889 0.13889 0 0 0-0.06673 0.17902l0.33471 0.78768a0.13889 0.13889 0 0 0 0.18607 0.07188c0.30045-0.1389 0.61842-0.25966 0.95422-0.3621 0.32789-0.10003 0.6729-0.15027 1.0367-0.15027 0.46341 0 0.80166 0.1114 1.0375 0.32115 0.22429 0.19948 0.35396 0.56938 0.35396 1.1403v0.28534l-1.108 0.04475c-1.1777 0.03389-2.0668 0.23306-2.6703 0.62195-0.60223 0.38802-0.9176 0.97021-0.9176 1.6923 0 0.47388 0.10097 0.87788 0.31138 1.201a0.13889 0.13889 0 0 0 8.33e-4 0.0014c0.21148 0.31758 0.50249 0.55755 0.862 0.71309a0.13889 0.13889 0 0 0 5.56e-4 2.77e-4c0.36127 0.1543 0.7703 0.22974 1.2236 0.22974 0.42523 0 0.7877-0.04198 1.0898-0.13046a0.13889 0.13889 0 0 0 0.0011-2.78e-4c0.30308-0.09179 0.5728-0.22642 0.80585-0.40387a0.13889 0.13889 0 0 0 0.0014-0.0011c0.17647-0.13774 0.34084-0.31992 0.5045-0.50477l0.16735 0.80504a0.13889 0.13889 0 0 0 0.13589 0.11066h0.79473a0.13889 0.13889 0 0 0 0.13887-0.13887v-4.6574c0-0.82827-0.21703-1.4606-0.67077-1.8607-0.45151-0.39809-1.1254-0.58506-2.0034-0.58506zm8.3739 0.11555c-0.33637 0-0.65847 0.04584-0.96507 0.13725-0.30676 0.08729-0.58617 0.21871-0.83541 0.39438l-2.78e-4 2.78e-4c-0.18132 0.12485-0.33217 0.28022-0.46789 0.44944l-0.12287-0.73994a0.13889 0.13889 0 0 0-0.13698-0.11609h-0.88017a0.13889 0.13889 0 0 0-0.13887 0.13887v6.8515a0.13889 0.13889 0 0 0 0.13887 0.13887h1.0904a0.13889 0.13889 0 0 0 0.13887-0.13887v-3.5885c0-0.79851 0.15937-1.3899 0.45785-1.7853 0.29105-0.38558 0.79853-0.58886 1.5705-0.58886 0.5416 0 0.91592 0.13351 1.1541 0.38218a0.13889 0.13889 0 0 0 8.34e-4 8.33e-4c0.24335 0.25001 0.37458 0.63619 0.37458 1.1848v4.3949a0.13889 0.13889 0 0 0 0.13887 0.13887h1.0771a0.13889 0.13889 0 0 0 0.13887-0.13887v-4.4635c0-0.90204-0.22654-1.5853-0.70196-2.0156l-2.78e-4 -2.78e-4c-0.47104-0.43024-1.1557-0.63632-2.031-0.63632zm15.529 0.01301c-0.70623 0-1.3248 0.14393-1.8477 0.43642-0.51843 0.2883-0.92067 0.71376-1.1989 1.2651-0.2791 0.54887-0.41554 1.2089-0.41554 1.9754 0 0.57556 0.08047 1.094 0.24438 1.5534a0.13889 0.13889 0 0 0 2.78e-4 0.0011c0.16765 0.45715 0.40313 0.8477 0.7063 1.1669a0.13889 0.13889 0 0 0 5.55e-4 5.42e-4c0.30657 0.31793 0.66998 0.56312 1.0855 0.73262a0.13889 0.13889 0 0 0 0.0016 8.19e-4c0.42039 0.16527 0.88076 0.2471 1.3776 0.2471 0.53086 0 1.0105-0.08154 1.4362-0.2471a0.13889 0.13889 0 0 0 5.56e-4 -2.78e-4c0.42884-0.16935 0.7973-0.41459 1.1004-0.7337 0.30364-0.31966 0.53522-0.71104 0.6941-1.169 0.15924-0.45904 0.23733-0.97709 0.23733-1.5523 0-0.7631-0.14119-1.422-0.42964-1.9711-0.2825-0.55023-0.68628-0.977-1.2038-1.2691l-2.78e-4 -2.78e-4c-0.51348-0.29233-1.1127-0.43644-1.7891-0.43644zm-30.312 0.11229a0.13889 0.13889 0 0 0-0.13887 0.13887v7.9579c0 0.39633-0.08928 0.63821-0.22757 0.7573-0.15579 0.13416-0.35885 0.20397-0.63198 0.20397-0.16857 0-0.31813-0.01202-0.44836-0.03526a0.13889 0.13889 0 0 0-0.0041-8.19e-4c-0.13329-0.01982-0.2645-0.04934-0.39357-0.08897a0.13889 0.13889 0 0 0-0.17956 0.13265v0.84409a0.13889 0.13889 0 0 0 0.09412 0.13128c0.13091 0.0445 0.28194 0.08142 0.45297 0.11148 0.17782 0.03548 0.38059 0.05235 0.61002 0.05235 0.46302 0 0.85469-0.08183 1.1701-0.25469 0.3129-0.17147 0.55085-0.42548 0.70251-0.74997v-2.78e-4c0.15084-0.31864 0.2235-0.69585 0.2235-1.1281v-7.9329a0.13889 0.13889 0 0 0-0.13887-0.13887zm22.288 0.7809c0.49807 0 0.85079 0.12149 1.0855 0.34854a0.13889 0.13889 0 0 0 8.33e-4 8.33e-4c0.23334 0.2221 0.35749 0.56119 0.35749 1.0497 0 0.45389-0.12037 0.77378-0.35098 0.99327-0.22952 0.21846-0.58097 0.33688-1.0798 0.33688-0.48054 0-0.8284-0.11716-1.0684-0.33823-0.23979-0.22087-0.36237-0.53334-0.36237-0.9732 0-0.48413 0.124-0.82643 0.35912-1.0576 0.24112-0.2369 0.58423-0.3602 1.0586-0.3602zm-27.946 0.23435c0.77432 0 1.2668 0.21684 1.5385 0.6366a0.13889 0.13889 0 0 0 5.55e-4 8.33e-4c0.28475 0.43364 0.43696 1.0759 0.43696 1.9307v0.18743c0 0.80301-0.15771 1.3902-0.45053 1.772-0.28682 0.37396-0.77984 0.57068-1.5254 0.57068-0.64244 0-1.0911-0.20747-1.3977-0.62927l-2.777e-4 -5.41e-4 -2.778e-4 -2.78e-4c-0.3046-0.4257-0.46599-1.0455-0.46599-1.8688 0-0.82782 0.16325-1.4656 0.47494-1.9223a0.13889 0.13889 0 0 0 2.777e-4 -5.56e-4c0.30853-0.45595 0.75305-0.67647 1.389-0.67647zm35.944 0.02522c0.48817 0 0.87228 0.10355 1.1636 0.30108 0.2953 0.20021 0.51277 0.48229 0.65748 0.8601a0.13889 0.13889 0 0 0 2.78e-4 5.56e-4c0.14551 0.37592 0.22052 0.82949 0.22052 1.3624 0 0.5372-0.07521 0.99776-0.22106 1.3825-0.14473 0.38178-0.36414 0.66789-0.66399 0.8723a0.13889 0.13889 0 0 0-8.33e-4 5.42e-4c-0.29181 0.20165-0.67054 0.3065-1.1492 0.3065-0.48325 0-0.86447-0.10503-1.156-0.3065-0.29558-0.20426-0.51341-0.49067-0.6583-0.87284-0.14583-0.38469-0.22079-0.84525-0.22079-1.3825 0-0.81383 0.16908-1.4343 0.49148-1.8737l2.78e-4 -2.77e-4c1.15e-4 -1.39e-4 1.25e-4 -4.17e-4 2.78e-4 -5.56e-4 0.32204-0.43241 0.8171-0.64962 1.5363-0.64962zm-22.558 2.5903v0.48714c0 0.64723-0.18846 1.1035-0.56065 1.4121-0.37972 0.31478-0.86612 0.4744-1.481 0.4744-0.39053 0-0.68816-0.08786-0.90838-0.25334-0.21244-0.15963-0.31898-0.39583-0.31898-0.75811 0-0.41227 0.15488-0.70432 0.49013-0.92845 0.3268-0.21848 0.94031-0.36257 1.826-0.39547a0.13889 0.13889 0 0 0 2.78e-4 0zm13.988 3.2264h1.248c0.36148 0 0.66413 0.02513 0.90567 0.07269a0.13889 0.13889 0 0 0 0.0022 2.78e-4c0.23377 0.0422 0.39573 0.1234 0.50152 0.23381 0.10044 0.10887 0.15922 0.2771 0.15922 0.52946 0 0.26513-0.08309 0.47968-0.25822 0.6686a0.13889 0.13889 0 0 0-0.0022 0.0022c-0.16934 0.19048-0.43734 0.34472-0.81453 0.45243a0.13889 0.13889 0 0 0-0.0016 5.41e-4c-0.37108 0.11112-0.85142 0.16925-1.4378 0.16925-0.59369 0-1.0385-0.09793-1.3345-0.27449a0.13889 0.13889 0 0 0-0.0011-5.42e-4c-0.29471-0.17205-0.42367-0.394-0.42367-0.72394 0-0.25778 0.05731-0.46077 0.166-0.62168 0.1148-0.16343 0.2755-0.28721 0.49501-0.37458 0.22094-0.08794 0.48577-0.13399 0.79609-0.13399zm18.12 51.362c-0.50654 0-0.94477 0.08819-1.3101 0.27097-0.36779 0.18401-0.65235 0.4761-0.84355 0.862v2.78e-4l-2.78e-4 2.78e-4c-0.19266 0.38491-0.28372 0.87264-0.28372 1.462v0.35017l-1.1712 0.31599a0.13889 0.13889 0 0 0-0.1028 0.13426v0.49989a0.13889 0.13889 0 0 0 0.13887 0.13887h1.1351v5.9a0.13889 0.13889 0 0 0 0.13887 0.13887h1.0904a0.13889 0.13889 0 0 0 0.13887-0.13887v-5.9h1.654a0.13889 0.13889 0 0 0 0.13887-0.13887v-0.81263a0.13889 0.13889 0 0 0-0.13887-0.13887h-1.654v-0.36129c0-0.52908 0.0987-0.89891 0.26609-1.1151l2.78e-4 -2.77e-4c0.17288-0.22158 0.42938-0.33362 0.81643-0.33362 0.18266 0 0.36037 0.01949 0.53407 0.05886a0.13889 0.13889 0 0 0 0.0035 8.33e-4c0.18445 0.03674 0.34863 0.07763 0.49203 0.12179a0.13889 0.13889 0 0 0 0.17224-0.08734l0.28236-0.81914a0.13889 0.13889 0 0 0-0.08734-0.17685c-0.182-0.06063-0.39104-0.11414-0.62737-0.16084-0.23837-0.04799-0.49928-0.07133-0.78279-0.07133zm61.107 0.06862a0.13889 0.13889 0 0 0-0.13887 0.13887v9.7271a0.13889 0.13889 0 0 0 0.13887 0.13887h1.0839a0.13889 0.13889 0 0 0 0.13887-0.13887v-2.4186l0.71553-0.62493 2.4514 3.1293a0.13889 0.13889 0 0 0 0.10931 0.05316h1.3136a0.13889 0.13889 0 0 0 0.10903-0.22513l-3.0303-3.8293 2.8098-2.8382a0.13889 0.13889 0 0 0-0.0987-0.23652h-1.2808a0.13889 0.13889 0 0 0-0.099 0.0415l-2.3907 2.4254a0.13889 0.13889 0 0 0-2e-3 0.0019c-0.12549 0.13224-0.27804 0.30476-0.45867 0.51861a0.13889 0.13889 0 0 0-1e-3 0.0014c-0.0797 0.09676-0.11961 0.1436-0.182 0.21862 5e-3 -0.09255 8e-3 -0.17016 0.0141-0.27286a0.13889 0.13889 0 0 0 0-2.78e-4c0.0132-0.24341 0.0201-0.44965 0.0201-0.62005v-5.051a0.13889 0.13889 0 0 0-0.13887-0.13887zm-29.917 2.6226c-0.66463 0-1.2529 0.1519-1.7538 0.45812a0.13889 0.13889 0 0 0-5.42e-4 2.78e-4c-0.49581 0.30587-0.88276 0.7455-1.1555 1.3079a0.13889 0.13889 0 0 0 0 2.78e-4c-0.26907 0.55994-0.40143 1.2191-0.40143 1.973 0 0.7718 0.14588 1.4338 0.44402 1.9795 0.29656 0.54282 0.71688 0.96104 1.2523 1.2442a0.13889 0.13889 0 0 0 0.0011 5.55e-4c0.53914 0.27833 1.1668 0.41554 1.8764 0.41554 0.49264 0 0.92149-0.03555 1.2881-0.10877 0.36912-0.07284 0.7395-0.18848 1.111-0.3461a0.13889 0.13889 0 0 0 0.08463-0.12802v-0.91244a0.13889 0.13889 0 0 0-0.19149-0.12857c-0.37029 0.15163-0.72658 0.26584-1.0684 0.34312-0.33767 0.07633-0.73039 0.11528-1.1777 0.11528-0.71364 0-1.2429-0.1984-1.6209-0.58913-0.3527-0.36458-0.54522-0.8966-0.57991-1.6025h4.8212a0.13889 0.13889 0 0 0 0.13887-0.13887v-0.64392c0-0.63826-0.1194-1.2028-0.36265-1.6876v5.56e-4c-0.24302-0.48881-0.59853-0.87391-1.0586-1.1454-0.46229-0.2728-1.0142-0.40686-1.6467-0.40686zm18.799 0c-0.70623 0-1.325 0.14392-1.848 0.43642-0.51846 0.28828-0.92063 0.71369-1.1989 1.2651-0.27911 0.54889-0.41554 1.2092-0.41554 1.9757 0 0.57561 0.0808 1.094 0.24466 1.5534a0.13889 0.13889 0 0 0 2.8e-4 0.0011c0.16765 0.45715 0.40313 0.84743 0.7063 1.1666a0.13889 0.13889 0 0 0 5.6e-4 8.33e-4c0.3066 0.31796 0.67002 0.56286 1.0855 0.73234a0.13889 0.13889 0 0 0 2e-3 5.55e-4c0.42037 0.16527 0.88049 0.24737 1.3774 0.24737 0.53085 0 1.0105-0.08153 1.4362-0.2471a0.13889 0.13889 0 0 0 5.6e-4 -2.78e-4c0.42877-0.16933 0.79751-0.41453 1.1007-0.7337 0.30367-0.31969 0.53497-0.71109 0.69383-1.169 0.15923-0.45899 0.23761-0.97677 0.23761-1.552 0-0.76313-0.14149-1.422-0.42992-1.9711-0.28248-0.5502-0.68599-0.97699-1.2035-1.2691l-2.8e-4 -2.78e-4c-0.51351-0.29231-1.1128-0.43669-1.7891-0.43669zm-39.097 0.01248c-0.47536 0-0.93002 0.05777-1.3627 0.17359-0.42747 0.11443-0.80802 0.25247-1.1416 0.41554a0.13889 0.13889 0 0 0-0.06672 0.17929l0.33498 0.78768a0.13889 0.13889 0 0 0 0.18607 0.07161c0.30048-0.13891 0.61816-0.25967 0.95394-0.3621 0.32787-0.10002 0.67317-0.15027 1.0369-0.15027 0.46341 0 0.80166 0.11167 1.0375 0.32142 0.22429 0.19948 0.35397 0.56938 0.35397 1.1403v0.28534l-1.1083 0.04476 0.0016-2.78e-4c-1.1786 0.03374-2.0681 0.23314-2.672 0.62222-0.60223 0.38802-0.9176 0.96994-0.9176 1.692 0 0.47393 0.10128 0.87793 0.31165 1.201a0.13889 0.13889 0 0 0 8.33e-4 0.0014c0.21145 0.31754 0.50219 0.55754 0.86172 0.71309a0.13889 0.13889 0 0 0 5.56e-4 2.78e-4c0.36127 0.15429 0.7703 0.23001 1.2236 0.23001 0.42523 0 0.7877-0.04225 1.0898-0.13074a0.13889 0.13889 0 0 0 0.0011-2.77e-4c0.30308-0.09179 0.5728-0.22642 0.80585-0.40387a0.13889 0.13889 0 0 0 0.0014-8.33e-4c0.17658-0.13782 0.34103-0.32032 0.50478-0.50532l0.16708 0.80531a0.13889 0.13889 0 0 0 0.13589 0.11067h0.79473a0.13889 0.13889 0 0 0 0.13887-0.13887v-4.6574c0-0.82828-0.21703-1.4606-0.67077-1.8607-0.45149-0.39807-1.1251-0.58479-2.0031-0.58479zm-5.1622 0.11555c-0.35845 0-0.68979 0.06604-0.9892 0.19963a0.13889 0.13889 0 0 0-5.56e-4 2.78e-4c-0.29022 0.13154-0.54777 0.31009-0.7695 0.53407-1.39e-4 1.38e-4 -1.18e-4 4.16e-4 -2.78e-4 5.55e-4 -0.14654 0.14535-0.25797 0.31747-0.37594 0.48443l-0.09059-0.96805a0.13889 0.13889 0 0 0-0.13833-0.12585h-0.90621a0.13889 0.13889 0 0 0-0.13887 0.13887v6.8515a0.13889 0.13889 0 0 0 0.13887 0.13887h1.0966a0.13889 0.13889 0 0 0 0.13887-0.13887v-3.6758c0-0.3399 0.05268-0.64337 0.15542-0.91326a0.13889 0.13889 0 0 0 0-5.56e-4c0.10379-0.27662 0.24521-0.50788 0.42422-0.69762a0.13889 0.13889 0 0 0 0.0011-0.0011c0.18018-0.19489 0.38616-0.34086 0.62222-0.44158a0.13889 0.13889 0 0 0 8.34e-4 -2.78e-4c0.24096-0.10496 0.49476-0.15732 0.7657-0.15732 0.12086 0 0.25148 8e-3 0.3914 0.02414 0.13965 0.01611 0.26508 0.03815 0.37648 0.06564a0.13889 0.13889 0 0 0 0.17088-0.11528l0.13806-0.96262a0.13889 0.13889 0 0 0-0.10985-0.15596c-0.12934-0.02638-0.2747-0.04573-0.43642-0.05859h-8.34e-4c-0.16076-0.01687-0.31561-0.02522-0.46409-0.02522zm13.272 0c-0.31907 0-0.6223 0.04333-0.90784 0.13101-0.28562 0.08769-0.54574 0.21788-0.77764 0.39004-0.16471 0.12228-0.30261 0.27212-0.42774 0.43425l-0.12097-0.7147a0.13889 0.13889 0 0 0-0.13698-0.11555h-0.8799a0.13889 0.13889 0 0 0-0.13887 0.13887v6.8515a0.13889 0.13889 0 0 0 0.13887 0.13887h1.0901a0.13889 0.13889 0 0 0 0.13887-0.13887v-3.6259c0-0.52632 0.0626-0.96328 0.18254-1.3101l2.78e-4 -2.77e-4c5.2e-5 -1.39e-4 -5.3e-5 -4.17e-4 0-5.56e-4 0.12312-0.34718 0.31326-0.59692 0.57502-0.76679 0.25969-0.16853 0.61445-0.25876 1.0736-0.25876 0.32002 0 0.57323 0.05948 0.76543 0.16925a0.13889 0.13889 0 0 0 0.0027 0.0014c0.19697 0.1066 0.33968 0.26284 0.43832 0.48443a0.13889 0.13889 0 0 0 8.19e-4 0.0019c0.10267 0.22175 0.15813 0.5102 0.15813 0.86688v4.4385a0.13889 0.13889 0 0 0 0.13887 0.13887h1.0836a0.13889 0.13889 0 0 0 0.13887-0.13887v-3.8323c0-0.72645 0.15384-1.2565 0.44103-1.6057 0.28338-0.34465 0.73944-0.5243 1.4102-0.5243 0.46867 0 0.79361 0.12717 1.0128 0.37241a0.13889 0.13889 0 0 0 0.0016 0.0016c0.22243 0.24091 0.3442 0.61672 0.3442 1.1498v4.4385a0.13889 0.13889 0 0 0 0.13887 0.13887h1.0771a0.13889 0.13889 0 0 0 0.13887-0.13887v-4.4885c0-0.89208-0.20648-1.5657-0.64582-1.9933l-2.71e-4 -2.78e-4c-0.43529-0.42765-1.0745-0.63334-1.89-0.63334-0.50846 0-0.9809 0.10204-1.4115 0.30677-1.8e-4 8.7e-5 -3.61e-4 1.25e-4 -5.41e-4 2.78e-4 -1.81e-4 8.6e-5 -3.61e-4 1.27e-4 -5.42e-4 2.77e-4 -0.38647 0.18024-0.69141 0.4626-0.93225 0.81317-0.1809-0.34724-0.43438-0.63117-0.78334-0.811-0.39277-0.20879-0.87329-0.30948-1.4365-0.30948zm39.352 0c-0.35845 0-0.68979 0.06604-0.98921 0.19963a0.13889 0.13889 0 0 0-5.5e-4 2.78e-4c-0.29022 0.13154-0.54777 0.31009-0.76951 0.53407-1.3e-4 1.38e-4 -1.1e-4 4.16e-4 -2.7e-4 5.55e-4 -0.14644 0.14524-0.25794 0.31729-0.37594 0.48416l-0.0906-0.96778a0.13889 0.13889 0 0 0-0.13833-0.12585h-0.90648a0.13889 0.13889 0 0 0-0.13888 0.13887v6.8515a0.13889 0.13889 0 0 0 0.13888 0.13887h1.0969a0.13889 0.13889 0 0 0 0.13888-0.13887v-3.6758c0-0.3399 0.0527-0.64337 0.15542-0.91326a0.13889 0.13889 0 0 0 0-5.56e-4c0.10382-0.27669 0.24498-0.50793 0.42394-0.69762a0.13889 0.13889 0 0 0 1e-3 -0.0011c0.18014-0.19484 0.38641-0.34085 0.6225-0.44158a0.13889 0.13889 0 0 0 8.3e-4 -2.78e-4c0.24096-0.10496 0.49476-0.15732 0.7657-0.15732 0.12087 0 0.25119 8e-3 0.39113 0.02414 0.13968 0.01611 0.26541 0.03816 0.37675 0.06564a0.13889 0.13889 0 0 0 0.17088-0.11528l0.13806-0.96262a0.13889 0.13889 0 0 0-0.10985-0.15596c-0.12934-0.02638-0.2747-0.04573-0.43642-0.05859h-8.4e-4c-0.16075-0.01687-0.31561-0.02522-0.46409-0.02522zm-22.946 0.12531a0.13889 0.13889 0 0 0-0.13345 0.17739l1.9836 6.8515a0.13889 0.13889 0 0 0 0.13345 0.10036h1.2282a0.13889 0.13889 0 0 0 0.13155-0.09439l1.3391-3.9671 2.78e-4 -8.34e-4c0.06215-0.17329 0.11762-0.3447 0.16654-0.514a0.13889 0.13889 0 0 0 2.77e-4 -0.0011c0.0481-0.17064 0.09179-0.33272 0.13128-0.48714l8.34e-4 -0.0035c0.02952-0.10408 0.05195-0.19506 0.07567-0.28833 0.02464 0.093 0.0489 0.18354 0.07568 0.28833a0.13889 0.13889 0 0 0 0.0014 0.0046c0.04377 0.14999 0.08968 0.30815 0.13779 0.47467a0.13889 0.13889 0 0 0 0.0014 0.0041c0.05266 0.16291 0.10731 0.32997 0.16437 0.50125l1.2805 3.9872a0.13889 0.13889 0 0 0 0.13209 0.09629h1.2675a0.13889 0.13889 0 0 0 0.13345-0.10009l1.9901-6.8515a0.13889 0.13889 0 0 0-0.13345-0.17766h-1.1099a0.13889 0.13889 0 0 0-0.13372 0.10171l-1.0508 3.7821a0.13889 0.13889 0 0 0-2.78e-4 8.33e-4c-0.07014 0.2587-0.13819 0.51335-0.20397 0.76381a0.13889 0.13889 0 0 0-5.55e-4 0.0022c-0.05947 0.24259-0.1123 0.46356-0.15949 0.66725-0.05247-0.20356-0.11106-0.41305-0.1763-0.62846l-8.33e-4 -0.0024c-0.06148-0.21724-0.12525-0.4264-0.19122-0.62737l-2.78e-4 -8.34e-4 -1.2805-3.9628a0.13889 0.13889 0 0 0-0.13209-0.09602h-1.1755a0.13889 0.13889 0 0 0-0.13182 0.09493l-1.3266 3.9696a0.13889 0.13889 0 0 0 0 2.78e-4c-0.04877 0.14769-0.09759 0.30563-0.1462 0.47385-0.04847 0.16362-0.09478 0.32932-0.13887 0.49718a0.13889 0.13889 0 0 0-8.19e-4 0.0027c-0.02731 0.11264-0.05189 0.21576-0.07703 0.32033-0.0031-0.01378-0.0039-0.02289-0.0071-0.03689-0.04421-0.21845-0.09917-0.44869-0.16491-0.69084l-8.19e-4 -0.0027c-0.06138-0.2461-0.12682-0.49406-0.19692-0.74428l-2.78e-4 -5.55e-4 -1.0375-3.7816a0.13889 0.13889 0 0 0-0.13399-0.10199zm-4.2308 0.87447c0.3919 0 0.69955 0.08302 0.93442 0.2395a0.13889 0.13889 0 0 0 0.0014 8.33e-4c0.23887 0.15536 0.41419 0.37126 0.5319 0.66101a0.13889 0.13889 0 0 0 8.19e-4 0.0022c0.10722 0.25173 0.16208 0.5501 0.17929 0.8818h-3.4835c0.07975-0.54457 0.2531-0.97984 0.54383-1.2846 0.31904-0.33441 0.73835-0.5007 1.2919-0.5007zm18.786 0.02523c0.48817 0 0.87197 0.10352 1.1633 0.30108 0.2953 0.20021 0.51277 0.48229 0.65748 0.8601a0.13889 0.13889 0 0 0 2.8e-4 2.78e-4c0.14551 0.37591 0.22052 0.82976 0.22052 1.3627 0 0.53721-0.0752 0.99747-0.22106 1.3822-0.14473 0.38178-0.36415 0.66762-0.66399 0.87203a0.13889 0.13889 0 0 0-8.4e-4 5.56e-4c-0.29185 0.20168-0.67058 0.30704-1.1492 0.30704-0.4832 0-0.86414-0.10552-1.1558-0.30704-0.29561-0.20428-0.5137-0.49045-0.65857-0.87258-0.14584-0.38471-0.22078-0.84498-0.22078-1.3822 0-0.81383 0.16907-1.4343 0.49148-1.8737l2.8e-4 -2.78e-4c1.1e-4 -1.38e-4 1.3e-4 -4.16e-4 2.8e-4 -5.55e-4 0.32201-0.43239 0.81737-0.64962 1.5366-0.64961zm-37.751 2.7311v0.48687c0 0.64723-0.18846 1.1035-0.56065 1.4121-0.37972 0.31478-0.86612 0.4744-1.481 0.4744-0.39053 0-0.68785-0.08783-0.9081-0.25334-0.21248-0.15966-0.31925-0.39563-0.31925-0.75784 0-0.41227 0.15488-0.7046 0.49013-0.92872 0.3268-0.21848 0.94031-0.3623 1.826-0.3952a0.13889 0.13889 0 0 0 2.77e-4 -2.78e-4z"
                          fill="#212121"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Github <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "70%" }}
                    />
                  </div>
                  <div className="flex-row d-flex pt-1">
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={wh}
                        height={wh}
                        className="py-1"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#F34F29"
                          d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
                        />
                      </svg>
                    </div>
                    <div className="px-1">
                      <svg
                        width={wh}
                        height={wh}
                        className="py-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <g fill="#181616">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                          />
                          <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div id="journal" className="text-left paddsection">
          <div className="container">
            <div className="section-title text-center">
              <h2>Experience</h2>
            </div>
          </div>

          <div className="container">
            <div className="journal-block">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="journal-info">
                    <a href="blog-single.html">
                      <img src={bp1} className="img-responsive" alt="img" />
                    </a>

                    <div className="journal-txt">
                      <h4>
                        <a href="blog-single.html">
                          SO LETS MAKE THE MOST IS BEAUTIFUL
                        </a>
                      </h4>
                      <p className="separator">
                        To an English person, it will seem like simplified
                        English
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="journal-info">
                    <a href="blog-single.html">
                      <img src={bp2} className="img-responsive" alt="img" />
                    </a>

                    <div className="journal-txt">
                      <h4>
                        <a href="blog-single.html">
                          WE'RE GONA MAKE DREAMS COMES
                        </a>
                      </h4>
                      <p className="separator">
                        To an English person, it will seem like simplified
                        English
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="journal-info">
                    <a href="blog-single.html">
                      <img src={bp3} className="img-responsive" alt="img" />
                    </a>

                    <div className="journal-txt">
                      <h4>
                        <a href="blog-single.html">
                          NEW LIFE CIVILIZATIONS TO BOLDLY
                        </a>
                      </h4>
                      <p className="separator">
                        To an English person, it will seem like simplified
                        English
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <section id="journal" className="resume section-show pt-3">
          <div className="container">
            <div className="section-title">
              <h2 className="text-center">Resume</h2>
              <h3 className="lead text-center">
                Download PDF version
                <a
                  className="px-2"
                  href="https://drive.google.com/file/d/1Vcae1OLvenIFudZrlXgtWKU4Eav-Mnvw/view?usp=drive_link"
                  target="_blank"
                >
                  here.
                </a>
              </h3>
            </div>
            <div className="journal-block">
              <div className="row ">
                <div className="col-lg-6 ">
                  <h4
                    className="text-uppercase py-2"
                    style={{ fontFamily: "poppins" }}
                  >
                    Professional Experience
                  </h4>
                  <div className="resume-item ">
                    <h4>Associate Software Developer</h4>
                    <h5>August 2023 - Present</h5> <br />
                    <p>
                      <a
                        style={{ color: "white" }}
                        href="https://laitkor.com"
                        target="_blank"
                      >
                        <em className="text-black">
                          Laitor labs | Laitkor Consultancy Services Pvt. Ltd.
                        </em>
                      </a>
                    </p>
                    <p style={{ textAlign: "end" }}>
                      <em>Lucknow, Uttar Pradesh, India.</em>
                    </p>
                    <ul>
                      <li>
                        As an Associate Software Developer, I've contributed to
                        diverse projects, engaging in the full project
                        lifecycle.
                      </li>
                      <li>
                        My responsibilities spanned web and software
                        development, collaborating with cross-functional teams
                        to deliver high-quality solutions.
                      </li>
                      <li>
                        This experience has refined my technical skills and
                        strengthened my ability to adapt in dynamic work
                        environments.
                      </li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>Python Developer Intern</h4>
                    <h5>March 2023 - July 2023</h5> <br />
                    <br />
                    <p>
                      <a
                        style={{ color: "white" }}
                        href="https://skyview.com/"
                        target="_blank"
                      >
                        <em className="text-black">
                          Skyview Smart Solution
                          <br />
                        </em>
                      </a>
                    </p>
                    <p style={{ textAlign: "end" }}>
                      <em className="text-black">
                        Lucknow, Uttar Pradesh, India.
                      </em>
                    </p>
                    <ul>
                      <li>
                        As a Python Developer Intern, I focused on real-time
                        database connectivity using JavaScript and Django for
                        IoT. I also contributed to an E-commerce WebApp,
                        developing modules like Cart, Products, Wishlist, and
                        Seller functionalities.
                      </li>
                      <li>
                        Learn't the corporate company cuture and it's working.
                      </li>
                      
                    </ul>
                  </div>
                  <h4
                    className="text-uppercase py-2"
                    style={{ fontFamily: "poppins" }}
                  >
                    Education
                  </h4>
                  <div className="resume-item">
                    <h4>Bachelor in Computer Applications</h4>
                    <h5>2020 - 2023</h5>
                    <p>
                      <a
                        style={{ color: "white" }}
                        href="https://www.srmu.ac.in/"
                        target="_blank"
                      >
                        <em className="text-black">
                          Shri Ramswaroop Memorial University, Lucknow{" "}
                        </em>
                      </a>
                    </p>

                    <p>Aggregate Percentage : 78.95%</p>
                    <p />
                  </div>
                  <div className="resume-item">
                    <h4>Senior School</h4>
                    <h5>2019 - 2020</h5>
                    <p>
                      <a
                        style={{ color: "white" }}
                        href="https://raebareli.kvs.ac.in/"
                        target="_blank"
                      >
                        <em className="text-black">
                          Kendriya Vidyalaya, Raebareli
                        </em>
                      </a>
                    </p>
                    <p>Aggregate Percentage : 79.46%</p>
                  </div>
                  <div className="resume-item">
                    <h4>High School</h4>
                    <h5>2016 - 2017</h5>
                    <p>
                      <a
                        style={{ color: "white" }}
                        href="http://www.nndmbeershivaschool.com/"
                        target="_blank"
                      >
                        <em className="text-black">
                          Kendriya Vidyalaya, Raebareli
                        </em>
                      </a>
                    </p>
                    <p>Aggregate Percentage : 80.00%</p>
                  </div>
                  <h4
                    className="text-uppercase py-2"
                    style={{ fontFamily: "poppins" }}
                  >
                    Interests
                  </h4>
                  <div>
                    <p id="interests" className="mx-1">
                      Music
                    </p>
                    <p id="interests" className="mx-1">
                      Instruments
                    </p>
                    <p id="interests" className="mx-1">
                      Event Management
                    </p>
                    <p id="interests" className="mx-1">
                      Web Development
                    </p>
                    <p id="interests" className="mx-1">
                      Machine Learning
                    </p>
                    <p id="interests" className="mx-1">
                      Deep Learning
                    </p>
                    <p id="interests" className="mx-1">
                      UI/UX
                    </p>
                    <p id="interests" className="mx-1">
                      Sports
                    </p>
                    <p id="interests" className="mx-1">
                      Science Fiction Movies
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4
                    className="text-uppercase py-2"
                    style={{ fontFamily: "poppins" }}
                  >
                    Technical Skills
                  </h4>
                  <div>
                    <p id="interests" className="mx-1">
                      Django
                    </p>
                    <p id="interests" className="mx-1">
                      DRF
                    </p>
                    <p id="interests" className="mx-1">
                      Matplotlib
                    </p>
                    <p id="interests" className="mx-1">
                      Numpy
                    </p>
                    <p id="interests" className="mx-1">
                      Keras
                    </p>

                    <p id="interests" className="mx-1">
                      Tensorflow
                    </p>
                    <p id="interests" className="mx-1">
                      Python
                    </p>
                    <p id="interests" className="mx-1">
                      React.js
                    </p>
                    <p id="interests" className="mx-1">
                      Java C/C++
                    </p>
                    <p id="interests" className="mx-1">
                      Git
                    </p>
                    <p id="interests" className="mx-1">
                      Github
                    </p>
                    <p id="interests" className="mx-1">
                      MySQL
                    </p>
                    <p id="interests" className="mx-1">
                      PostgreSQL
                    </p>
                    <p id="interests" className="mx-1">
                      MongoDB
                    </p>
                    <p id="interests" className="mx-1">
                      Figma
                    </p>
                    <p id="interests" className="mx-1">
                      Canva
                    </p>
                    <p id="interests" className="mx-1">
                      JS
                    </p>
                    <p id="interests" className="mx-1">
                      HTML
                    </p>
                    <p id="interests" className="mx-1">
                      CSS
                    </p>
                  </div>
                  <h4
                    className="text-uppercase py-2"
                    style={{ fontFamily: "poppins" }}
                  >
                    Projects
                  </h4>
                  <div className="resume-item">
                    <h4>Ecommerce Web Application</h4>
                    <ul>
                      <li>
                        Created Ecommerce Web App using Dhango, DRF and React.js
                      </li>
                      <li>
                        Sleek and intuitive user interface for easy navigation
                        and pleasant shopping experience. Created a&nbsp;web
                        platform where users can enjoy listening music, watching
                        movies/web series, upload/download albums, rent albums
                        on temporary basis or buy subscriptions
                      </li>
                      <li>
                        Comprehensive product catalog with detailed descriptions
                        and images. Paytm payment gateway integration and Stripe
                        API integration
                      </li>
                      <li>
                        Secure checkout process supporting multiple payment
                        options.
                      </li>
                      <li>
                        Seller dashboard for easy inventory management, order
                        processing, and product addition.
                      </li>
                      <li>
                        Streamlined interface for adding new products, including
                        descriptions, images, and pricing.
                      </li>
                      <li>
                        Order management tools to process incoming orders
                        efficiently and update order status.
                      </li>
                      <li>
                        Project Link
                        <a
                          href="https://ecommerce-django.netlify.app/"
                          target="_blank"
                        >
                          <i
                            className="fa fa-external-link px-2"
                            style={{ fontSize: "small", color: "#b8a07e" }}
                          />
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>Chatbot</h4>
                    <ul>
                      <li>
                        Created a web-based chatbot application leveraging
                        Django, a high-level Python web framework, and Django
                        Channels, an extension for handling WebSockets and
                        real-time communication.
                      </li>
                      <li>
                        Implemented real-time bidirectional communication
                        between the client (web browser) and the server,
                        enabling instant responses and dynamic updates.
                      </li>
                      <li>
                        Integrated natural language processing (NLP) libraries
                        create deep learning model trained on 80K lines movie
                        dialogues to enable the chatbot to understand and
                        respond to user queries.
                      </li>
                      <li>
                        Designed an intuitive user interface allowing users to
                        interact with the chatbot seamlessly, providing a
                        user-friendly experience.
                      </li>

                      <li>
                        Technology Used: Machine/Deep Learning, Django, Python,
                        SQLite (Database), HTML/CSS, JavaScript, Bootstrap
                      </li>
                      <li>
                        Project Link
                        <a
                          href="https://github.com/ujjwal1102/chatbot-webapplication"
                          target="_blank"
                        >
                          <i
                            className="fa fa-external-link px-1"
                            style={{ fontSize: "small", color: "#b8a07e" }}
                          />
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>Library Management System</h4>
                    <ul>
                      <li>Developed a website</li>
                      <li>
                        Maintains the information about the books present in the
                        library, numbers of books issued/returned, their
                        authors, etc
                      </li>
                      <li>
                        A separate administrator panel to update and manage all
                        the information like issuing/returning a book etc
                      </li>
                      <li>
                        Technology Used : Django, HTML, CSS (svg animations),
                        JavaScript, MySQL (Database), Community servers (
                        MySQL),
                      </li>
                      <li>
                        Project Link
                        <a
                          href="https://github.com/ujjwal1102/"
                          target="_blank"
                        >
                          <i
                            className="fa fa-external-link px-2"
                            style={{ fontSize: "small", color: "#b8a07e" }}
                          />
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                  {/* <div className="resume-item">
                    <h4>All Basic Integrated Apps</h4>
                    <ul>
                      <li>Android development in Java from scratch</li>
                      <li>
                        Created a single android application consisting of 34
                        small basic applications describing basics of android
                        development
                      </li>
                      <li>
                        For e.g. it includes different types of layouts and
                        menus in android, a web browser, a cool music player,
                        server registraton etc
                      </li>
                      <li>
                        Technology used : Java, MySQL (Database), Android Studio
                        (IDE)
                      </li>
                      <li>
                        Project Link
                        <a
                          href="https://github.com/rajat-saxena14/All-Integrated-Apps"
                          target="_blank"
                        >
                          <i
                            className="fa fa-external-link"
                            style={{ fontSize: "small", color: "#b8a07e" }}
                          />
                        </a>
                      </li>
                       <li>Project Link : <a id="#btnAndroid" onclick="showProject(event, 'android')" style="color: #0563bb;" onmouseover="this.style.color='#007bff';" 
              onmouseout="this.style.color='#0563bb';"
              >Project Showcase</a> </li> 
                    </ul>
                  </div>
                  <h3 className="journal-txt">
                    Trainings/Certifications{" "}
                    <a
                      href="https://bit.ly/rajatCertifications"
                      target="_blank"
                    >
                      <i
                        className="fa fa-external-link"
                        style={{ fontSize: "large", marginLeft: 5 }}
                      />
                    </a>
                  </h3>
                  <span className="certi">
                    <ul>
                      <li>
                        <a
                          style={{ color: "white" }}
                          href="https://www.credly.com/users/rajat-saxena.a59e5db8/badges"
                          target="_blank"
                        >
                          Microsoft Certified : Azure AI Fundamentals [AI-900],
                          Azure Fundamentals [AZ-900], Azure Developer Associate
                          [AZ-204]
                        </a>
                        <p id="interests">
                          <a
                            style={{ color: "white" }}
                            href="https://learn.microsoft.com/en-us/users/rajatsaxena-2871/transcript/vpkqs3jyr4rgme7"
                            target="_blank"
                          >
                            Transcript
                          </a>
                        </p>
                      </li>
                      <li>
                        <a
                          style={{ color: "white" }}
                          href="https://www.credential.net/9819a00c-b0e4-4cd3-95c9-c47311188235?_ga=2.115725894.1534726540.1646451759-1054438425.1646451759"
                        >
                          Google Certified : Associate Cloud Engineer,
                        </a>
                        <p> Professional Data Engineer (on-going)</p>
                        <p id="interests">
                          <a
                            style={{ color: "white" }}
                            href="https://partner.cloudskillsboost.google/public_profiles/d9a06f67-8ff9-4cca-b7ea-0db4e27b05f8"
                            target="_blank"
                          >
                            Public Profile - 2
                          </a>
                        </p>
                      </li>
                      <li>
                        FDP on Python Programming by Amity University [conducted
                        remotely by IIT Bombay]
                      </li>
                      <li>PL/SQL certified training by NIIT Limited</li>
                      <li>C training by Spoken Tutorial [IIT Bombay]</li>
                      <li>Linux training by Spoken Tutorial [IIT Bombay]</li>
                      <li>
                        Machine Learning and Artificial Intelligence by Technex,
                        IIT(BHU)
                      </li>
                      <li>
                        Internshala Training Captain in Internshala Student
                        Partner(ISP) 19 during Sept. 2020 to Nov. 2020
                      </li>
                      <li>
                        Certificate of completion of open access JP MORGAN CHASE
                        &amp; CO. Virtual Software Engineering Experience
                        Program with Forage [InsideSherpa]
                      </li>
                    </ul>
                  </span> */}
                  <h4
                    className="text-uppercase py-2"
                    style={{ fontFamily: "poppins" }}
                  >
                    Languages
                  </h4>
                  <div className="languages">
                    <h5>
                      English
                      <br />
                      <p>Professional Working Proficiency</p>
                    </h5>

                    <h5>
                      Hindi
                      <br />
                      <p>Native or Bilingual Proﬁciency</p>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="contact" className="paddsection">
          <div className="container">
            <div className="contact-block1">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-contact">
                    <h2 className="mb-30">GET IN TOUCH</h2>

                    <ul className="contact-details">
                      <li>
                        <span>Lucknow, Uttar Pradesh</span>
                      </li>
                      <li>
                        <span>India</span>
                      </li>
                      <li>
                        <span>+91 8543053161</span>
                      </li>
                      <li>
                        <span>ujjwal.srivastava1102@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        width="100%"
                        height="200px"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Lucknow,+Uttar+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder={0}
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="footer" className="text-center">
        <div className="container">
          <div className="socials-media text-center">
            <ul className="list-unstyled">
              <li>
                <a
                  id="facebook-icon"
                  href="https://www.facebook.com/profile.php?id=100010600869272"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  id="twitter-icon"
                  href="https://twitter.com/ujjwals93571574"
                  target="_blank"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  id="instagram-icon"
                  href="https://www.instagram.com/_.ujjwal_srivastava._/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  id="linkedin-icon"
                  href="https://www.linkedin.com/in/ujjwalsrivastava1102/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default MainPage;
