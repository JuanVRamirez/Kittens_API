const URL = `https://api.thecatapi.com/v1/images/search`

const btn = document.querySelector("button")
btn.addEventListener("click", myCat)

async function myCat () {
    const res = await fetch(URL);
    const data = await res.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
}


// fetch(URL)
//     .then(res => res.json())
//     .then(data =>{
//         const img = document.querySelector("img")
//         img.src = data[0].url
//     })