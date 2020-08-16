import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Link } from "react-router-dom";
import LoginForm from "../user/LoginForm";
import RegisterForm from "../user/RegisterForm";
import { Helmet } from "react-helmet";

const Home = () => {
  const rootStore = useContext(RootStoreContext);
  const { isLoggedIn, user, logoutInWallpaper } = rootStore.userStore;
  const {
    openModal,
    modal: { open },
  } = rootStore.modalStore;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>블로그 | 바탕화면 </title>
      </Helmet>
      <div className="bg">
        <Link to="/portfolio" className="btn-popup">
          <button className="btn-file">
            <i className="fas fa-file fa-7x"></i>
            <span>포트폴리오</span>
          </button>
        </Link>
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
      </div>
    </>
  );
};

export default observer(Home);
