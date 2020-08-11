import React, { useEffect } from "react";
import portfoiloMouseCapture from "./portfoiloMouseCapture";

const Portfolio = () => {
  useEffect(() => {
    portfoiloMouseCapture();
  }, []);
  return (
    <>
      <div className="nav">
        <div className="wrapper-portfolio">
          <span className="nav__name">KIM JUNGHOO</span>
        </div>
      </div>

      <header className="header-bg">
        <div className="land">
          <div className="land__green"></div>
        </div>
        <div className="castle">
          <div className="castle--flag">
            <div className="castle--flag--head"></div>
          </div>
          <div className="castle--upper--deco--shadow castle--upper--deco--shadow--1">
            <div className="castle--upper--deco castle--upper--deco--1"></div>
          </div>

          <div className="castle--upper--deco--shadow castle--upper--deco--shadow--2">
            <div className="castle--upper--deco castle--upper--deco--1"></div>
          </div>

          <div className="castle--upper--deco--shadow castle--upper--deco--shadow--3">
            <div className="castle--upper--deco castle--upper--deco--1"></div>
          </div>

          <div className="castle--upper--deco--shadow castle--upper--deco--shadow--4">
            <div className="castle--upper--deco castle--upper--deco--1"></div>
          </div>

          <div className="castle--upper"></div>
          <div className="castle--window castle--window--left">
            <div className="castle--window--shadow"></div>
          </div>
          <div className="castle--window castle--window--right">
            <div className="castle--window--shadow"></div>
          </div>
          <div className="castle--door">
            <div className="castle--door--left-shadow"></div>
            <div className="castle--door-inside"></div>
          </div>
          <div className="castle--side castle--side--r">
            <div className="castle--upper--deco--shadow castle--upper--deco--shadow--5">
              <div className="castle--upper--deco castle--upper--deco--2"></div>
            </div>
            <div className="castle--upper--deco--shadow castle--upper--deco--shadow--6">
              <div className="castle--upper--deco castle--upper--deco--2"></div>
            </div>
            <div className="castle--upper--deco--shadow castle--upper--deco--shadow--7">
              <div className="castle--upper--deco castle--upper--deco--2"></div>
            </div>
            <div className="castle--upper--circle castle--upper--circle--r">
              <div className="castle--upper--circle--shadow"></div>
            </div>
            <div className="castle--upper--circle castle--upper--circle--l">
              <div className="castle--upper--circle--shadow"></div>
            </div>
            <div className="castle--side--upper"></div>

            <div className="castle--window castle--window--side--r">
              <div className="castle--window--shadow"></div>
            </div>
          </div>
          <div className="castle--side castle--side--l">
            <div className="castle--upper--deco--shadow castle--upper--deco--shadow--5">
              <div className="castle--upper--deco castle--upper--deco--2"></div>
            </div>
            <div className="castle--upper--deco--shadow castle--upper--deco--shadow--6">
              <div className="castle--upper--deco castle--upper--deco--2"></div>
            </div>
            <div className="castle--upper--deco--shadow castle--upper--deco--shadow--7">
              <div className="castle--upper--deco castle--upper--deco--2"></div>
            </div>
            <div className="castle--upper--circle castle--upper--circle--r">
              <div className="castle--upper--circle--shadow"></div>
            </div>
            <div className="castle--upper--circle castle--upper--circle--l">
              <div className="castle--upper--circle--shadow"></div>
            </div>
            <div className="castle--side--upper"></div>

            <div className="castle--window castle--window--side--r">
              <div className="castle--window--shadow"></div>
            </div>
          </div>
        </div>
        <div className="tree--left">
          <div className="tree--left-leaf">
            <div className="tree--left-leaf-l"></div>
          </div>
        </div>
        <div className="cloud cloud--3">
          <div className="cloud--center cloud--center--3">
            <div className="cloud--right cloud--right--3"></div>
          </div>
        </div>
        <div className="tree--right">
          <div className="tree--right-leaf">
            <div className="tree--right-leaf-r"></div>
          </div>
        </div>
        <div className="cloud cloud--1">
          <div className="cloud--center cloud--center--1">
            <div className="cloud--right cloud--right--1"></div>
          </div>
        </div>
        <div className="cloud cloud--2">
          <div className="cloud--center cloud--center--2">
            <div className="cloud--right cloud--right--2"></div>
          </div>
        </div>
        <div className="header--bird"></div>

        <div className="header--title">
          <div className="header--title--c">Hello, welcome</div>
          <div className="header--title--l"></div>
          <div className="header--title--r"></div>
          <div className="header--title--shadow header--title--shadow--l"></div>
          <div className="header--title--shadow header--title--shadow--r"></div>
        </div>
      </header>

      <section className="project">
        <div className="left-side"></div>
        <div className="start-icon">
          <div className="start-icon-part--1">
            <div className="start-icon-part--2">
              <div className="start-icon-part--3"></div>
            </div>
          </div>
        </div>
        <div className="wrapper-portfolio">
          <h2 className="project--title">Project</h2>
          <div className="portfolio--flex">
            <div className="card-pf">
              <div className="card-pf__side card-pf__side--front">
                <div className="card-pf__picture card-pf__picture--1">
                  &nbsp;
                </div>
                <h4 className="card-pf__heading">
                  <span className="card-pf__heading-span card-pf__heading-span--1">
                    React Map
                  </span>
                </h4>
                <div className="card-pf__details">
                  <ul>
                    <li>React</li>
                    <div className="card-pf__details-tech-logo card-pf__details-tech-logo--1"></div>
                  </ul>
                </div>
              </div>
              <div className="card-pf__side card-pf__side--back card-pf__side--back-1">
                <div className="card-pf__side--back__container">
                  <p className="card-pf__description">
                    여러분들의 멋진 장소를 공유해 주세요
                  </p>
                  <div className="card-pf__link-box">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://reactmap-jh.netlify.app/"
                      className="card-pf__link-box--link card-pf__link-box--link--1"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span>&nbsp;사이트 보기</span>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JHoo0118/react-map-frontend/"
                      className="card-pf__link-box--link card-pf__link-box--link--1"
                    >
                      <i className="fab fa-github"></i>
                      <span>&nbsp;코드 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-pf">
              <div className="card-pf__side card-pf__side--front">
                <div className="card-pf__picture card-pf__picture--2">
                  &nbsp;
                </div>
                <h4 className="card-pf__heading">
                  <span className="card-pf__heading-span card-pf__heading-span--2">
                    Django Booking
                  </span>
                </h4>
                <div className="card-pf__details">
                  <ul>
                    <li>Django</li>
                    <div className="card-pf__details-tech-logo card-pf__details-tech-logo--2"></div>
                  </ul>
                </div>
              </div>
              <div className="card-pf__side card-pf__side--back card-pf__side--back-2">
                <div className="card-pf__side--back__container">
                  <p className="card-pf__description">
                    전 세계 호텔 예약은 여기서
                  </p>
                  <div className="card-pf__link-box">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://django-booking.eba-a3mcndmb.ap-northeast-2.elasticbeanstalk.com/"
                      className="card-pf__link-box--link card-pf__link-box--link--2"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span>&nbsp;사이트 보기</span>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JHoo0118/django-booking/"
                      className="card-pf__link-box--link card-pf__link-box--link--2"
                    >
                      <i className="fab fa-github"></i>
                      <span>&nbsp;코드 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-pf">
              <div className="card-pf__side card-pf__side--front">
                <div className="card-pf__picture card-pf__picture--3">
                  &nbsp;
                </div>
                <h4 className="card-pf__heading">
                  <span className="card-pf__heading-span card-pf__heading-span--3">
                    React Blog
                  </span>
                </h4>
                <div className="card-pf__details">
                  <ul>
                    <li>React</li>
                    <div className="card-pf__details-tech-logo card-pf__details-tech-logo--3"></div>
                  </ul>
                </div>
              </div>
              <div className="card-pf__side card-pf__side--back card-pf__side--back-3">
                <div className="card-pf__side--back__container">
                  <p className="card-pf__description">개인 블로그</p>
                  <div className="card-pf__link-box">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://blogh.azurewebsites.net/posts/"
                      className="card-pf__link-box--link card-pf__link-box--link--3"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span>&nbsp;사이트 보기</span>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JHoo0118/react-blog/"
                      className="card-pf__link-box--link card-pf__link-box--link--3"
                    >
                      <i className="fab fa-github"></i>
                      <span>&nbsp;코드 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer">
        <h4 className="footer__contact-title">contact</h4>
        <div className="footer__contact">
          <div className="footer__contact--icon-box">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/JHoo0118/"
              className="footer__contact__link footer__contact__link--github"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="footer__contact--icon-box">
            <a
              rel="noopener noreferrer"
              href="mailto: kik3078@gamil.com"
              className="footer__contact__link footer__contact__link--email"
            >
              <i className="fas fa-envelope-open-text"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
