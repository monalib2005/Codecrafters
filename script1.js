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
const hideButton = document.getElementById('image1');
const initialContent = document.getElementById('hr');

hideButton.addEventListener('click', () => {
  initialContent.style.display = 'none';
});
const imageContainer1 = document.querySelector('.pint1');
const image1 = imageContainer1.querySelector('img'); // Corrected variable name
const imageArray1 = ['pint12.avif', 'pint13.webp', 'pint11.webp']; // Replace with your image names

let currentIndex1 = 0;

function changeImage1() {
  currentIndex1 = (currentIndex1 + 1) % imageArray1.length; // Corrected variable name
  image1.src = imageArray1[currentIndex1]; // Corrected variable name
}

setInterval(changeImage1, 2000); // Change image every 3 seconds (3000 ms)

const imageContainer2 = document.querySelector('.pint2');
const image2 = imageContainer2.querySelector('img'); // Corrected variable name
const imageArray2 = ['pint21.webp', 'pint22.webp', 'pint24.avif']; // Replace with your image names

let currentIndex2 = 0;

function changeImage2() {
  currentIndex2 = (currentIndex2 + 1) % imageArray2.length; // Corrected variable name
  image2.src = imageArray2[currentIndex2]; // Corrected variable name
}

setInterval(changeImage2, 2000); // Change image every 3 seconds (3000 ms)
const imageContainer3 = document.querySelector('.pint3');
const image3 = imageContainer3.querySelector('img'); // Corrected variable name
const imageArray3 = ['pint31.jpg', 'pint32.jpg', 'pint33.jpg']; // Replace with your image names

let currentIndex3 = 0;

function changeImage3() {
  currentIndex3 = (currentIndex3 + 1) % imageArray3.length; // Corrected variable name
  image3.src = imageArray3[currentIndex3]; // Corrected variable name
}
setInterval(changeImage3,2000);
const imageContainer5 = document.querySelector('.dough1');
const image5 = imageContainer4.querySelector('img'); // Corrected variable name
const imageArray5 = ['dough1.webp', 'dough11.webp', 'dough12.webp']; // Replace with your image names

let currentIndex5 = 0;

function changeImage5() {
  currentIndex5 = (currentIndex5 + 1) % imageArray5.length; // Corrected variable name
  image5.src = imageArray5[currentIndex5]; // Corrected variable name
}

setInterval(changeImage5, 2000); // Change image every 3 seconds (3000 ms)
const imageContainer6 = document.querySelector('.dough2');
const image6 = imageContainer6.querySelector('img'); // Corrected variable name
const imageArray6 = ['dough2.webp', 'dough21.webp', 'dough22.webp']; // Replace with your image names

let currentIndex6 = 0;

function changeImage6() {
  currentIndex6 = (currentIndex6 + 1) % imageArray6.length; // Corrected variable name
  image6.src = imageArray6[currentIndex6]; // Corrected variable name
}

setInterval(changeImage6, 2000); // Change image every 3 seconds (3000 ms)
const imageContainer7 = document.querySelector('.dough3');
const image7 = imageContainer7.querySelector('img'); // Corrected variable name
const imageArray7 = ['dough3.webp', 'dough31.jpg', 'dough32.webp']; // Replace with your image names

let currentIndex7 = 0;

function changeImage7() {
  currentIndex7 = (currentIndex7 + 1) % imageArray7.length; // Corrected variable name
  image7.src = imageArray7[currentIndex7]; // Corrected variable name
}

setInterval(changeImage7, 2000); // Change image every 3 seconds (3000 ms)
const imageContainer8 = document.querySelector('.dough4');
const image8 = imageContainer8.querySelector('img'); // Corrected variable name
const imageArray8 = ['dough4.jpeg', 'dough41.jpeg', 'dough4.jpeg']; // Replace with your image names

let currentIndex8 = 0;

function changeImage8() {
  currentIndex8 = (currentIndex8 + 1) % imageArray8.length; // Corrected variable name
  image8.src = imageArray8[currentIndex8]; // Corrected variable name
}

setInterval(changeImage8, 2000); // Change image every 3 seconds (3000 ms)
const imageContainer9 = document.querySelector('.dairy1');
const image9 = imageContainer9.querySelector('img'); // Corrected variable name
const imageArray9 = ['dairy1.webp', 'dairy2.webp', 'dairy3.webp']; // Replace with your image names

let currentIndex9 = 0;

function changeImage9() {
  currentIndex9 = (currentIndex9 + 1) % imageArray9.length; // Corrected variable name
  image9.src = imageArray9[currentIndex9]; // Corrected variable name
}

setInterval(changeImage9, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)
// const imageContainer4 = document.querySelector('.pint4');
// const image4 = imageContainer4.querySelector('img'); // Corrected variable name
// const imageArray4 = ['pint41.avif', 'pint42.avif', 'pint43.avif']; // Replace with your image names

// let currentIndex4 = 0;

// function changeImage4() {
//   currentIndex4 = (currentIndex4 + 1) % imageArray3.length; // Corrected variable name
//   image4.src = imageArray4[currentIndex4]; // Corrected variable name
// }

// setInterval(changeImage4, 2000); // Change image every 3 seconds (3000 ms)