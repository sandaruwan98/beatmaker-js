
const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".visual");
const docStyle = document.documentElement.style;
// docStyle.setProperty('--jmp', '10%');
// console.log(docStyle.getPropertyValue('--jmp'));
const colors = [
  "#60d394",
  "#d36060",
  "#c060d3",
  "#d3d160",
  "#606bd3",
  "#60c2d3"
];

pads.forEach((pad, index) => {
  pad.addEventListener("click", function () {
    sounds[index].currentTime = 0;
    sounds[index].play();
    createBubble(index);
  });
});

const createBubble = index => {
  //Create bubbles
  const bubble = document.createElement("div");
  visual.appendChild(bubble);
  bubble.style.backgroundColor = colors[index];
  var x = 100 / 6 * (index + 1) - 100 / 12;

  docStyle.setProperty('--jmp', x + '%');
  bubble.style.animation = `jump 0.6s ease`;
  bubble.addEventListener("animationend", function () {
    visual.removeChild(this);
  });
};
