const trailer = document.querySelector(".trailer");
const trailerOffset = 20;
window.onpointermove = (e) => {
  trailer.animate(
    {
      top: `${e.clientY}px`,
      left: `${e.clientX}px`,
    },
    { fill: "forwards", duration: 1000 }
  );
};
