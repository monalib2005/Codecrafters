// animations.js
gsap.fromTo(".ice1", { y: "20%" }, { y: 0, duration: 2, ease: "power2.out" });
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
    duration: 1.5,
    yoyo: true,
    ease: "bounce.out",
    scrollTrigger:{
        trigger:"#right h1",
        start:"top 50%",
        scrub:true,
        scroller:"body"
    },
});
gsap.from("#left h1", {
    //y: -100,
    fontSize:64,
    duration: 1.5,
    yoyo: true,
    ease: "bounce.out",
    

});
gsap.from("#right h3 ", { x: -400, duration: 1.5 ,scrollTrigger:{
    trigger:"#right h1",
    start:"top 50%",
    scrub:true,
    scroller:"body"
},}
);
gsap.from("#left h3 ", { x: 1400, duration: 1.5,  scrollTrigger:{
    trigger:"#right h1",
    start:"top 50%",
    scrub:true,
    scroller:"body"
},});



// image.addEventListener('mouseout', () => {
//   gsap.to(image, { scale: 1, duration: 0.3 });
// });
//3
gsap.to("#img1,#img3,#img5",{
    y:-50,
    duration:2,
    repeat: -1, 
    yoyo: true,
    ease: "power1.inOut"
});
gsap.to("#img2,#img4,#img6",{
    y:50,
    duration:2,
    repeat: -1, 
    yoyo: true,
    ease: "power1.inOut"
});
document.addEventListener("DOMContentLoaded", function() {
    const icecreams = document.querySelectorAll("#milkimg");
  
    function floatIceCreams() {
        icecreams.forEach(icecream => {
            gsap.to(icecream, {
                y: -20,
                duration: 1,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut"
            });
        });
    }
  
    floatIceCreams();
  });
  gsap.from("#para",{
    opacity:0,
    duration:2
  })


  document.addEventListener("DOMContentLoaded", function() {
    
    const icecreams = document.querySelectorAll(".icecreamImage");
  
   
    function floatIceCreams() {
        icecreams.forEach(icecream => {
            gsap.to(icecream, {
                y: -20,
                duration: 1,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut"
            });
        });
    }
  
   
    floatIceCreams();
  });

  const timelineEvents = document.querySelectorAll('.timeline');

  function handleScroll() {
    timelineEvents.forEach((event, index) => {
      const rect = event.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.8; // Adjust trigger point as needed
  
      if (rect.top < triggerPoint) {
        event.classList.add('fadeInUp');
        event.classList.remove('fadeOutDown');
      } else {
        event.classList.remove('fadeInUp');
        event.classList.add('fadeOutDown');
      }
    });
  }
  

