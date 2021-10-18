// api-key: 4ec475e9bfdf4c0b8baf308ee9a88afe

async function getTopStories(){

    let res = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=4ec475e9bfdf4c0b8baf308ee9a88afe`)

    let data = await res.json();

    appendNews(data.articles);
}

getTopStories();

if(localStorage.getItem('query') == null){
    localStorage.setItem('query',JSON.stringify([]));
}

let container = document.getElementById('topstories');

function appendNews(news_data){
    console.log(news_data)

    news_data.forEach((data) => {
        let div = document.createElement('div');
        div.onclick = () =>{
            let title = data.title;
            let img = data.urlToImage;
            let info = {title, img};
            localStorage.setItem('query', JSON.stringify(info));
            window.location = 'news.html';
        }

        let imgdiv = document.createElement('div');
        
        let img = document.createElement('img');
        img.src = data.urlToImage;
        imgdiv.append(img);

        let titlediv = document.createElement('div');

        let title = document.createElement('h3');
        title.textContent = data.title;
        console.log(title);
        titlediv.appendChild(title);

        let descriptiondiv = document.createElement('div');
        descriptiondiv.textContent = data.description;
        
        div.append(imgdiv, titlediv, descriptiondiv);
        container.appendChild(div);
    })

}

if(localStorage.getItem('searched_query') == null){
    localStorage.setItem('searched_query', JSON.stringify([]));
}

function getSearchedNews(){

    let query = document.getElementById('query').value;

    let q = {query};

    localStorage.setItem('searched_query', JSON.stringify(q));

    window.location = 'search.html';
}