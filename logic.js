// 37ba772fba854a6f9ccf3122c7822181
const newsData = document.getElementById('news');
let API_KEY = '37ba772fba854a6f9ccf3122c7822181'
// let source = 'bbc-news'
// let apis = 'https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}'
// let d = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='
// let all = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=37ba772fba854a6f9ccf3122c7822181'

async function news(categories) {
    let request = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${categories}&apiKey=${API_KEY}`)
    let resolve = await request.json()
    return resolve;

}



function htmlData(url_img, title, content, url_link) {
    return `
    <div class="card mx-2 my-4" style="width: 18rem;">
        <img src="${url_img}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <hr>
            <p class="card-text">${content}.</p>
            <hr>
            <a href="${url_link}" target='_blank' class="btn btn-primary">read more here</a>
        </div>
    </div>`

}



const changeForm = document.getElementById('changeForm');
changeForm.addEventListener('change', () => {
    newsData.innerHTML = '';
    let value = changeForm.value;
    news(value).then((data) => {
        htmlSection(data);
    });
});


// deafult print news in html
news('business').then((data) => {
    htmlSection(data) 
});




function htmlSection(data) {
    data.articles.forEach((element) => {
        if (element['title'] != null && element['content'] != null) {
            let str = '';
            let myData = htmlData(element['urlToImage'], element['title'], element['content'], element['url']);
            str += myData;
            newsData.insertAdjacentHTML('afterbegin', str);
        };
    });
};



