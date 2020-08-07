import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";
import LoginForm from "../user/LoginForm";
import RegisterForm from "../user/RegisterForm";

interface IProps {
  isPostListPage: boolean;
}

const NavBar: React.FC<IProps> = ({ isPostListPage }) => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
  const { openModal } = rootStore.modalStore;

  return (
    <nav className="blog-nav">
      <div
        className={
          "blog-nav-wrap " + (isPostListPage && "nav--width--responsive")
        }
      >
        <Link to={"/posts"} className="blog-nav__logo">
          <i className="fas fa-code"></i>
          &nbsp;HooBlog
        </Link>
        <div className="blog-nav__responsive">
          <input
            type="checkbox"
            className="blog-nav__responsive--checkbox"
            id="responsive--checkbox"
          />
          <label
            htmlFor="responsive--checkbox"
            className="blog-nav__responsive--btn"
          >
            <span className="blog-nav__responsive--icon"></span>
            <div className="blog-nav__responsive--content">
              <ul className="blog-nav__responsive--items">
                <li className="blog-nav__responsive--item">
                  <Link className="blog-nav__responsive--link" to="/">
                    바탕화면
                  </Link>
                </li>
                {user ? (
                  <>
                    <li className="blog-nav__responsive--item">
                      <Link
                        className="blog-nav__responsive--link"
                        to="/createPost"
                      >
                        시작하기
                      </Link>
                    </li>

                    <li className="blog-nav__responsive--item">
                      <Link
                        className="blog-nav__responsive--link"
                        to={`/profile/${user.username}`}
                      >
                        프로필
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="blog-nav__responsive--item">
                      <span
                        onClick={() => openModal(<LoginForm />)}
                        className="blog-nav__responsive--link"
                      >
                        로그인
                      </span>
                    </li>
                    <li className="blog-nav__responsive--item">
                      <span
                        onClick={() => openModal(<RegisterForm />)}
                        className="blog-nav__responsive--link"
                      >
                        회원가입
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </label>
        </div>
        <ul className="blog-nav__items">
          <li className="blog-nav__item">
            <Link className="blog-nav__link" to="/">
              바탕화면
            </Link>
          </li>
          {user ? (
            <>
              <li className="blog-nav__item">
                <Link className="blog-nav__link" to="/createPost">
                  시작하기
                </Link>
              </li>
              <div className="blog-nav__dropdown">
                <button className="blog-nav__dropdown-btn">
                  <div className="blog-nav__dropdown-header">
                    <img
                      src={
                        user.image
                          ? user.image
                          : require("../../assets/img/user.png")
                      }
                      alt="사용자 사진"
                    />
                    <span>
                      <span>{user.displayName}</span>
                      <i className="fa fa-caret-down"></i>
                    </span>
                  </div>
                </button>
                <div className="blog-nav__dropdown-content">
                  <div className="blog-nav__dropdown-box">
                    <Link
                      to={`/profile/${user.username}`}
                      className="blog-nav__dropdown-content--link"
                    >
                      프로필
                    </Link>
                    <span
                      onClick={logout}
                      className="blog-nav__dropdown-content--link"
                    >
                      로그아웃
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <li className="blog-nav__item">
                <span
                  onClick={() => openModal(<LoginForm />)}
                  className="blog-nav__link"
                >
                  로그인
                </span>
              </li>
              <li className="blog-nav__item">
                <span
                  onClick={() => openModal(<RegisterForm />)}
                  className="blog-nav__link"
                >
                  회원가입
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
