gsap.to(".box", {
  x: 1100,
  duration: 2,
  delay: 1,
  backgroundColor: "red",
  borderRadius: "50%",
  rotate: 180,
  scale: 0.5,
  repeat: -1,
  yoyo: true,
});

gsap.from("li", {
    y:20,
    duration: 1,
    stagger: 0.2,
    opacity: 0,
    delay: 1,
    // repeat: -1,
    // yoyo: true
})