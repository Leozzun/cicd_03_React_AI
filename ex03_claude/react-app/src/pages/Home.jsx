import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const visualSlides = [
  { className: 'bg1' },
  { className: 'bg2' },
  { className: 'bg3' },
  { className: 'bg4' },
  { className: 'bg5' },
];

const products = [
  { className: 'pro01', icon: '/img/round_ico01.png', label: '벽면' },
  { className: 'pro02', icon: '/img/round_ico02.png', label: '바닥' },
  { className: 'pro03', icon: '/img/round_ico03.png', label: '도어' },
  { className: 'pro04', icon: '/img/round_ico04.png', label: '몰딩' },
  { className: 'pro05', icon: '/img/round_ico05.png', label: '시트' },
  { className: 'pro06', icon: '/img/round_ico06.png', label: '가구' },
];

const caseList = [
  { img: '/img/demo_01.jpg', category: '시트', title: '목질변멱재 우드' },
  { img: '/img/demo_02.jpg', category: '시트', title: '목질변멱재 우드' },
  { img: '/img/demo_03.jpg', category: '시트', title: '목질변멱재 우드' },
  { img: '/img/demo_04.jpg', category: '시트', title: '목질변멱재 우드' },
];

const notices = [
  { title: '성공건축자재 홈페이지를 오픈하였습니다.', date: '2018-08-01', isTop: true },
  { title: '성공건축자재 홈페이지를 오픈하였습니다.', date: '2018-08-01' },
  { title: '성공건축자재 홈페이지를 오픈하였습니다.', date: '2018-08-01' },
];

export default function Home() {
  return (
    <Main id="main" className="animate">
      {/* Visual Section */}
      <VisualSection className="visual">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ nextEl: '.nbt1', prevEl: '.pbt1' }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          loop={true}
          className="swiper1"
        >
          {visualSlides.map((slide, i) => (
            <SwiperSlide key={i} className={slide.className}>
              <div className="txt">
                <div className="slogun">
                  <p className="rale">new dream</p>
                  <strong className="rale-exbold">we build</strong>
                </div>
                <div className="desc">
                  <p>최고의 제품과 최고의 서비스로 <br />고객만족을 실현합니다.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="nbt1 swiper-button-next"></div>
          <div className="pbt1 swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </VisualSection>

      {/* Product Section */}
      <Section className="section">
        <div className="size">
          <div className="section_title">
            <h3>product</h3>
            <p>지속적인 변화와 혁신으로 더 나은 세상을 만들어가겠습니다</p>
          </div>
          <RoundWrap className="round_wrap">
            <Swiper
              modules={[Navigation]}
              navigation={{ nextEl: '.nbt2', prevEl: '.pbt2' }}
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              className="swiper2"
            >
              {products.map((p, i) => (
                <SwiperSlide key={i} tag="a" href="#" className={p.className}>
                  <div className="round">
                    <div className="overlay">
                      <div className="tb">
                        <div className="tbc">
                          <p className="ico"><img src={p.icon} alt={p.label} /></p>
                          <p>{p.label}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="nbt2 swiper-button-next"></div>
            <div className="pbt2 swiper-button-prev"></div>
          </RoundWrap>
        </div>
      </Section>

      {/* Construction Case Section */}
      <Section className="section color">
        <div className="size">
          <div className="section_title">
            <h3>construction case</h3>
            <p>지속적인 변화와 혁신으로 더 나은 세상을 만들어가겠습니다</p>
          </div>
          <div className="case">
            <div className="case_list">
              <ul className="clear">
                {caseList.map((item, i) => (
                  <li key={i}>
                    <a href="#">
                      <p className="imgs" style={{ backgroundImage: `url('${item.img}')` }}>
                        <img src={item.img} alt="기본이미지" />
                      </p>
                      <div className="txt">
                        <p>{item.category}</p>
                        <div className="subject">
                          <b>{item.title}</b>
                          <span>+</span>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="list_btn_more">
              <a href="#">더보기 <img src="/img/plus_w.png" alt="더보기" /></a>
            </div>
          </div>
        </div>
      </Section>

      {/* BBS Section */}
      <Section className="section">
        <div className="size">
          <div className="bbs_wrap">
            <div className="clear">
              {/* 공지사항 */}
              <div className="bbs_box not">
                <strong>공지사항</strong>
                <ul>
                  {notices.map((n, i) => (
                    <li key={i}>
                      <a href="#" className="important">
                        <div className="subject">
                          {n.isTop && <img src="/img/ico_top.png" alt="TOP공지" />}
                          {n.title}
                        </div>
                        <span className="date">{n.date}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="btn_more">
                  <a href="#">더보기 <img src="/img/plus_r.png" alt="더보기" /></a>
                </div>
              </div>

              {/* 고객센터 */}
              <div className="bbs_box cs">
                <strong>고객센터</strong>
                <p className="ico"><img src="/img/cs_ico.png" alt="고객센터" /></p>
                <a href="tel:02-1234-5678">02-1234-5678</a>
                <div className="desc">
                  <p>FAX: 02-1234-5678</p>
                  <p>E-MAIL: codro.ceo@codro.it</p>
                </div>
              </div>

              {/* 견적문의 */}
              <div className="bbs_box inq">
                <strong>견적문의</strong>
                <p className="ico"><img src="/img/inq_ico.png" alt="견적문의" /></p>
                <div className="desc">
                  항상 최고의 품질을 제품들을 제공하기 위해 <br />
                  성공건축자재는 항상 최선을 다하겠습니다.
                </div>
                <a href="#">견적문의하기 <img src="/img/plus_w.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  padding-top: 90px;

  .size {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }

  .rale { font-family: 'Raleway', sans-serif; font-weight: 400; }
  .rale-exbold { font-family: 'Raleway', sans-serif; font-weight: 800; }
  .cr { color: #f37339; }
`;

const VisualSection = styled.div`
  width: 100%;
  position: relative;

  .swiper-slide {
    height: 750px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .bg1 { background-image: url('/img/visual01.jpg'); }
  .bg2 { background-color: #ccc; }
  .bg3 { background-color: #aac; }
  .bg4 { background-color: #fa3; }
  .bg5 { background-color: #7ac; }

  .txt {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .slogun {
    padding: 30px 50px 0;
    color: #f37339;
    text-transform: uppercase;
    line-height: 0.9;
    position: relative;
    border: 6px solid #f37339;
    border-bottom: 0;
    text-shadow: 1px 1px 1px rgba(119,34,34,.5);

    &:after {
      position: absolute;
      bottom: -6px;
      left: -6px;
      width: 50px;
      height: 6px;
      background: #f37339;
      content: '';
      display: block;
    }

    &:before {
      position: absolute;
      bottom: -6px;
      right: -6px;
      width: 50px;
      height: 6px;
      background: #f37339;
      content: '';
      display: block;
    }

    p { font-size: 50px; }
    strong { display: block; font-size: 85px; }
  }

  .desc {
    color: #fff;
    font-size: 24px;
    line-height: 1.3;
    padding: 40px 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 58px;
    height: 57px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;

    &:after { display: none; }
  }

  .pbt1 { background-image: url('/img/visual_prev.png'); left: 45px; }
  .nbt1 { background-image: url('/img/visual_next.png'); right: 45px; }

  .swiper-pagination-bullet {
    width: 36px;
    height: 4px;
    background: #fff;
    border-radius: 0;
  }

  .swiper-pagination-bullet-active { height: 6px; }
`;

const Section = styled.section`
  padding: 60px 0;

  .section_title {
    text-align: center;

    h3 {
      font-family: 'Raleway', sans-serif;
      font-weight: 800;
      text-transform: uppercase;
      color: #f37339;
      font-size: 45px;
      letter-spacing: -1px;
    }

    p {
      color: #515155;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: -.5px;
    }
  }

  &.color {
    background: #f37339;

    .section_title h3,
    .section_title p { color: #fff; }
  }

  /* Case List */
  .case { width: 100%; position: relative; }
  .case_list {
    width: 100%;
    position: relative;
    margin-top: 60px;

    ul {
      width: 102%;
      margin-left: -2%;

      li {
        width: 23%;
        margin-left: 2%;
        float: left;

        a {
          display: block;
          position: relative;

          .imgs {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;

            img {
              width: 100%;
              height: auto;
              max-width: 100%;
              visibility: hidden;
              opacity: 0;
            }
          }

          .txt {
            padding: 15px 20px;
            box-sizing: border-box;
            background: #fff;

            p { color: #f37339; font-size: 16px; font-weight: 300; }

            .subject {
              overflow: hidden;
              padding-right: 30px;
              box-sizing: border-box;
              position: relative;

              b {
                display: block;
                overflow: hidden;
                max-width: 100%;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #373131;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: -.5px;
              }

              span {
                display: block;
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -12.5px;
                width: 25px;
                height: 25px;
                border-radius: 25px;
                background: #f37339 url('/img/plus_w.png') no-repeat center center;
                text-indent: -9999px;
              }
            }
          }
        }
      }
    }
  }

  .list_btn_more {
    text-align: center;
    margin-top: 50px;

    a {
      display: inline-block;
      width: 200px;
      height: 50px;
      border: 2px solid #fff;
      box-sizing: border-box;
      text-align: center;
      border-radius: 50px;
      line-height: 46px;
      font-size: 16px;
      color: #fff;
      font-weight: 600;

      img { margin-top: -3px; margin-left: 10px; }
    }
  }

  /* BBS */
  .bbs_wrap {
    width: 100%;
    position: relative;

    > .clear {
      width: 102%;
      margin-left: -2%;
    }

    .bbs_box {
      width: 31.3333%;
      margin-left: 2%;
      float: left;
      box-sizing: border-box;
      padding: 20px;
      border: 1px solid #dadada;
      min-height: 270px;

      strong {
        display: block;
        text-align: center;
        color: #373131;
        font-size: 26px;
      }

      .ico {
        padding: 20px 0;
        text-align: center;
      }
    }

    .not {
      ul {
        padding: 20px 0;
        min-height: 108px;

        li a {
          width: 100%;
          display: block;
          padding-right: 85px;
          box-sizing: border-box;
          border-bottom: 1px dotted #dadada;
          position: relative;
          line-height: 35px;
          transition: all .2s;

          &:hover { background: rgba(155,155,155,.1); }

          .subject {
            width: 100%;
            display: block;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;
            font-weight: 400;
            color: #333333;

            img { margin-right: 5px; }
          }

          .date {
            display: block;
            position: absolute;
            line-height: 35px;
            right: 0;
            top: 0;
            font-size: 15px;
            font-weight: 300;
            color: #828282;
          }
        }
      }

      .btn_more {
        text-align: center;

        a {
          display: inline-block;
          width: 130px;
          height: 35px;
          border-radius: 35px;
          border: 2px solid #f37339;
          color: #f37339;
          line-height: 31px;
          font-size: 16px;
          font-weight: 600;

          img { margin-top: -4px; margin-left: 4px; }
        }
      }
    }

    .cs {
      text-align: center;

      a {
        display: inline-block;
        text-align: center;
        color: #f37339;
        font-size: 32px;
        line-height: 1;
        font-weight: 900;
      }

      .desc {
        padding-top: 20px;
        color: #5c5b5e;
        font-size: 16px;
        font-weight: 300;
      }
    }

    .inq {
      border: 0;
      background: #f3f3f3;
      text-align: center;

      strong { color: #f37339; }

      .desc {
        color: #5c5b5e;
        font-size: 16px;
        font-weight: 300;
      }

      a {
        display: inline-block;
        margin: 20px auto 0;
        width: 160px;
        height: 35px;
        border-radius: 35px;
        line-height: 33px;
        background: #f37339;
        color: #fff;
        font-size: 16px;
        font-weight: 600;

        img { margin-top: -4px; margin-left: 4px; }
      }
    }
  }
`;

const RoundWrap = styled.div`
  margin-top: 40px;
  position: relative;

  .swiper-slide {
    width: 236px;
    height: 236px;
    border-radius: 236px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: all .4s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pro01 { background-image: url('/img/round_01.png'); }
  .pro02 { background-image: url('/img/round_02.png'); }
  .pro03 { background-image: url('/img/round_03.png'); }
  .pro04 { background-image: url('/img/round_04.png'); }
  .pro05 { background-image: url('/img/round_05.png'); }
  .pro06 { background-image: url('/img/round_06.png'); }

  .round {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
  }

  .overlay {
    position: absolute;
    width: 70%;
    height: 70%;
    left: 15%;
    top: 15%;
    border-radius: 80%;
    text-align: center;
    background: transparent;
    color: #fff;
    transition: all .4s;
  }

  .swiper-slide:hover .overlay {
    background: rgba(243,115,57,.8);
  }

  .swiper-button-prev {
    width: 18px;
    height: 33px;
    left: -38px;
    background: url('/img/prev_ico.png') no-repeat center center;
    &:after { display: none; }
  }

  .swiper-button-next {
    width: 18px;
    height: 33px;
    right: -38px;
    background: url('/img/next_ico.png') no-repeat center center;
    &:after { display: none; }
  }
`;
