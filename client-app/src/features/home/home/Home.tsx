import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../../app/stores/rootStore";
import About from "../about/About";
import Projects from "../projects/Projects";
import { Switch, Link } from "react-router-dom";
import Tech from "../tech/Tech";
import LoginForm from "../../user/LoginForm";
import RegisterForm from "../../user/RegisterForm";

const Home = () => {
  const [where, setWhere] = useState("about");
  const rootStore = useContext(RootStoreContext);
  const { isLoggedIn, user, logoutInWallpaper } = rootStore.userStore;
  const {
    openModal,
    modal: { open },
  } = rootStore.modalStore;
  const { isOpenedWindow, openWindow, closeWindow } = rootStore.wallpaperStore;
  return (
    <div className="bg">
      <button onClick={openWindow} className="btn-file btn-popup">
        <i className="fas fa-file fa-7x"></i>
        <span>파일</span>
      </button>
      <Link to="/posts" className="btn-blog">
        <button className="btn-file">
          <i className="fab fa-chrome fa-7x"></i>
          <span>블로그</span>
        </button>
      </Link>

      {!open && (
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi--toggle"
          />
          <label htmlFor="navi--toggle" className="navigation__button">
            <span className="navigation__icon"></span>
            <nav className="navigation__nav">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <Link to="/posts" className="navigation__link">
                    <span>01</span>&nbsp;블로그
                  </Link>
                </li>
                {isLoggedIn && user ? (
                  <li className="navigation__item">
                    <span
                      onClick={logoutInWallpaper}
                      className="navigation__link"
                    >
                      <span>02</span>&nbsp;로그아웃
                    </span>
                  </li>
                ) : (
                  <>
                    <li className="navigation__item">
                      <span
                        onClick={() => openModal(<LoginForm />)}
                        className="navigation__link"
                      >
                        <span>02</span>&nbsp;로그인
                      </span>
                    </li>
                    <li className="navigation__item">
                      <span
                        onClick={() => openModal(<RegisterForm />)}
                        className="navigation__link"
                      >
                        <span>03</span>&nbsp;회원가입
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </label>
        </div>
      )}
      {isOpenedWindow && (
        <div className="container">
          <div className="header">
            <div className="header__logo">파일</div>
            <div onClick={closeWindow} className="header__btn-close">
              <span>&times;</span>
            </div>
          </div>
          <div className="content">
            <div className="sideBar">
              <ul className="side-nav">
                <li className="side-nav__item">
                  <div
                    onClick={() => setWhere("about")}
                    className="side-nav__tab"
                  >
                    <span>01&nbsp;소개</span>
                  </div>
                </li>
                <li className="side-nav__item">
                  <div
                    onClick={() => setWhere("projects")}
                    className="side-nav__tab"
                  >
                    <span>02&nbsp;프로젝트</span>
                  </div>
                </li>
                <li className="side-nav__item">
                  <div
                    onClick={() => setWhere("tech")}
                    className="side-nav__tab"
                  >
                    <span>03&nbsp;기술</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Switch>
                {where === "about" && <About />}
                {where === "projects" && <Projects />}
                {where === "tech" && <Tech />}
              </Switch>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(Home);
