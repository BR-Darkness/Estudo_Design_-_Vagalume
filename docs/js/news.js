window.onload = Hot_Spots(), News();

function Hot_Spots()
{
    fetch(API_Vagalume_Hot_Spots)
    .then((response) => response.json())
    .then((json) => 
    {
        let data = '';   
           
        json.hotspots.forEach( (HotSpot, Index) => 
        {
            // Ads:
            // if( Index%5 == 0 && Index > 0)
            // {
            //     document.getElementById('HotSpotsList').innerHTML +=
            //     `
            //     <li class="AdDiv"><p>Publicidade:</p></li>
            //     `
            // }

            data +=
            `
            <li class="Card">
                <a href="https://www.vagalume.com.br${HotSpot.link.replace("https://www.vagalume.com.br", "")}" target="_blank">
                    <picture>
                        <p><b>${HotSpot.date_fmt}</b></p>
                        <source media="(max-width:800px)" srcset="${HotSpot.art_pic_src}" width="133px" height="156px"></source>
                        <img crossorigin class="CardImage" src="${HotSpot.pic_src.replace("https://s2.vagalume.com","https://www.vagalume.com.br").replace(".jpg", ".webp")}" alt="Imagem ${HotSpot.title}" width="${HotSpot.pic_width}" height="156px" loading="lazy" onerror="this.src='img/vagalume-icon.png';">
                        <figcaption style="color:#f1f1ff;">${HotSpot.title}</figcaption>
                        <p style="padding:1em; border: 1px solid #167; background:#282828; border-radius: 8px; color: #f1f1ff;">${HotSpot.descr}</p>
                    </picture>
                </a>

                <!-- <p class="CardShare"><img src="img/misc/share.svg" alt="Imagem de Top 100" width="18px" height="18px"><b style="color: #f1f1f1"> Compartilhar</b></p> -->
            </li>
            `
        });
        document.getElementById('HotSpotsList').innerHTML = data;
    })
}

function News() 
{
    fetch(API_Vagalume_Noticias)
    .then((response) => response.json())
    .then((json) => 
    {
        let data = '';   
           
        json.news.forEach( (News) =>
        {
            data +=
            `
            <li class="Card">
                <a href="${News.url}" target="_blank">
                    <picture>
                        <p><b>${String('##-##-####').replace(/#/g,function(m,o) {return News.modified[o];}).split('-').join('/')}</b></p>
                        <img crossorigin class="CardImage" src="${News.images[0].replace("/dynimage/","https://www.vagalume.com.br/dynimage/").replace(".jpg", ".webp")}" alt="Imagem ${News.title}" width="${News.pic_width}" height="${News.pic_height}" loading="lazy" onerror="this.src='img/vagalume-icon.png';">
                        <p><b class="CardFeatured">${News.featured}</b></p>
                        <figcaption style="color:#f1f1ff;">${News.headline}</figcaption>
                    </picture>    
                </a>
                
                <p class="CardShare"><img src="img/misc/share.svg" alt="Imagem de Top 100" width="18px" height="18px"><b style="color: #f1f1f1"> Compartilhar</b></p>
            </li>
            `
        });
        document.getElementById('LatestNewsList').innerHTML = data;
    })
}