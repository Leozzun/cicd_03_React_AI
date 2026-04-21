import { useState } from 'react';
import styled from 'styled-components';

const gnbData = [
  { label: '회사소개', children: ['인사말', '연혁', '조직도', '오시는길'] },
  { label: '제품소개', children: ['벽면', '바닥', '도어', '몰딩', '시트', '가구'] },
  { label: '시공사례', children: ['시공실적', '시공갤러리'] },
  { label: '견적문의', children: ['견적문의'] },
  { label: '고객센터', children: ['성공소식', '보도자료'] },
];

export default function Header() {
  const [allMenuOpen, setAllMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <HeaderWrap>
      <div className="size">
        <Inner className="inner clear">
          <Logo>
            <a href="/"><img src="/img/logo.png" alt="로고" /></a>
          </Logo>

          <Gnb>
            <ul className="clear depth1">
              {gnbData.map((item, i) => (
                <li
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <a href="#">{item.label}</a>
                  {hovered === i && (
                    <Depth2 className="clear depth2 Abs">
                      {item.children.map((child, j) => (
                        <li key={j}><a href="#">{child}</a></li>
                      ))}
                    </Depth2>
                  )}
                </li>
              ))}
            </ul>
          </Gnb>

          <MenuBtn>
            <a
              href="#"
              className={`allmenu${allMenuOpen ? ' on' : ''}`}
              onClick={(e) => { e.preventDefault(); setAllMenuOpen(v => !v); }}
            >
              전체메뉴
            </a>
          </MenuBtn>
        </Inner>
      </div>

      {allMenuOpen && (
        <AllGnb>
          <div className="size">
            <div className="inner clear">
              <AllMenus>
                {gnbData.map((item, i) => (
                  <ul key={i} className="on">
                    {item.children.map((child, j) => (
                      <li key={j}><a href="#">{child}</a></li>
                    ))}
                  </ul>
                ))}
              </AllMenus>
            </div>
          </div>
        </AllGnb>
      )}
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid rgba(255,255,255,.2);
  box-sizing: border-box;

  .size {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }
`;

const Inner = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
  padding-left: 120px;
  padding-right: 70px;
`;

const Logo = styled.h1`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  a {
    display: block;
    padding: 10px 0;
    font-size: 0;
  }
`;

const Gnb = styled.nav`
  float: right;
  box-sizing: border-box;

  .depth1 {
    display: flex;

    > li {
      height: 90px;
      padding: 20px 0;
      position: relative;
      box-sizing: border-box;

      > a {
        display: block;
        height: 50px;
        line-height: 50px;
        width: 140px;
        text-align: center;
        font-size: 19px;
        color: #373131;
        transition: color .3s;

        &:hover { color: #f37339; }
      }
    }
  }
`;

const Depth2 = styled.ul`
  position: absolute;
  z-index: 100;
  background: rgba(0,0,0,.6);
  width: 100%;
  top: 90px;
  border-top: 2px solid #f37339;
  box-sizing: border-box;
  padding: 10px 0;
  left: 0;

  li a {
    display: block;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    color: #fff;

    &:hover { color: #f37339; }
  }
`;

const MenuBtn = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;

  a {
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-indent: -9999px;
    background: url('/img/menu_ico.png') no-repeat center center;
    font-size: 0;

    &.on {
      background-image: url('/img/menu_close_ico.png');
    }
  }
`;

const AllGnb = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  z-index: 101;
  background: rgba(0,0,0,.6);

  .size {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }

  .inner {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
  }
`;

const AllMenus = styled.div`
  float: right;

  ul {
    float: left;
    width: 140px;
    padding: 10px 0;
    box-sizing: border-box;
    position: relative;

    &:before {
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: #f37339;
      content: '';
      display: block;
      transition: all .3s;
    }

    &.on:before {
      left: 0;
      width: 100%;
    }

    li a {
      display: block;
      height: 40px;
      line-height: 40px;
      color: #fff;
      font-size: 16px;
      text-align: center;

      &:hover { color: #f37339; }
    }
  }
`;
