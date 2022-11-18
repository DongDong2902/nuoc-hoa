import React, { useEffect, useState } from 'react';
import './styles/Variables.scss';
import './styles/Base.scss';
import './styles/Theme.scss';
import './styles/Layout.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/Button.scss';
import './styles/About.scss';
import './styles/Step.scss';
import './styles/Product.scss';
import './styles/View.scss';
import './styles/Question.scss';
import './styles/Contact.scss';
import './styles/Footer.scss';
import './styles/Scroll.scss';
import './styles/BreakPoint.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'react-multi-carousel/lib/styles.css';
import ViewProduct from './pages/ViewProduct';
import Navbar from './components/Navbar/Navbar';
import ScrollReveal from 'scrollreveal';
import Footer from './components/Footer/Footer';
import Provider from './pages/Provider';
import { registerOptionalParams } from './Helper/Helper';
import Search from './pages/Search';

export const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
  // reset: true
});

function App() {
  const [sections, setSections] = useState<any>();
  useEffect(() => {
    sr.reveal(`.home__data`);
    sr.reveal(`.home__img`, { delay: 500 });
    sr.reveal(`.home__social`, { delay: 600 });
    sr.reveal(`.about__img`, { origin: 'left' });
    sr.reveal(`.about__data`, { origin: 'right' });
    // sr.reveal(`.product__carousel, .steps__card, .product__card, .questions__group, .footer`, {
    //   interval: 100
    // });
    setSections(document.querySelectorAll<HTMLElement>('section[id]'));
  }, []);

  const scrollActive = () => {
    const scrollY = window.pageYOffset;
    if (sections) {
      sections.forEach(
        (current: {
          offsetHeight: any;
          offsetTop: number;
          getAttribute: (arg0: string) => any;
        }) => {
          const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // @ts-ignore
            document
              .querySelector('.nav__menu a[href*=' + sectionId + ']')
              .classList.add('active-link');
          } else {
            // @ts-ignore
            document
              .querySelector('.nav__menu a[href*=' + sectionId + ']')
              .classList.remove('active-link');
          }
        }
      );
    }
  };

  const handleScrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 400) {
      // @ts-ignore
      scrollUp.classList.add('show-scroll');
    } else {
      // @ts-ignore
      scrollUp.classList.remove('show-scroll');
    }
  };

  window.addEventListener('scroll', scrollActive);
  window.addEventListener('scroll', handleScrollUp);

  return (
    <Provider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        {registerOptionalParams('/product/:page?', <Search />)}
      </Routes>
      <Footer />
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line scrollup__icon" />
      </a>
    </Provider>
  );
}

export default App;
