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
            let q = JSON.parse(localStorage.getItem('query'));
            console.log(q);
            q[0] = data.title;
            console.log(q);
            localStorage.setItem('query', JSON.stringify(q));
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