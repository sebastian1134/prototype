function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").style.backgroundColor = "red";
}

//let button = document.getElementById('button');
//let happyEx = document.getElementById("imgAni");

//function animu(event) {
//  eventTarget.happyEx.style.animation = "animateMech 5s linear"
//};
//button.addEventListener('click', animu);

//function ani() {
//  document.getElementById('imgAni').className = 'animationMech';
//};

function mouseDown() {
  document.getElementById("happyEx").className="animationmech";
  document.getElementById("happy").style.display = "none";
};
function mouseUp() {
  document.getElementById("happyEx").className="none";
  document.getElementById("happy").style.display = "inherit";
};

//otra  let 
function randomNum (event) {
  let luckyNum = Math.floor(Math.random()*4);
  let colorFinal = 0;
  if (luckyNum == 0) {
    colorFinal = 'rgb(255,255,255)';
  } else if (luckyNum == 1) {
    colorFinal = 'rgb(200,188,253)';
  } else if (luckyNum == 2) {
    colorFinal = 'rgb(253,228,188)';
  } else if (luckyNum == 3) {
    colorFinal = 'rgb(210,253,188)'
  };
  event.target.style.backgroundColor = colorFinal;
};
let button = document.getElementById('pepito');
button.addEventListener('click', randomNum);


document.addEventListener("click", function(){
  document.getElementById("demo").style.backgroundColor = "red";
});
