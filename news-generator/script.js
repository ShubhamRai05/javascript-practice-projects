import { API_KEY } from "./newsApi.js";
const URL = "https://newsapi.org/v2/everything?q=";


window.addEventListener("load", () => fetchNews("India"))

let fetchNews = async (query) => {
    const response = await fetch(`${URL}${query}&apiKey=${API_KEY}`)
    const data = await response.json()
    bindData(data.articles)



}


const bindData = (articles) => {
    const cardContainer = document.getElementById("card-container")
    const newsTemplate = document.getElementById("news-template")

    cardContainer.innerHTML = ""
    articles.forEach((article) => {
        if (!article.urlToImage) {
            return;
        }
        // deep cloning the cards
        const cardClone = newsTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article)
        cardContainer.appendChild(cardClone)

    })



}

function fillDataInCard(card, article) {
    const newsImg = card.querySelector("#news-img")
    const newsTitle = card.querySelector("#news-title")
    const newsSource = card.querySelector("#news-source")
    const newsDesc = card.querySelector("#news-desc")
    newsImg.src = article.urlToImage
    newsTitle.textContent = article.title
    newsSource.textContent = article.author
    newsDesc.textContent = article.description
    card.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank")
    })

}
const navItems = document.querySelectorAll(".nav-item");

let activeNavItem = null; // To keep track of the currently active item

navItems.forEach(item => {
    item.addEventListener("click", () => {
        if (activeNavItem) {
            activeNavItem.classList.remove("active");
        }

        item.classList.add("active");
        activeNavItem = item;

        let q = item.textContent;
        fetchNews(q);
    });
});


const searchInput = document.querySelector(".news-input")
const searchButton = document.querySelector(".search-button")
searchButton.addEventListener("click", () => {
    if (searchInput.value.trim() !== "") {
        let q = searchInput.value
        fetchNews(q)

        activeNavItem.classList.remove("active");

    }
    else {
        alert("please provide input");
    }


})
