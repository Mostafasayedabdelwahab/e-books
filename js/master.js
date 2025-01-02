// open menu
let menu = document.getElementById("nav-toggle");
menu.onclick = function () {
  document.querySelector(".navbar").classList.toggle("close_menu");
};
let links = document.querySelectorAll(".navbar a");
links.forEach((link) => {
  link.onclick = function () {
    document.querySelector(".navbar").classList.remove("close_menu");
  };
});

// change image book
let img_book = document.querySelector(".back_image img");
let back_book = document.querySelector(".back_image");
var counter = 2;
var i = setInterval(function () {
  back_book.style.animation = "slideOut 2s forwards";

  setTimeout(() => {
    img_book.setAttribute("src", `imgs/${counter}.jpg`);
    counter++;
    if (counter === 10) {
      counter = 1;
    }
    back_book.style.animation = "slideIn 2s forwards";
  }, 2000);
}, 7000);

//search
let search_form = document.querySelector(".search-form ");
let input_search = document.getElementById("search-box");
let ss = document.getElementById("ss");
ss.onclick = function () {
  if (input_search.style.opacity === "1") {
    input_search.style.opacity = "0";
  } else {
    input_search.style.opacity = "1";
  }
};

// main title
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelectorAll(".for_title");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const title = entry.target.querySelector(".main-title");
        if (entry.isIntersecting) {
          title.classList.add("animate");
        } else {
          title.classList.remove("animate");
        }
      });
    },
    { threshold: 0.25 }
  );
  section.forEach((s) => {
    observer.observe(s);
  });
});

// slider books
let currentIndex = 0;
let left = document.querySelector(".left");
let right = document.querySelector(".right");
var x = window.matchMedia("(max-width: 480px)");
left.onclick = function () {
  const row = document.querySelector(".books-row");
  let bookWidth = document.querySelector(".box").offsetWidth;
  if (x.matches) {
    bookWidth = bookWidth * 0.32;
  }
  if (currentIndex > 0) {
    currentIndex--;
    row.style.transform = `translateX(-${currentIndex * bookWidth}px)`;
  }
};
right.onclick = function () {
  const row = document.querySelector(".books-row");
  let bookWidth = document.querySelector(".box").offsetWidth * 2.1;
  if (x.matches) {
    bookWidth = bookWidth * 0.32;
  }
  const booksCount = document.querySelectorAll(".box").length;
  const containerWidth = document.querySelector(".books-con").offsetWidth;
  const maxIndex = Math.floor(
    (booksCount * bookWidth - containerWidth) / bookWidth
  );
  if (currentIndex < maxIndex) {
    currentIndex++;
    row.style.transform = `translateX(-${currentIndex * bookWidth}px)`;
  }
};

// slider reviews
const slider = document.querySelector(".box_container");
const slides = document.querySelectorAll(".re_box");
var y = window.matchMedia("(max-width: 680px)");
const slideCount = slides.length;
let visibleSlides = 3;
if (y.matches) {
  visibleSlides = 1;
}
let currentIndex2 = 0;
const slideWidth = 16.5 / visibleSlides;

slider.style.width = `${slideCount * slideWidth}%`;

function moveSlider() {
  currentIndex2++;

  if (currentIndex2 > slideCount - visibleSlides) {
    currentIndex2 = 0;
  }
  if (y.matches) {
    slider.style.transform = `translateX(-${
      currentIndex2 * slideWidth * 2.1
    }%)`;
  } else {
    slider.style.transform = `translateX(-${
      currentIndex2 * slideWidth * 6.2
    }%)`;
  }
}
setInterval(moveSlider, 5000);

//feedback
document.querySelector(".face_good").addEventListener("click", function () {
  document.getElementById("star5").checked = true;
});

document.querySelector(".face_mid").addEventListener("click", function () {
   document.getElementById("star3").checked = true;
});

document.querySelector(".face_bad").addEventListener("click", function () {
   document.getElementById("star1").checked = true;
});


//social
 
document.querySelectorAll(".faq-button").forEach(e => {
  let data_color = e.getAttribute('data-color');
  e.addEventListener('mouseenter', () => {
    e.style.color =data_color;
      document.querySelectorAll(".tooltip").forEach((el) => {
        el.style.backgroundColor = data_color;
      });
  });
  e.addEventListener('mouseleave', () => {
    e.style.color = 'black';
  });
});

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: "top",
//     distance: "40px",
//     duration: 1000,
//     delay: 100,
// });
//  sr.reveal(
//    ".landing-page .content, .featured_books, .newsletter-form, .offer, .all_books, .reviews, .feedback, .app, .footer, .social_section",
//    {}
//  );