
let allProjects = document.querySelector('.portfolioAll');
let portfolioSites = document.querySelector('.portfolioSites');
let aplicativos = document.querySelector('.portfolioAplicativos')

const objSites = [
    {
        name: 'Finans',
        image: 'images/portfolio/finans.png',
        linkHref: 'https://rafael-doctom.github.io/finans/'
    },
    {
        name: 'FlexBlog',
        image: 'images/portfolio/flexBlog.png',
        linkHref: 'https://rafael-doctom.github.io/FlexBlog/'
    },
    {
        name: 'Caravan',
        image: 'images/portfolio/caravan.png',
        linkHref: 'https://rafael-doctom.github.io/caravan/'
    },
    {
        name: 'Caravan',
        image: 'images/portfolio/login.png',
        linkHref: 'https://rafael-doctom.github.io/login-localStorage/'
    },
    {
        name: 'Codelandia',
        image: 'images/portfolio/codelandia.png',
        linkHref: 'https://challenge01-codelandia.netlify.app/'
    },
    {
        name: 'TeamSoft',
        image: 'images/portfolio/teamSoft.png',
        linkHref: 'https://team-soft.netlify.app/'
    },
    {
        name: 'Agência de Viagens',
        image: 'images/portfolio/agencia.png',
        linkHref: 'https://rafael-doctom.github.io/agencia-de-viagens/'
    },
    {
        name: 'ToRecruiter',
        image: 'images/portfolio/toRecruiter.png',
        linkHref: 'https://rafael-doctom.github.io/toRecruiter/'
    },
    {
        name: 'Crachá NLW',
        image: 'images/portfolio/nlw.png',
        linkHref: 'https://rafael-doctom.github.io/nlw_heat_challenge-01/'
    },
    {
        name: 'Text Generator',
        image: 'images/portfolio/text-generator.png',
        linkHref: 'https://rafael-doctom.github.io/text_generator/'
    },
    {
        name: 'Fone Landing',
        image: 'images/portfolio/fone-landing.png',
        linkHref: 'https://rafael-doctom.github.io/fone-landing/'
    },
    {
        name: 'Harry Potter',
        image: 'images/portfolio/harry-potter.png',
        linkHref: 'https://harry-potter-api0.netlify.app/'
    }
];

const objAplicativos = [
    {
        name: 'IMC',
        image: 'images/portfolio/imc.png',
        linkHref: 'https://github.com/Rafael-doctom/imc'
    }
];


let mapSites = objSites.map((item) => {
    return `
    <div class="card1">
        <img class="imageCard" src=${item.image} alt="sei la"/>
        <a class="hrefCard" target="_blank" href=${item.linkHref}>${item.name}</a>
    </div>`
});

let mapAplicativos = objAplicativos.map((item) => {
    return `
        <div class="card2">
            <img class="imageCard" src=${item.image} />
            <a class="hrefCard" target="_blank" href=${item.linkHref}>${item.name}</a>
        </div>`
});


const handleClickAll = () => {
    allProjects.style.display = 'flex'
    portfolioSites.style.display = 'none'
        aplicativos.style.display = 'none'

    // if (allProjects.style.display = 'none' && portfolioSites.style.display == 'none' && aplicativos.style.display == 'none') {
    //     portfolioSites.style.display = 'none'
    //     aplicativos.style.display = 'none'
    //     allProjects.style.display = 'none'
    // }



    // alert('aaa')
};

const handleClickSite = () => {

    portfolioSites.style.display = 'flex'
    aplicativos.style.display = 'none'
    allProjects.style.display = 'none'


    // if (portfolioSites.style.display = 'none') {
    //     allProjects.style.display = 'none'
    //     aplicativos.style.display = 'none'
    //     portfolioSites.style.display = 'flex'

    // }

    document.querySelector("#siteId").innerHTML = mapSites.join("");
};

const handleClickApp = () => {

    portfolioSites.style.display = 'none'
    aplicativos.style.display = 'flex'
    allProjects.style.display = 'none'


    // if (aplicativos.style.display == 'none') {
    //     allProjects.style.display == 'none'
    //     portfolioSites.style.display == 'none'
    //     aplicativos.style.display == 'flex'
    // }

    document.querySelector("#appID").innerHTML = mapAplicativos.join("");
};


document.querySelector(".contentAllProjects").innerHTML = `
    <div class="testeDIv">
        <div class="dFlex">${mapSites}</div>
        <hr />
        <div class="dFlex">${mapAplicativos}</div>
    </div>

`

