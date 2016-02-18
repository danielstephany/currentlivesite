var gallery =  document.getElementById("gallery");
var nextUrl = "https://api.instagram.com/v1/users/2239880311/media/recent/?access_token;

var ajax = function(next) {
  $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: next,
      success: function(data) {        
        for(var i = 0; i < data.data.length; i++) {
              var toHtml = "<a href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url + "'></a>";
              var list = document.createElement("li");
              list.className = "content";
              list.innerHTML = toHtml;
              gallery.appendChild(list)
        } //first for loop
        nextUrl = data.pagination.next_url;
        if (nextUrl === undefined) {
          $("#next").hide();
        } else {
          $("#next").show();
        }
        light();
      } //success function
    });
};

$("document").ready(ajax(nextUrl));

$("#next").click(function() {
  ajax(nextUrl);
});


var $overlay = $('<div id="overlay"></div>');
var $img = $("<img>");

$overlay.append($img);
$("body").append($overlay);

var light = function() {
  $("#gallery a").click(function(event) {
    event.preventDefault();
    var href = $(this).attr("href");
    $img.attr("src", href);
    $overlay.show();
  })  
  $overlay.click(function() {
    $(this).hide();
  })  
}









