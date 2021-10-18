let q = JSON.parse(localStorage.getItem('searched_query'));

async function searchNews(){

    let res = await fetch(`https://newsapi.org/v2/everything?q=${q.query}&apiKey=4ec475e9bfdf4c0b8baf308ee9a88afe`)

    let data = await res.json();

    appendNews(data.articles);
}

searchNews();

let container = document.getElementById('searchedNews');

function appendNews(news_data){

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
        titlediv.appendChild(title);

        let descriptiondiv = document.createElement('div');
        descriptiondiv.textContent = data.description;
        
        div.append(imgdiv, titlediv, descriptiondiv);
        container.appendChild(div);
    })

}