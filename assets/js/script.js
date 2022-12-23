let infoItems = document.querySelectorAll(".main__info-items-item");
let infoItemsDesc = document.querySelectorAll(".main__info-items-item-desc");
let infoItemsIcon = document.querySelectorAll(
  ".main__info-items-item-title-icon"
);
let sliderSlides = document.querySelectorAll(
  ".main__creator-items-item-card-text-value"
);
let sliderDown = document.querySelector(
  ".main__creator-items-item-card-items-buttons-btn:nth-child(1)"
);
let sliderNext = document.querySelector(
  ".main__creator-items-item-card-items-buttons-btn:nth-child(2)"
);
let sliderCount = 0;
let sliderCountMax = 1;
for (let i = 0; i < infoItems.length; i++) {
  infoItems[i].addEventListener("click", () => {
    if (infoItemsDesc[i].classList.contains("visible")) {
      infoItemsIcon[i].style.transform = "rotate(180deg)";
      infoItemsDesc[i].classList.add("hidden");
      infoItemsDesc[i].classList.remove("visible");
    } else {
      infoItemsIcon[i].style.transform = "rotate(0deg)";
      infoItemsDesc[i].classList.add("visible");
      infoItemsDesc[i].classList.remove("hidden");
    }
  });
}

for (let i = 0; i < sliderSlides.length; i++) {
  if (sliderSlides[i].getAttribute("data-select") == sliderCount) {
    sliderSlides[i].classList.add("active");
  } else {
    sliderSlides[i].classList.remove("active");
  }
}
sliderDown.addEventListener("click", () => {
  sliderCount -= 1;
  for (let i = 0; i < sliderSlides.length; i++) {
    if (sliderSlides[i].getAttribute("data-select") == sliderCount) {
      sliderSlides[i].classList.add("active");
    } else if (sliderCount < 0) {
      sliderSlides[0].classList.remove("active");
      sliderSlides[sliderCountMax].classList.add("active");
      sliderCount = sliderCountMax;
    } else {
      sliderSlides[i].classList.remove("active");
    }
  }
});
sliderNext.addEventListener("click", () => {
  sliderCount += 1;
  for (let i = 0; i < sliderSlides.length; i++) {
    if (sliderSlides[i].getAttribute("data-select") == sliderCount) {
      sliderSlides[i].classList.add("active");
    } else if (sliderCount > sliderCountMax) {
      sliderSlides[0].classList.add("active");
      sliderCount = 0;
    } else {
      sliderSlides[i].classList.remove("active");
    }
  }
});
