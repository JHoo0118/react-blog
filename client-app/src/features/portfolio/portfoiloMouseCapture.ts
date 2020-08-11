export default function () {
  let startIcon = document.getElementsByClassName(
    "start-icon"
  )[0] as HTMLElement;

  const input = {
    mouseX: {
      start: 0,
      end: window.innerWidth,
      current: 0,
      range: 0,
      fraction: 0,
    },
    // mouseY: {
    //   start: 0,
    //   end: window.innerHeight,
    //   current: 0,
    //   range: 0,
    //   fraction: 0,
    // },
  };
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
  //   input.mouseY.range = input.mouseY.end - input.mouseY.start;

  const output = {
    x: {
      start: -30,
      end: 30,
      current: 0,
      range: 0,
      fraction: 0,
    },
    // y: {
    //   start: -75,
    //   end: 75,
    //   current: 0,
    //   range: 0,
    //   fraction: 0,
    // },
  };
  output.x.range = output.x.end - output.x.start;
  //   output.y.range = output.y.end - output.y.start;

  const handleMouseMove = function (event: any) {
    input.mouseX.current = event.clientX;
    input.mouseX.fraction =
      (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    // input.mouseY.current = event.clientY;
    // input.mouseY.fraction =
    //   (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    output.x.current = output.x.start + input.mouseX.fraction * output.x.range;

    startIcon.style.transform =
      "translateX(" + output.x.current + "px) rotateX(180deg)";
  };

  const handleResize = function () {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    // input.mouseY.end = window.innerHeight;
    // input.mouseY.range = input.mouseY.end - input.mouseY.start;
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);
}
