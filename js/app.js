//home variables
const carouselSlider = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// home buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// home counter
let counter = 0;
let timer;
const size = carouselImages[0].clientWidth;

//autoslider
autoSlide();

function autoSlide() {
  timer = setTimeout(autoSlide, 4000);
  counter++;
  carouselSlider.style.transition = "transform 0.5s ease-in-out";
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
}

// home event listener
nextBtn.addEventListener("click", () => {
  if (counter === 8) return;
  counter++;
  carouselSlider.style.transition = "transform 0.5s ease-in-out";
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  clearTimeout(timer);
});

prevBtn.addEventListener("click", () => {
  if (counter === 0) return;
  counter--;
  carouselSlider.style.transition = "transform 0.5s ease-in-out";
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  clearTimeout(timer);
});

carouselSlider.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  }
});

carouselSlider.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "firstClone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  }
});

//menu filter
let sortBtn = document.querySelector(".filterMenu").children;
let sortItem = document.querySelector(".menuItemsContainer").children;

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener("click", function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove("current");
    }
    this.classList.add("current");
    let targetData = this.getAttribute("data-target");
    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.add("delete");
      sortItem[k].classList.remove("active");
      if (
        sortItem[k].getAttribute("data-item") == targetData ||
        targetData == "all"
      ) {
        sortItem[k].classList.remove("delete");
        sortItem[k].classList.add("active");
      }
    }
  });
}
