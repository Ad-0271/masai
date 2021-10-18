// api-key: 4ec475e9bfdf4c0b8baf308ee9a88afe

async function getTopStories(){

    let res = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=4ec475e9bfdf4c0b8baf308ee9a88afe`)

    let data = await res.json();

    appendNews(data.articles);
}

getTopStories();

let container = document.getElementById('topstories');

function appendNews(news_data){

    news_data.forEach((data) => {
        let div = document.createElement('div');

        let imgdiv = document.createElement('div');
        
        let img = document.createElement('img');
        img.src = data.urlToImage;
        img.style.width = '100%';
        console.log(data.urlToImage)


        imgdiv.append(img);
        div.append(imgdiv);
        container.appendChild(div);
    })

    



}