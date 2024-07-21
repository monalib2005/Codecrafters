// animations.js
gsap.fromTo(".ice1", { y: "100%" }, { y: 0, duration: 2, ease: "power2.out" });
gsap.from("nav ul li a",{y:30,duration:1,stagger:0.5});
gsap.from("#logo", {
    y: -100,
    duration: 1,
    yoyo: true,
    ease: "bounce.out"
});
gsap.from("#headline h1 ,h2 ", { x: -200, duration: 1.2 });
gsap.from("#btn",{opacity:0,duration:1,scale:2});
WebGLShaderPrecisionFormat
gsap.from("#right h1", {
    fontSize:64,
    duration: 1,
    yoyo: true,
    ease: "bounce.out"
});
gsap.from("#left h1", {
    //y: -100,
    fontSize:64,
    duration: 0.7,
    yoyo: true,
    ease: "bounce.out"
});
gsap.from("#right h3 ", { x: -400, duration: 1.2 });
gsap.from("#left h3 ", { x: 1400, duration: 1.2 });



image.addEventListener('mouseout', () => {
  gsap.to(image, { scale: 1, duration: 0.3 });
});