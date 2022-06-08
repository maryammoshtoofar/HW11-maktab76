//set bg color

const setBg = (num, colorName) => {
  const slides = document.getElementsByClassName("slide");
  slides[num].classList.add(colorName);
};

setBg(0, "bg-teal-600");
setBg(1, "bg-pink-400");
setBg(2, "bg-blue-600");

const setContent = (num, cls, content) => {
  const group = document.getElementsByClassName(`${cls}`);
  group[num].innerHTML = content;
};

//set titles
setContent(0, "title", "React, Vue and HTML");
setContent(1, "title", "Tailwind CSS works by scanning all of your HTML");
setContent(2, "title", "Your Big Idea");

//set captions
setContent(
  0,
  "caption",
  "Accessible, interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you'd rather write any necessary JS yourself"
);

setContent(
  1,
  "caption",
  "It's fast, flexible, and reliable - with zero-runtime"
);
setContent(
  2,
  "caption",
  "It's fast, flexible, and reliable - with zero-runtime"
);

//slideshow
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 10000);
}
