import React, { useEffect, useState } from "react";
import portfoiloMouseCapture from "./portfoiloMouseCapture";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  useEffect(() => {
    portfoiloMouseCapture();
  }, []);

  const [page, setPage] = useState("first");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>JungHoo</title>
      </Helmet>
      <div className="nav" id="nav">
        <div className="wrapper-portfolio">
          <div className="portfolio__nav__container">
            <span className="nav__name">KIM JUNGHOO</span>
            <div className="nav__contact">
              <div className="contact--icon-box">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/JHoo0118/"
                  className="contact__link contact__link--github"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div className="contact--icon-box">
                <a
                  rel="noopener noreferrer"
                  href="mailto: kik3078@gamil.com"
                  className="contact__link contact__link--email"
                >
                  <i className="fas fa-envelope-open-text"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-bg">
        <div className="land">
          <div className="land__green land__green--1"></div>
        </div>
        <div className="wrapper-portfolio">
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
            <img
              className="my-photo"
              src={require("../../assets/img/portfolio/me.jpg")}
              alt="Me"
            ></img>
            <div className="header--title--c">Hello, welcome</div>
            <div className="header--title--l"></div>
            <div className="header--title--r"></div>
            <div className="header--title--shadow header--title--shadow--l"></div>
            <div className="header--title--shadow header--title--shadow--r"></div>
          </div>
        </div>
      </header>

      <section className="about" id="about">
        <div className="wrapper-portfolio">
          <h2 className="section--title about--title">About</h2>
        </div>
        <div className="about__box">
          <div className="monitor">
            <div className="monitor--part1"></div>
            <div className="monitor--part2">
              <div className="monitor--feature">
                <div className="monitor--part9">
                  <div className="monitor--part10"></div>
                  <div className="monitor--part11"></div>
                  <div className="monitor--part12"></div>
                </div>
                <div className="monitor--feature--face">
                  <div className="monitor--feature--hair"></div>
                  <div className="monitor--feature--eye monitor--feature--eye--left"></div>
                  <div className="monitor--feature--eye monitor--feature--eye--right"></div>
                </div>
                <div className="monitor--feature--neck"></div>
                <div className="monitor--feature--body">
                  <div className="monitor--feature--body--point monitor--feature--body--point--left"></div>
                  <div className="monitor--feature--body--point monitor--feature--body--point--right"></div>
                </div>
              </div>
              <div className="monitor--description">
                <h2>
                  안녕하세요
                  <span role="img" aria-label="Smiling Eyes">
                    😁
                    <br />
                  </span>
                  저는 김정후입니다.
                </h2>
                <p>
                  <span role="img" aria-label="Heart Eyes">
                    😍
                  </span>
                  저는 웹 페이지를 만드는 것을 좋아합니다.
                </p>
                <p>
                  <span role="img" aria-label="Sunglass">
                    😎
                  </span>
                  제가 하는 일에 열정을 갖고 끊임없이 성장하기 위해서 노력할
                  것입니다.
                </p>
              </div>
            </div>
            <div className="monitor--part3">
              <div className="monitor--part7">
                <div className="monitor--part8"></div>
              </div>
            </div>
            <div className="monitor--part4"></div>
            <div className="monitor--part5"></div>
            <div className="monitor--part6"></div>
          </div>
          <div className="dashboard">
            <div className="dashboard--part3"></div>
            <div className="dashboard--part1"></div>
            <div className="dashboard--part2">
              <div className="dashboard__nav">
                <div
                  className={
                    "dashboard__nav__button " +
                    (page === "first" ? "dashboard__nav__button--active" : "")
                  }
                  onClick={() => setPage("first")}
                ></div>
                <div
                  className={
                    "dashboard__nav__button " +
                    (page === "second" ? "dashboard__nav__button--active" : "")
                  }
                  onClick={() => setPage("second")}
                ></div>
                <div
                  className={
                    "dashboard__nav__button " +
                    (page === "third" ? "dashboard__nav__button--active" : "")
                  }
                  onClick={() => setPage("third")}
                ></div>
              </div>
              <div className="dashboard__description">
                {page === "first" && (
                  <h2 className="dashboard--title">사용 가능한 언어</h2>
                )}
                {page === "second" && (
                  <h2 className="dashboard--title">신념</h2>
                )}
                {page === "third" && (
                  <h2 className="dashboard--title">나의 장점</h2>
                )}
                {page === "first" && (
                  <div className="dashboard__description--wrapper">
                    <div className="dashboard__description--box">
                      <img
                        src={require("../../assets/img/portfolio/js.png")}
                        alt="Javascript"
                        className="language--logo"
                      />
                      <p>
                        자바스크립트를 이용하여 웹 페이지를 만들 수 있습니다.
                      </p>
                    </div>
                    <div className="dashboard__description--box">
                      <img
                        src={require("../../assets/img/portfolio/python.png")}
                        alt="Python"
                        className="language--logo"
                      />
                      <p>파이썬의 장고를 사용해 본 경험이 있습니다.</p>
                    </div>
                    <div className="dashboard__description--box">
                      <img
                        src={require("../../assets/img/portfolio/cshop.jpg")}
                        alt="C Shop"
                        className="language--logo"
                      />
                      <p>ASP.Net Core를 이용하여 백엔드를 작성합니다.</p>
                    </div>
                  </div>
                )}
                {page === "second" && (
                  <div className="dashboard__description--wrapper">
                    <div className="dashboard__description--big--box">
                      <div className="land__green land__green--2"></div>
                      <div className="turtle">
                        <div className="turtle--part6"></div>
                        <div className="turtle--part7"></div>
                        <div className="turtle--part8"></div>
                        <div className="turtle--part1">
                          <div className="turtle--eye turtle--eye--left">
                            <div className="turtle--pupil"></div>
                          </div>
                          <div className="turtle--eye turtle--eye--right">
                            <div className="turtle--pupil"></div>
                          </div>
                        </div>
                        <div className="turtle--part2"></div>
                        <div className="turtle--part3"></div>
                        <div className="turtle--part4"></div>
                        <div className="turtle--part5"></div>
                      </div>
                      <div className="speech--bubble">
                        <span>맞아</span>
                      </div>
                      <p className="dashboard__description--big--box--text">
                        꾸준하게 하면 다 된다
                      </p>
                    </div>
                  </div>
                )}
                {page === "third" && (
                  <div className="dashboard__description--wrapper">
                    <div className="dashboard__description--flex--box">
                      <div className="dashboard__description--circle--box">
                        <span>열정</span>
                      </div>
                      <div className="dashboard__description--circle--box">
                        <span>끈기</span>
                      </div>
                      <div className="dashboard__description--circle--box">
                        <span>책임감</span>
                      </div>
                    </div>
                    <div className="dashboard__introduction">
                      <p>
                        하는 일에 열정을 가지고 임하며, 몇 번 해서 안 된다고
                        포기하지 않고 다시 마음을 다잡아 계속해서 나아갈 수 있는
                        끈기를 가지고 있습니다. 자신이 맡은 일에는 책임감을
                        가지고 수행합니다.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="dashboard--part4"></div>
          </div>
        </div>
      </section>

      <section className="project" id="project">
        <div className="star-icon">
          <div className="star-icon-part--1">
            <div className="star-icon-part--2">
              <div className="star-icon-part--3"></div>
            </div>
          </div>
        </div>
        <div className="wrapper-portfolio projcet--title">
          <h2 className="section--title">Project</h2>
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
                  <p className="card-pf__description">
                    저의 생각을 정리하는 개인 블로그
                  </p>
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

      <div className="footer" id="footer">
        <h4 className="contact-title">contact</h4>
        <div className="contact">
          <div className="contact--icon-box">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/JHoo0118/"
              className="contact__link contact__link--github"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="contact--icon-box">
            <a
              rel="noopener noreferrer"
              href="mailto: kik3078@gamil.com"
              className="contact__link contact__link--email"
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
