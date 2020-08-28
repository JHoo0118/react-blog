export default function () {
  const nav = document.getElementsByClassName("blog-nav")[0] as HTMLElement;
  const navStyle = getComputedStyle(nav);
  const originBackground = navStyle.backgroundImage;
  let navHeight = parseFloat(navStyle.height);
  let prevScrollPos = window.pageYOffset;
  nav.style.backgroundImage = "none";
  let flag = false;

  window.onscroll = function () {
    if (prevScrollPos < navHeight * 1.5) {
      nav.style.backgroundImage = "none";
      flag = true;
    } else if (flag === true) {
      nav.style.backgroundImage = originBackground;
    }
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      nav.style.top = "0";
    } else {
      nav.style.top = `${navHeight * -1}px`;
    }
    prevScrollPos = currentScrollPos;
  };
}
