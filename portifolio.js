let btn = document.querySelector(".menu")
let up = document.querySelector(".up")


function oppen(){
    let ulss = document.getElementById("ul-links")
    console.log()

    ulss.classList.toggle("open")
}

window.onscroll = () =>{

    if(window.scrollY >= 600){
        up.style.display = "block"
    }
    else {
        
        up.style.display = "none"
    }
}

up.onclick = function (){

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}