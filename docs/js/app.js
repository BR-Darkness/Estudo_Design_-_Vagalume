// Endereços da API:
const API_Vagalume_Hot_Spots    = "https://api.vagalume.com.br/hotspots.php?apikey=" + Math.random();
const API_Vagalume_Noticias     = "https://www.vagalume.com.br/news/index.js";

BannerImage(7500);

Sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function Theme()
{
    document.body.classList.toggle("LightTheme");
}

function CloseModal(id) 
{
    console.log("Modal Closed");
    document.getElementById(id).classList.add("CloseModal");
    document.body.classList.remove("NoScroll");
}

function OpenModal(id) 
{
    console.log("Modal Opened");
    document.getElementById(id).classList.remove("CloseModal");
    document.body.classList.add("NoScroll");
}

function ScrollInicio() 
{
    window.scrollTo({top: 0, behavior: 'smooth'})
}

function MenuMobile() 
{
    document.getElementById("Menu").classList.toggle("MenuState");
}

window.addEventListener('resize', function() 
{
    if (document.documentElement.clientWidth >= 700)
    {
        document.getElementById("Menu").classList.add("MenuState");
    }
});

function BannerImage(ms) 
{
    fetch(API_Vagalume_Hot_Spots)

    .then((response) => response.json())
    .then(async function (json)
    {        
        for (let index = 0; index < json.hotspots.length; index++) 
        {
            document.getElementById("BannerImage").src=`${json.hotspots[index].pic_src.replace("https://s2.vagalume.com","https://www.vagalume.com.br").replace(".jpg", ".webp")}`;
            document.getElementById("BannerImageName").textContent = `${json.hotspots[index].title}`;

            await Sleep(ms);

            if (index == ( json.hotspots.length - 1)) 
            {
                index = -1;   
            }
        }
    })
}