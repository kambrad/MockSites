const { log } = console;

var NavigateUp = document.getElementsByClassName("nav-up-btn");

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 50)
    {
            NavigateUp[0].style.opacity = 1;
            NavigateUp[0].style.transition = "opacity 250ms ease-in";
    }
    else
    {
        NavigateUp[0].style.opacity = 0;
        NavigateUp[0].style.transition = "opacity 250ms ease-in";
    }

    if(window.scrollY >= 140 && window.scrollY <= 1199.99)
    {
        NavigateUp[0].style.border = '1px solid white';
        NavigateUp[0].style.transition = 'border 250ms ease-in';

        NavigateUp[0].style.color = "white";
        NavigateUp[0].style.transition = "color 250ms ease-in";
    }

    if(window.scrollY >= 1199.99 && window.scrollY <= 1896)
    {
        NavigateUp[0].style.border = '1px solid black';
        NavigateUp[0].style.transition = 'border 250ms ease-in';

        NavigateUp[0].style.color = "black";
        NavigateUp[0].style.transition = "color 250ms ease-in";  
    }
    if(window.scrollY >= 1896)
    {
        NavigateUp[0].style.border = '1px solid white';
        NavigateUp[0].style.transition = 'border 250ms ease-in';

        NavigateUp[0].style.color = "white";
        NavigateUp[0].style.transition = "color 250ms ease-in";
    }
    // DO NOT RECOMMEND ELSE STATEMENT 
    // else
    // {
    //     NavigateUp[0].style.border = '1px solid black';
    //     NavigateUp[0].style.transition = 'border 250ms ease-in';

    //     NavigateUp[0].style.color = "black";
    //     NavigateUp[0].style.transition = "color 250ms ease-in";   
    // }
    log(window.scrollY)
})

NavigateUp[0].addEventListener("click", (e) => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})




