$(document).ready(function() {
  var wikiXHR;
  $("#search_txt").on("input", function(e) {
    var $searchTxt = $(e.currentTarget),
        $loading = $(".loading"),
        query = $searchTxt.val();
    if (wikiXHR && wikiXHR.readystate !== 4) {
      wikiXHR.abort();
    }
    $(".results").html("");
    $(".wrapper").addClass("wrapper-collapsed");
    if (query === "") {
      $loading.addClass("hide");
    }else {
      $loading.removeClass("hide");
      wikiXHR = WikiService.search(query).done(function(data) {
        var titles = data[1],
            descriptions = data[2],
            links = data[3];
        for(var i = 0; i < titles.length; i += 1) {
          addResult(titles[i], descriptions[i], links[i]);
        }
        $loading.addClass("hide");
      });
    }
  })
});

function addResult(title, description, link) {
  var $results = $(".results");
  $results.append('<a href="' + link + '">'
          + '<div class="pure-g result">'
            + '<div class="pure-u-1-1">'
              + '<p class="heading">' + title + '</p>'
              + '<p class="description">' + description + '</p>'
            + '</div>'
          + '</div>'
        + '</a>');
}
