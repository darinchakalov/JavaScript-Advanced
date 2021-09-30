function getArticleGenerator(articles) {
    let arr = articles;
    let current = 0;
    let workDiv = document.getElementById("content");
    return function () {
        if (current < arr.length) {
            let article = document.createElement("ARTICLE");
            article.textContent = arr[current]
            workDiv.appendChild(article);
            current++;
        }
    };
}
