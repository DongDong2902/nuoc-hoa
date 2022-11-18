import React, { useRef } from 'react';

export const gotoFB = () => {
  window.open('https://www.facebook.com/perfumeforyouvn');
};

const Questions = () => {
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const myRef5 = useRef(null);
  const myRef6 = useRef(null);

  const handleClick = (ref: any) => {
    const item = ref.current;
    // @ts-ignore
    const content = item.querySelector('.questions__content');

    // @ts-ignore
    if (item.classList.contains('accordion-open')) {
      // @ts-ignore
      item.classList.remove('accordion-open');
      content.removeAttribute('style');
    } else {
      // @ts-ignore
      item.classList.add('accordion-open');
      content.style.height = content.scrollHeight + 'px';
    }
  };

  return (
    <div>
      <section className="questions section" id="faqs">
        <h2 className="section__title-center questions__title container">
          Những câu hỏi thường gặp
        </h2>

        <div className="questions__container container grid">
          <div className="questions__group">
            <div className="questions__item" ref={myRef1} onClick={() => handleClick(myRef1)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">Hàng Auth tuồn là gì?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Hàng Auth tuồn là hàng Auth, nhưng trong quá trình sản xuất bị một số nhỏ về mác,
                  cắt chỉ tuy nhiên chất liệu hay kiểu dáng vẫn hoàn toàn xịn 100%, giá bán sẽ thấp
                  hơn hàng authentic xuất nhập khẩu.
                  <br />
                  <br />
                  Hàng auth tuồn có giá rẻ hơn hàng Auth xuất khẩu vì không phải chịu thuế hay các
                  chi phí khác chứ không phải là chất liệu kém chất lượng.
                </p>
              </div>
            </div>

            <div className="questions__item" ref={myRef2} onClick={() => handleClick(myRef2)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">Hàng Like Auth là gì?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Hàng Like Auth là hàng fake, được làm giả với kiểu dáng, các chi tiết giống hệt
                  hàng Auth, được bán với giá rẻ hơn rất nhiều so với hàng auth. Điều duy nhất khác
                  nhau giữa hai loại hàng này là chất liệu. Hàng Like Auth có chất liệu kém chất
                  lượng, nhanh hỏng. Tuy nhiên, nếu bạn chỉ nhìn bề ngoài mà không có kiến thức về
                  sản phẩm chính hãng của thương hiệu thì rất khó để phân biệt giữa hàng Auth và
                  hàng Like Auth.
                </p>
              </div>
            </div>

            <div className="questions__item" ref={myRef3} onClick={() => handleClick(myRef3)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">Tại sao nên mua hàng Auth tuồn?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Hàng Auth thường có chất lượng tốt, thiết kế chuẩn và chắc chắn, tinh xảo, sử dụng
                  bền bỉ và có giá thành không quá cao.
                  <br />
                  Bạn được trải nghiệm sản phẩm với chất lượng tốt nhất, cũng sẽ tự tin vì mang trên
                  mình những món đồ chính hãng.
                  <br />
                  Đặc biệt, nếu bạn là một tín đồ hàng Auth, bạn sẽ không bao giờ động đến hàng
                  fake. Bởi vì nó vô tình tiếp tay cho việc buôn bán và sản xuất hàng giả.
                </p>
              </div>
            </div>
          </div>

          <div className="questions__group">
            <div className="questions__item" ref={myRef4} onClick={() => handleClick(myRef4)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">Chính sách đổi trả?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Hàng hóa PerfumeForYou bán ra đảm bảo là hàng chính hãng 100%.Chúng tôi cam kết
                  không bán hàng giả, hàng nhái, hàng không đảm bảo chất lượng. Các trường hợp được
                  đổi lại hàng hóa:
                  <br />
                  - Với những sản phẩm lỗi kết cấu sản phẩm do quá trình sản xuất của hãng, hay lỗi
                  do vận chuyển dẫn đến việc sản phẩm bị méo mó, thay đổi hình dạng, hư hỏng bộ phận
                  vòi xịt, ống xịt, bị nứt, vỡ.
                  <br />
                  - Đối với những sản phẩm đổi vì lý do cá nhân (tặng, được tặng), sản phẩm đổi chỉ
                  được áp dụng trong thời gian 10 ngày kể từ khi sản phẩm được bán ra. Sản phẩm đổi
                  phải đảm bảo chưa được sửa.
                  <br />
                  - Đối với hàng Full seal thì phải còn nguyên seal, đối với các sản phẩm Giftset,
                  Tester phải đảm bảo còn nguyên hộp, sản phẩm chưa bị can thiệp và sử dụng.
                  <br />- Sản phẩm sẽ được chúng tôi kiểm tra lại để đảm bảo sản phẩm là hàng hóa
                  chúng tôi phân phối.
                </p>
              </div>
            </div>

            <div className="questions__item" ref={myRef5} onClick={() => handleClick(myRef5)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">Phương thức vận chuyển thế nào?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Đối với các đơn trong phạm vi Thành phố Hồ Chí Minh, các đơn hàng có thể chọn
                  phương thức thanh toán COD hoặc chuyển khoản perfumeforyou cam kết các quận trung
                  tâm sẽ được ship hàng trong 3 giờ kể từ khi chốt đơn đối với những đơn hàng trong
                  ngày từ khung giờ 9.00 am đến 15.00 pm. Nếu bạn muốn ship hẹn giờ, liên hệ hotline
                  058.2222.000 hoặc{' '}
                  <span style={{ fontWeight: '600', textDecoration: 'underLine' }} onClick={gotoFB}>
                    fangape facebook
                  </span>{' '}
                  chúng tôi để được hỗ trợ.
                  <br />
                  <br />
                  Đối với các đơn hàng Tỉnh (ngoài Thành phố Hồ Chí Minh), Sau khi chúng tôi xác
                  nhận đơn hàng của bạn sẽ được đóng gói và vận chuyển trong vòng 2-4 ngày (không
                  ngày lễ).
                </p>
              </div>
            </div>

            <div className="questions__item" ref={myRef6} onClick={() => handleClick(myRef6)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">Các sản phẩm có sẵn không?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Các sản phẩm hiện thị giá và size (dung tích) với thanh công cụ thanh toán màu đỏ
                  có nghĩa là hàng hóa đang có sẵn. Những sản phẩm với size bị gạch ngang và thanh
                  công cụ màu trắng hiển thị hết hàng có nghĩa là sản phẩm đang hết. Chúng tôi luôn
                  minh bạch số lượng sản phẩm và đa dạng dạng hóa có sẵn để khách hàng có thể trải
                  nghiệm mua sắm một cách an toàn và tiện lợi. Bạn cũng có thể liên hệ với chúng tôi
                  về các sản phẩm bạn đang tìm kiếm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
