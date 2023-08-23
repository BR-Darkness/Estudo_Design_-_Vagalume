// Endereços da API:
const API_Vagalume_Rank = "https://api.vagalume.com.br/rank.php?apikey=" + Math.random();

window.onload = MusRanking(), AlbRanking(), ArtRanking();

function ArtRanking()
{
    fetch(API_Vagalume_Rank + "&type=art&limit=16")

    .then((response) => response.json())
    .then((json) => 
    {
        let data = '';

        json.art.month.all.forEach( (Art, Index) => 
        {
            data +=
            `
            <li>
                <a class="Card VerticalCard" href="${Art.url}" target="_blank">
                    <p class="RankNumber"><b>${Index+1}°</b></p>
                    <p><b>${Art.name}</b></p>
                    <img src="${Art.pic_small.replace("/dynimage/","https://www.vagalume.com.br/dynimage/").replace(".jpg", ".webp")}" alt="Imagem de ${Art.name}" width="64px" height="64px" loading="lazy" onerror="this.src='img/vagalume-icon.png';">
                </a>
            </li>
            `
        });

        document.getElementById("ArtistsRankList").innerHTML = data;        
    })
}

function AlbRanking()
{
    fetch(API_Vagalume_Rank + "&type=alb&limit=16")
    
    .then((response) => response.json())
    .then((json) => 
    {
        let data = '';   
           
        json.alb.month.all.forEach( (Alb, Index) => 
        {
            data +=
            `
            <li>
                <a class="Card VerticalCard" href="${Alb.url}" target="_blank">
                    <p class="RankNumber"><b>${Index+1}°</b></p>
                    <span>
                        <b>${Alb.name}</b><br>
                        <b style="color: #f1f1ff;">${Alb.art.name}</b><br>
                        <b>${Alb.published}</b>
                    </span>
                    <img src="${Alb.cover.replace("https://www.vagalume.com.br/","https://s2.vagalume.com/")}" alt="Imagem de ${Alb.name}" width="64px" height="64px" loading="lazy" onerror="this.src='img/vagalume-icon.png';">
                </a>
            </li>
            `
        });

        document.getElementById("AlbunsRankList").innerHTML = data;
    })
}

function MusRanking()
{
    fetch(API_Vagalume_Rank + "&type=mus&period=day&limit=16")
        
    .then((response) => response.json())
    .then((json) => 
    {
        let data = '';   
                   
        json.mus.day.all.forEach( (Mus, Index) => 
        {
            data +=
            `
            <li>
                <a class="Card VerticalCard" href="${Mus.url}" target="_blank">
                    <p class="RankNumber"><b>${Index+1}°</b></p>
                    <span style="text-align: right;">
                        <p><b>${Mus.name}</b></p>
                        <p><b style="color: #f1f1ff;">${Mus.art.name}</b></p>
                    </span>
                </a>
            </li>
            `
        });

        document.getElementById("SongsRankList").innerHTML = data;
    })
}