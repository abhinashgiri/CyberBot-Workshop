alert("Just a NINJA passing by a busy road.");
var bgm = new Audio("Happy Bee.mp3");
bgm.play();
let ninja = document.getElementById("our-naruto");
var can_jump=true;
let obs= document.getElementsByClassName("obstacles")[0];
let bot=document.getElementById("bot");
//bot.classList.add("MoveForward");
background_image=document.getElementsByClassName("background");
background_image[0].classList.add("move_background");

var id = document.addEventListener("keydown", function(event) {
    var key = event.keyCode;
    console.log(key);
    if (key === 32 || key === 38) {
        if (can_jump)
        {

        console.log("activated");
        //bot.style.animationPlayState="paused";
        document.getElementsByClassName("n--leg B3")[0].style.animationPlayState = "paused";//2nd  leg
        document.getElementsByClassName("n--leg B4")[0].style.animationPlayState = "paused";//1nd  leg
        console.log(document.getElementsByClassName("n--leg B4")[0]);//1nd  leg)
        //bot.classList.add("up_jump");
        ninja.classList.add("up_jump");
        // ninja.classList.add("rotate");
        setTimeout(function () {

            ninja.classList.remove("up_jump");
            //ninja.classList.remove("rotate");
            //bot.style.animationPlayState="running";
            document.getElementsByClassName("n--leg B3")[0].style.animationPlayState = "running";//2nd  leg
            document.getElementsByClassName("n--leg B4")[0].style.animationPlayState = "running";//1nd  leg
        }, 800);
    }
}
});
var times=0,mode=0,sound=0;
// var command = ["hi"];
let a = document.querySelectorAll(".functions");

for (let i = 0; i < a.length; i++)
{
    a[i].addEventListener("click",function()
    {
        var act = this.id;
        // command.push(act);
       // console.log(command);
        var q = document.getElementById("walking");
        console.log(act);

        if(act==="sound")
            { sound++;

                if(sound%2===1)
                {
                    document.getElementById("sound").innerHTML="Music";
                    bgm.pause();
                    bgm.loop=false;
                // bgm.play();
                }
                else{
                    {document.getElementById("sound").innerHTML="No music";
                        bgm.play();
                        bgm.loop=true;
                    }
                }

            }

            if (act === "walking") {
                times += 1;
                console.log(times);
                if (times % 2) {
                    q.innerText = "Continue";
                } else {
                    q.innerText = "Pause";
                }

                if (times % 2) {
                    document.getElementsByClassName("n--leg B3")[0].style.animationPlayState = "paused";//2nd  leg
                    document.getElementsByClassName("n--leg B4")[0].style.animationPlayState = "paused";//1nd  leg
                    console.log(document.getElementsByClassName("n--leg B4")[0]);//1nd  leg)
                    background_image[0].style.animationPlayState = "paused";
                    can_jump=false;
                }
                if (times % 2 === 0) {
                    document.getElementsByClassName("n--leg B3")[0].style.animationPlayState = "running";//2nd  leg
                    document.getElementsByClassName("n--leg B4")[0].style.animationPlayState = "running";//1nd  leg
                    console.log(document.getElementsByClassName("n--leg B4")[0]);//1nd  leg)
                    background_image[0].style.animationPlayState = "running";
                    can_jump=true;
                }

            }
    }



    );
}


