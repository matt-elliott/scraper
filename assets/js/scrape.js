$(document).ready(function () {
  var query = 'Trump';
  var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=source:("The New York Times")&api-key=hVcRxva5T53S0WVKumatfA0uiyXeiJJb`;
  var dynamicDOM = {};

  function init() {
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(data) {
      results = data.response.docs;
      // makeDOM();

      dynamicDOM.articleContainer = $(`<div>`);
      dynamicDOM.pageTitle = $('<h1>');
      dynamicDOM.article = $('<article>');
      dynamicDOM.articleTitle = $('<h2>');
      dynamicDOM.p = $(`<p>`);

      
      dynamicDOM.articleContainer.attr(`class`, `article-container`);
      dynamicDOM.pageTitle.attr(`class`, `page-title`);
      dynamicDOM.article.attr(`class`, `news-article`);
      dynamicDOM.articleTitle.attr(`class`, `news-title`);

      placeResultsToDOM(results);
    });
  }

  function makeDOM() {
    
  }

  function placeResultsToDOM(results) {
    results.forEach(function (result) {
      console.log(result.headline.main);
      dynamicDOM.pageTitle.text(`Search for ${query}`);
      dynamicDOM.articleTitle.text(result.headline.main);
      dynamicDOM.p.text(result.snippet);

      dynamicDOM.articleContainer.append(dynamicDOM.pageTitle);
      dynamicDOM.articleContainer.append(dynamicDOM.article);
      dynamicDOM.articleContainer.append(dynamicDOM.articleTitle);
      

      $('body').append(dynamicDOM.articleContainer);
    });
  }

  init();
});