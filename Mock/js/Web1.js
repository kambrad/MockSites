var FrontLogo = document.getElementsByClassName("header-front-two-logo")[0];
var RightBtn = document.getElementsByClassName("right")[0];
var LeftBtn = document.getElementsByClassName("left")[0];

var Images = document.querySelectorAll(".header-front-three-slideshow img");

let Nav = document.getElementsByTagName("nav")[0];

var _Window = window;

let Listener = "click";
var Counter = 0;


// Inititalize console
const { log } = console;

function DisplayLogo( Logo )
{
    Logo.style.opacity="1";
    Logo.style.transition="opacity 650ms ease-in";
}

DisplayLogo(FrontLogo) ? true : false;





function EraseImage(Image)
{
    for ( i = 0; i < Image.length; i++ )
    {
        Image[i].style.display = "none";
    }
}


if ( RightBtn && LeftBtn )
{
    RightBtn.addEventListener(Listener, (e) => {
        Counter = Counter + 1;
        log (Counter);
        EraseImage(Images);

        if ( Counter >= 3 )
        {
            Counter = 0;
        }
        Images[Counter].style.display = "flex";

    })

    LeftBtn.addEventListener(Listener, (e) => {
        Counter = Counter - 1;
        EraseImage(Images);

        if ( Counter < 0)
        {
            Counter = 2;
        }
        Images[Counter].style.display = "flex";
    })
}

_Window.addEventListener("scroll", () => {
    if (_Window.scrollY > 50)
    {
        Nav.style.position = "fixed";
        Nav.className = "nav-fixed";
        Nav.style.transition = "position 250ms ease-in";
    }else
    {
        Nav.style.position = "initial";
        Nav.className = "nav";
    }
    
})
