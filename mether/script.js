const animation = bodymovin.loadAnimation({
  container: document.getElementById("amin"), // Required
  path: "https://assets8.lottiefiles.com/private_files/lf30_gr0f66uv.json",
  renderer: "svg", // Required
  loop: false, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
});
console.log(animation);
//popup
const popup = document.querySelector(".popup");
const popupBG = document.querySelector(".popup__background");
const popupHeader = document.querySelector(".popup__header");
const popupText = document.querySelector(".popup__text");
const Subscribe = document.querySelector(".subscribe");
const Join = document.querySelector(".join");
const mainbtn = document.querySelector(".mainbtn");
//timer variable
const cardText = document.querySelectorAll(".card__link");
const newDate = new Date();
//head popup
const headPopup = document.querySelector(".header__popup");
const nav = document.querySelector(".nav__list");
const navClose = document.querySelector(".nav__close");
//TIMEER
const countTime = () => {
  const timer = () => {
    const day = newDate.getDay();
    const hour = newDate.getHours();
    const min = String(parseInt(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    // In each call, print the remaining time to UI
    time--; // Decreasing the time before it's checked
    if (time === -1) clearInterval(countTimer);
    cardText.forEach((e) => {
      e.textContent = `報名倒數${day}天${hour}時${min}分${sec}秒`;
    });
  };
  let time = 1200;
  timer();
  const countTimer = setInterval(timer, 1000);
  return countTimer;
};

countTime();
//popup change
const popupContent = {
  header: ["加入MetHer", "訂閱MetHer"],
  text: [
    `<p class="popup__text">
  寄出後會收到表單，完成表單繳費<br>後即有精選好禮及VIP會員。
</p>`,
    ` <p class="popup__text">
  訂閱後即可透過 email 接受<br />最新消息及公告等資訊。
</p>`,
  ],
  popupShow(e) {
    popupBG.classList.remove("hidden");
    popup.classList.remove("hidden");
    popupHeader.textContent = e.target.textContent;
    if (e.target.textContent === this.header[0]) {
      popupText.textContent = "";
      popupText.insertAdjacentHTML("afterbegin", this.text[0]);
    } else if (e.target.textContent === this.header[1]) {
      popupText.textContent = "";
      popupText.insertAdjacentHTML("afterbegin", this.text[1]);
    }
  },
  popupHidden() {
    popupBG.classList.add("hidden");
    popup.classList.add("hidden");
  },
};
Subscribe.addEventListener("click", popupContent.popupShow.bind(popupContent));
mainbtn.addEventListener("click", popupContent.popupShow.bind(popupContent));
popupBG.addEventListener("click", popupContent.popupHidden);
Join.addEventListener("click", popupContent.popupShow.bind(popupContent));
//popup header
headPopup.addEventListener("click", () => {
  nav.classList.remove("nav__list-hidden");
  navClose.classList.remove("nav__close-hidden");
});
navClose.addEventListener("click", () => {
  nav.classList.add("nav__list-hidden");
  navClose.classList.add("nav__close-hidden");
});
