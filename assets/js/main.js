const view = document.getElementById('view');
const portfolio = [
    {
        title: "youtube UI",
        img: "./assets/images/youtube.png",
        live: "https://omarjouied.github.io/youtube/",
        src: "https://github.com/OmarJouied/youtube",
    },
    {
        title: "sample design",
        img: "./assets/images/elzero.png",
        live: "https://omarjouied.github.io/elzero/",
        src: "https://github.com/OmarJouied/elzero",
    },
    {
        title: "ecommerce with React and Django",
        img: "./assets/images/ecommerce-react-django.png",
        live: "https://ecommerce-react-django.herokuapp.com/",
        src: "https://github.com/OmarJouied/ecommerce-react-django",
    },
    {
        title: "HooBank - Modern UI/UX website",
        img: "./assets/images/hoobank.png",
        live: "https://omarjouied.github.io/hoobank/",
        src: "https://github.com/OmarJouied/hoobank",
    },
    
]
for(const project of portfolio) {
    view.innerHTML += `
                <div class="item" title="${project.title}">
                    <img src="${project.img}" alt="${project.title}">
                    <a href="${project.live}" target="_blank">live</a>
                    <a href="${project.src}" target="_blank">source code</a>
                </div>
            `
}

document.getElementById('year').innerHTML = new Date().getFullYear();