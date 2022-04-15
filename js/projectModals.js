
var allProjects = document.querySelector('.portfolioAll');
var portfolioSites = document.querySelector('.portfolioSites');

const objSites = [
    {
        name: 'site1',
        image: '../images/bg.jpg'
    },
    {
        name: 'site2',
        image: '../images/bg.jpg'
    },
    {
        name: 'site3',
        image: '../images/bg.jpg'
    },
    {
        name: 'site3',
        image: '../images/bg.jpg'
    },
    {
        name: 'site3',
        image: '../images/bg.jpg'
    }
]

const objAplicativos = [
    {
        name: 'Aplicativo',
        image: '../images/bg.jpg'
    },
    {
        name: 'Aplicativo',
        image: '../images/bg.jpg'
    },
    {
        name: 'Aplicativo',
        image: '../images/bg.jpg'
    },
    {
        name: 'Aplicativo',
        image: '../images/bg.jpg'
    }
]


var mapSites = objSites.map((item) => {
    return `
    <div class="card2">
        <img class="imageCard" src=${item.image} alt="sei la"/>
        <a class="hrefCard" href=${item.name}>${item.name}</a>
    </div>`
})

var mapAplicativos = objAplicativos.map((item) => {
    return `
        <div class="card1">
            <img class="imageCard" src=${item.image} />
            <a class="hrefCard" href=${item.name}>${item.name}</a>
        </div>`
})


const handleClickAll = () => {
    allProjects.style.display = 'flex'

    if (portfolioSites.style.display = 'flex') {
        portfolioSites.style.display = 'none'
    }
}

const handleClickSite = () => {
    if (portfolioSites.style.display = 'none') {
        allProjects.style.display = 'none'
        portfolioSites.style.display = 'flex'
    }

    document.querySelector("#siteId").innerHTML = mapSites.join("");
}


document.querySelector(".contentAllProjects").innerHTML = `
    <div class="testea">${mapSites}</div>
    <div class="testea">${mapAplicativos}</div>
`

