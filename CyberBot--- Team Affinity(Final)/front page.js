const info = document.querySelector(".butn1");
const navLink = document.querySelector(".nav-links");
const paragraph = document.querySelector(".nav-links h1");

info.addEventListener('click',() =>{
    navLink.classList.toggle("open");
    paragraph.forEach(paragraph=> {
      paragraph.classList.toggle("fade");  
    });
});
let bot=document.getElementById("bot");
bot.addEventListener("mouseover",function () {
    console.log("done");

});