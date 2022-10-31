const  { log } = console;

let Nav = document.getElementsByTagName("nav");
let NavLinkContainer = document.getElementsByClassName('nav-link')[0];
let NavLinks = document.querySelectorAll(".nav-link ul li");
let NavBorder = document.getElementsByClassName('nav-link-border')[0];
let PNGImage = document.getElementsByClassName('header-png-img');
let NavScroll = document.getElementsByClassName('nav-scroll-menu')[0];
let NavScrollContainer = document.getElementsByClassName("nav-scroll-menu-container")[0];
let NavScrollAnimate = document.querySelector(".nav-scroll-menu");
let HeaderWrapper = document.getElementsByClassName("header-wrapper")[0];
let DescriptionInfo = document.getElementsByClassName("description-info");
let DescriptionInfoContent = document.getElementsByClassName("description-info-content");
let AboutUsSectionOne = document.querySelector(".about-us-section-one");
let AboutUsSectionOneHeader = AboutUsSectionOne.getElementsByTagName("h1")[0];
let AboutUsSectionTwo = document.querySelector(".about-us-section-two");
let AboutUsSectionTwoParagraph = AboutUsSectionTwo.querySelectorAll("p");
let AboutUseSectionTwoBtn = AboutUsSectionTwo.querySelector("button");
let WorkHeader = document.getElementsByClassName("works-header")[0];
let WorkHeaderWrapper = WorkHeader.getElementsByClassName("works-header-wrapper")[0];
let WorkHeaderCarousel = document.getElementsByClassName("works-layout-carousel")[0];
let SlidersBtn = document.getElementsByClassName("slider");

log (WorkHeaderCarousel);

// let PNGImages = PNGImage.getElementsByTagName('img');


function returnValue(value)
{
    return value;
}

function translateAnimation(selector, attribute, value)
{
    let target = selector;
    return (target.style[attribute] = value);
}

// function reverseValue(string, iteration)
// {
//     let Words = [];
//     Words = string[iteration].split("\s+");
//     let Result = "";


//     Result += Words.split("").reverse().join("");
    

//     return Result[i]; 
// }
function translateXBorder(a,b,c,d,e,border)
{
    try {
        if ( a || b || c || d || e)
        {
            a.addEventListener('mouseover', (e) => {
                border.style.left = returnValue('58.7' + '%');
                border.style.transition = 'left 350ms ease';
            })
            b.addEventListener('mouseover', (e) => {
                border.style.left = returnValue('65.5' + '%');
                border.style.transition = 'left 350ms ease';
            })
            c.addEventListener('mouseover', (e) => {
                border.style.left = returnValue('74.7' + '%');
                border.style.transition = 'left 350ms ease';
            })
            d.addEventListener('mouseover', (e) => {
                border.style.left = returnValue('81.9' + '%');
                border.style.transition = 'left 350ms ease';
            })
            e.addEventListener('mouseover', (e) => {
                border.style.left = returnValue('90.7' + '%');
                border.style.transition = 'left 350ms ease';
            })


        }
    }catch(error)
    {
        return false || error;
    }

    if (NavLinkContainer && NavLinkContainer != undefined)
    {
        NavLinkContainer.addEventListener('mouseleave', (e) => {
            border.style.left = returnValue('58.7' + '%');
            border.style.transition = 'left 350ms ease';
        })
    }
}
function transitionNav(_nav)
{
            for (let i = 0; i < _nav.length; i = i + 1)
            {
                // log(window.scrollY)
                if (window.scrollY >= 0 && window.scrollY <= 20)
                {
                    _nav[i].style.transform = `translateY(${-window.scrollY}px)`;
                    _nav[i].style.transition = "transform 1ms ease";
                }
            }
    
}
function transitionPNGImages(image_container)
{
    let counter = 0;
    window.onscroll = (e) => {
        window.scrollY >= 1 ? transitionNav(Nav) : "";
        if (window.scrollY >= 20) {
            for (let i = 0; image_container ? i < image_container.length: ''; i = i + 1)
            {
                let image = image_container[i];

                counter = counter + 1;

                // 313
                // log (window.scrollY)
                   image.style.transform = `translateY(${window.scrollY}px)`;
                   image.style.transition =  "transform 10ms ease-in";


                
            }
        } 
    };
    log(NavScroll)
}

function translateNav(_nav, menu)
{
    window.addEventListener('scroll', (e) => {
        if (window.scrollY >= 312)
        {
            _nav.classList.add('nav-scroll-animate');
            _nav.classList.remove('nav-scroll-unanimate');

            menu.classList.add('nav-scroll-menu-animate');
            menu.classList.remove('nav-scroll-menu-unanimate');

        }
        else{
            _nav.classList.add('nav-scroll-unanimate');
            _nav.classList.remove('nav-scroll-animate');

            menu.classList.add('nav-scroll-menu-unanimate');
            menu.classList.remove('nav-scroll-menu-animate');
        }
    })
}

function animateHeader()
{
    HeaderWrapper.style.opacity = 1;
    HeaderWrapper.style.transition = 'opacity 1050ms ease';
}

function rotateDescriptionHeader(description)
{
    for (let i = 0; i < description.length; i++)
    {
        description[i].addEventListener('mouseover', (e) => {
            if (e.type == 'mouseover')
            {
                const DESCRIPTION_TAG = description[i];

                DESCRIPTION_TAG.style.transform = "rotateY(160deg)";
                DESCRIPTION_TAG.style.transition = "transform 650ms ease";
                
                // Change Background Color Card.
                if ( i > 0)
                {
                    DESCRIPTION_TAG.style.backgroundColor = "white";
                }

                DescriptionInfoContent[i].style.transform = "rotateY(180deg)";
                DescriptionInfoContent[i].style.transition = "1ms transform ease";
                // reverseValue(DescriptionInfoHeaderThree, i);
             
            }

        description[i].addEventListener('mouseleave', (e) => {
            if (e.type == "mouseleave")
            {
                const DESCRIPTION_TAG = description[i];

                DESCRIPTION_TAG.style.transform = "rotateY(0deg)";
                DESCRIPTION_TAG.style.transition = "transform 650ms ease";

                DescriptionInfoContent[i].style.transform = "rotateY(0deg)";

                
            }
        })
        })
    }
}

function translateAboutUsSections(about_us_one, about_us_one_header, about_us_two, about_us_two_content, about_us_two_content_btn)
{
    window.addEventListener("scroll", (e) => {
        if (this.scrollY >= 1008) 
        {
            translateAnimation(about_us_one, 'transform', 'translateX(0)');
            translateAnimation(about_us_one, 'transition', 'transform 650ms ease');

            translateAnimation(about_us_one_header, 'opacity', 1);
            translateAnimation(about_us_one_header, 'transition', 'opacity 1050ms ease');

            translateAnimation(about_us_two, 'transform', 'translateX(0)');
            translateAnimation(about_us_two, 'transition', 'transform 1300ms ease');


            about_us_two_content.forEach(paragraph => {
                translateAnimation(paragraph, 'opacity', 1);
                translateAnimation(paragraph, 'transition', 'opacity 2200ms ease');
            })

            
            
            translateAnimation(about_us_two_content_btn, 'opacity', 1);
            translateAnimation(about_us_two_content_btn, 'transition', 'opacity 2200ms ease');
        }
    })
}


function translateWorkHeaderSection(work_header, work_header_content)
{
    window.addEventListener("scroll", (e) => {
        if (this.scrollY >= 1316)
        {
            translateAnimation(work_header, "transform", "translateY(0)");
            translateAnimation(work_header, "transition", "transform 550ms ease");

            translateAnimation(work_header_content, "opacity", 1);
            translateAnimation(work_header_content, "transition", "opacity 850ms ease");
        }
    })
}

function slideShowBtnCarousel(sliders)
{
    for (let i = 0; i < sliders.length; i = i + 1)
    {
        sliders[i].addEventListener("click", (e) =>{
            switch(i)
            {
                case 1:
                    sliders[i].className += " filled";

                    sliders[0].className = sliders[0].className.replace(" filled", "");
                    sliders[2].className = sliders[2].className.replace(" filled", "");
                    sliders[3].className = sliders[3].className.replace(" filled", "");
                break;
                case 2:
                    sliders[i].className += " filled";

                    sliders[0].className = sliders[0].className.replace(" filled", "");
                    sliders[1].className = sliders[1].className.replace(" filled", "");
                    sliders[3].className = sliders[3].className.replace(" filled", "");
                break;
                case 3:
                    sliders[i].className += " filled";

                    sliders[0].className = sliders[0].className.replace(" filled", "");
                    sliders[1].className = sliders[1].className.replace(" filled", "");
                    sliders[2].className = sliders[2].className.replace(" filled", "");
                break;
                default:
                    // Slider Index = 0
                    sliders[i].className += " filled";

                    sliders[1].className = sliders[1].className.replace(" filled", "");
                    sliders[2].className = sliders[2].className.replace(" filled", "");
                    sliders[3].className = sliders[3].className.replace(" filled", "");
            }
        })
    }
    sliders[0].className += " filled";
}

function slideshowCarousel(carousel, sliders)
{
    var SlideIndex = 0;
    for (let i = 0; i < sliders.length; i++)
    {
        sliders[i].addEventListener("click", (e) => {
            SlideIndex = SlideIndex + 1;

            if (SlideIndex != i)
            {
                SlideIndex = i;
                
            }
            if (SlideIndex == 0)
            {
                translateAnimation(carousel, "transform", "translateX(700px)");
                translateAnimation(carousel, "transition", "transform 850ms ease");
            }
            if (SlideIndex == 1)
            {
              translateAnimation(carousel, "transform", "translateX(220px)");
              translateAnimation(carousel, "transition", "transform 850ms ease");
            }
            if (SlideIndex == 2)
            {
                translateAnimation(carousel, "transform", "translateX(-215px)");
                translateAnimation(carousel, "transition", "transform 850ms ease");
            }
            if (SlideIndex == 3)
            {
                translateAnimation(carousel, "transform", "translateX(-660px)");
                translateAnimation(carousel, "transition", "transform 850ms ease");
            }
            
            log (SlideIndex);
          
        })
    }
}


//Media Query
function transitionNavSlide(nav)
{
    window.addEventListener('scroll', (e) => {
      let innerWidth = window.innerWidth;
      let innerHeight = window.innerHeight;

      if (innerWidth == 810 && innerHeight == 1080 && window.scrollY >= 312)
      {
        nav.classList.add("nav-scroll-animate-tablet");
        nav.classList.remove("nav-scroll-unanimate-tablet");

      } else if (innerWidth == 810 && innerHeight == 1080 && window.scrollY < 312)
      {
        // nav.classList.remove("nav-scroll-animate-tablet");
        nav.classList.add("nav-scroll-unanimate-tablet");
      } else
      {
        return null;
      }
    })
}


document.addEventListener('DOMContentLoaded', (e) => {
  translateXBorder(NavLinks[0], NavLinks[1], NavLinks[2], NavLinks[3], NavLinks[4], NavBorder);
  transitionPNGImages(PNGImage);  
  translateNav(NavScroll, NavScrollContainer);
  animateHeader()
  rotateDescriptionHeader(DescriptionInfo);
  translateAboutUsSections(AboutUsSectionOne, AboutUsSectionOneHeader, AboutUsSectionTwo, AboutUsSectionTwoParagraph, AboutUseSectionTwoBtn);
  translateWorkHeaderSection(WorkHeader, WorkHeaderWrapper);
  slideShowBtnCarousel(SlidersBtn);
  slideshowCarousel(WorkHeaderCarousel, SlidersBtn);

  // Media
  transitionNavSlide(NavScrollAnimate);
})