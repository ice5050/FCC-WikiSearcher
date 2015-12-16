var WikiService = (function() {
  var WIKI_SEARCH_API = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";

  return {
    search: search
  }

  function search(query) {
    var url = WIKI_SEARCH_API + query + "&callback=?";
    return $.getJSON(url);
  }
})();
