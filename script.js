const share = document.querySelector("#share");

const opt = document.querySelector(".options");

const opt2 = document.querySelector(".options2");

const tri = document.querySelector(".triangle");


share.addEventListener("click", () => {

    if (window.innerWidth >= 547) 
    {

        opt.classList.toggle("hidden");
        
        tri.classList.toggle("hidden");
        
    } 

    else if (window.innerWidth <= 547) 
    {

        opt2.style.display = "flex"

    }

});
