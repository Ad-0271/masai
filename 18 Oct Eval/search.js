let q = JSON.parse(localStorage.getItem('searched_query'));
console.log(q.query);

async function searchNews(){

    let res = await fetch(`https://newsapi.org/v2/everything?q=${q.query}&apiKey=4ec475e9bfdf4c0b8baf308ee9a88afe`)

    let data = await res.json();

    console.log(data);
}

searchNews();