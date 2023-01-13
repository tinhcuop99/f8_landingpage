const numberBtn = document.querySelectorAll(".item_btn");
const inforBody = document.querySelectorAll(".list_infor");
const sumbitBtn = document.querySelectorAll(".btn_sumbit");

const $ = document.querySelector.bind(document);

numberBtn.forEach((tab, index) => {
  const body = inforBody[index];

  tab.onclick = function () {
    $(".list_infor.active").classList.remove("active");
    body.classList.add("active");
  };
});
