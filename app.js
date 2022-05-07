let backgroundTag = document.querySelector(".container");
let generatorTag = document.querySelector(".btn");

function random_bg_color() {
  let colors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];

  function populate(sign) {
    for (let i = 0; i < 6; i++) {
      let x = Math.round(Math.random() * 14);
      let randomNum = colors[x];
      sign += randomNum;
    }
    return sign;
  }

  let angle = "to right";
  let color_stop1 = populate("#");
  let color_stop2 = populate("#");

  let linearGradient = `linear-gradient(${angle}, ${color_stop1}, ${color_stop2})`;
  backgroundTag.style.background = linearGradient;
}
generatorTag.addEventListener("click", () => {
  random_bg_color();
});
