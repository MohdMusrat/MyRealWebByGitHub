const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const darkMode = document.getElementById("darkMode");
const navbar = document.getElementById("navbar")
const body = document.body;
const button = document.getElementById("button");
const overlayOfDark = document.getElementById("overlayOfDark");
const textOfMode = document.getElementById("textOfMode");


darkMode.addEventListener("mouseover", function(){
    body.style.backgroundColor = "rgba(0,0,0,0.8)";
    navbar.style.backgroundColor = "black";
    openBtn.style.color = "white"
    darkMode.style.backgroundColor = "black";
    darkMode.style.boxShadow = "0px 0px 30px #90ff3d";
    button.style.backgroundColor = "pink";
    button.style.left = "40px";
    overlayOfDark.style.display = "block";
    textOfMode.innerText = "Dark";
    textOfMode.style.color = "yellow";
    textOfMode.style.transform = "rotateX(0deg)";
    
})

overlayOfDark.addEventListener("mouseover",function(){
    body.style.backgroundColor = "white";
    navbar.style.backgroundColor = "#b395f7e8";
    openBtn.style.color = "white"
    darkMode.style.backgroundColor = "white";
    button.style.backgroundColor = "#b973ffb1";
    button.style.boxShadow = "0px 0px 30px #ee0050";
    button.style.left = "-5px";
    overlayOfDark.style.display = "none";
    textOfMode.innerText = "Light";
    textOfMode.style.color = "white";
    textOfMode.style.transform = "rotateX(90deg)";
})


openBtn.addEventListener("click", function() {
  sidebar.style.left = "0";
  overlay.style.display = "block";
  sidebar.style.boxShadow = "0px 0px 10px black";

});

closeBtn.addEventListener("click", function() {
  sidebar.style.left = "-300px";
  overlay.style.display = "none";
  
});

overlay.addEventListener("click", function() {
  sidebar.style.left = "-250px";
  overlay.style.display = "none";
  
});