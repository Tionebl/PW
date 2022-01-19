var favorites = document.querySelector(".favorites");
var all = document.querySelector(".all");
var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");

favorites.addEventListener("click", function(){
    favorites.style.border = "solid 2px white";
    all.style.border = "none";
    container1.style.display = "none";
    container2.style.flexWrap = "wrap";
    container2.style.display = "block";
})

all.addEventListener("click", function(){
    all.style.border = "solid 2px white";
    favorites.style.border = "none";
    container2.style.display = "none";
    container1.style.flexWrap = "wrap";
    container1.style.display = "block";
});