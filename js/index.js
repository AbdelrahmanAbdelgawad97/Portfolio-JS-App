document.querySelector(".fa-bars").addEventListener("click",function(){
    if (document.querySelector(".left-part").style.left === "200%")
    {
        document.querySelector(".left-part").style.left= "49.9%";
    } else {
        document.querySelector(".left-part").style.left= "200%";
    }
})

const gearBox = document.querySelector(".gear-box");
const edit = document.querySelector(".edit");
const editSm = document.querySelector(".edit-sm-screen");

gearBox.addEventListener("click", function() {
    if (window.innerWidth > 992) { // شاشات كبيرة
        edit.style.left = "80%";
    } else { // شاشات صغيرة
        editSm.style.left ="30%";
    }
});

document.querySelector(".fa-xmark").addEventListener("click",function(){
    document.querySelector(".edit").style.left = "100%"
})


/* =============================================================== dark and light mood */
var darkLight = document.querySelector(".dark-light i");

var sunAndMoon = window.localStorage.getItem("sunMoon");
var lightMood = window.localStorage.getItem("lightMood");

if (sunAndMoon) darkLight.classList.add(sunAndMoon);
if (lightMood) document.body.classList.add(lightMood);

document.querySelector(".dark-light").addEventListener("click", function(){

    if(darkLight.classList.contains("fa-moon")) {
        window.localStorage.setItem("sunMoon","fa-sun");
        window.localStorage.setItem("lightMood","light-mode");

        darkLight.classList.remove("fa-moon");
        darkLight.classList.add("fa-sun");
        document.body.classList.add("light-mode");

    } else {
        window.localStorage.removeItem("lightMood");
        window.localStorage.setItem("sunMoon","fa-moon");

        darkLight.classList.remove("fa-sun");
        darkLight.classList.add("fa-moon");
        document.body.classList.remove("light-mode");
    }
});


/* =============================================================== show project */

var every = document.querySelector(".every");
var webSites = document.querySelector(".webSites");
var apps = document.querySelector(".apps");
var designs = document.querySelector(".designs");
var eCommerce = document.querySelector(".eCommerce");
var showenBtn = Array.from(document.querySelectorAll(".buttons-projects div"));


var multyArr = [
    [
        {
            image: "images/portfolio-1-BBJ9HaD5.jpeg",
            whatSite: "موقع ويب",
            title: "متجر إلكتروني متكامل",
            description: "منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات",
            functionality1: "React",
            functionality2: "Node.js",
            functionality3: "MongoDB",
        },
        {
            image: "images/portfolio-4-TS862Pxr.png",
            whatSite: "موقع ويب",
            title: "موقع شركة استشارية",
            description: "موقع احترافي لشركة استشارات مع نظام حجز المواعيد",
            functionality1: "Next.js",
            functionality2: "TypeScript",
            functionality3: "Prisma",
        },
        {
            image: "images/portfolio-7-D_mGnQLw.png",
            whatSite: "موقع ويب",
            title: "موقع مطعم وتوصيل",
            description: "منصة طلب طعام مع نظام توصيل وتتبع الطلبات",
            functionality1: "React",
            functionality2: "Express",
            functionality3: "PostgreSQL",
        },
    ],
    [
        {
            image: "images/portfolio-2-F8b-iTfx.png",
            whatSite: "تطبيق",
            title: "تطبيق إدارة المهام",
            description: "تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي",
            functionality1: "Vue.js",
            functionality2: "Firebase",
            functionality3: "Tailwind",
        },
        {
            image: "images/portfolio-5-CA5zqLPi.png",
            whatSite: "تطبيق",
            title: "لوحة تحليلات اجتماعية",
            description: "منصة تحليل وإدارة حسابات التواصل الاجتماعي",
            functionality1: "React",
            functionality2: "Chart.js",
            functionality3: "API",
        },
        {
            image: "images/portfolio-8-DmiljHRz.png",
            whatSite: "تطبيق",
            title: "تطبيق لياقة بدنية",
            description: "تطبيق متكامل لتتبع التمارين والتغذية والتقدم",
            functionality1: "React Native",
            functionality2: "Redux",
            functionality3: "Firebase",
        },
    ],
    [
        {
            image: "images/portfolio-3-CorL6bc5.png",
            whatSite: "تصميم",
            title: "تطبيق إدارة المهامموقع شخصي إبداعي",
            description: "تصميم موقع شخصي بأسلوب عصري وألوان جريئة",
            functionality1: "Figma",
            functionality2: "UI/UX",
            functionality3: "Prototype",
        },
        {
            image: "images/portfolio-9-BwS52lpH.png",
            whatSite: "تصميم",
            title: "تصميم تطبيق جوال",
            description: "تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف",
            functionality1: "Figma",
            functionality2: "Adobe XD",
            functionality3: "Sketch",
        },
    ],
    [
        {
            image: "images/portfolio-6-BG34qIjS.png",
            whatSite: "تجارة",
            title: "متجر أزياء فاخر",
            description: "منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية",
            functionality1: "Next.js",
            functionality2: "Stripe",
            functionality3: "Sanity",
        },
    ],
];


var contentProjects = "";


var arr = [...multyArr[0],...multyArr[1],...multyArr[2],...multyArr[3]];
displayProduct(arr);


function displayProduct(showenProduc)
{
    contentProjects = "";
    for(var i=0; i<showenProduc.length; i++)
    {
        contentProjects += `
                <div class="col-sm-12 col-md-6 col-lg-4 p-3 my-3 theCard ">
                    <div class="border-rounded-shap">
                        <div class="image ">
                            <img src="${showenProduc[i].image}" class="" alt="...">
                        </div>
                        <div class="card-body bg-dark-content-color pt-4">
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="mb-0 pro-desc me-4 rounded-pill py-1 px-2">${showenProduc[i].whatSite}</p>
                                <div class="view-git">
                                    <i class="rounded-2 fs-4 ms-4 fa-solid fa-eye"></i>
                                    <i class="rounded-2 fs-4 ms-4 fa-brands fa-github"></i>
                                </div>
                            </div>
                            <p class="text fs-3 pe-4">${showenProduc[i].title}</p>
                            <p class="side-text pe-4">${showenProduc[i].description}</p>
                            <ul class="d-flex p-4">
                                <li class="text-white mx-2 rounded-2 bg-secondary px-3 py-1">${showenProduc[i].functionality1}</li>
                                <li class="text-white mx-2 rounded-2 bg-secondary px-3 py-1">${showenProduc[i].functionality2}</li>
                                <li class="text-white mx-2 rounded-2 bg-secondary px-3 py-1">${showenProduc[i].functionality3}</li>
                            </ul>
                        </div>
                    </div>
                </div>
        
        `
    }
    document.querySelector(".content-projects").innerHTML = contentProjects;
}   


webSites.addEventListener("click", function(){
    addButtoneEffect();
    showenBtn[1].classList.add("show")
    displayProduct(multyArr[0]);
});

apps.addEventListener("click", function(){
    addButtoneEffect();
    showenBtn[2].classList.add("show")
    displayProduct(multyArr[1]);
});

designs.addEventListener("click", function(){
    addButtoneEffect();
    showenBtn[3].classList.add("show")
    displayProduct(multyArr[2]);
});

eCommerce.addEventListener("click", function(){
    addButtoneEffect();
    showenBtn[4].classList.add("show")

    displayProduct(multyArr[3]);
});

every.addEventListener("click", function(){
    addButtoneEffect();
    showenBtn[0].classList.add("show")
    displayProduct(arr);
});



function addButtoneEffect()
{
    for(var i=0; i<showenBtn.length; i++)
    {
        if(showenBtn[i].classList.contains("show")) showenBtn[i].classList.remove("show");
    }
}

/* ============================================================================= Carousel */
var track = document.querySelector(".carousel-track");
var cards = document.querySelectorAll(".feed-back");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

var index = 0;
var cardWidth = cards[0].offsetWidth + 20; // + margin

function moveCarousel() {
  track.style.transform = `translateX(${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < cards.length - 3) {
    index++;
    moveCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    moveCarousel();
  }
});

/* ============================================================================= links Effect */

var links = Array.from(document.querySelectorAll(".links li a"));

var main = document.getElementById("main-section");
var about = document.getElementById("about-me");
var projects = document.getElementById("my-work");
var experiance = document.getElementById("experiance");
var feedBack = document.getElementById("client-testimonals");
var contact = document.getElementById("contact");

function removeLinkstyle()
{
    for(var i=0; i<links.length; i++)
    {
        if(links[i].classList.contains("active")) links[i].classList.remove("active")
    }
}



function addAffectOnspecificLink()
{
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
    
      removeLinkstyle();
    
      if (scrollY >= main.offsetTop && scrollY < about.offsetTop) {
        links[0].classList.add("active");
    
      } else if (scrollY >= about.offsetTop && scrollY < projects.offsetTop) {
        links[1].classList.add("active");
    
      } else if (scrollY >= projects.offsetTop && scrollY < experiance.offsetTop) {
        links[2].classList.add("active");
    
      } else if (scrollY >= experiance.offsetTop && scrollY < feedBack.offsetTop) {
        links[3].classList.add("active");
    
      } else if (scrollY >= feedBack.offsetTop && scrollY < contact.offsetTop) {
        links[4].classList.add("active");
    
      } else if (scrollY >= contact.offsetTop) {
        links[5].classList.add("active");
      }
    });
}

addAffectOnspecificLink();

/* ============================================================================== color-settings */

var colorSettings = Array.from(document.querySelectorAll(".color-settings div"));

if(window.localStorage.getItem("changedColor"))
{
    setColor();
}

colorSettings.forEach((i,e)=>{
    i.addEventListener("click",function(){
        window.localStorage.setItem("changedColor",i.getAttribute("data-set"));
        setColor();
    })
})


function setColor()
{
    if(window.localStorage.getItem("changedColor"))
        {
            var root = document.documentElement;
            var changedColor = getComputedStyle(root).getPropertyValue("--changed-color").trim();
        root.style.setProperty("--changed-color", window.localStorage.getItem("changedColor"));
    }
}

/* ============================================================================== lines style */

var line = Array.from(document.querySelectorAll(".font-settings div"));

if(window.localStorage.getItem("line"))
    {
        setLine();
    }
    
line.forEach((i,e)=>{
    i.addEventListener("click",function(){
        window.localStorage.setItem("line",i.getAttribute("data-set"))
        setLine();
    })
})

function setLine()
{
    document.body.style.fontFamily = `${window.localStorage.getItem("line")}`;
}

/* ============================================================================== re-setting */

var reSettings = document.querySelector(".re-setting");

reSettings.addEventListener("click",function(){
    window.localStorage.setItem("line","sans-serif")
    setLine();

     window.localStorage.setItem("changedColor","#7a60f4");
    setColor();
})


