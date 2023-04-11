"use strict";

const content = document.querySelectorAll(".observe");

const observer = new IntersectionObserver((targets) => {
  targets.forEach((target) => {
    target.isIntersecting ? target.target.classList.add("hehe") : null;
  });
});

content.forEach((i) => {
  observer.observe(i);
});
