// api-key: 4ec475e9bfdf4c0b8baf308ee9a88afe

async function getTopStories(){

    let res = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=4ec475e9bfdf4c0b8baf308ee9a88afe`)

    let data = await res.json();

    console.log(data);
}

getTopStories();