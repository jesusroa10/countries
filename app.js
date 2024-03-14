const flags = document.getElementById('flags')

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async() => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        allFlags(data);
        formularioUser(data);
        filtros(data)
    } catch (error) {
        console.log(error);
    }
}

const allFlags = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card" >
            <a href="pais.html?name=${item.name.common}">
            <img src='${item.flags.png}' alt="" class="img">
            </a>
            <div class="card-info">
                <h3>${item.name.common}</h3>
                <p>
                    <b>Population:</b>
                    ${item.population.toLocaleString()}
                </p>
                <p>
                    <b>Capital:</b>
                    ${item.capital}
                </p>
                <p>
                    <b>Region:</b>
                    ${item.region}
                </p>
            </div>
        </article>
        `
    });
    flags.innerHTML = elementos;
};