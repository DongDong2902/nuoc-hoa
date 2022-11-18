import React, { useEffect } from 'react';
import About from '../components/About/About';
import Step from '../components/Step/Step';
import Products from '../components/Product/Products';
import Questions from '../components/Question/Questions';
import Contact from '../components/Contact/Contact';

const Home = () => {
  useEffect(() => {
    document.title = 'PerfumeForYou - Thiên đường nước hoa';
  }, []);

  return (
    <div>
      <main className="main">
        <section className="home" id="home">
          <div className="home__container container grid">
            <img src="assets/img/bg-header.webp" alt="" className="home__img" />

            <div className="home__data">
              {/*<h1 className="home__title">*/}
              {/*  PERFUME for you <br /> Tạo nên sự tự tin bạn cần*/}
              {/*</h1>*/}
              <img src="/LOGO.png" alt="" className="home__title-img" />
              <p className="home__description">
                Nước hoa tạo nên tính cách nhất định khiến người khác nhận ra mùi hương của bạn.
              </p>
              <a href="#about" className="button button--flex">
                Khám phá <i className="ri-arrow-right-down-line button__icon" />
              </a>
            </div>

            <div className="home__social">
              <span className="home__social-follow">Follow Us</span>

              <div className="home__social-links">
                <a
                  href="https://www.facebook.com/perfumeforyouvn/"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-facebook-fill" />
                </a>
                <a
                  href="https://www.instagram.com/perfumeforyou.vn"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-instagram-line" />
                </a>
                <a
                  href="https://www.tiktok.com/@perfumeforyou.vn"
                  target="_blank"
                  className="home__social-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-tiktok"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Products />
        <Step />
        <Questions />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
