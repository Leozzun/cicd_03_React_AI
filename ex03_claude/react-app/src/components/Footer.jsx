import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrap id="footer">
      <div className="size">
        <Inner className="inner">
          <Address className="address">
            <div className="f_logo">
              <a href="#"><img src="/img/f_logo.png" alt="로고" /></a>
            </div>
            <ul>
              <li><span className="c_name">성공건축자재</span></li>
              <li>
                <span>인천시 계양구 동양동</span>
                <span className="width100">Tel : 02-1234-5678</span>
              </li>
              <li>
                <span>대표이사 : 서민구</span>
                <span>사업자등록번호 : 123-45-67890</span>
              </li>
            </ul>
            <div className="copy">Copyright 2025 codro. All Rights Reserved</div>
            <div className="util">
              <a href="#">개인정보취급방침</a>
            </div>
          </Address>
        </Inner>
      </div>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  width: 100%;
  height: 160px;
  background: #333333;

  .size {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }
`;

const Inner = styled.div`
  height: 160px;
  padding: 40px 0;
  box-sizing: border-box;
  position: relative;
`;

const Address = styled.div`
  position: relative;
  padding-right: 190px;
  box-sizing: border-box;
  z-index: 1;

  .f_logo {
    display: inline-block;
  }

  ul {
    position: absolute;
    top: 10px;
    left: 140px;

    li {
      overflow: hidden;
      margin-bottom: 5px;
      color: #fff;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.5px;

      span {
        display: inline-block;
        vertical-align: top;
        float: left;
        margin-left: 15px;
        font-weight: 400;

        &:first-child { margin-left: 0; }
      }

      .c_name {
        font-size: 18px;
        margin-bottom: 15px;
        letter-spacing: -0.5px;
      }

      .width100 {
        display: block;
        width: 100%;
        margin-left: 0;
      }
    }
  }

  .copy {
    position: absolute;
    right: 0;
    top: 50px;
    color: rgba(255,255,255,0.4);
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.5px;
    font-weight: 300;
  }

  .util {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;

    a {
      display: block;
      font-size: 14px;
      color: rgba(255,255,255,0.8);
      width: 180px;
      height: 40px;
      line-height: 39px;
      border: 1px solid rgba(255,255,255,0.8);
      text-align: center;
      letter-spacing: -1px;
    }
  }
`;
