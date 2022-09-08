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

function check(){
   const result = document.getElementById('ans').innerText;
   const result1 = document.getElementById('ans1').innerText;
   const result2 = document.getElementById('ans2').innerText;
   let final ;
  
   if(result === ans1 && result1 === ans2 && result2 === ans3){
    alert("Right Answer")
   }else{
    alert("wrong Answer")
   }
}
