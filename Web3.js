const { log } = console;

var Nav = document.getElementsByTagName("nav")[0];

var Header = document.getElementsByClassName('header-section')[0];

var HeaderLeft = document.getElementsByClassName("header-left")[0];

var HeaderRight = document.getElementsByClassName("header-right")[0];

var Header_Container = document.getElementsByClassName("header-footer-container")[0];

var Container_Content_Header = document.querySelector(".container-content-header div");

var Container_Content_Images = document.querySelector("#container-content .container-content-images");

let ContainerWrap = document.getElementsByClassName("container-content-line")[0];
let ContainerLogo = ContainerWrap.getElementsByTagName("h4");

/* Length: 2 */
let ContainerLine = ContainerWrap.getElementsByTagName("hr");

let Container_Content_Logo = document.getElementsByClassName("container-content-wrap-logo")[0];


var AddNavButton = document.createElement("button");
AddNavButton.className = "added_nav_button";
AddNavButton.innerHTML = "Get Template";
//AddNavButton.style.visibility = "hidden";




if(window.addEventListener('load', () => {
    Header.style.opacity = 1;
    Header.style.transition = "opacity 600ms ease";
}));



function AnimateTransition(_arg1, _arg2)
{
    _arg1.style.left = 0;
    _arg1.style.transition = "left 950ms ease";

    _arg2.style.right = 0;
    _arg2.style.transition = "right 1050ms ease";
}

function OpacityTransition(_arg1, _arg2)
{
    _arg1.style.visibility = "visible";
    _arg1.style.transition = "visibility 1250ms ease";
}
function TransitionLeftAndRight( left, right )
{
    OpacityTransition(left, right);
    AnimateTransition(left, right);
    
}

function TransitionHeaderContainer( container )
{
    container.style.top = 0;
    container.style.transition = "top 1050ms ease";
}

function TransitionNav( nav )
{
    nav.className = "nav_position";
}
function ResetTransitionNav( nav )
{
    nav.className = "nav_reset";
}
function TransitionContainerContent( container, _container )
{
    window.addEventListener("scroll", () => {
        log(window.scrollY);
        var Target_Number = (Math.acos(0) * 180 / Math.PI) + (Math.asin(0.5) + 270 + (30 - 3))
        if (window.scrollY >= parseInt(Target_Number))
        {
            TransitionNav(Nav);

            AddNavButton.className = "added_nav_button";

            Nav.appendChild(AddNavButton);

            container.style.top = 0;

            container.style.transition = "top 550ms ease";

        }
        if (window.scrollY >= parseInt(Target_Number) + 300)
        {
            _container.style.opacity = 1;
            _container.style.transition = "opacity 1250ms ease";
        }
        else
        {
            
            ResetTransitionNav(Nav);
            AddNavButton.className = "reset_nav_button";
        }
        
    })
}

function TransitionContainerLogoAndLine( logo, line, logos )
{
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 1207)
        {
            for (i = 0; i < line.length; i = i + 1)
            {
                line[i].style.width = "500px";
                line[i].style.transition = "width 650ms ease";
                
                logo[0].style.opacity = "1";
                logo[0].style.transition = "opacity 1250ms ease-in";
                
            }
        }
        if (window.scrollY > 1310)
        {
            logos.style.margin = "40px 0px";
            logos.style.transition = "margin 650ms ease";
        }
    })
}

if ( Header && HeaderLeft && HeaderRight && Header_Container && Container_Content_Header 
    && Container_Content_Images)
{
   TransitionLeftAndRight(HeaderLeft, HeaderRight);
   TransitionHeaderContainer(Header_Container);
   TransitionContainerContent(Container_Content_Header, Container_Content_Images);
   TransitionContainerLogoAndLine(ContainerLogo, ContainerLine, Container_Content_Logo);
} else
{
    log( "False" );
}


 



