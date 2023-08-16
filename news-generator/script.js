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

    articles.forEach((article) => {
        if (!article.urlToImage) {
            return;
        }
        const cardClone = newsTemplate.content.cloneNode(true);

        const newsTitle = document.getElementsByClassName("news-title")
        const newsSource = document.getElementsByClassName("news-source")
        const newsDesc = document.getElementsByClassName("news-desc")

        const newsImg = cardClone.querySelector(".news-img")

        newsImg.src = article.urlToImage
        newsTitle.textContent = article.title
        newsSource.textContent = article.author
        newsDesc.textContent = article.description

        cardContainer.appendChild(cardClone)

    })



}