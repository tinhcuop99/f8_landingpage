window.addEventListener("load", function () {
  const slider = document.querySelector(".home_slider_container");
  const sliderMain = document.querySelector(".home_slider_main");
  const sliderItems = document.querySelectorAll(".home_slider_items");
  const nextBtn = document.querySelector(".home_slider_next");
  const preBtn = document.querySelector(".home_slider_prev");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length;
  // sliderMain.getElementsByClassName.width = `${
  //   slidesLength * sliderItemWidth
  // }px`;
  let positionX = 0;
  let index = 0;

  // console.log(nextBtn);

  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });

  preBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });

  function handleChangeSlide(dir) {
    if (dir == 1) {
      if (index >= slidesLength - 1) {
        index = slidesLength - 1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index++;
      // console.log("nextSlide");
    } else if (dir == -1) {
      if (index <= 1) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index--;
    }
  }
});

// var i = 0;
// var images = [];
// var slideTime = 3000;

// images[0] = "/travelix/assets/icon/home_slider.jpg";
// images[1] = "/travelix/assets/icon/home_slider.jpg";
// images[2] = "/travelix/assets/icon/home_slider.jpg";

// function changePicture() {
//   document.body.style.backgroundImage = images[1];
//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//   setTimeout("changePicture()", slideTime);
// }
// window.onload = changePicture;
