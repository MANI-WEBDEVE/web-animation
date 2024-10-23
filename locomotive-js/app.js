const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true,
  lerp:0.01,
  
})

const loco = new LocomotiveScroll({
  el: document.querySelector('.box'),
  
  initPosition:{x:200, y:1000}
})