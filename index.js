var span = document.getElementsByTagName("span");
var choice = document.getElementsByClassName("choice");
var dragItem = null;

for (var i of span) {
  i.addEventListener("dragstart", dragStart);
  i.addEventListener("dragend", dragEnd);
}

function dragStart() {
  dragItem = this;
  setTimeout(() => (this.style.display = "none"), 0);
}
function dragEnd() {
  setTimeout(() => (this.style.display = "inline-block"), 0);
  dragItem = null;
}

for (j of choice) {
  j.addEventListener("dragover", dragOver);
  j.addEventListener("dragenter", dragEnter);
  j.addEventListener("dragleave", dragLeave);
  j.addEventListener("drop", Drop);
}
function Drop() {
  this.append(dragItem);
}
function dragOver(e) {
  e.preventDefault();
  this.style.border = "1px solid black";
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {
  this.append(dragItem);
  this.style.border = "0px black";
}



const ans1 = "handbook";
const ans2 = "based";
const ans3 = "carefully";

const wordArry = [
  { answer1: ["handbook", "based", "carefully"] },
  { answer2: ["based","handbook", "carefully"] },
];

let final;

function check() {
  const result = document.getElementById("ans").innerText;
  const result1 = document.getElementById("ans1").innerText;
  const result2 = document.getElementById("ans2").innerText;
  if (
    result === wordArry[0].answer1[0] &&
    result1 === wordArry[0].answer1[1] &&
    result2 === wordArry[0].answer1[2]
  ) {
    document.getElementById("nxt-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "inline-block";
   document.getElementById("fill-in-gap-box").style.display = "none";
   document.getElementById("fill-in-gap-box2").style.display = "block";
   final = 1;
  } else {
    document.getElementById("nxt-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "inline-block";
    document.getElementById("fill-in-gap-box").style.display = "none";
   document.getElementById("fill-in-gap-box2").style.display = "block";
    final = 0;
  }
  return final;
}
console.log(wordArry[1].answer2[0] );
function submit() {
  const result = document.getElementById("ans3").innerText;
const result1 = document.getElementById("ans4").innerText;
const result2 = document.getElementById("ans5").innerText;
 document.getElementById("info-text").style.display = "none";
  if (
    result === wordArry[1].answer2[0] &&
    result1 === wordArry[1].answer2[1] &&
    result2 === wordArry[1].answer2[2]
  ) {
    let score = final + 1;
   document.getElementById("fill-in-gap-box2").style.display = "none";
   document.getElementById("score").style.display = "block";
   document.getElementById("score").innerText = `your score ${score}`;
 
  } else {
    let score = final + 0;
    document.getElementById("fill-in-gap-box2").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("score").innerText = `your score ${score}`;
  }
}
