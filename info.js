const flags = document.getElementById('flags');
const query = new URLSearchParams(window.location.search);
const params = query.get('name')


document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        const filtroData = data.filter(item => item.name.common === params)
        allFlags(filtroData);
    } catch (error) {
        console.log(error);
    }

    // if(item.borders){
    //     item.borders.forEach((border) => {
    //         console.log(border)
    //         // fetch(`https://restcountries.com/v3.1/alpha/${border}`)

    //         // .then((res) => res.json())
    //         // .then(([borderCountry])) => {
    //         //     console.log(borderCountry)
    //         //     const borderCountryTag = document.createElement('a')
    //         //     borderCountryTag.innerText = borderCountry.name.common
    //         })
    //     // })
    // }
}



const getValueData = (value) => {
    return Object.keys(value)
}

const allFlags = async data => {
    let elementos = '';
    for (const item of data) {
        let c = item.languages;
        let keys = getValueData(item.name.nativeName);
        let keysCur = getValueData(item.currencies);
        let valuesLan = Object.values(c);
        // Esta variable va a guardar todos los enlaces a los paises fronterizos
        let templateString = '';
        if (item.borders) {
            let d = item.borders;
            // Este arreglo guarda las URLs de cada pais por codigo
            let urls = [];
            for (const code of d) {
                urls.push(`https://restcountries.com/v3.1/alpha/${code}`);
            }
            const responses = await Promise.all(
                urls.map(async (url) => {
                    const response = await fetch(url);
                    return response.json();
                })
            );
            templateString += responses.flat().map((country, index) => `<a href="pais.html?name=${country.name.common}&code=${d[index]}">${country.name.common}</a>`).join('');
        }

        elementos += `
        <article class="one">
             <img src='${item.flags.png}' alt="" class="img">
            <div class="details-country">
                <h3>${item.name.common}</h3>
            <div class="info-one">
                <p>
                   <b>Native Name:</b>
                   ${item.name.nativeName[keys[0]].common}
                </p>
                <p>
                    <b>Population:</b>
                    ${item.population.toLocaleString()}
                </p>
                <p>
                    <b>Region:</b>
                    ${item.region}
                </p>
                <p>
                    <b>Sub Region:</b>
                    ${item.subregion}
                </p>
                <p>
                    <b>Capital:</b>
                    ${item.capital}
                </p>
                <p>
                    <b>Top Level Domain:</b>
                    ${item.tld}
                </p>
                <p>
                    <b>Currencies:</b>
                    ${item.currencies[keysCur[0]].name}
                </p>
                <p>
                    <b>Languages:</b>
                    ${valuesLan.toString()}
                </p>
            </div>
            
            ${item.borders ? `<div class="borderTitle"><b>Border Countries:</b></div><div class="border-countries">${templateString}</div>` : ``}
            </div>
        </article>
        `;
    }
    flags.innerHTML = elementos;
};