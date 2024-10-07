document.getElementById("menu").addEventListener("focus", function(e){
    e.preventDefault();
   
    
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("animateIn");
    menubar.classList.toggle("hidden");
   
    
})

document.getElementById("menu").addEventListener("click", (e)=> {

    e.preventDefault();
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("animateIn");
    menubar.classList.toggle("hidden");
    
})


