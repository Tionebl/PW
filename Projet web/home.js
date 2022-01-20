var favorites = document.querySelector(".favorites");
var all = document.querySelector(".all");
var allDevicesContainer = document.querySelector(".allDevicesContainer");
var favoriteDevicesContainer = document.querySelector(".favoriteDevicesContainer");

favorites.addEventListener("click", function(){
    favorites.style.backgroundColor = "white";
    favorites.style.color = "#cf6e47";
    all.style.backgroundColor = "#cf6e47";
    all.style.color = "white";
    allDevicesContainer.style.display = "none";
    favoriteDevicesContainer.style.display = "flex";
});

all.addEventListener("click", function(){
    all.style.backgroundColor = "white";
    all.style.color = "#cf6e47"
    favorites.style.backgroundColor = "#cf6e47"
    favorites.style.color = "white";
    favoriteDevicesContainer.style.display = "none";
    allDevicesContainer.style.display = "flex";
});