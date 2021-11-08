let q = JSON.parse(localStorage.getItem('query'));

async function getParticularNews(){
    
    let res = await fetch(`http://newsapi.org/v2/everything?qInTitle=${q.title}&apiKey=4ec475e9bfdf4c0b8baf308ee9a88afe`)

    let data = await res.json();

    appendNews(data.articles[0]);
}

getParticularNews();

let heading = document.getElementById('title');

let author = document.getElementById('author');

let imgdiv = document.getElementById('imagediv');

let descript = document.getElementById('description');

function appendNews(data){
    console.log(data);
    imgdiv.innerHTML = null;

    heading.innerHTML = data.title;

    author.innerHTML = `${data.author} / ${data.publishedAt}`;

    let img = document.createElement('img');
    img.src = q.img;
    imgdiv.appendChild(img);

    let para = document.createElement('p');
    para.innerHTML = data.description;
    
    let content = document.createElement('p');
    content.innerHTML = data.content;

    descript.append(para, content);
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