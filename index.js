const menuButton = document.getElementById("hamburger");
const menu = document.getElementById("containerMenu");

menuButton.addEventListener("click", function(){
    if(menu.style.display === "block"){
        menu.style.display = "none";
        menuButton.innerHTML = `<img src="./images/icon-hamburger.svg">`;
    }
    else
    {
        menu.style.display = "block";
        menuButton.innerHTML = `<img src="./images/icon-close.svg">`;  
    }
})