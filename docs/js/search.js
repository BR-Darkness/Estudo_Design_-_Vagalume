function ArtSearch() 
{
    let SearchTerm = document.getElementById("FormSearch").value;

    fetch("https://api.vagalume.com.br/search.art?q=" + SearchTerm)

    .then((response) => response.json())
    .then((json) => 
    {
        let data = '';
        
        json.response.docs.forEach( (Art, Index) =>
        {
            data +=
            `
            <li class="SearchCard">
                <a href="${(`https://www.vagalume.com.br${Art.url}`)}" target="_blank">
                    <img onerror="this.onerror=null;this.src='img/vagalume-icon.png';" src="${(`https://www.vagalume.com.br${Art.url}images/profile.webp`)}" alt="Imagem de ${Art.band}" width="64px" height="64px" loading="lazy">
                    <p>${Art.band}</p>
                </a>
            </li>
            `
        });

        document.getElementById('SearchArtList').innerHTML = data;
    })
}

function MusSearch() 
{
    let SearchTerm = document.getElementById("FormSearch").value;

    fetch("https://api.vagalume.com.br/search.mus?q=" + SearchTerm)

    .then((response) => response.json())
    .then((json) => 
    {
        let data = '';
        
        json.response.docs.forEach( (Mus, Index) =>
        {
            data +=
            `
            <li class="SearchCard">
                <a href="${(`https://www.vagalume.com.br${Mus.url}`)}" target="_blank">
                    <img onerror="this.onerror=null;this.src='img/vagalume-icon.png';" src="${(`https://www.vagalume.com.br/${(Mus.band).toLowerCase()}/images/profile.webp`)}" alt="Imagem de ${Mus.band}" width="64px" height="64px" loading="lazy">
                    <p>${Mus.title}</p>
                    <p>${Mus.band}</p>
                </a>
            </li>
            `
        });

        document.getElementById('SearchMusList').innerHTML = data;
    })
}

function Search()
{
    window.oninput = ArtSearch(), MusSearch();
}