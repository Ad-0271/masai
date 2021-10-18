let q = JSON.parse(localStorage.getItem('query'));
console.log(q);

async function getParticularNews(){
    
    let res = await fetch(`http://newsapi.org/v2/everything?qInTitle=${q.title}&apiKey=4ec475e9bfdf4c0b8baf308ee9a88afe`)

    let data = await res.json();

    console.log(data.articles);
}

getParticularNews();

let imgdiv = document.getElementById('imagediv');

let heading = document.getElementById('')

function appendNews(data){

    imgdiv.innerHTML = null;


    let img = document.createElement('img');
    img.src = q.img;
    imgdiv.appendChild(img);

}