fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json", // Request JSON format
  },
})
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    console.log(data); // Log the joke data
    // Now you can work with the JSON data
    const title = document.querySelector(".title")
    title.textContent = data.joke
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
