const apiKey = import.meta.env.VITE_API_KEY

export function getRandomBooks() {
    const startIndex = Math.floor(Math.random() * 21);//randomly chooses where to start 
    console.log(startIndex);

    return fetch(`https://www.googleapis.com/books/v1/volumes?q=jamaica&startIndex=${startIndex}&maxResults=10&key=${apiKey}`)
    .then((response) => response.json())
    // .then((data) => console.log(data.items))
}