gsap.to("#page1 .box", {
  rotate: 180,
  delay: 1,
  duration: 3,
  width: "100%",
  height: "100%",
});
gsap.from("#page2 .box", {
  width: "100%",
  height: "100%",  
  duration: 3,
  delay: 1,
  rotate: 180,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
    start: "top 20%" ,
    end:"bottom 50%",
    scrub: 5,
    markers: true,
  },
});
