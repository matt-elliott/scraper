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
      placeResultsToDOM(results);
    });
  }

  function placeResultsToDOM(results) {
    results.forEach(function (result) {
      var articleContainer = $(`<div>`);
      var pageTitle = $('<h1>');
      var article = $('<article>');
      var articleTitle = $('<h2>');
      var p = $(`<p>`);
  
      
      articleContainer.attr(`class`, `article-container`);
      pageTitle.attr(`class`, `page-title`);
      article.attr(`class`, `news-article`);
      articleTitle.attr(`class`, `news-title`);

      pageTitle.text(`Search for ${query}`);
      articleTitle.text(result.headline.main);
      p.text(result.snippet);
      
      articleContainer.append(pageTitle);
      article.append(articleTitle);
      article.append(p);
      articleContainer.append(article);
      
      console.log(articleContainer);

      $('body').append(articleContainer);
    });
  }

  init();
});