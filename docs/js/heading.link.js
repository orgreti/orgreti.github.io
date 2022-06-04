(
  function addHeadingLinks(){
    var article = document.getElementById('article');
    var headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(function(heading){
      var a = document.createElement('a');
      a.innerHTML = heading.innerHTML;
      a.href = '#'+heading.id;
      heading.innerHTML = '';
      heading.appendChild(a);
    });
  }
)
();
