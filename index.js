alert("Welcome");
// let moveby = 10;
// document.onload(function () {
//     q.style.position = "absolute";
//     q.style.top="0";
//     q.style.left="0";
// });
//jshint esversion:6

var times=0;
var no_of_turns=0;
var bgm = new Audio("naruto_depair.mp3");

let ninja = document.getElementById("our-naruto");
let container = document.getElementsByClassName("road");
let a = document.querySelectorAll(".functions");

//adding eventListener click on each button and here callback function is anonymous function

for (let i = 0; i < a.length; i++)
{
  a[i].addEventListener("click",function()
  {
  var act=this.id;
      console.log(this);
      var q=document.getElementById("walking");
      console.log("q is"+q.innerText +  "   "+this.id);
      console.log(act);

      if(act==="turn")
      {
          no_of_turns+=1;
          console.log(no_of_turns);
          document.getElementsByClassName("ninja red")[0].classList.toggle("flip");

          if(q.innerText==="Stop" && no_of_turns%2===1) {
              //console.log("counted"+no_of_turns);
              console.log(document.getElementsByClassName("n--head")[0]);
            document.getElementsByClassName("n--head")[0].style.transform = "scaleX(" + 1 + ")";//flipping head when turn is pressed
              document.getElementsByClassName("MoveForward")[0].style.animationDirection = "reverse";
              document.getElementsByClassName("road1")[0].style.animationDirection = "reverse";
              document.getElementsByClassName("B2")[0].style.animationDirection = "reverse";
              document.getElementsByClassName("B3")[0].style.animationDirection = "reverse";//2nd  leg
              document.getElementsByClassName("B4")[0].style.animationDirection = "reverse";//1nd  leg
          }
          else if (no_of_turns%2===0){
              document.getElementsByClassName("n--head")[0].style.transform = "scaleX(" + -1 + ")";//flipping head when turn is pressed
              document.getElementsByClassName("MoveForward")[0].style.animationDirection = "normal";
              document.getElementsByClassName("road1")[0].style.animationDirection = "normal";
              document.getElementsByClassName("B2")[0].style.animationDirection = "normal";
              document.getElementsByClassName("B3")[0].style.animationDirection = "normal";//2nd  leg
              document.getElementsByClassName("B4")[0].style.animationDirection = "normal";//1nd  leg
          }
          }





      if(act==="walking")
      {  times+=1;
          if(times===1)
          {
              document.getElementsByClassName("road")[0].classList.add("road1");
              // document.getElementsByClassName("n--body")[0].classList.add("B1");

              // document.getElementsByClassName("n--head")[0].classList.add("B1");
              document.getElementsByClassName("ninja red")[0].classList.add("MoveForward");
              document.getElementsByClassName("n--body")[0].classList.add("B2");
              //     //console.log(document.getElementsByClassName("n--arm"));
              // document.getElementsByClassName("n--arm")[1].classList.add("B3");//1st arm
              //     //console.log( document.getElementsByClassName("n--leg"));
              document.getElementsByClassName("n--leg")[0].classList.add("B3");//2nd  leg
              // document.getElementsByClassName("n--arm")[0].classList.add("B4");//2st arm
              // document.getElementsByClassName("n--arm")[0].style.transform="scale("+0.8+")";
              //    // console.log( document.getElementsByClassName("n--leg"));
              document.getElementsByClassName("n--leg")[1].classList.add("B4");//1nd  leg
              // document.getElementsByClassName("n--weapon")[0].classList.add("B5")
              // setTimeout(function (){ninja.classList.remove("jump")},200);

          }

          // if(no_of_turns%2===1)
          // {
          // ninja.style.animationPlayState="paused";
          // }


      if(times%2)
      {
          q.innerText="Stop";
      }
      else
          {q.innerText="Walk";}
          bgm.play();
      bgm.loop=true;
          document.getElementsByClassName("MoveForward")[0].style.animationPlayState="running";
          document.getElementsByClassName("road1")[0].style.animationPlayState="running";
          document.getElementsByClassName("B2")[0].style.animationPlayState="running";
          document.getElementsByClassName("B3")[0].style.animationPlayState="running";//2nd  leg
          document.getElementsByClassName("B4")[0].style.animationPlayState="running";//1nd  leg
          console.log("Walking");
          if(q.innerHTML==="Walk" && times!==1)
          {
              bgm.pause();

              document.getElementsByClassName("MoveForward")[0].style.animationPlayState="paused";
              document.getElementsByClassName("road1")[0].style.animationPlayState="paused";
              document.getElementsByClassName("B2")[0].style.animationPlayState="paused";
              document.getElementsByClassName("B3")[0].style.animationPlayState="paused";//2nd  leg
              document.getElementsByClassName("B4")[0].style.animationPlayState="paused";//1nd  leg


              // document.getElementsByClassName("ninja red")[0].classList.remove("MoveForward");
              // document.getElementsByClassName("road")[0].classList.remove("road1");
              // //document.getElementsByClassName("n--body")[0].classList.remove("B1");
              // //document.getElementsByClassName("n--head")[0].classList.remove("B1");
              //
              // document.getElementsByClassName("n--body")[0].classList.remove("B2");
              // //console.log(document.getElementsByClassName("n--arm"));
              // // document.getElementsByClassName("n--arm")[1].classList.remove("B3");//1st arm
              // //console.log( document.getElementsByClassName("n--leg"));
              // document.getElementsByClassName("n--leg")[0].classList.remove("B3");//2nd  leg
              //
              // //document.getElementsByClassName("n--arm")[0].classList.remove("B4");//2st arm
              // // console.log( document.getElementsByClassName("n--leg"));
              // document.getElementsByClassName("n--leg")[1].classList.remove("B4");//1nd  leg
              // //document.getElementsByClassName("n--weapon")[0].classList.remove("B5")
          }

      }


//ending event listener callback function
  });
}
