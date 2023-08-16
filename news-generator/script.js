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
    console.log(cardContainer);
    const newsTemplate = document.getElementById("news-template")

    cardContainer.innerHTML = ""

    articles.forEach((article) => {
        if (!article.urlToImage) {
            return
        }
        const cardClone = newsTemplate.content.cloneNode(true);
        cardContainer.appendChild(cardClone)

    })

}