function showContent(contentId) {
    // Hide all content elements
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the selected content
    var contentToShow = document.getElementById(contentId);
    contentToShow.classList.add('active');
}
gsap.from("#image1",{x:-500,duration:1,opacity:0})
gsap.from("#image2",{x:-500,duration:1,opacity:0,delay:0.5})
gsap.from("#image3",{x:-500,duration:1,opacity:0,delay:1})
gsap.from("#image4",{x:-500,duration:1,opacity:0,delay:1.5})
gsap.from("#image5",{x:-500,duration:1,opacity:0,delay:2})

const hideButton1 = document.getElementById('image1');
const initialContent1 = document.getElementById('hr');

hideButton1.addEventListener('click', () => {
  initialContent1.style.display = 'none';
});
const hideButton2 = document.getElementById('image2');
const initialContent2 = document.getElementById('hr');

hideButton2.addEventListener('click', () => {
  initialContent2.style.display = 'none';
});
const hideButton3 = document.getElementById('image3');
const initialContent3 = document.getElementById('hr');

hideButton3.addEventListener('click', () => {
  initialContent3.style.display = 'none';
});
const hideButton4 = document.getElementById('image4');
const initialContent4 = document.getElementById('hr');

hideButton4.addEventListener('click', () => {
  initialContent4.style.display = 'none';
});
const hideButton5 = document.getElementById('image5');
const initialContent5 = document.getElementById('hr');

hideButton5.addEventListener('click', () => {
  initialContent5.style.display = 'none';
});
const hideButton6 = document.getElementById('image1');
const initialContent6 = document.getElementById('main');

hideButton6.addEventListener('click', () => {
  initialContent6.style.backgroundColor = '#CDB4DB';
});
const hideButton7 = document.getElementById('image2');
const initialContent7 = document.getElementById('main');

hideButton7.addEventListener('click', () => {
  initialContent7.style.backgroundColor = '#CDB4DB';
});
const hideButton8 = document.getElementById('image3');
const initialContent8 = document.getElementById('main');

hideButton8.addEventListener('click', () => {
  initialContent8.style.backgroundColor = '#CDB4DB';
});
const hideButton9 = document.getElementById('image4');
const initialContent9 = document.getElementById('main');

hideButton9.addEventListener('click', () => {
initialContent9.style.backgroundColor = '#CDB4DB';
});
const hideButton10 = document.getElementById('image5');
const initialContent10 = document.getElementById('main');

hideButton10.addEventListener('click', () => {
  initialContent10.style.backgroundColor = '#CDB4DB';
});

const imageConfigs = [
  { selector: '.pint1', images: ['pint12.avif', 'pint13.webp', 'pint11.webp'] },
  { selector: '.pint2', images: ['pint21.webp', 'pint22.webp', 'pint24.avif'] },
  { selector: '.pint3', images: ['pint31.jpg', 'pint32.jpg', 'pint33.jpg'] },
  { selector: '.pint4', images: ['pint41.avif', 'pint42.avif', 'pint43.avif'] },
  { selector: '.dough1', images: ['dough1.webp', 'dough11.webp', 'dough12.webp'] },
  { selector: '.dough2', images: ['dough21.webp', 'dough22.jpg', 'dough2.webp'] },
  { selector: '.dough3', images: ['dough31.jpg', 'dough32.webp', 'dough3.webp'] },
  { selector: '.dough4', images: ['dough4.jpeg', 'dough41.jpeg','dough4.jpeg'] },
  { selector: '.dairy1', images: ['dairy1.webp', 'dairy2.webp','dairy3.webp'] },
  { selector: '.dairy2', images: ['dairy21.avif', 'dairy22.jpg','dairy23.avif'] },
  { selector: '.dairy3', images: ['dairy31.avif', 'dairy32.avif','dairy33.avif'] },
  { selector: '.dairy4', images: ['dairy4.avif', 'dairy41.avif','dairy42.avif'] },
  { selector: '.core1', images: ['core11.avif', 'core12.avif','core13.avif'] },
  { selector: '.core2', images: ['core21.avif', 'core22.avif','core23.jpg'] },
  { selector: '.core3', images: ['core3.avif', 'core31.avif','core32.webp'] },
  { selector: '.core4', images: ['core4.avif', 'core41.avif','core42.avif'] },
  { selector: '.topped1', images: ['topped1.avif', 'topped11.avif','topped12.avif'] },
  { selector: '.topped2', images: ['topped2.webp', 'topped21.webp','topped23.webp'] },
  { selector: '.topped3', images: ['topped3.avif', 'topped31.webp','topped32.avif'] },
  { selector: '.topped4', images: ['topped4.avif', 'topped41.avif','topped42.avif'] }
];

// Function to change the image
function changeImage(imageContainer, images) {
  let currentIndex = 0;
  const imageElement = imageContainer.querySelector('img');
  
  return function() {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
  };
}

// Iterate over each image configuration and set the interval
imageConfigs.forEach(config => {
  const imageContainer = document.querySelector(config.selector);
  if (imageContainer) {
      setInterval(changeImage(imageContainer, config.images), 2000);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const cow = document.getElementById("cowImage");
  const icecreams = document.querySelectorAll(".icecreamImage");

  function moveCow() {
      gsap.to(cow, {
          //x: window.innerWidth - cow.width,
          x:900,
          duration: 8,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut"
      });
  }

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

  moveCow();
  floatIceCreams();
});
