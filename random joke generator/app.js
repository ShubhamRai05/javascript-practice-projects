const btn = document.querySelector(".btn")
const imgBtn = document.querySelector(".img-btn")
const imgSrc = document.querySelector(".src-meme")


let imageMemeCreator = async () => {
    const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ca208249b8msh17e937264f0bde8p1b2974jsna36d3d0028a9',
            'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        imgSrc.src = result[Math.floor(Math.random() * 12)].image

    } catch (error) {
        console.error(error);
    }
}
imageMemeCreator()
let jokeGenerator = () => {
    setTimeout(() => {
        fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json", // Request JSON format
            },
        })
            .then((response) => response.json()) // Parse the response as JSON
            .then((data) => {
                // console.log(data); // Log the joke data
                // Now you can work with the JSON data
                const joke = document.querySelector(".jokes")
                joke.textContent = data.joke
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, 0);


}


btn.addEventListener("click", jokeGenerator)
imgBtn.addEventListener("click", imageMemeCreator)