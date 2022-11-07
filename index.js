console.log("this index.js file");
// 1508a4c8d165499f8946cd29efba5848
let apikey = '1508a4c8d165499f8946cd29efba5848';
let source = 'bbc-news';

// let today = new Date();
// const container = document.getElementById("container");
// container.createElement("h1");
// let time = `<h3>${today} Breaking news are </h3>`;
// container.appendChild(time).innerHTML;

let newsAccordion = document.getElementById("newsAccordion");
const xhr = new XMLHttpRequest();
// xhr.open('GET', `https:/newsapi/.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true)
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=1508a4c8d165499f8946cd29efba5848', true)


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        // console.log(json);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(articles[news]);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                        <b>Breaking News ${index + 1}</b> ${element["title"]}
                                    </button>
                                </h5>
                            </div>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body">${element["content"]}. <a href ="${element['url']}" target="_blank">Read more here</a></div>
                           </div>
                        </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error occured");
    }
}
xhr.send();


