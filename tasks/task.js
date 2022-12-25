ScrollReveal({ reset: true });
ScrollReveal().reveal(".title", {
  duration: 5000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10,
  },
});

ScrollReveal().reveal(".fade-in", {
  duration: 5000,
  move: 0,
});

ScrollReveal().reveal(".scaleUp", {
  duration: 5000,
  scale: 0.85,
});

ScrollReveal().reveal(".flip", {
  delay: 500,
  duration: 5000,
  rotate: {
    x: 20,
    z: 20,
  },
});

ScrollReveal().reveal(".slide-right", {
  duration: 2000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out",
});

ScrollReveal().reveal(".slide-up", {
  duration: 5000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5,
});
