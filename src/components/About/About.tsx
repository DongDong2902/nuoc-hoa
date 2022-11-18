import React from 'react';

const About = () => {
  return (
    <div>
      <section className="about section container" id="about">
        <div className="about__container grid">
          <img src="assets/img/su-nhon-mui.jpg" alt="" className="about__img" />

          <div className="about__data">
            <h2 className="section__title about__title">
              Chúng tôi là ai & <br /> Tại sao chọn chúng tôi?
            </h2>

            <p className="about__description">
              <strong>PERFUME FOR YOU</strong> có hơn 4000+ đánh giá thực tế và nhận được sự tin
              tưởng từ khách hàng. Chúng tôi luôn cố gắng nâng cao chất lượng sản phẩm và dịch vụ để
              khách hàng có những trải nghiệm tốt nhất.
            </p>

            <div className="about__details">
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                Sản phẩm chính hãng, đảm bảo nguồn gốc xuất xứ.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                Mức giá tốt nhất trên thị trường tại mọi thời điểm.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                Giao hàng an toàn và nhanh chóng.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                Đền bù 200% nếu phát hiện hàng giả.
              </p>
            </div>

            <a href="#products" className="button--link button--flex">
              Mua ngay <i className="ri-arrow-right-down-line button__icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
